import { Link, useHistory } from 'react-router-dom';
import { Container, MainContainer } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { css } from 'styled-components';

const Login = () => {

    const history = useHistory();

    const handleNavigation = (path) => {

        history.push(path);

    }

    return (
        
        <MainContainer>

            <h1>Kenzie Hub</h1>

            <Container onSubmit={() => handleNavigation("/dashboard")}>

                <h2>Login</h2>

                <Input label="Email" placeholder="Digite aqui seu email"/>

                <Input label="Senha" placeholder="Digite aqui sua senha" type="password"/>

                <Button 

                    type="submit"

                    text="Entrar" 

                    color={css`var(--color-primary)`} 

                    colorHover={css`var(--color-primary-50)`} 

                />

                <Link to="/registration">Ainda não possui uma conta?</Link>

                <Button 

                    type="button"

                    text="Cadastre-se" 

                    color={css`var(--gray-1)`} 

                    colorHover={css`var(--gray-1)`}

                    onClick={() => handleNavigation("/registration")}

                />

            </Container>

        </MainContainer>

    );

}

export default Login;