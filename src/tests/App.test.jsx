import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../components/App'
import { BrowserRouter } from 'react-router-dom'

describe('App component', () => {
    it('renders header, main, and footer', () => {
        render(<App />, { wrapper: BrowserRouter })
        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByRole('main')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
