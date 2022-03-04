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
        cursor: pointer;
        margin: 5px 0 18px 0;
        padding: 10px 12px;

        :focus{
            border: 2px solid var(--gray-1);
        }

    }

    @media (min-width: 600px) {
        font-size: 0.85rem;

        select {
            padding: 15px;
            font-size: 0.9rem;
        }

    }

`;