class Animal {
    #name
    #type
    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }
    emitirSom() {
        console.log('O animal está fazendo som.');
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name
    }
    get type() {
        return this.#type;
    }
    set type(type) {
        this.#type = type
    }
    toString() {
        return `O nome do animal é ${this.#name} e o tipo é ${this.#type}.`
    }
}
//Exemplo:
let animal = new Animal('Ziggy', 'Cachorro(doguito)');
console.log(animal.toString());
