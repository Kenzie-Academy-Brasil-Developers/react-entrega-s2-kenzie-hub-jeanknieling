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
    width: 90%;
`; 