export const createRandomStringColor = function() {
    let newColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`
    return newColor
}

export const randomInt = function() {
    return Math.floor(Math.random() * 256)
}

export const createNewColors = function(numberOfColors) {
    let arr = []
    for (let i = 0; i < numberOfColors; i++) {
        arr.push(createRandomStringColor())
    }
    return arr
}

export const getNumberOfSquaresByMode = function(isHard) {
    return isHard ? 6 : 3
}
