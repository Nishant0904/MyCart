import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import ProductCard from '../components/pages/products/ProductCard'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const mockProduct = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
        rate: 3.9,
        count: 120,
    },
}

describe('Product Card test', () => {
    it('Product card renders correctly', () => {
        render(
            <ProductCard product={mockProduct} handleAddToCart={() => {}} />,
            { wrapper: BrowserRouter },
        )
        expect(screen.getByTestId('product-card')).toBeInTheDocument()
        expect(screen.getByTestId('product-card')).toMatchSnapshot()
    })

    it('Product card title link takes user to single product page', async () => {
        const user = userEvent.setup()

        render(
            <ProductCard product={mockProduct} handleAddToCart={() => {}} />,
            { wrapper: BrowserRouter },
        )

        const productTitleLink = screen.getByTestId('product-card__title-link')
        await user.click(productTitleLink)

        await waitFor(() => {
            expect(window.location.pathname).toBe(`/products/${mockProduct.id}`)
        })
    })

    it('Product card image link takes user to single product page', async () => {
        const user = userEvent.setup()

        render(
            <ProductCard product={mockProduct} handleAddToCart={() => {}} />,
            { wrapper: BrowserRouter },
        )

        const productImageLink = screen.getByTestId('product-card__image-link')
        await user.click(productImageLink)

        await waitFor(() => {
            expect(window.location.pathname).toBe(`/products/${mockProduct.id}`)
        })
    })
})
