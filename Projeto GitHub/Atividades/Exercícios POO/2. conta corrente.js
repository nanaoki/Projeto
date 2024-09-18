class contaCorrente {
  #accountNumber
  #balance
    constructor(accountNumber, balance) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
    }
  
    get balance() {
      return this.#balance;
    }
    set balance(balance) {
      this.#balance = balance;
    }

    deposit(amount) {
      this.#balance += amount;
    }
    withdraw(amount) {
      if (amount > this.#balance) {
        throw new Error("Saldo insuficiente");
      }
      this.#balance -= amount;
    }
    toString() {
      return `Número da conta: ${this.#accountNumber}\nSaldo: R$ ${this.#balance.toFixed(2)}`;
    }
  }
  let conta = new contaCorrente('1234567890', 1000.0);
  console.log(conta.toString());
  conta.deposit(500.0);
  console.log(conta.toString());
  conta.withdraw(200.0);
  console.log(conta.toString());
