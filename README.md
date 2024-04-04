public class Loteria {

    public static void main(String[] args) {
        int menorNumero = Integer.MAX_VALUE; // Começa com o maior valor possível
        int maiorNumero = Integer.MIN_VALUE; // Começa com o menor valor possível

        // Lista de números da Tais
        int[] numeros = {15, 8, 90, 75, 102, 6, 2};

        // Percorre a lista de números
        for (int numero : numeros) {
            // Verifica se o número atual é menor que o menor número encontrado até agora
            if (numero < menorNumero) {
                menorNumero = numero;
            }

            // Verifica se o número atual é maior que o maior número encontrado até agora
            if (numero > maiorNumero) {
                maiorNumero = numero;
            }
        }

        // Exibe o menor e o maior número
        System.out.println("Menor número: " + menorNumero);
        System.out.println("Maior número: " + maiorNumero);
    }
}
