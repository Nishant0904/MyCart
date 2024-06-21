/* eslint-disable react/prop-types */
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CartPage from '../components/pages/cart/CartPage'

const mockCart = [
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

vi.mock('../components/pages/cart/CartProductItem.jsx', () => ({
    default: ({ product, handleDeleteFromCart }) => {
        return (
            <div data-testid='cart-product-item-mock'>
                <h4>{product.title}</h4>
                <button onClick={handleDeleteFromCart}></button>
            </div>
        )
    },
}))

describe('Cart Page test', () => {
    it('renders correctly with an empty cart', () => {
        render(<CartPage cart={[]} handleDeleteFromCart={() => {}} />, {
            wrapper: BrowserRouter,
        })
        expect(screen.getByTestId('empty-cart-page')).toMatchSnapshot()
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: 'Your Cart is Empty',
            }),
        ).toBeInTheDocument()
    })

    it('renders correctly with a full cart', () => {
        render(<CartPage cart={mockCart} handleDeleteFromCart={() => {}} />, {
            wrapper: BrowserRouter,
        })
        expect(screen.getByTestId('cart-page')).toMatchSnapshot()
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: 'Your Cart',
            }),
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: 'Summary',
            }),
        ).toBeInTheDocument()
    })

    it('renders Cart Product Item', () => {
        render(<CartPage cart={mockCart} handleDeleteFromCart={() => {}} />, {
            wrapper: BrowserRouter,
        })

        expect(screen.getByTestId('cart-product-item-mock')).toBeInTheDocument()
    })
})
