function contarPalavras(frase) {
    const palavras = frase.split(' ');
    const numeroDePalavras = palavras.filter(palavra => palavra.length > 0).length;
    return numeroDePalavras;
  }
  const frase = "Esta é uma frase de exemplo";
  const quantidadePalavras = contarPalavras(frase);
  console.log('Número de palavras:', quantidadePalavras); 