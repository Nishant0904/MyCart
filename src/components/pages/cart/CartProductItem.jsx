// import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import formatToUSD from '../../../utils/formatToUSD'
import PropTypes from 'prop-types'
import ButtonIcon from '../../reusables/buttons/ButtonIcon'
import trashIcon from '../../../assets/icons/trash-2.svg'

const CartProductItem = ({ product, handleDeleteFromCart }) => {
    return (
        <StyledCartProductItem data-testid='cart-product-item'>
            <Link
                to={`/products/${product.id}`}
                data-testid='cart-product-item__image-link'
            >
                <img src={product.image} alt={product.title} />
            </Link>
            <ProductItemInfo>
                <div>
                    <Link
                        to={`/products/${product.id}`}
                        data-testid='cart-product-item__title-link'
                    >
                        <h4>{product.title}</h4>
                    </Link>
                    <p>{formatToUSD(product.price)}</p>
                </div>
                <ProductItemButtonsContainer>
                    <p data-testid='cart-product-item__quantity'>
                        Qty: {product.quantity}
                    </p>
                    <ButtonIcon>
                        <img
                            src={trashIcon}
                            alt='trash icon'
                            onClick={() => {
                                handleDeleteFromCart(product)
                            }}
                            title='Delete all of this item'
                            data-testid='cart-product-item__trash-btn'
                        />
                    </ButtonIcon>
                </ProductItemButtonsContainer>
            </ProductItemInfo>
        </StyledCartProductItem>
    )
}

const StyledCartProductItem = styled.li`
    display: flex;
    gap: 16px;
    padding: 12px 16px;

    a {
        cursor: pointer;
    }

    img {
        max-width: 96px;
    }

    button {
        align-self: start;
    }
`

const ProductItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
`

const ProductItemButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

CartProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    handleDeleteFromCart: PropTypes.func.isRequired,
}

export default CartProductItem
