import { Container } from "./style";

const Button = ({ text, ...rest }) => {

    return (

        <Container {...rest}>{text}</Container>

    );
};

export default Button;