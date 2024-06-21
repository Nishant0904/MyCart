function getSubtotal(cart) {
    return cart.reduce((accumulator, product) => {
        return accumulator + product.price
    }, 0)
}

export default getSubtotal
