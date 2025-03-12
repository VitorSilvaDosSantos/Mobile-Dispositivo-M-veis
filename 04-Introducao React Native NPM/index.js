import {TabelaIMC, calcularIMC,} from "./CalculadoraIMC.js"

console.log("Projeto Rodando")

console.log(">>>TABELA IMC<<<")
console.table(TabelaIMC)

const peso = 82
const altura = 1.78

const resultado = calcularIMC(peso, altura)


console.log("Resultado do IMC")
console.log(`IMC: ${resultado.toFixed(2)}`)

// Importando lib momento e usando
import moment, {  } from "moment";

const hoje = moment().locale('pt-br')

console.log(hoje.format('DD/MM/yyyy'))

