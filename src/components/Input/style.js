import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
    color: ${(props) => props.isErrored && css`var(--error)`};
    font-size: 12px;
    font-weight: 400;
    width: 90%;
    position: relative;

    input {
        background-color: var(--gray-2);
        border: 2px solid ${(props) => props.isErrored ? css`var(--error)` : "transparent"};
        border-radius: 5px;
        color: var(--gray-0);
        cursor: ${(props) => props.cursor ? props.cursor : "pointer"};
        font-size: 13px;
        margin-top: 5px;
        padding: 10px 12px;
        width: ${(props) => props.width};

        :-webkit-autofill {
            border: 2px solid var(--gray-2);
            box-shadow: 0 0 0 50px var(--gray-2) inset;
            -webkit-box-shadow: 0 0 0 50px var(--gray-2) inset;
            -webkit-text-fill-color: var(--gray-0);
        }

        ::placeholder {
            color: var(--gray-1);
            font-size: 13px;
        }

        :focus{
            border: 2px solid var(--gray-1);
        }

        @media (min-width: 600px) {
            font-size: 0.85rem;
            padding: 15px;

            ::placeholder {
                color: var(--gray-1);
                font-size: 0.85rem
            }
        }
    }

    svg {
        color: var(--gray-1);
        cursor: pointer;
        font-size: 16px;
        position: absolute;
        top: 32px;
        left: 248px;
    }

    @media (min-width: 600px) {
        font-size: 0.85rem;

        svg {
            font-size: 18px;
            top: 38px;
            left: 330px;
        }
    }
`;