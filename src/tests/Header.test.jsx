import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Header from '../components/Header'
import Router from '../components/Router'
import userEvent from '@testing-library/user-event'
import App from '../components/App'
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
    it('renders header element', () => {
        render(
            <Router>
                <Header />
            </Router>,
        )
        expect(screen.getByTestId('header')).toMatchSnapshot()
    })

    it('Products link navigates to Products page', async () => {
        const user = userEvent.setup()
        render(<App />, { wrapper: BrowserRouter })

        const productsLink = screen.getByRole('link', { name: 'Products' })
        expect(productsLink.href).toContain('/products')

        await user.click(productsLink)
        await waitFor(() => {
            expect(window.location.pathname).toBe('/products')
        })
    })

    it('Cart icon link navigates to cart page', async () => {
        const user = userEvent.setup()
        render(<App />, { wrapper: BrowserRouter })

        const cartLink = screen.getByTestId('header__cart-link')
        expect(cartLink.href).toContain('/cart')

        await user.click(cartLink)
        await waitFor(() => {
            expect(window.location.pathname).toBe('/cart')
        })
    })
})
