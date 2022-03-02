import { InputContainer } from "./style";

const Input = ({ label, width, register, name, error = "", ...rest }) => {

    return (

        <InputContainer width={width} isErrored={!!error}>
        
            <p>{label} {!!error && <span> - {error} </span>}</p>

            <input {...register(name)} {...rest}/>

        </InputContainer>

    );

};

export default Input;