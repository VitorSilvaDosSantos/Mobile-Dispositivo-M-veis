// Sistema de Módulos (ES) -> Exportando

export const TabelaIMC = [
    {limite: 18.5, classificacao: "Magresa"},
    {limite: 24.9, classificacao: "Normal"},
    {limite: 29.9, classificacao: "DSobrepeso"},
    {limite: 30.9, classificacao: "Obesidade grau 1"},
    {limite: 35.9, classificacao: "Obesidade grau 2"},
    {limite: 40.9, classificacao: "Obesidade grau 3"},
]


export const calcularIMC = (peso, altura) => {
return peso / (altura * altura)
}