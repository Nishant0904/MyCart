/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { describe, it, expect, vi } from 'vitest'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import useData from '../hooks/useData'
import ProductsPage from '../components/pages/products/ProductsPage'
import { BrowserRouter } from 'react-router-dom'

vi.mock('../hooks/useData', () => ({
    __esModule: true,
    default: vi.fn(),
}))

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

describe('Products Page test', () => {
    it('renders error message when data is null', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: true, loading: false }
        })

        act(() => {
            render(<ProductsPage />)
        })

        expect(
            screen.getByText('An error occurred. Please check back later.'),
        ).toBeInTheDocument()
    })

    it('renders loading page when loading is true', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: false, loading: true }
        })

        act(() => {
            render(<ProductsPage />)
        })

        expect(screen.getByTestId('loading-page')).toBeInTheDocument()
    })

    it('renders ProductsGrid and ProdutsFilterSection when data is available and loading is false', async () => {
        useData.mockImplementation(() => {
            return { data: mockProducts, error: false, loading: false }
        })

        vi.mock('../components/pages/products/ProductsFilterSection', () => ({
            default: ({ pageTitle }) => (
                <section data-testid='mock-products-filter-section'>
                    <h1>{pageTitle}</h1>
                </section>
            ),
        }))

        act(() => {
            render(<ProductsPage />, { wrapper: BrowserRouter })
        })

        expect(
            screen.getByTestId('mock-products-filter-section'),
        ).toBeInTheDocument()
        expect(screen.getByTestId('products-grid')).toBeInTheDocument()
    })
})
