class Retângulo {
    #base
    #height
    constructor(base, height) {
      this.#base = base;
      this.#height = height;
    }
    get base() {
      return this.#base;
    }
    set base(base) {
      this.#base = base;
    }
    get height() {
      return this.#height;
    }
    set height(height) {
      this.#height = height;
    }
    calculateArea() {
      return this.#base * this.#height;
    }
    calculatePerimeter() {
      return 2 * (this.#base + this.#height);
    }
  }
  let retângulo = new Retângulo(4, 5);
  console.log(retângulo.calculateArea());
  console.log(retângulo.calculatePerimeter());
  retângulo.base = 6;
  retângulo.height = 3;
  console.log(retângulo.calculateArea());
  console.log(retângulo.calculatePerimeter());