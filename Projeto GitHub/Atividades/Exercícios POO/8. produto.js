class Produto {
    #name
    #price
    #quantity

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;

    }
    calculeTotal() {
        return this.#price * this.#quantity
    }
    get calculeTotal() {
        return this.#price * this.#quantity
    }
    set calculeTotal(calculeTotal) {
        this.calculeTotal = calculeTotal
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get price() {
        return this.#price;
    }
    set price(price) {
        this.#price = price;
    }
    get quantity() {
        return this.#quantity;
    }
    set quantity(quantity) {
        this.#quantity = quantity;
    }
    toString() {
        return `Produto: ${this.#name}\n Preço: ${this.#price}\n Quantidade: ${this.#quantity} \n Total: R$ ${this.calculeTotal}`;
    }
}
//Exemplo: 
let produto = new Produto('Caixa de som', 15, 2);
console.log(produto.toString());