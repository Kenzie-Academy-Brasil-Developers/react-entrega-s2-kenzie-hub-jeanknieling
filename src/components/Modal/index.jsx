import { ModalBlockerContainer, ModalContainer } from "./style";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from "../../services/api";
import { toast } from "react-toastify";
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { css } from 'styled-components';

const Modal = ({ 

    text, labelInput, labelSelect, placeholder, value, handleClick, setHandleClick, disabled, update, setUpdate, cursor, user

}) => {

    const headers = {headers: {

        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@Kenziehub:token"))}`,

    }};

    const schema = yup.object().shape({

        title: yup.string().trim().default(`${value}`).required("Campo obrigatório!"),
        status: yup.string()

    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const addTechnology = (data) => {

        api.post(`/users/techs`, data, headers)
        .then((_) => {

            setUpdate(update + 1);
            toast.success("Tecnologia cadastrada com sucesso!");
            setHandleClick("");
        
        })
        .catch((error) => toast.error(error.response.data.message));



    }

    const detailTechnology = (data) => {

        
        const technologyToDetail = user.techs.find(tecnology => tecnology.title === value);
        console.log(technologyToDetail, data, user.techs)
        api.put(`users/techs/${technologyToDetail.id}`, data, headers)
        .then((_) => {
            
            setUpdate(update + 1);
            toast.success("Tecnologia atualizada com sucesso!");
            setHandleClick("");

        })
        .catch((error) => toast.error(error.response.data.message));


    }

    const deleteTechnology = () => {

        
        const technologyToDelete = user.techs.find(tecnology => tecnology.title === value);

        api.delete(`users/techs/${(technologyToDelete.id)}`, headers)
        .then((_) => {
            
            setUpdate(update + 1);
            toast.success("Tecnologia deletada com sucesso!");
            setHandleClick("");

        })
        .catch((error) => toast.error(error.response.data.message));


    }
    
    return (

        <ModalBlockerContainer>

            <ModalContainer onSubmit={

                handleSubmit(

                    handleClick === "cadastrar" ? addTechnology : detailTechnology

                )

            }>

                <div>

                    {text}

                    <Button 

                        text="x" 
                        color={css`var(--gray-2)`}
                        onClick={() => setHandleClick("")}
                    />

                </div>

                <Input

                    cursor={cursor}
                    disabled={disabled}
                    value={value}
                    label={labelInput}
                    placeholder={placeholder} 
                    width="100%"
                    register={register}
                    name="title"
                    error={errors.title?.message}

                />

                <Select

                    label={labelSelect}
                    register={register}
                    name="status"
                    error={errors.status?.message}
                    selectOptions={[
                        "Iniciante", 
                        "Intermediário", 
                        "Avançado"
                    ]}

                />

                <div>


                    <Button 

                        type="submit"
                        text="Cadastrar Tecnologia"
                        color={css`var(--color-primary-negative)`}
                        colorHover={css`var(--color-primary-50)`}

                    />

                    {
                        
                        handleClick === "detalhar" &&
                        <Button 

                            text="Excluir"
                            color={css`var(--gray-2)`}
                            colorHover={css`var(--gray-1)`}
                            onClick={() => {
                                
                                setHandleClick("");
                                deleteTechnology();
                                
                            }}

                        />

                    }

                </div>


            </ModalContainer>

        </ModalBlockerContainer>

    );

};

export default Modal;