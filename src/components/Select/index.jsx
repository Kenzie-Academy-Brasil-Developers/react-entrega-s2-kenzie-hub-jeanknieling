import { SelectContainer } from "./style";

const Select = ({ selectOptions, label, register, name, error = "", ...rest }) => {

    return (

        <SelectContainer>

            <p>{label}</p>

            <select {...register(name)} {...rest}>

                {selectOptions.map((option, index) => <option value={index+1} key={index}>{option}</option>)};

            </select>

        </SelectContainer>

    );

}

export default Select;