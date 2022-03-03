import styled from 'styled-components';

export const ModalBlockerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: rgba(0,0,0,0.25);
    top: -0vh;
`;

export const ModalContainer = styled.form`
    background-color: var(--gray-3);
    border-radius: 10px;
    color: var(--gray-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    position: fixed;
    height: 275px;
    width: 300px;
    z-index: 1;

    div {
        background-color: var(--gray-2);
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
        padding-left: 15px;
        width: 100%;

        Button {
            color: var(--gray-0);
            font-size: 14px;
            margin: 0;
        }
    }

    div ~ div {
        background-color: transparent;
        display: flex;
        justify-content: space-around;
        padding: 0 2px;
    }

    label p {
        margin-top: 15px;
    }
`;