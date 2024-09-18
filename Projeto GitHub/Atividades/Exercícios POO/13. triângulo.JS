class Triangulo {
    #ladoA
    #ladoB
    #ladoC

    constructor(ladoA, ladoB, ladoC) {
        this.#ladoA = ladoA;
        this.#ladoB = ladoB;
        this.#ladoC = ladoC;
    }

    calcularArea() {
        const s = (this.#ladoA + this.#ladoB + this.#ladoC) / 2;
        const area = Math.sqrt(s * (s - this.#ladoA) * (s - this.#ladoB) * (s - this.#ladoC));
        return area;
    }

    calcularPerimetro() {
        return this.#ladoA + this.#ladoB + this.#ladoC;
    }

    get ladoA() {
        return this.#ladoA;
    }

    set ladoA(ladoA) {
        this.#ladoA = ladoA;
    }

    get ladoB() {
        return this.#ladoB;
    }

    set ladoB(ladoB) {
        this.#ladoB = ladoB;
    }

    get ladoC() {
        return this.#ladoC;
    }

    set ladoC(ladoC) {
        this.#ladoC = ladoC;
    }
    toString() {
        return `Lado A: ${this.#ladoA}\nLado B:${this.#ladoB}\nLado C: ${this.#ladoC}\nÁrea: ${this.calcularArea()}\nPerímetro: ${this.calcularPerimetro()}`
    }
}

const triangulo = new Triangulo(2, 1, 2)
console.log(triangulo.toString())