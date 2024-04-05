function isPrime(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function separarNumerosPrimos(numeros) {
    let numerosPrimos = [];
    for (let numero of numeros) {
      if (isPrime(numero)) {
        numerosPrimos.push(numero);
      }
    }
  
    return numerosPrimos;
  }
  
  const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
  
  const numerosPrimos = separarNumerosPrimos(numeros);
  
  console.log("Números primos:", numerosPrimos);
  
  console.log("Quantidade de campos primos:", numerosPrimos.length);
  
  