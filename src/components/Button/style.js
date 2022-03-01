import styled from "styled-components";

export const Container = styled.button`
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 5px;
    color: var(--gray-0);
    font-size: 13px;
    font-weight: 600;
    margin-top: 5px;
    padding: 10px 12px;
    width: ${(props) => props.width};
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.colorHover};
        transition: 0.5s;
    }

    @media (min-width: 600px) {
        font-size: 0.85rem;
        padding: 15px;
    }
`; 