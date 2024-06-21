import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductQuantitySelector from '../components/pages/products/ProductQuantitySelector'
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

describe('Product Quantity Selector test', () => {
    it('Product Quantity Selector renders correctly', () => {
        render(
            <ProductQuantitySelector
                product={mockProduct}
                handleAddToCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        expect(
            screen.getByTestId('product-quantity-selector'),
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('product-quantity-selector'),
        ).toMatchSnapshot()
    })

    it('Increment button adds one to the input number value', async () => {
        const user = userEvent.setup()
        render(
            <ProductQuantitySelector
                product={mockProduct}
                handleAddToCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        const incrementBtn = screen.getByTestId(
            'product-quantity__increment-btn',
        )
        const numberInput = screen.getByTestId('product-quantity__number-input')

        await user.click(incrementBtn)

        expect(numberInput.value).toBe('2')
    })

    it('Increment button can only add up to 10', async () => {
        const user = userEvent.setup()
        render(
            <ProductQuantitySelector
                product={mockProduct}
                handleAddToCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        const incrementBtn = screen.getByTestId(
            'product-quantity__increment-btn',
        )
        const numberInput = screen.getByTestId('product-quantity__number-input')

        // click the button ten times, with a starting value of 1
        for (let i = 0; i < 10; i++) {
            await user.click(incrementBtn)
        }

        expect(numberInput.value).toBe('10')
    })

    it('Decrement button can not subtract below 1', async () => {
        const user = userEvent.setup()
        render(
            <ProductQuantitySelector
                product={mockProduct}
                handleAddToCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        const decrementBtn = screen.getByTestId(
            'product-quantity__decrement-btn',
        )
        const numberInput = screen.getByTestId('product-quantity__number-input')

        await user.click(decrementBtn)

        expect(numberInput.value).toBe('1')
    })

    it('Decrement button can not subtract below 1', async () => {
        const user = userEvent.setup()
        render(
            <ProductQuantitySelector
                product={mockProduct}
                handleAddToCart={() => {}}
            />,
            { wrapper: BrowserRouter },
        )
        const incrementBtn = screen.getByTestId(
            'product-quantity__increment-btn',
        )
        const decrementBtn = screen.getByTestId(
            'product-quantity__decrement-btn',
        )
        const numberInput = screen.getByTestId('product-quantity__number-input')

        await user.dblClick(incrementBtn)
        await user.click(decrementBtn)

        expect(numberInput.value).toBe('2')
    })

    it('handleAddToCart is called on Add to Cart btn click', async () => {
        const user = userEvent.setup()
        const handleAddToCartMock = vi.fn()
        render(
            <ProductQuantitySelector
                product={mockProduct}
                handleAddToCart={handleAddToCartMock}
            />,
            { wrapper: BrowserRouter },
        )
        const addToCartBtn = screen.getByTestId('product-quantity__add-to-cart-btn')

        await user.click(addToCartBtn)

        expect(handleAddToCartMock).toHaveBeenCalled();
    })
})
