function groupProductsWithQuantities(cart) {
    return cart.reduce((accumulator, currentProduct) => {
        let existingProduct = accumulator.find(
            (product) => product.title === currentProduct.title,
        )

        if (existingProduct) {
            existingProduct.quantity++
        } else {
            accumulator.push({ ...currentProduct, quantity: 1 })
        }

        return accumulator
    }, [])
}

export default groupProductsWithQuantities
