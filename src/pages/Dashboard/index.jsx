import { useEffect, useState } from "react";
import { useHistory, Redirect } from 'react-router-dom';
import { 
    WellcomeContainer, 
    HeaderContainer, 
    ChooseContainer, 
    MainContainer, 
    TecnologiesContainer,
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
    const [technologyClick, setTechnologyClick] = useState("");

    const userId = JSON.parse(localStorage.getItem("@Kenziehub:user")).id;

    useEffect(() => {

        api.get(`/users/${userId}`)
        .then((response) => setUser(response.data))
        .catch((error) => toast.error(error.response.data.message));

    }, []);

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

                <TecnologiesContainer>

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
                            placeholder={technologyClick}
                            disabled={true}
                            labelSelect="Status"
                            handleClick={handleClick}
                            setHandleClick={setHandleClick}
                            user={user}
                            setUser={setUser}
                            cursor="not-allowed"

                        />
                    }

                    <ul>

                        {
                            
                            technologies.map((technology) => {

                                return (

                                    <TechnologyCard 

                                    key={technology.id}

                                    onClick={(event) => {

                                        setTechnologyClick(event.target.textContent)
                                        setHandleClick("detalhar")

                                    }}
                                
                                >

                                    <p>{technology.title}</p>   
                                    <p>{technology.status}</p>

                                </TechnologyCard>
                                
                            )})
                            
                        }

                    </ul>

                </TecnologiesContainer>

            </Content>


        </MainContainer>

    );

}

export default Dashboard;