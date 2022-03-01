import { Link } from 'react-router-dom';
import { Container, MainContainer } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { css } from 'styled-components';

const Login = () => {

    return (

        <MainContainer>

            <h1>Kenzie Hub</h1>

            <Container>

                <h2>Login</h2>

                <Input label="Email" placeholder="Digite aqui seu email"/>

                <Input label="Senha" placeholder="Digite aqui sua senha" type="password"/>

                <Button text="Entrar" color="#FF577F"/>

                <Link to="/registration">Ainda não possui uma conta?</Link>

                <Button text="Cadastre-se" color="#868E96"/>

            </Container>

        </MainContainer>

    );

}

export default Login;