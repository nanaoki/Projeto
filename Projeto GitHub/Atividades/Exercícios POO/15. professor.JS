class Professor {
    #nome
    #departamento
    #titulacao
    constructor(nome, departamento, titulacao) {
        this.#nome = nome;
        this.#departamento = departamento;
        this.#titulacao = titulacao;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getDepartamento() {
        return this.#departamento;
    }

    setDepartamento(departamento) {
        this.#departamento = departamento;
    }

    getTitulacao() {
        return this.#titulacao;
    }

    setTitulacao(titulacao) {
        this.#titulacao = titulacao;
    }
    toString() {
        return `Nome: ${this.#nome}\nDepartamento: ${this.#departamento}\nTitulação: ${this.#titulacao}`
    }
}
let professor = new Professor('Lucas', 'educacional', 'formado em artes')
console.log(professor.toString())