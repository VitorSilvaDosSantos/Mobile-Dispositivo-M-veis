console.log("TESTE");

// Comentário de uma linha

/*
Comentário em
bloco
*/

// Variáveis
const nome = "Vitor Santos";
let idade = 27;
const maiorIdade = true;

console.log(nome);
console.log(idade);
console.log("É maior de idade? ", maiorIdade);

// nome = "Teste"; // Não pode reatribuir uma constante
idade = 19;
console.log(idade);

// Operadores aritméticos
const soma = 2 + 2;
const subtracao = 2 - 2;
const multiplicacao = 2 * 2;
const divisao = 2 / 2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

const resto = 3 % 2; // Corrigido o nome da variável
let numero = 4;

const incremento = ++numero; // Corrigido para pré-incremento para refletir a mudança imediatamente
console.log("INCREMENTO ->", incremento);

const decremento = --numero; // Corrigido para pré-decremento
console.log("DECREMENTO ->", decremento);

console.log("RESTO ->", resto); // Agora `resto` está definido corretamente

let a = 3;
a %= 2;
console.log(a);

// Operadores de comparação
const igual = 15 == "10";
console.log(igual);
const estritamenteIgual = 10 === "10";
console.log(estritamenteIgual);

// Estrutura de controle


if (idade >= 18) {
    console.log("Maior Idade");
}

// Estrutura condicional com `else`
if (idade >= 18) {
    console.log("Maior Idade");
} else {
    console.log("Menor Idade");
}

// Estrutura condicional com `else if`
if (idade >= 18) {
    console.log("Maior Idade");
} else if (idade < 18) {
    console.log("Menor Idade");
} else {
    console.log("Valor Inválido");
}

//Operador Ternario
const checkMaiorDeIdade = idade >= 18 ? "Maior de idade" : "Menor de Idade";
console.log(checkMaiorDeIdade)
