import { InputContainer } from "./style";

const Input = ({ label, width, register, icon: Icon, name, cursor, error = "", ...rest }) => {

    return (

        <InputContainer width={width} cursor={cursor} isErrored={!!error}>

            <label>

                <p>{label} {!!error && <span> - {error} </span>}</p>

                <input {...register(name)} {...rest}/>

            </label>
        
            {Icon && <Icon/>}
            
        </InputContainer>

    );

};

export default Input;