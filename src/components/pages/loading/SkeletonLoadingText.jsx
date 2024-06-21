import { styled, keyframes } from 'styled-components'

const skeletonLoading = keyframes`
    0% {
        background-color: var(--secondary-txt-color);
    }
    100% {
        background-color: var(--secondary-bg-color);
    }
`

const SkeletonLoadingText = styled.div`
    background-color: var(--secondary-txt-color);
    opacity: 0.6;
    padding: 12px;
    width: 196px;
    border-radius: 12px;
    animation: ${skeletonLoading} 1s linear infinite alternate;
`

export default SkeletonLoadingText
