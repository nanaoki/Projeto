function filtrarPalavras(substring, array) {
    return array.filter(palavra => palavra.includes(substring));
  }
  const palavraBuscada = 'cat';
  const palavrasArray = ['catalog', 'cat', 'catch', 'dog', 'catalogue'];
  
  const palavrasFiltradas = filtrarPalavras(palavraBuscada, palavrasArray);
  console.log('Palavras filtradas:', palavrasFiltradas);
  
  