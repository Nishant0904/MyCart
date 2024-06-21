import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductsGrid from '../components/pages/products/ProductsGrid'
import { BrowserRouter } from 'react-router-dom'

const mockProducts = [
    {
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
    },
]

describe('Products Grid test', () => {
    it('renders correctly', () => {
        render(
            <ProductsGrid products={mockProducts} handleAddToCart={() => {}} />,
            { wrapper: BrowserRouter },
        )
        expect(screen.getByTestId('products-grid')).toBeInTheDocument()
        expect(screen.getByTestId('products-grid')).toMatchSnapshot()
        expect(
            screen.getByText(
                'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            ),
        ).toBeInTheDocument()
    })
})
