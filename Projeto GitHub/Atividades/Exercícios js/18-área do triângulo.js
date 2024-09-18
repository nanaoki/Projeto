function calcularAreaTriangulo(base, altura) {
    const area = (base * altura) / 2;
     
    return parseFloat(area.toFixed(2));
  }
  
  const base = 5;
  const altura = 10;
  const areaTriangulo = calcularAreaTriangulo(base, altura);
  console.log('Área do triângulo:', areaTriangulo); 