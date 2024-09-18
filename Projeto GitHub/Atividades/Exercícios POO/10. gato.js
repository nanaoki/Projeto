class Gato {
    #nome
    #raca
    #idade
    #som
constructor(nome, raca, idade) {
    this.#nome = nome;
    this.#raca = raca;
    this.#idade = idade;
    this.#som = 'Miau!'
}
miar() {
    return this.#som;
}
get som() {
    return this.#som;
}
set som(som) {
    this.#som = som
}
get nome() {
    return this.#nome;
}
set nome(nome) {
    this.#nome = nome;
}
get raca() {
    return this.#raca;
}
set raca(raca) {
    this.#raca = raca;
}
get idade() {
    return this.#idade;
}
set idade(idade) {
    this.#idade = idade;
}
toString() {
    return `A gata ${this.#nome} é uma ${this.#raca}, tem ${this.#idade} de idade. ${this.#som}`
}
}

let gato = new Gato('Miau', 'chita', 2);
console.log(gato.toString());