import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CartProductItem from '../components/pages/cart/CartProductItem'
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
    quantity: 1,
}

describe('Cart Product Item test', () => {
    it('renders correctly', () => {
        render(
            <CartProductItem
                product={mockProduct}
                handleDeleteFromCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        expect(screen.getByTestId('cart-product-item')).toBeInTheDocument()
        expect(screen.getByTestId('cart-product-item')).toMatchSnapshot()
    })

    it('image link click takes user to product page', async () => {
        const user = userEvent.setup()
        render(
            <CartProductItem
                product={mockProduct}
                handleDeleteFromCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        const imageLink = screen.getByTestId('cart-product-item__image-link')

        await user.click(imageLink)
        await waitFor(() => {
            expect(window.location.pathname).toBe(`/products/${mockProduct.id}`)
        })
    })

    it('title link click takes user to product page', async () => {
        const user = userEvent.setup()
        render(
            <CartProductItem
                product={mockProduct}
                handleDeleteFromCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        const titleLink = screen.getByTestId('cart-product-item__title-link')

        await user.click(titleLink)
        await waitFor(() => {
            expect(window.location.pathname).toBe(`/products/${mockProduct.id}`)
        })
    })

    it('title link click takes user to product page', () => {
        render(
            <CartProductItem
                product={mockProduct}
                handleDeleteFromCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )

        expect(
            screen.getByTestId('cart-product-item__quantity').textContent,
        ).toBe(`Qty: ${mockProduct.quantity}`)
    })

    it('trash button click calls handleDeleteFromCart', async () => {
        const user = userEvent.setup()
        const handleDeleteFromCartMock = vi.fn()
        render(
            <CartProductItem
                product={mockProduct}
                handleDeleteFromCart={handleDeleteFromCartMock}
            />,
            { wrapper: BrowserRouter },
        )
        const trashBtn = screen.getByTestId('cart-product-item__trash-btn')

        await user.click(trashBtn)

        expect(handleDeleteFromCartMock).toHaveBeenCalled()
    })
})
