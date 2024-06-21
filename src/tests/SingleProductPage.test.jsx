import { describe, it, expect, vi } from 'vitest'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import SingleProductPage from '../components/pages/products/SingleProductPage'
import useData from '../hooks/useData'

vi.mock('../hooks/useData', () => ({
    __esModule: true,
    default: vi.fn(),
}))

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

describe('SingleProductPage test', () => {
    it('renders error', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: true, loading: false }
        })

        await act(async () => {
            render(<SingleProductPage id={1} handleAddToCart={() => {}} />)
        })

        expect(screen.getByText('An error occurred. Please check back later.')).toBeInTheDocument()
    })

    it('renders loading page when data is null and loading is true', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: null, loading: true }
        })

        await act(async () => {
            render(<SingleProductPage id={1} handleAddToCart={() => {}} />)
        })

        expect(screen.getByTestId('loading-page')).toBeInTheDocument()
    })

    it('renders product data correctly when data is available and loading is false', async () => {
        useData.mockImplementation(() => {
            return { data: mockProduct, error: null, loading: false }
        })

        await act(async () => {
            render(<SingleProductPage id={1} handleAddToCart={() => {}} />)
        })

        expect(screen.getByTestId('single-product-page')).toBeInTheDocument()
        expect(screen.getByTestId('single-product-page')).toMatchSnapshot()
    })
    
    it('renders correct product title', async () => {
        useData.mockImplementation(() => {
            return { data: mockProduct, error: null, loading: false }
        })

        await act(async () => {
            render(<SingleProductPage id={1} handleAddToCart={() => {}} />)
        })

        expect(screen.getByTestId('single-product-page__product-title').textContent).toBe(mockProduct.title)
    })
})
