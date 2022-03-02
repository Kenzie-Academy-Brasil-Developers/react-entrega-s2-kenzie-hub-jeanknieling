import styled from "styled-components";

export const MainContainer = styled.main`
    h1 {
        color: var(--color-primary);
        font-size: 28px;
        margin-bottom: 25px;
    }
`;

export const Container = styled.form`
    background-color: var(--gray-3);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    width: 300px;
    padding: 20px 0;

    h2 {
        font-size: 18px;
    }

    a {
        color: var(--gray-1);
        font-size: 11px;
        font-weight: 600;

        &:hover {
            color: var(--gray-0);
        }
    }

    @media (min-width: 600px) {
        width: 400px;
        height: 500px;

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