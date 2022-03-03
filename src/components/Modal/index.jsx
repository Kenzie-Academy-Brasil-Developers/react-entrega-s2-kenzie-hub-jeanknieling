import { ModalBlockerContainer, ModalContainer, ButtonsContainer } from "./style";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { css } from 'styled-components';

const Modal = ({ text, labelInput, labelSelect, placeholder, handleClick, setHandleClick, disabled }) => {

    const schema = yup.object().shape({

        technology: yup.string().trim().required("Campo obrigatório!"),

    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    return (

        <ModalBlockerContainer>

            <ModalContainer>

                <div>

                    {text}

                    <Button 

                        text="x" 
                        color={css`var(--gray-2)`}
                        onClick={() => setHandleClick("")}
                    />

                </div>

                <Input

                    disabled={disabled}
                    label={labelInput}
                    placeholder={placeholder} 
                    width="100%"
                    register={register}
                    name="technology"
                    error={errors.technology?.message}

                />

                <Select

                    label={labelSelect}
                    register={register}
                    name="description_status"
                    error={errors.description_status?.message}
                    selectOptions={[
                        "Iniciante", 
                        "Intermediário", 
                        "Avançado"
                    ]}

                />

                <div>


                    <Button 

                        text="Cadastrar Tecnologia"
                        color={css`var(--color-primary)`}
                        colorHover={css`var(--color-primary-50)`}
                        onClick={() => setHandleClick("")}

                    />

                    {
                        handleClick === "detalhar" &&
                        <Button 

                            text="Excluir"
                            color={css`var(--gray-2)`}
                            colorHover={css`var(--gray-1)`}
                            onClick={() => setHandleClick("")}

                        />

                    }

                </div>


            </ModalContainer>

        </ModalBlockerContainer>

    );

};

export default Modal;