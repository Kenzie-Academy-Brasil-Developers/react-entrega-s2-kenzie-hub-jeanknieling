import { SelectContainer } from "./style";

const Select = ({ selectOptions, label, register, name, error = "", ...rest }) => {

    return (

        <SelectContainer>

            <p>{label}</p>

            <select {...register(name)} {...rest}>

                {selectOptions.map((option, index) => <option value={option} key={index}>{option.split("(")[0]}</option>)};

            </select>

        </SelectContainer>

    );

}

export default Select;