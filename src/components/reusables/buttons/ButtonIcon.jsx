import styled from 'styled-components'

const ButtonIcon = styled.button`
    background-color: var(--primary-bg-color);
    padding: 4px;
    border: none;
    border-radius: 2px;

    &:hover {
        cursor: pointer;
        background-color: var(--secondary-bg-color);
        opacity: 0.8;
    }
`

export default ButtonIcon
