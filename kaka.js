// Função para calcular a média
function calcularMedia(notas) {
    // Soma todas as notas
    let somaNotas = 0;
    for (let nota of notas) {
      somaNotas += nota;
    }
  
    // Calcula a média dividindo a soma pelo número de notas
    let media = somaNotas / notas.length;
  
    // Retorna a média formatada com duas casas decimais
    return media.toFixed(2);
  }
  
  // Armazena as notas da Aline em um array
  let notasAline = [8, 9, 7];
  
  // Calcula a média das notas da Aline
  let mediaAline = calcularMedia(notasAline);
  
  // Exibe o resultado da média
  console.log(`A média final da Aline é: ${mediaAline}`);
