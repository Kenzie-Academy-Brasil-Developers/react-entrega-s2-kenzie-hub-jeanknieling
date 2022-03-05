import styled, { css } from 'styled-components';

export const CardsContainer = styled.li`
    background-color: ${(props) => props.color ? css`var(--gray-2)` : css`var(--gray-4)`};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 18px;
    width: 100%;
    height: 50px;


    p {
        font-size: 16px;
        font-weight: 700;
    }

    p + p {

        color: ${(props) => props.color ? css`var(--gray-0)` : css`var(--gray-1)`};
        font-size: 14px;
        font-weight: 400;
    }
`;