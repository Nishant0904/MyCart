import styled from 'styled-components'
import useData from '../../../hooks/useData'
import LoadingPage from '../loading/LoadingPage'
import ProductQuantitySelector from './ProductQuantitySelector'
import formatToUSD from '../../../utils/formatToUSD'
import PropTypes from 'prop-types'

const SingleProductPage = ({ id, handleAddToCart }) => {
    const { data, error, loading } = useData(`/products/${id}`)

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <LoadingPage />

    return (
        <StyledSingleProductPage data-testid='single-product-page'>
            <SingleProductContainer>
                <ProductImageWrapper>
                    <img src={data.image} alt={data.title} />
                </ProductImageWrapper>
                <ProductInfoContainer>
                    <ProductMetaData>
                        <div>SKU: {data.id}</div>
                        <div>Category: {data.category}</div>
                    </ProductMetaData>
                    <ProductPrimaryInfo>
                        <h1 data-testid='single-product-page__product-title'>{data.title}</h1>
                        <div>{formatToUSD(data.price)}</div>
                    </ProductPrimaryInfo>
                    <p>{data.description}</p>
                    <ProductQuantitySelector
                        product={data}
                        handleAddToCart={handleAddToCart}
                    />
                </ProductInfoContainer>
            </SingleProductContainer>
        </StyledSingleProductPage>
    )
}

const StyledSingleProductPage = styled.section`
    flex-grow: 1;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 96px;
    max-width: 1200px;

    @media (max-width: 740px) {
        padding: 48px 24px;
    }
`

const SingleProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    gap: 48px;
`

const ProductImageWrapper = styled.div`
    display: flex;
    justify-content: center;

    img {
        max-width: 400px;
    }
`

const ProductInfoContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ProductMetaData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-transform: uppercase;
    font-weight: 900;
    color: var(--secondary-txt-color);
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
`

const ProductPrimaryInfo = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;

    div {
        font-size: 1.5rem;
    }
`

SingleProductPage.propTypes = {
    id: PropTypes.string,
    handleAddToCart: PropTypes.func.isRequired,
}

export default SingleProductPage
