import useData from '../../../hooks/useData'
import ProductsFilterSection from './ProductsFilterSection'
import ProductsGrid from './ProductsGrid'
import LoadingPage from '../loading/LoadingPage'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import capitalize from '../../../utils/capitalize'
import getSortFunc from '../../../utils/getSortFunc'

const ProductsPage = ({ handleAddToCart }) => {
    const { data, error, loading } = useData('/products')
    const [products, setProducts] = useState([])
    const [pageTitle, setPageTitle] = useState('All Products')

    useEffect(() => {
        if (data && data.length > 0) {
            setProducts(data)
        }
    }, [data])

    if (error) return <p>An error occurred. Please check back later.</p>
    if (loading) return <LoadingPage />

    return (
        <>
            <ProductsFilterSection
                pageTitle={pageTitle}
                handleSearchInputChange={handleSearchInputChange}
                handleCategoryChange={handleCategoryChange}
                handleSort={handleSort}
            />
            <ProductsGrid
                products={products}
                handleAddToCart={handleAddToCart}
            />
        </>
    )

    function handleSearchInputChange(e) {
        document.getElementById('category-select').selectedIndex = 0
        document.getElementById('sort-select').selectedIndex = 0

        setPageTitle('All Products')
        setProducts(
            data.filter((product) =>
                product.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()),
            ),
        )

        handleSort({ target: { value: 'id-ascending' } })
    }

    function handleCategoryChange(e) {
        const newCategory = e.target.value
        document.getElementById('sort-select').selectedIndex = 0
        document.getElementById('search-input').value = ''

        if (newCategory === 'all') {
            setPageTitle('All Products')
            setProducts(data)
        } else {
            setPageTitle(capitalize(newCategory))
            setProducts(
                data.filter((product) => product.category === newCategory),
            )
        }

        handleSort({ target: { value: 'id-ascending' } })
    }

    function handleSort(e) {
        const sortMethod = e.target.value
        const sortFunc = getSortFunc(sortMethod)

        setProducts((prevProducts) => [...prevProducts].sort(sortFunc))
    }
}

ProductsPage.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductsPage
