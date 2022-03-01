import { Container } from "./style";

const Button = ({ text, color }) => {

    return (

        <Container color={color}>{text}</Container>

    );
};

export default Button;