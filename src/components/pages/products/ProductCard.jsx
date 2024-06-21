import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import starIcon from '../../../assets/icons/star.png'
import Icon from '../../reusables/Icon'
import ProductQuantitySelector from './ProductQuantitySelector'
import formatToUSD from '../../../utils/formatToUSD'

const ProductCard = ({ product, handleAddToCart }) => {
    const productPagePath = `/products/${product.id}`

    return (
        <StyledCard data-testid='product-card'>
            <CardImageLink to={productPagePath} data-testid='product-card__image-link'>
                <img
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                />
            </CardImageLink>
            <CardInfoContainer>
                <CardInfoSection>
                    <Link to={productPagePath} data-testid='product-card__title-link'>
                        <h4>{product.title}</h4>
                    </Link>
                    <CardInfoRating>
                        <Icon src={starIcon} alt='star icon' />
                        <p>{product.rating.rate}</p>
                    </CardInfoRating>
                </CardInfoSection>
                <p>{formatToUSD(product.price)}</p>
                <ProductQuantitySelector
                    product={product}
                    handleAddToCart={handleAddToCart}
                />
            </CardInfoContainer>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    max-width: 336px;
`

const CardImageLink = styled(Link)`
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    img {
        width: 100%;
    }
`

const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
        font-size: 1rem;
        font-weight: 500;
    }
`

const CardInfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 8px;
`

const CardInfoRating = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 2px;
`

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductCard
