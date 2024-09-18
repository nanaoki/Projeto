class Disciplina {
    #nome
    #codigo
    #cargaHoraria
    constructor(nome, codigo, cargaHoraria) {
        this.#nome = nome;
        this.#codigo = codigo;
        this.#cargaHoraria = cargaHoraria;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getCodigo() {
        return this.#codigo;
    }

    setCodigo(codigo) {
        this.#codigo = codigo;
    }

    getCargaHoraria() {
        return this.#cargaHoraria;
    }

    setCargaHoraria(cargaHoraria) {
        this.#cargaHoraria = cargaHoraria;
    }
    toString() {
        return `Disciplina: ${this.#nome}\nCódigo: ${this.#codigo}\nCarga Horária: ${this.#cargaHoraria}`
    }
}
let disciplina = new Disciplina('Artes', '6', '2 horas por dia');
console.log(disciplina.toString());