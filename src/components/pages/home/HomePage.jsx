import styled from 'styled-components'
import heroImage from '../../../assets/images/hero-image.jpg'
import ButtonLink from '../../reusables/buttons/ButtonLink'

const HomePage = () => {
    return (
        <HomeSection data-testid='home-section'>
            <h1 data-testid='home__hero-title'>
                <span>Ever</span>ything You Could
                <br />
                <span>Ever</span> Ask For
            </h1>
            <ButtonLink to='/products'>Shop Collection</ButtonLink>
        </HomeSection>
    )
}

const HomeSection = styled.section`
    background-image: ${`url(${heroImage})`};
    background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;
    background-color: var(--tertiary-bg-color);
    flex-grow: 1;
    padding: 48px 96px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        font-size: clamp(1.2rem, 10vw, 5rem);
        font-style: italic;
        text-transform: uppercase;
        font-weight: 900;
        color: var(--tertiary-txt-color);
        text-shadow: 2px 2px 4px rgba(57, 57, 57, 0.717); 

        span {
            color: var(--accent-color);
        }
    }

    @media (max-width: 600px) {
        background-position: top center;
    }
    
`

export default HomePage
