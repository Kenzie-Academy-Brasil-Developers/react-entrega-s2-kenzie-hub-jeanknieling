import styled from "styled-components";

export const MainContainer = styled.main`

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;

        h1 {
            color: var(--color-primary);
            font-size: 18px;
        }

        Button {
            font-size: 11px;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25px;
        }
    }

    @media (min-width: 600px) {
        div {

            h1 {
                font-size: 1.2rem;
            }

            Button {
                font-size: 0.8rem;
            }
        }
    }
`;

export const Container = styled.form`
    background-color: var(--gray-3);
    width: 300px;
    padding: 34px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        
        font-size: 15px;
        margin-bottom: 18px;
    }

    span {
        color: var(--gray-1);
        font-size: 11px;
        font-weight: 400;
        margin-bottom: 18px;
    }

    Input {
        margin-bottom: 15px;
    }

    @media (min-width: 600px) {
        width: 400px;

        h2 {
            font-size: 1.2rem;
        }

        a {
            color: var(--gray-1);
            font-size: 0.8rem;
            font-weight: 600;

            &:hover {
                color: var(--gray-0);
            }
        }
    }
`;