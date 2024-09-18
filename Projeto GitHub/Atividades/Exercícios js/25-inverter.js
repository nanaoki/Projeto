function inverterChavesValores(objeto) {
    const objetoInvertido = {};
    for (const [chave, valor] of Object.entries(objeto)) {
      objetoInvertido[valor] = chave;
    }
    return objetoInvertido;
  }
  const objetoOriginal = {
    nome: 'João',
    idade: '30',
    cidade: 'São Paulo'
  };
  const objetoInvertido = inverterChavesValores(objetoOriginal);
  console.log('Objeto invertido:', objetoInvertido);
  
  