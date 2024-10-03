const readline = require('readline');

// Criação da interface para receber a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário sobre a string
rl.question("Digite uma string para verificar a presença da letra 'a': ", input => {
    // Converte a string para minúsculas para facilitar a contagem
    const lowerCaseInput = input.toLowerCase();
    
    // Contar a quantidade de 'a'
    const count = (lowerCaseInput.match(/a/g) || []).length; // Usa expressão regular para contar as ocorrências

    // Verifica se a letra 'a' está presente
    const exists = count > 0;

    // Resultado
    if (exists) {
        console.log(`A letra 'a' está presente na string e ocorre ${count} vez(es).`);
    } else {
        console.log("A letra 'a' não está presente na string.");
    }

    rl.close(); // Fecha a interface
});


// OBS: Para executar o código digite node questao1.js no terminal!