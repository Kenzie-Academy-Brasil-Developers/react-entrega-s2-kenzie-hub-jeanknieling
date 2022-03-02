import styled, { css} from 'styled-components';

export const SelectContainer = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    width: 90%;

    select {
        background-color: var(--gray-2);
        border: 2px solid transparent;
        border-radius: 5px;
        color: var(--gray-1);
        margin: 5px 0 18px 0;
        padding: 10px 12px;
    }

    @media (min-width: 600px) {

        select {
            padding: 15px;
        }

    }

`;