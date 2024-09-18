function tipoDeDado(value){
    if (typeof value === 'boolean'){
        return !value;
    }
    else if (typeof value === 'number'){
        return -value;
    }
    else{
        return `Esperado boolean ou number, mas o parâmetro é do tipo ${typeof value}`;
    }
}

console.log(tipoDeDado(true));
console.log(tipoDeDado(5));
console.log(tipoDeDado('Olá mundo!'))