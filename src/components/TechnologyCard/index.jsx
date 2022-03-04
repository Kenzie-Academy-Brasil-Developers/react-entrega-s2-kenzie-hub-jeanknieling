import { CardsContainer } from "./style";

const TechnologyCard = ({ children, ...rest}) => {

    return (

        <CardsContainer {...rest}>{children}</CardsContainer>

    );

};

export default TechnologyCard;