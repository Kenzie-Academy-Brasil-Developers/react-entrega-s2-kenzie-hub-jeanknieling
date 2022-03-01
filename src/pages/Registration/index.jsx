import { MainContainer, Container } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { css } from 'styled-components';

const Registration = () => {

    const selectOptions = ["1° MÓDULO","2° MÓDULO","3° MÓDULO","4° MÓDULO","5° MÓDULO","6° MÓDULO"];

    return (

        <MainContainer>
            <div>

                <h1>Kenzie Hub</h1>

                <Button text="Voltar" color={css`var(--gray-3)`} colorHover={css`var(--gray-1)`} width="80px"/>

            </div>


            <Container>

                <h2>Crie sua conta</h2>

                <span>Rapido e grátis, vamos nessa</span>

                <Input label="Nome" placeholder="Digite aqui sua senha" width="100%"/>

                <Input label="Email" placeholder="Digite aqui sua senha" width="100%"/>

                <Input label="Senha" placeholder="Digite aqui sua senha" width="100%" type="password"/>

                <Input label="Confirmar senha" placeholder="Digite aqui sua senha" width="100%" type="password"/>

                <Select label="Selecionar módulo" selectOptions={selectOptions}/>

                <Button text="Cadastrar" color={css`var(--color-primary-negative)`} width="90%"/>

            </Container>



        </MainContainer>

    );

}

export default Registration;