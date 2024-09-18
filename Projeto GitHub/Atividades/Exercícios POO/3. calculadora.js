class Calculator {
    /**
     * Adicionar dois numeros.
     * @param {number} a - O primeiro numero.
     * @param {number} b - O segundo numero.
     * @returns {number} A soma de a e b.
     */
    add(a, b) {
      return a + b;
    }
  
    /**
     * Subtraia dois numeros.
     * @param {number} a - O primeiro numero.
     * @param {number} b - The second number.
     * @returns {number} A diferença de a e b. 
     */
    subtract(a, b) {
      return a - b;
    }
  
    /**
     * Multiplique dois numeros.
     * @param {number} a - O primeiro numero.
     * @param {number} b - O segundo numero.
     * @returns {number} O produto de a e b.
     */
    multiply(a, b) {
      return a * b;
    }
  
    /**
     * Divida dois numeros.
     * @param {number} a - O primeiro numero.
     * @param {number} b - O segundo numero.
     * @returns {number} O quaciente do diviendo é dividido por b.
     */
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  }
  
  // Exemplo:
  let calculator = new Calculator();
  console.log(calculator.add(2, 3)); 
  console.log(calculator.subtract(5, 2)); 
  console.log(calculator.multiply(4, 5)); 
  console.log(calculator.divide(10, 2)); 