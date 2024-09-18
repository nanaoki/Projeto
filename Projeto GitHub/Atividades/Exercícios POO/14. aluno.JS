class Aluno {
    #nome
    #matricula
    #curso
    constructor(nome, matricula, curso) {
        this.#nome = nome;
        this.#matricula = matricula;
        this.#curso = curso;
    }
    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    get matricula() {
        return this.#matricula;
    }
    set matricula(matricula) {
        this.#matricula = matricula;
    }
    get curso() {
        return this.#curso;
    }
    set curso(curso) {
        this.#curso = curso;
    }
    toString() {
        return `Nome: ${this.#nome}\nMatricula: ${this.#matricula}\nCurso: ${this.#curso}.`
    }
}
let aluno = new Aluno('Juliana', '1584', 'informática');
console.log(aluno.toString())