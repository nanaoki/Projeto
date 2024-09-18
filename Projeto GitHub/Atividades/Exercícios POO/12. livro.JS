
class Livro {
    #titulo
    #autor
    #editora
    #anoPublicacao
    constructor(titulo, autor, editora, anoPublicacao) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#editora = editora;
        this.#anoPublicacao = anoPublicacao;
    }
    get titulo() {
        return this.#titulo;
    }
    set titulo(titulo) {
        this.#titulo = titulo;
    }
    get autor() {
        return this.#autor;
    }
    set autor(autor) {
        this.#autor = autor;
    }
    get editora() {
        return this.#editora;
    }
    set editora(editora) {
        this.#editora = editora;
    }
    get anoPublicacao() {
        return this.#anoPublicacao;
    }
    set anoPublicacao(anoPublicacao) {
        this.#anoPublicacao = anoPublicacao;
    }
    toString() {
        return `Livro: ${this.titulo}\nAutor: ${this.autor}\nEditora: ${this.editora}\nAno de Publicação: ${this.anoPublicacao}\n (no Brasil)`
    }
    }
let livro = new Livro('Harry Potter', 'J.K. Rowling', 'Rocco', '2000')
console.log(livro.toString())