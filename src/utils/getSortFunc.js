function getSortFunc(sortMethod) {
    let compareFunc

    switch (sortMethod) {
        case 'title-ascending':
            compareFunc = titleAscending
            break
        case 'title-descending':
            compareFunc = titleDescending
            break
        case 'price-ascending':
            compareFunc = priceAscending
            break
        case 'price-descending':
            compareFunc = priceDescending
            break
        case 'rating-descending':
            compareFunc = ratingDescending
            break
        case 'id-ascending':
            compareFunc = idAscending
            break
        default:
            compareFunc = idAscending
    }

    return compareFunc

    function titleAscending(prev, next) {
        const prevTitle = prev.title.toUpperCase()
        const nextTitle = next.title.toUpperCase()

        if (prevTitle < nextTitle) {
            return -1
        } else if (prevTitle > nextTitle) {
            return 1
        } else {
            return 0
        }
    }
    function titleDescending(prev, next) {
        const prevTitle = prev.title.toUpperCase()
        const nextTitle = next.title.toUpperCase()

        if (prevTitle > nextTitle) {
            return -1
        } else if (prevTitle < nextTitle) {
            return 1
        } else {
            return 0
        }
    }

    function priceAscending(prev, next) {
        return prev.price - next.price
    }

    function priceDescending(prev, next) {
        return next.price - prev.price
    }

    function ratingDescending(prev, next) {
        return next.rating.rate - prev.rating.rate
    }

    function idAscending(prev, next) {
        return prev.id - next.id
    }
}

export default getSortFunc
