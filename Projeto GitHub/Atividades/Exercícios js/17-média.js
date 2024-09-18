function calcularMedia(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    const soma = numeros.reduce((total, numero) => total + numero, 0);
      return soma / numeros.length;
  }
  
  const numeros = [10, 20, 30, 30, 10];
  const media = calcularMedia(numeros);
  console.log('Média dos números:', media);
  