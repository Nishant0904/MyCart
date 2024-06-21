import styled from "styled-components";

const Button = styled.button`
    background-color: var(--tertiary-bg-color);
    color: var(--tertiary-txt-color);
    border: 2px solid black;
    outline: none;
    padding: 12px 16px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    img {
        filter: invert(100%);
        height: 1rem;
    }
`

export default Button