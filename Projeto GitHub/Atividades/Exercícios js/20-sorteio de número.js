function verificarNumero(parametro) {
    
    if (parametro < 1 || parametro > 10) {
      return 'O número fornecido deve estar entre 1 e 10.';
    }
    const numeroSorteado = Math.floor(Math.random() * 10) + 1;
    if (parametro === numeroSorteado) {
      return `Parabéns! O número sorteado foi o ${numeroSorteado}.`;
    } else {
      return `Que pena! O número sorteado foi o ${numeroSorteado}.`;
    }
  }
  
  const numeroEntrada = 7; 
  const resultado = verificarNumero(numeroEntrada);
  console.log(resultado); 
  