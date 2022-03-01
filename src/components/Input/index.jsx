import { InputContainer } from "./style";

const Input = ({ label, width, register, name, error = "", ...rest }) => {

    return (

        <InputContainer width={width}>
        
            <p>{label} {!!error && <span> - {error} </span>}</p>

            <input {...rest}/>

        </InputContainer>

    );
};

export default Input;