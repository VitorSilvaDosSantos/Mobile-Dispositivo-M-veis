//Exercicio 01
let str = "Vitor";
let maiuscula = str.toUpperCase();
let minuscula = str.toLowerCase();
let reversed = str.split('').reverse().join('');
let substituir = str.replace("Vitor","Silva");

console.log(maiuscula)
console.log(minuscula)
console.log(reversed);
console.log(substituir)


// Exercicio 02
const soma = 15 + 5;
console.log(soma);

const subtracao = 15 - 5;
console.log(subtracao);

const multiplicacao = 15 * 5;
console.log(multiplicacao)

const divisao = 15 / 5;
console.log(divisao);

let numero1 = 15;
let numero2 = 5;

if (numero1 > numero2) {
    console.log("15 é maior que 5");
} else {
    console.log("15 não é maior que 5");
}


// Exercicio 03
let idade = 17;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 65) {
    console.log("Idosa");
} else {
    console.log("Maior de idade");
}


// Exercicio 04
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Exercicio 05
function somar(numA, numB) {
    return numA + numB
}

console.log(somar(5,5))

let triplo = (numA, numB) => numA * numB
console.log(triplo(5, 3))

let quadrado = (numA, numB) => numA ** numB
console.log(quadrado(5, 2)) 

// Exercicio 06
let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
numeros.shift();

let maiorNumero = Math.max(...numeros);
let menorNumero = Math.min(...numeros);

console.log(numeros, maiorNumero, menorNumero);

// Exercio 07
let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

let maiusculas = frutas.map(fruta => fruta.toUpperCase());
let começaComA = frutas.filter(fruta => fruta.startsWith('A'));
let comprimento = frutas.map(fruta => fruta.length);

console.log(maiusculas, começaComA, comprimento);


// Exercicio 08

let pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };

pessoa.profissao = "Engenheiro"; 
delete pessoa.cidade; 

console.log(pessoa); 

// Exercicio 09
let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };
let { titulo, autor } = livro;
let exibirLivro = ({ titulo, autor }) => `${titulo} - ${autor}`;

console.log(exibirLivro(livro));

// Exercicio 10
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = numero.filter(n => n % 2 === 0);
let multiplicados = pares.map(n => n * 2);
let soma1 = multiplicados.reduce((total, n) => total + n, 0);

console.log(soma1);








