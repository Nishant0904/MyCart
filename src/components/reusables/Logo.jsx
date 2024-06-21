import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import cartIcon from '../../assets/icons/shopping-cart.svg'
import cartIconWhite from '../../assets/icons/shopping-cart-white.svg'
import PropTypes from 'prop-types'

const Logo = ({ footer }) => {
    return (
        <StyledLogo to='/'>
            <Icon src={footer ? cartIconWhite : cartIcon} alt='cart icon' />
            <p
                style={
                    footer
                        ? { color: 'var(--tertiary-txt-color)' }
                        : { color: 'var(--primary-txt-color)' }
                }
            >
                MyCart
            </p>
        </StyledLogo>
    )
}

const StyledLogo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 4px;

    img {
        height: 1.6rem;
    }

    p {
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 0.025rem;
    }
`

Logo.propTypes = {
    footer: PropTypes.bool,
}

export default Logo
