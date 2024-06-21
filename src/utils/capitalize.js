function capitalize(word) {
    let array = word.split('')
    array = [array[0].toUpperCase(), ...array.slice(1)]

    return array.join('')
}

export default capitalize