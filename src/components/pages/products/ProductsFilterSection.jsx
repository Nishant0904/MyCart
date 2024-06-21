import styled from 'styled-components'
import SkeletonLoadingText from '../loading/SkeletonLoadingText'
import useData from '../../../hooks/useData'
import capitalize from '../../../utils/capitalize'
import PropTypes from 'prop-types'

const ProductsFilterSection = ({
    pageTitle,
    handleSearchInputChange,
    handleCategoryChange,
    handleSort,
}) => {
    const { data, error, loading } = useData('/products/categories')

    if (error)
        return (
            <StyledProductsFilterSection>
                <p>An error occurred. Please check back later.</p>
            </StyledProductsFilterSection>
        )
    if (loading)
        return (
            <StyledProductsFilterSection>
                <SkeletonLoadingText data-testid='skeleton-loading-text' />
                <ProductsFiltersContainer>
                    <SkeletonLoadingText />
                    <SkeletonLoadingText />
                    <SkeletonLoadingText />
                </ProductsFiltersContainer>
            </StyledProductsFilterSection>
        )

    return (
        <StyledProductsFilterSection data-testid='products-filter-section'>
            <h1>{pageTitle}</h1>
            <ProductsFiltersContainer>
                <div>
                    <label htmlFor='search-input'>Search:</label>
                    <input
                        type='text'
                        autoComplete='off'
                        id='search-input'
                        onChange={handleSearchInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='category-select'>Category:</label>
                    <select
                        id='category-select'
                        onChange={handleCategoryChange}
                    >
                        <option value='all'>All</option>
                        {data.map((category, index) => {
                            return (
                                <option key={index} value={category}>
                                    {capitalize(category)}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor='sort-select'>Sort:</label>
                    <select id='sort-select' onChange={handleSort}>
                        <option value='id-ascending'>Default (by SKU)</option>
                        <option value='title-ascending'>A-Z</option>
                        <option value='title-descending'>Z-A</option>
                        <option value='price-ascending'>
                            Price (low to high)
                        </option>
                        <option value='price-descending'>
                            Price (high to low)
                        </option>
                        <option value='rating-descending'>
                            Rating (high to low)
                        </option>
                    </select>
                </div>
            </ProductsFiltersContainer>
        </StyledProductsFilterSection>
    )
}

const StyledProductsFilterSection = styled.section`
    padding: 48px 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background-color: var(--secondary-bg-color);
    border-bottom: 1px solid black;

    @media (max-width: 600px) {
        padding: 12px 16px;
    }
`

const ProductsFiltersContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    div {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    label {
        font-size: 0.8rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    input,
    select {
        border: 1px solid grey;
        padding: 4px;
    }

    @media (max-width: 740px) {
        flex-direction: column;
        align-items: start;
        width: 100%;

        div {
            width: 100%;
        }

        input, select {
            width: 100%;
        }
    }
`

ProductsFilterSection.propTypes = {
    pageTitle: PropTypes.string,
    handleCategoryChange: PropTypes.func,
    handleSearchInputChange: PropTypes.func,
    handleSort: PropTypes.func,
}

export default ProductsFilterSection
