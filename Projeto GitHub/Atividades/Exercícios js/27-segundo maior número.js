function segundoMaiorNumero(array) {
    const numerosUnicos = [...new Set(array)];
    if (numerosUnicos.length < 2) {
      throw new Error('O array deve conter pelo menos dois números distintos.');
    }
    numerosUnicos.sort((a, b) => b - a);
  
    return numerosUnicos[1];
  }
  
  
  const numerosArray = [10, 5, 8, 10, 7, 5, 12, 8];
  const segundoMaior = segundoMaiorNumero(numerosArray);
  console.log('O segundo maior número é:', segundoMaior);
  