import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonLink = styled(Link)`
    background-color: var(--tertiary-bg-color);
    color: var(--tertiary-txt-color);
    border: 2px solid black;
    outline: none;
    padding: 12px 16px;
    font-size: 1rem;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

export default ButtonLink
