import { Link } from 'react-router-dom'
import Logo from './reusables/Logo'
import ghIcon from '../assets/icons/github-mark.svg'
import Icon from './reusables/Icon'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter data-testid='footer'>
            <PrimaryFooter>
                <LogoContainer>
                    <Logo footer={true} />
                    <AttributionContainer>
                        <a
                            href='https://github.com/Nishant0904'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Made by Nishant
                            <Icon src={ghIcon} alt='github icon' />
                        </a>
                    </AttributionContainer>
                </LogoContainer>
                <FooterLinks>
                    <FooterLinkItem>
                        <FooterLink>Mens</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLink>Womens</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLink>Jewelry</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLink>Electronics</FooterLink>
                    </FooterLinkItem>
                </FooterLinks>
            </PrimaryFooter>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    color: var(--tertiary-txt-color);
    background-color: var(--tertiary-bg-color);

    @media (max-width: 600px) {
        flex-direction: row;
        justify-content: center;
    }
`

const PrimaryFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 48px 96px;

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 24px 12px;
        gap: 24px;
    }
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 600px) {
        gap: 8px;
    }
`

const AttributionContainer = styled.div`
    align-self: center;
    padding-bottom: 8px;

    a {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--tertiary-txt-color);
        text-decoration: none;
    }
`

const FooterLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 600px) {
        align-items: center;
    }
`

const FooterLinkItem = styled.li`
    list-style: none;
`

const FooterLink = styled(Link)`
    color: white;
`

export default Footer
