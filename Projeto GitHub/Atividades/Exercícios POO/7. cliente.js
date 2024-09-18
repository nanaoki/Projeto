class Cliente {
    #name
    #cpf
    #birthDate
    #address
    #email
    #occupation
    #annualIncome
    #educationlevel
    #relatorio
    constructor(name, cpf, birthDate, address, email, occupation, annualIncome, educationlevel) {
        this.#name = name;
        this.#cpf = cpf;
        this.#birthDate = birthDate;
        this.#address = address;
        this.#email = email;
        this.#occupation = occupation;
        this.#annualIncome = annualIncome;
        this.#educationlevel = educationlevel;
    }
    relatorio() {
        return `Nome: ${this.#name}\nCPF: ${this.#cpf}\nData de nascimento: ${this.#birthDate}\nEndereço: ${this.#address}\nE-mail: ${this.#email}\nOcupação: ${this.#occupation}\nRenda anual: ${this.#annualIncome}\nNível de educação: ${this.#educationlevel}`
    }
    get relatorio() {
        return this.#relatorio
    }
    set relatorio(relatorio) {
        this.relatorio = relatorio
    }
    get name() {
        return this.#name
    }
    set name(name) {
        this.#name = name
    }
    get cpf () {
        return this.#cpf
    }
    set cpf(cpf) {
        this.#cpf = cpf
    }
    get birthDate() {
        return this.#birthDate
    }
    set birthDate(birthDate) {
        this.#birthDate = birthDate
    }
    get address() {
        return this.#address
    }
    set address(address) {
        this.#address = address
    }
    get email() {
        return this.#email
    }
    set email(email) {
        this.#email = email
    }
    get occupation() {
        return this.#occupation
    }
    set occupation(occupation) {
        this.#occupation = occupation
    }
    get annualIncome() {
        return this.#annualIncome
    }
    set annualIncome(annualIncome) {
        this.#annualIncome = annualIncome
    }
    get educationlevel() {
        return this.#educationlevel
    }
    set educationlevel(educationlevel) {
        this.#educationlevel = educationlevel
    }
    toString() {
         return `Nome: ${this.#name}\nCPF: ${this.#cpf}\nData de nascimento: ${this.#birthDate}\nEndereço: ${this.#address}\nE-mail: ${this.#email}\nOcupação: ${this.#occupation}\nRenda anual: ${this.#annualIncome}\nNível de educação: ${this.#educationlevel}`
    }
}
let cliente = new Cliente('João', 12345678934, '14/2','rua da rio', 'joãozinhogameplays@gmail.com', 'gamer profissional', '15.000', 'pós graduação')
console.log(cliente.toString())