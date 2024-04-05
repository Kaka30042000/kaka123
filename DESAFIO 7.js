
const precos = [2.50, 3.75, 1.99];

const total = precos.reduce((soma, preco) => soma + preco, 0);

console.log(`Valor total da compra: R$${total.toFixed(2)}`);

