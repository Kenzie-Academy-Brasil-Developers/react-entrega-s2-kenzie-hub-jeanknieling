import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MainContainer, Container } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { css } from 'styled-components';

const Registration = () => {

    const history = useHistory();

    const schema = yup.object().shape({

        name: yup.string().trim().required("Campo obrigatório!"),
        email: yup.string().trim().email("Email inválido!").required("Campo obrigatório!"),
        password: yup.string().min(8, "Mínimo de 8 digitos!").required("Campo obrigatório!"),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes!").required("Campo obrigatório!"),
        module: yup.string().required("Campo obrigatório!"),

    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmitFunction= ({ name, email, password, module }) => {

        const user = { name, email, password, module };

        console.log(module)

        return history.push("/");

    };

    const selectOptions = ["1° MÓDULO","2° MÓDULO","3° MÓDULO","4° MÓDULO","5° MÓDULO","6° MÓDULO"];

    return (

        <MainContainer>
            <div>

                <h1>Kenzie Hub</h1>

                <Button 

                    text="Voltar" 
                    color={css`var(--gray-3)`} 
                    colorHover={css`var(--gray-1)`} 
                    width="80px" 
                    onClick={() => history.push("/")}

                />

            </div>


            <Container onSubmit={handleSubmit(onSubmitFunction)}>

                <h2>Crie sua conta</h2>

                <span>Rapido e grátis, vamos nessa</span>

                <Input 

                    label="Nome" 
                    placeholder="Digite aqui sua senha" 
                    width="100%"
                    register={register}
                    name="name"
                    error={errors.name?.message}

                />

                <Input 

                    label="Email" 
                    placeholder="Digite aqui sua senha" 
                    width="100%"
                    register={register}
                    name="email"
                    error={errors.email?.message}

                />

                <Input 

                    label="Senha" 
                    placeholder="Digite aqui sua senha" 
                    width="100%" 
                    type="password"
                    register={register}
                    name="password"
                    error={errors.password?.message}

                />

                <Input 

                    label="Confirmar senha" 
                    placeholder="Digite aqui sua senha" 
                    width="100%" 
                    type="password"
                    register={register}
                    name="passwordConfirm"
                    error={errors.passwordConfirm?.message}

                />

                <Select 

                    label="Selecionar módulo" 
                    selectOptions={selectOptions}
                    register={register}
                    name="module"
                    error={errors.module?.message}

                />

                <Button 

                    text="Cadastrar" 
                    color={css`var(--color-primary-negative)`} 
                    width="90%"

                />

            </Container>



        </MainContainer>

    );

}

export default Registration;