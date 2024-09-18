function melhorDesempenho(estudantes) {
    let melhorAluno = null;
    let maiorMedia = -Infinity; 
  
    
    for (const [nome, notas] of Object.entries(estudantes)) {
      
      const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
      const media = somaNotas / notas.length;
  
      
      if (media > maiorMedia) {
        maiorMedia = media;
        melhorAluno = { nome, media };
      }
    }
  
    
    return melhorAluno;
  }
  
  
  const estudantes = {
    João: [8, 9, 7],
    Maria: [10, 9, 8],
    Pedro: [7, 6, 8],
    Ana: [9, 10, 9]
  };
  
  const alunoMelhorDesempenho = melhorDesempenho(estudantes);
  console.log('Aluno com o melhor desempenho:', alunoMelhorDesempenho);
  
  