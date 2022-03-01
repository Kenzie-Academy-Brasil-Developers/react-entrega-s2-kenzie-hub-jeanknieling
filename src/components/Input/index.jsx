import { InputContainer } from "./style";

const Input = ({ label, register, name, error = "", ...rest }) => {

    return (

        <InputContainer>
        
            <p>{label} {!!error && <span> - {error} </span>}</p>

            <input {...rest}/>

        </InputContainer>

    );
};

export default Input;