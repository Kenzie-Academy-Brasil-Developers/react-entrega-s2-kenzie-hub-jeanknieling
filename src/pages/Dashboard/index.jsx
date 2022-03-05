import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { 
    TecnologiesContainer,
    WellcomeContainer,
    HeaderContainer, 
    ChooseContainer, 
    MainContainer, 
    LineContainer,
    Content
} from "./style";
import api from '../../services/api';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TechnologyCard from '../../components/TechnologyCard';
import { toast } from 'react-toastify';
import { css } from 'styled-components';

const Dashboard = ({ setAuthenticated }) => {

    const history = useHistory();

    const [user, setUser] = useState([]);
    const [handleClick, setHandleClick] = useState("");
    const [technologies, setTechnologies] = useState([]);
    const [update, setUpdate] = useState(0);
    const [technologyClicked, setTechnologyClicked] = useState("");

    const userId = JSON.parse(localStorage.getItem("@Kenziehub:user")).id;
    
    useEffect(() => {

        api.get(`/users/${userId}`)
        .then((response) => setUser(response.data))
        .catch((error) => toast.error(error.response.data.message));

    }, [update]);

    useEffect(() => {

        api.get(`/users/${userId}`)
        .then((response) => setTechnologies(response.data.techs))
        .catch((error) => toast.error(error.response.data.message));

    }, [update]);

    return (

        <MainContainer>

            <HeaderContainer>

                <h1>Kenzie Hub</h1>

                <Button 

                    text="Sair" 
                    color={css`var(--gray-3)`} 
                    colorHover={css`var(--gray-1)`} 
                    width="80px"
                    onClick={() => {

                        setAuthenticated(false);
                        localStorage.clear()
                        history.push("/");

                    }}

                />

            </HeaderContainer>

            <LineContainer/>


            <WellcomeContainer>

                <h2>Olá, {user.name}</h2>

                <span>{user.course_module}</span>

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

                <TecnologiesContainer 

                    display={technologies.length === 0 ? "true" : undefined}
                    
                >

                    {
                        handleClick === "cadastrar" && <Modal 

                            type="submit"
                            text="Cadastrar Tecnologia"
                            labelInput="Nome" 
                            placeholder="Digite aqui a nova tecnologia"
                            labelSelect="Selecionar status"
                            handleClick={handleClick}
                            setHandleClick={setHandleClick}
                            update={update}
                            setUpdate={setUpdate}

                        /> 
                    }
    
                    {
                        handleClick === "detalhar" && <Modal

                            type="submit"
                            text="Tecnologia Detalhes"
                            labelInput="Nome do projeto" 
                            value={technologyClicked}
                            disabled={true}
                            labelSelect="Status"
                            handleClick={handleClick}
                            setHandleClick={setHandleClick}
                            user={user}
                            setUser={setUser}
                            cursor="not-allowed"
                            update={update}
                            setUpdate={setUpdate}

                        />
                    }

                    <ul>

                        {
                            
                            technologies.map((technology) => {

                                return (

                                    <TechnologyCard 

                                        color={

                                            technology.status === "Avançado" ? "true" : undefined
                                            
                                        }

                                        key={technology.id}

                                        onClick={(event) => {

                                            if(event.target.className !== 'clickBlocker') {

                                                setTechnologyClicked(event.target.firstChild.textContent)
                                                setHandleClick("detalhar") 

                                            } 

                                        }}
                                
                                    >

                                        <p>{technology.title}</p>   
                                        <p className="clickBlocker">{technology.status}</p>

                                    </TechnologyCard>

                                )
                                
                            })
                            
                        }

                    </ul>

                </TecnologiesContainer>

            </Content>


        </MainContainer>

    );

}

export default Dashboard;