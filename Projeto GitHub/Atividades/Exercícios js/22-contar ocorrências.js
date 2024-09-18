function contarOcorrencias(caractere, string) {
    if (caractere.length !== 1) {
      throw new Error('O parâmetro caractere deve ser um único caractere.');
    }
    const partes = string.split(caractere);
    return partes.length - 1;
  }
  const caractere = 'a';
  const string = 'JavaScript é uma linguagem de programação com vários tipos de caracteres.';
  const quantidadeOcorrencias = contarOcorrencias(caractere, string);
  console.log(`O caractere '${caractere}' aparece ${quantidadeOcorrencias} vez(es) na string.`);
  