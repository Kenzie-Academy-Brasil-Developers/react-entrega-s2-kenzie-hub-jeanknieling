import { Container } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { css } from 'styled-components';

const Registration = () => {

    return (

        <main>
            <div>

                <h1>Kenzie Hun</h1>

                <Button text="Voltar" color={css`var(--gray-3)`}/>

            </div>

            <Container>

                <Input label="Nome" placeholder="Digite aqui sua senha"/>

                <Input label="Email" placeholder="Digite aqui sua senha"/>

                <Input label="Senha" placeholder="Digite aqui sua senha" type="password"/>

                <Input label="Confirmar senha" placeholder="Digite aqui sua senha" type="password"/>

                <label>
                    Selecionar módulo
                    <select name="languages">
                        <option value="0">Select car:</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="4">Ford</option>
                        <option value="5" selected>Javascript</option>
                        <option value="6">Jaguar</option>
                        <option value="7">Land Rover</option>
                        <option value="8">Mercedes</option>
                        <option value="9">Mini</option>
                        <option value="10">Nissan</option>
                        <option value="11">Toyota</option>
                        <option value="12">Volvo</option>
                    </select>

                </label>

                <Button text="Cadastrar" color={css`var(--color-primary-negative)`}/>

            </Container>



        </main>

    );

}

export default Registration;