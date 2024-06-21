import styled from 'styled-components'
import Button from '../../reusables/buttons/Button'
import { useState } from 'react'
import PropTypes from 'prop-types'

const ProductQuantitySelector = ({ product, handleAddToCart }) => {
    const [quantity, setQuantity] = useState(1)

    return (
        <StyledQuantitySelector data-testid='product-quantity-selector'>
            <QuantityInputContainer>
                <Button
                    onClick={handleDecrement}
                    data-testid='product-quantity__decrement-btn'
                >
                    –
                </Button>
                <input
                    type='number'
                    value={quantity}
                    onChange={handleInputChange}
                    onBlur={(e) => {
                        if (e.target.value === '') setQuantity(1)
                    }}
                    data-testid='product-quantity__number-input'
                />
                <Button
                    onClick={handleIncrement}
                    data-testid='product-quantity__increment-btn'
                >
                    +
                </Button>
            </QuantityInputContainer>
            <Button
                onClick={() => {
                    handleAddToCart(product, quantity)
                }}
                data-testid='product-quantity__add-to-cart-btn'
            >
                Add to Cart
            </Button>
        </StyledQuantitySelector>
    )

    function handleIncrement() {
        if (quantity < 10) setQuantity(quantity + 1)
    }

    function handleDecrement() {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    function handleInputChange(e) {
        const newValue = e.target.value
        if (newValue <= 10 && newValue >= 0) {
            setQuantity(parseInt(newValue))
        } else if (newValue > 10 || newValue < 0) {
            setQuantity(1)
        } else {
            setQuantity('')
        }
    }
}

const StyledQuantitySelector = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const QuantityInputContainer = styled.div`
    height: 2rem;
    display: flex;
    gap: 2px;

    input {
        width: 2rem;
        text-align: center;
        border: none;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    Button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        font-size: 1.2rem;
    }
`

ProductQuantitySelector.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default ProductQuantitySelector
