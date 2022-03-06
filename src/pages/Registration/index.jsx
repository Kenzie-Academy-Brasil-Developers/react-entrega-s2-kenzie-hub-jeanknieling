import { useHistory, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MainContainer, Container } from './style';
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import { toast } from "react-toastify";

import { css } from 'styled-components';

const Registration = ({ authenticated, changeIcon, setChangeIcon}) => {

    const history = useHistory();

    const schema = yup.object().shape({

        name: yup.string().trim().required("Campo obrigatório!"),
        email: yup.string().trim().email("Email inválido!").required("Campo obrigatório!"),
        password: yup.string().min(8, "Mínimo de 8 digitos!").required("Campo obrigatório!"),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes!").required("Campo obrigatório!"),
        course_module: yup.string().required("Campo obrigatório!"),

    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmitFunction= ({ name, email, password, course_module }) => {

        const user = {
            email, 
            password, 
            name, 
            "bio": "Lorem ipsum dolor emet",
            "contact": "linkedin/in/johndoe", 
            course_module, 
        };

        api.post("/users", user)
        .then((_) => {

            toast.success('Sucesso ao criar a conta!');

            return history.push("/login");

        })
        .catch((error) => {

            toast.error(error.response.data.message);

        });

    };

    if(authenticated) {

        return <Redirect to="/dashboard"/>

    }

    return (

        <MainContainer 

            onClick={(event) => {
                return event.target.tagName === "svg" && changeIcon === false || event.target.tagName === "path" && changeIcon === false ? 
                setChangeIcon(true) : event.target.tagName === "svg" || event.target.tagName === "path" ? 
                setChangeIcon(false) : undefined;
            }}

        >
            <div>

                <h1>Kenzie Hub</h1>

                <Button 

                    text="Voltar" 
                    color={css`var(--gray-3)`} 
                    colorHover={css`var(--gray-1)`} 
                    width="80px" 
                    onClick={() => {

                        setChangeIcon(false);
                        history.push("/");
                    }}

                />

            </div>


            <Container onSubmit={handleSubmit(onSubmitFunction)}>

                <h2>Crie sua conta</h2>

                <span>Rapido e grátis, vamos nessa</span>

                <Input 

                    cursor="text"
                    label="Nome" 
                    placeholder="Digite aqui sua senha" 
                    width="100%"
                    register={register}
                    name="name"
                    error={errors.name?.message}

                />

                <Input 

                    cursor="text"
                    label="Email" 
                    placeholder="Digite aqui sua senha" 
                    width="100%"
                    register={register}
                    name="email"
                    error={errors.email?.message}

                />

                <Input 

                    icon={changeIcon ? BsFillEyeFill : BsFillEyeSlashFill}
                    cursor="text"
                    label="Senha" 
                    placeholder="Digite aqui sua senha" 
                    width="100%" 
                    type={changeIcon ? "text" : "password"}
                    register={register}
                    name="password"
                    error={errors.password?.message}

                />

                <Input 

                    icon={changeIcon ? BsFillEyeFill : BsFillEyeSlashFill}
                    cursor="text"
                    label="Confirmar senha" 
                    placeholder="Digite aqui sua senha" 
                    width="100%" 
                    type={changeIcon ? "text" : "password"}
                    register={register}
                    name="passwordConfirm"
                    error={errors.passwordConfirm?.message}

                />

                <Select 

                    label="Selecionar módulo" 
                    register={register}
                    name="course_module"
                    error={errors.course_module?.message}
                    selectOptions={[
                        "Primeiro Módulo (Introdução ao Frontend)",
                        "Segundo Módulo (Frontend Avançado)",
                        "Terceiro Módulo (Introdução ao Backend)",
                        "Quarto Módulo (Backend Avançado)"
                    ]}

                />

                <Button 

                    text="Cadastrar" 
                    color={css`var(--color-primary-negative)`} 
                    colorHover={css`var(--color-primary-50)`} 
                    width="90%"

                />

            </Container>



        </MainContainer>

    );

}

export default Registration;