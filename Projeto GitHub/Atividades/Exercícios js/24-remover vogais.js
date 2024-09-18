function removerVogais(str) {
    const regex = /[aeiouAEIOU]/g;
    const resultado = str.replace(regex, '');
  
    return resultado;
  }
  const stringOriginal = "maria";
  const stringSemVogais = removerVogais(stringOriginal);
  console.log('String sem vogais:', stringSemVogais); 