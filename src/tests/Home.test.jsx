import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../components/App'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('Home page', () => {
    it('Site first renders homepage', () => {
        render(<App />, { wrapper: BrowserRouter })
        expect(screen.getByTestId('home__hero-title')).toBeInTheDocument()
    })

    it('Home page matches snapshot', () => {
        render(<App />, { wrapper: BrowserRouter })
        expect(screen.getByTestId('home-section')).toMatchSnapshot()
    })

    it('Shop Collection button navigates to producst page', async () => {
        const user = userEvent.setup()
        render(<App />, { wrapper: BrowserRouter })

        const shopCollectionBtn = screen.getByRole('link', {
            name: 'Shop Collection',
        })
        expect(shopCollectionBtn.href).toContain('/products')
        await user.click(shopCollectionBtn)
        await waitFor(() => {
            expect(window.location.pathname).toBe('/products')
        })
    })
})
