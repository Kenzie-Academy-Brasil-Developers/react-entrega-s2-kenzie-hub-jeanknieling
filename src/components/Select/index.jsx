import { SelectContainer } from "./style";

const Select = ({ selectOptions, label }) => {

    return (

        <SelectContainer>

            <p>{label}</p>

            <select>

                {selectOptions.map((option, index) => <option value={index} key={index}>{option}</option>)};

            </select>

        </SelectContainer>

    );

}

export default Select;