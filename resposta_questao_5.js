function calculoDeModosDistintos (numPessoas) {
    // Função para calcular o fatorial de um número
    const calcularFatoreal = (n) => (n <= 1 ? 1 : n * calcularFatoreal(n - 1 ))

    // Calcular o fatorial do número de pessoas
    const modosDistintos = calcularFatoreal(numPessoas)
    return modosDistintos
}


const numPessoas = 30
const result = calculoDeModosDistintos(numPessoas)

console.log(`Numero de modos distintos é ${result}`)