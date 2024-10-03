const readline = require('readline');

// Função que verifica se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1;

    // 0 e 1 pertencem à sequência de Fibonacci
    if (num === 0 || num === 1) return true;

    // Calcular a sequência até que o último número seja maior ou igual ao número informado
    while (b < num) {
        let temp = b;
        b = a + b; // Próximo número na sequência
        a = temp; // Atualiza a variável "a"
    }

    return b === num; // Retorna verdadeiro se b é igual ao número informado
}

// Criação da interface para receber a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntar ao usuário
rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (input) => {
    let numero = parseInt(input); // Converte a entrada para um número inteiro

    // Verifica se o número pertence à sequência
    const pertence = isFibonacci(numero);
    
    // Exibe o resultado
    console.log(`O número ${numero} ${pertence ? "pertence" : "NÃO pertence"} à sequência de Fibonacci.`);
    
    rl.close(); // Fecha a interface
});


// OBS: Para executar o código digite node questao1.js no terminal!
