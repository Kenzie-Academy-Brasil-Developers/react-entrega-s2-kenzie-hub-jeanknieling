import styled from 'styled-components';

export const ModalBlockerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    top: -0vh;
`;

export const ModalContainer = styled.form`
    background-color: var(--gray-3);
    border-radius: 5px;
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
        border-radius: 5px 5px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
        padding-left: 15px;
        width: 100%;

        Button {
            color: var(--gray-1);
            font-size: 14px;
            margin: 0;

            :hover {
                color: var(--gray-0);
            }
        }
    }

    div ~ div {
        background-color: transparent;
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        padding: 0 15px;

        Button {
            color: var(--gray-0);
            font-size: 14px;
            margin: 0;
            width: 100%;
        }

        Button ~ Button {
            width: 100px;
            margin-left: 25px;
        }
    }

    label p {
        margin-top: 15px;
    }

    @media (min-width: 600px) {
        height: 320px;
        width: 370px;

        div {
            font-size: 1rem;

            button {
                font-size: 1rem;
            }
        }

        div ~ div {
            justify-content: space-between;
            padding: 0 20px;

            Button {
                width: 100%;
            }

            Button ~ Button {
                width: 100px;
                margin-left: 25px;
            }

        }
    }
`;