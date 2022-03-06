import { Link, useHistory, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, MainContainer } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import { toast } from "react-toastify";
import { css } from 'styled-components';

const Login = ({ authenticated, setAuthenticated, changeIcon, setChangeIcon }) => {

    const history = useHistory();

    const schema = yup.object().shape({

        email: yup.string().trim().email("Email inválido!").required("Campo obrigatório!"),
        password: yup.string().min(8, "Mínimo de 8 digitos!").required("Campo obrigatório!")

    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmitFunction= (data) => {

        api.post("/sessions", data)
        .then((response) => {

            const { token, user } = response.data;

            localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
            localStorage.setItem("@Kenziehub:user", JSON.stringify(user));

            setAuthenticated(true);

            return history.push("/dashboard");

        })
        .catch((error) => toast.error(error.response.data.message));

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

            <h1>Kenzie Hub</h1>

            <Container onSubmit={handleSubmit(onSubmitFunction)}>

                <h2>Login</h2>

                <Input 

                    cursor="text"
                    label="Email"
                    placeholder="Digite aqui seu email" 
                    width="100%"
                    register={register}
                    name="email"
                    error={errors.email?.message}

                />

                <Input 

                    cursor="text"
                    icon={changeIcon ? BsFillEyeFill : BsFillEyeSlashFill}
                    label="Senha" 
                    placeholder="Digite aqui sua senha" 
                    width="100%" 
                    type={changeIcon ? "text" : "password"}
                    register={register}
                    name="password"
                    error={errors.password?.message}
                    
                />
                    
                <Button 

                    type="submit"
                    text="Entrar" 
                    color={css`var(--color-primary)`} 
                    colorHover={css`var(--color-primary-50)`} 
                    width="90%"

                />

                <Link to="/registration">Ainda não possui uma conta?</Link>

                <Button 

                    type="button"
                    text="Cadastre-se" 
                    color={css`var(--gray-1)`} 
                    colorHover={css`var(--gray-2)`}
                    width="90%"
                    onClick={() => {

                        setChangeIcon(false);
                        history.push("/registration");

                    }}

                />

            </Container>

        </MainContainer>

    );

}

export default Login;