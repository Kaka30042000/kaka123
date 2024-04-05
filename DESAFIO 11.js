function calcularIdade(dataNascimento) {
    const dataNascimentoObj = new Date(dataNascimento);
    const dataHoje = new Date();
    let idade = dataHoje.getFullYear() - dataNascimentoObj.getFullYear();
    if (dataHoje.getMonth() < dataNascimentoObj.getMonth()) {
      idade--;
    } else if (dataHoje.getMonth() === dataNascimentoObj.getMonth() && dataHoje.getDate() < dataNascimentoObj.getDate()) {
      idade--;
    }
    return idade;
  }
  
  const dataNascimento = "1990-01-01";
  const idade = calcularIdade(dataNascimento);
  
  console.log(`Idade: ${idade}`);
  