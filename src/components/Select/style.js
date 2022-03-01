import styled from 'styled-components';

export const SelectContainer = styled.label`
   
    color: var(--gray-0);
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
        padding: 15px;
    }

`;