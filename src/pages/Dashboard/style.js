import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

`;

export const LineContainer = styled.div`
    background-color: var(--gray-2);
    width: 100%;
    height: 1px;
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 15px;
    width: 100%;
    max-width: 780px;

    h1 {
        color: var(--color-primary);
        font-size: 28px;
    }
`;

export const WellcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 15px;
    width: 100%;
    max-width: 780px;

    h2 {
        margin-top: 35px;
        margin-bottom: 10px;
    }

    span {
        margin-bottom: 35px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 100%;
    max-width: 780px;
`;

export const ChooseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 0;
    width: 100%;
    

    Button {
        background-color: var(--gray-3);
        width: 32px;
        height: 32px;
    }
`;

export const TecnologesContainer = styled.div`
    background-color: var(--gray-2);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
`;
