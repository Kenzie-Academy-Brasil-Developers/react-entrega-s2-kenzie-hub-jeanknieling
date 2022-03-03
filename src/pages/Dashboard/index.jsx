import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { 
    WellcomeContainer, 
    HeaderContainer, 
    ChooseContainer, 
    MainContainer, 
    TecnologesContainer,
    LineContainer,
    Content
} from "./style";
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { css } from 'styled-components';

const Dashboard = ({ authenticated }) => {

    const [handleClick, setHandleClick] = useState("cadastrar");

    if(!authenticated) {

        return <Redirect to="/"/>

    }

    return (

        <MainContainer>

            <HeaderContainer>

                <h1>Kenzie Hub</h1>

                <Button 

                    text="Sair" 
                    color={css`var(--gray-3)`} 
                    colorHover={css`var(--gray-1)`} 
                    width="80px"

                />

            </HeaderContainer>

            <LineContainer/>


            <WellcomeContainer>

                <h2>Olá, Samuel Leão</h2>

                <span>Primeiro módulo (Introdução ao Frontend)</span>

            </WellcomeContainer>

            <LineContainer/>

            <Content>

                <ChooseContainer>

                    <p>Tecnologias</p>

                    <Button 

                        text="+" 
                        color={css`var(--gray-3)`} 
                        colorHover={css`var(--gray-1)`} 
                        width="80px"
                        onClick={() => setHandleClick("cadastrar")}

                    />

                </ChooseContainer>

                <TecnologesContainer>

                    {
                        handleClick === "cadastrar" && <Modal 

                            text="Cadastrar Tecnologia"
                            labelInput="Nome" 
                            placeholder="Digite aqui a nova tecnologia"
                            labelSelect="Selecionar status"
                            setHandleClick={setHandleClick}

                        /> 
                    }
                        
                    {
                        handleClick === "detalhar" && 
                        <Modal

                            text="Tecnologia Detalhes"
                            labelInput="Nome do projeto" 
                            placeholder="Projeto a ser alterado"
                            disabled={true}
                            labelSelect="Status"
                            handleClick={handleClick}
                            setHandleClick={setHandleClick}

                        />
                    }

                </TecnologesContainer>

            </Content>


        </MainContainer>

    );

}

export default Dashboard;