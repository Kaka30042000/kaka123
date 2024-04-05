function ordenarFrascos(frascos) {
    for (let i = 0; i < frascos.length - 1; i++) {
      let menorIndice = i;
      for (let j = i + 1; j < frascos.length; j++) {
        if (frascos[j] < frascos[menorIndice]) {
          menorIndice = j;
        }
      }
  
      let aux = frascos[i];
      frascos[i] = frascos[menorIndice];
      frascos[menorIndice] = aux;
    }
  
    return frascos;
  }
  
  let frascos = [12, 5, 23, 17, 8, 14, 3, 19];
  
  let frascosOrdenados = ordenarFrascos(frascos);
  
  console.log("Frascos ordenados:", frascosOrdenados);
  
  console.log("Segredo revelado: A chave para a imortalidade está escondida no frasco número", frascosOrdenados[0]);
  
  