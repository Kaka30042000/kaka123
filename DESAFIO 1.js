
function calcularMedia(notas) {
   
    let somaNotas = 0;
    for (let nota of notas) {
      somaNotas += nota;
    }
  
    let media = somaNotas / notas.length;
  
    return media.toFixed(2);
  }
  
  let notasAline = [8, 9, 7];

  let mediaAline = calcularMedia(notasAline);
  
  console.log(`A média final da Aline é: ${mediaAline}`);