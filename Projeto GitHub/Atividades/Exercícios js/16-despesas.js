function calcularTotalDespesas(produtos) {
    
    return produtos.reduce((total, produto) => {
     
      return total + produto.preço;
    }, 0); 
  }
  
  
  const despesas = [
    { nome: 'Café', categoria: 'Alimentação', preço: 3.00 },
    { nome: 'Revista', categoria: 'Lazer', preço: 9.00 },
    { nome: 'Transporte', categoria: 'Transporte', preço: 8.00 }
  ];
  
  const totalDespesas = calcularTotalDespesas(despesas);
  console.log('Total das despesas:', totalDespesas);
  