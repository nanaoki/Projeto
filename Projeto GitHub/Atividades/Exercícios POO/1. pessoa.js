class Pessoa {
  #name
  #age
  #height
  constructor (name, age, height) {
    this.#name = name;
    this.#age = age;
    this.#height = height;
    }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }
  get height() {
    return this.#height;
  }
  set height(height) {
    this.#height = height;
  }
toString() {
    return `Nome: ${this.#name}\nIdade: ${this.#age}\nAltura: ${this.#height}`;
  }
}
let pessoa = new Pessoa('John Doe', 30, 1.75);
console.log(pessoa.toString());