function somarNum(total) {
    return total.reduce((a, b) => a + b, 0)
}

console.log(somarNum([3, 3, 12, 15, 14, 28, 11, 26]))