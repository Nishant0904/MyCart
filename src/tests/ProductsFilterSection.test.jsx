import { describe, it, expect, vi } from 'vitest'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import useData from '../hooks/useData'
import ProductsFilterSection from '../components/pages/products/ProductsFilterSection'
import userEvent from '@testing-library/user-event'

vi.mock('../hooks/useData', () => ({
    __esModule: true,
    default: vi.fn(),
}))

const mockCategories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
]

describe('Products Filter Section test', () => {
    it('renders error message when data is null', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: true, loading: false }
        })

        act(() => {
            render(<ProductsFilterSection />)
        })

        expect(
            screen.getByText('An error occurred. Please check back later.'),
        ).toBeInTheDocument()
    })

    it('renders skeleton loading text when data is null and loading is true', async () => {
        useData.mockImplementation(() => {
            return { data: null, error: false, loading: true }
        })

        act(() => {
            render(<ProductsFilterSection />)
        })

        expect(screen.getByTestId('skeleton-loading-text')).toBeInTheDocument()
    })

    it('renders correctly when data is available and loading is false', async () => {
        useData.mockImplementation(() => {
            return { data: mockCategories, error: false, loading: false }
        })

        act(() => {
            render(<ProductsFilterSection />)
        })

        expect(
            screen.getByTestId('products-filter-section'),
        ).toBeInTheDocument()
        expect(screen.getByTestId('products-filter-section')).toMatchSnapshot()
    })
    
    it('changing category calls handleCategoryChange', async () => {
        const user = userEvent.setup()
        const handleCategoryChangeMock = vi.fn()
        useData.mockImplementation(() => {
            return { data: mockCategories, error: false, loading: false }
        })

        act(() => {
            render(<ProductsFilterSection handleCategoryChange={handleCategoryChangeMock}/>)
        })

        await user.selectOptions(screen.getByLabelText(/category:/i), 'jewelery')

        expect(handleCategoryChangeMock).toHaveBeenCalled()
    })

    it('changing sort calls handleSort', async () => {
        const user = userEvent.setup()
        const handleSortMock = vi.fn()
        useData.mockImplementation(() => {
            return { data: mockCategories, error: false, loading: false }
        })

        act(() => {
            render(<ProductsFilterSection handleSort={handleSortMock}/>)
        })

        await user.selectOptions(screen.getByLabelText(/sort:/i), 'A-Z')

        expect(handleSortMock).toHaveBeenCalled()
    })

    it('searching for a product calls handleSearchInputChange', async () => {
        const user = userEvent.setup()
        const handleSearchInputChangeMock = vi.fn()
        useData.mockImplementation(() => {
            return { data: mockCategories, error: false, loading: false }
        })

        act(() => {
            render(<ProductsFilterSection handleSearchInputChange={handleSearchInputChangeMock}/>)
        })

        await user.type(screen.getByLabelText(/search:/i), 't-shirt')

        expect(handleSearchInputChangeMock).toHaveBeenCalled()
    })
})
