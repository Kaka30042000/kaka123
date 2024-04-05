function encontrarMenorMaior(numeros) {
    let menor = numeros[0];
    let maior = numeros[0];
    for (const numero of numeros) {
      if (numero < menor) {
        menor = numero;
      }
      if (numero > maior) {
        maior = numero;
      }
    }
    return [menor, maior];
  }
  
  const numeros = [15, 8, 90, 75, 102, 6, 2];
  const [menor, maior] = encontrarMenorMaior(numeros);
  
  console.log(`Menor número: ${menor}`);
  console.log(`Maior número: ${maior}`);
  