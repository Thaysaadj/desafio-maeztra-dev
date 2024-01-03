
function anoComMaisPessoasTrabalhando(matriz) {
    const contadorAnos = {};

    // Percorre a matriz e incrementa o contador para cada ano entre x e y
    matriz.forEach(([anoInicio, anoAposentadoria]) => {
        for (let ano = anoInicio; ano <= anoAposentadoria; ano++) {
            contadorAnos[ano] = (contadorAnos[ano] || 0) + 1;
        }
    });

    // Encontra o(s) ano(s) com o maior número de pessoas trabalhando
    const anosComMaisPessoas = [];
    let maxPessoas = 0;

    for (const ano in contadorAnos) {
        const pessoasTrabalhando = contadorAnos[ano];

        if (pessoasTrabalhando > maxPessoas) {
            maxPessoas = pessoasTrabalhando;
            anosComMaisPessoas.length = 0;  // Limpa o array se encontrarmos um novo máximo
            anosComMaisPessoas.push(parseInt(ano));
        } else if (pessoasTrabalhando === maxPessoas) {
            anosComMaisPessoas.push(parseInt(ano));
        }
    }

    return anosComMaisPessoas;
}

// Exemplo de uso
const matrizAnos = [[1960, 2005], [1945, 2008], [1938, 1999]];
const resultado = anoComMaisPessoasTrabalhando(matrizAnos);
console.log("Os anos com mais pessias trabalhando foram ",resultado);  // Saída: [1960, 1961, ..., 2005]
