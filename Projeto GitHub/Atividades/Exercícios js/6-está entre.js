function estaEntre(number, min, max, inclusive = false){
    if(inclusive){
        return number >= min && number <= max;
}
    else {
    return number > min && number < max;
} 
}

console.log(estaEntre(4, 9, 2))
console.log(estaEntre(3, 0, 24, true))