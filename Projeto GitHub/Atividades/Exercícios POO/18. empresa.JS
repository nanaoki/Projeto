class Empresa {
    #nome
    #cnpj
    #endereco
    #dataDeCriacao
    constructor(nome, cnpj, endereco, dataDeCriacao) {
        this.#nome = nome;
        this.#cnpj = cnpj;
        this.#endereco = endereco;
        this.#dataDeCriacao = dataDeCriacao;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get cnpj() {
        return this.#cnpj;
    }

    set cnpj(cnpj) {
        this.#cnpj = cnpj;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(endereco) {
        this.#endereco = endereco;
    }

    get dataDeCriacao() {
        return this.#dataDeCriacao;
    }

    set dataDeCriacao(dataDeCriacao) {
        this.#dataDeCriacao = dataDeCriacao;
    }
    toString() {
        return `Nome da empresa: ${this.#nome}\n CNPJ: ${this.#cnpj}\n Endereço: ${this.#endereco}\n Data de criação: ${this.#dataDeCriacao}`
    }
}
let empresa = new Empresa('Brendam', '837837924', 'Rua Rio Palma', '10/10/2022');
console.log(empresa.toString());