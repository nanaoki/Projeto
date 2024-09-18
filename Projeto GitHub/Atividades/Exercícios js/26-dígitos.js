function filtrarPorQuantidadeDeDigitos(array, quantidadeDeDigitos) {
    return array.filter(num => {
      const numString = Math.abs(num).toString();
      return numString.length === quantidadeDeDigitos;
    });
  }
  const numerosArray = [12, 345, 6789, 12345, -123, 1000];
  const quantidadeDeDigitos = 4;
  
  const numerosFiltrados = filtrarPorQuantidadeDeDigitos(numerosArray, quantidadeDeDigitos);
  console.log('Números com a quantidade de dígitos especificada:', numerosFiltrados);
  
  