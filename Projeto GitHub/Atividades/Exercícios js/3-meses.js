function meses(numeroMes) {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
  
    if (numeroMes < 1 || numeroMes > 12) {
      return "Número do mês invalido. Por favor insira um número entre 1 e 12.";
    }
  
    return meses[numeroMes - 1];
  }

  console.log(meses(2))
  console.log(meses(13))
  console.log(meses(5))