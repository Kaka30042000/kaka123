function contarMaiusculas(texto) {
    let numeroMaiusculas = 0;
    for (const letra of texto) {
      if (letra.toUpperCase() === letra) {
        numeroMaiusculas++;
      }
    }
    return numeroMaiusculas;
  }
  
  const texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
  const numeroMaiusculas = contarMaiusculas(texto);
  
  console.log(`Número de letras maiúsculas: ${numeroMaiusculas}`);
  