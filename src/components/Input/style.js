import styled from 'styled-components';

export const InputContainer = styled.label`
    font-size: 12px;
    font-weight: 400;
    width: 90%;

    input {
        background-color: var(--gray-2);
        border: 2px solid transparent;
        border-radius: 5px;
        color: var(--gray-0);
        margin-top: 5px;
        padding: 10px 12px;
        width: 100%;

        &::placeholder {
            color: var(--gray-1);
            font-size: 13px;
        }

        &:focus{
            border: 2px solid var(--gray-1);
        }

        @media (min-width: 600px) {
            padding: 15px;

            &::placeholder {
            color: var(--gray-1);
            font-size: 0.85rem
        }
        }
    }

    @media (min-width: 600px) {
        font-size: 0.85rem;
    }
`;