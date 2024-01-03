
function verificaSequenciaOrdenada(numero) {
    const strNumero = numero.toString();
    const tamanho = strNumero.length;

    // Verifica sequência crescente
    const sequenciaCrescente = Array.from({ length: tamanho - 1 }, (_, i) => parseInt(strNumero[i]) + 1 === parseInt(strNumero[i + 1]) || parseInt(strNumero[i]) === parseInt(strNumero[i + 1])).every(Boolean);

    // Verifica sequência decrescente
    const sequenciaDecrescente = Array.from({ length: tamanho - 1 }, (_, i) => parseInt(strNumero[i]) - 1 === parseInt(strNumero[i + 1]) || parseInt(strNumero[i]) === parseInt(strNumero[i + 1])).every(Boolean);

    return sequenciaCrescente || sequenciaDecrescente;
}

console.log(verificaSequenciaOrdenada(12345678))
console.log(verificaSequenciaOrdenada(12222333))
console.log(verificaSequenciaOrdenada(15823))