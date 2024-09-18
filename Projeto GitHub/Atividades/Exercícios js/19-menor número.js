function encontrarMenorNumero(numeros) {
    
    if (numeros.length === 0) {
      return 'O array está vazio.';
    }
  
    
    return Math.min(...numeros);
  }

  const arrayDeNumeros = [75, 12, 9, 28, 3];
  const menorNumero = encontrarMenorNumero(arrayDeNumeros);
  console.log('O menor número é:', menorNumero); 
  