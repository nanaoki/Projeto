class Cachorro {
   #nome
   #raca
   #idade
   #som
constructor(nome, raca, idade) {
    this.#nome = nome;
    this.#raca = raca;
    this.#idade = idade;
    this.#som = 'Au au!'
}
latir() {
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
    return `O cachorro ${this.#nome} é um ${this.#raca} e tem ${this.#idade} de idade. ${this.#som}`
}
}

let cachorro = new Cachorro('Ziggy', 'husky/labrador', 1);
console.log(cachorro.toString());