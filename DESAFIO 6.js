function calcularFatorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  const numero = 12;
  const fatorial = calcularFatorial(numero);
  
  console.log(`O fatorial de ${numero} é ${fatorial}`);
  