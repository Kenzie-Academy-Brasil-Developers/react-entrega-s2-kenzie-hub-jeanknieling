import { InputContainer } from "./style";

const Input = ({ label, width, register, name, cursor, error = "", ...rest }) => {

    return (

        <InputContainer width={width} cursor={cursor} isErrored={!!error}>
        
            <p>{label} {!!error && <span> - {error} </span>}</p>

            <input {...register(name)} {...rest}/>

        </InputContainer>

    );

};

export default Input;