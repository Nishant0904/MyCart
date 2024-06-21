import styled from 'styled-components'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

const ProductsGrid = ({ products, handleAddToCart }) => {
    return (
        <StyledProductsGrid data-testid='products-grid'>
            {products.map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                )
            })}
        </StyledProductsGrid>
    )
}

const StyledProductsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(248px, 1fr));
    gap: 24px;
    padding: 48px 96px;

    @media (max-width: 740px) {
        padding: 12px 16px;
        justify-items: center;
    }
`

ProductsGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductsGrid
