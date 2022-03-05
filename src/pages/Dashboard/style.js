import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;

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
    padding: 24px 20px 24px 22px;
    width: 100%;
    max-width: 780px;

    h1 {
        color: var(--color-primary);
        font-size: 28px;
    }

    @media (min-width: 600px) {
        Button {
            font-size: 13px;
            padding: 10px 12px;
        }
    }
`;

export const WellcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 22px;
    width: 100%;
    max-width: 780px;
    
    h2 {
        margin-top: 35px;
        margin-bottom: 10px;
        text-align: start;
    }

    span {
        color: var(--gray-1);
        font-size: 14px;
        font-weight: 500;
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
    font-size: 18px;
    font-weight: 600;
    padding: 28px 6px 28px 8px;
    width: 100%;

    Button {
        background-color: var(--gray-3);
        font-size: 16px;
        width: 32px;
        height: 32px;
    }

`;

export const TecnologiesContainer = styled.div`
    background-color: var(--gray-3);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;

    ul {
        margin-top: 18px;
        width: 97%;
    }

`;
