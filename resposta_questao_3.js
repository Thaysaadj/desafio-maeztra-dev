function sequenciaValidaSinais(string){
    const sinais = []
    const sinaisAbertos = { '{' : '}', '[' : ']', '(' : ')'}

    for (let i = 0; i < string.length; i++) {
        const strAtual = string[i]

        if(sinaisAbertos[strAtual]){
            // Se o caractere é uma abertura, coloca em sinais
            sinais.push(strAtual)
        }else {
             // Se o caractere é um fechamento
            const ultimoAberto = sinais.pop()

            // Verifica se o caractere de fechamento corresponde ao último caractere de abertura
            if(sinaisAbertos[ultimoAberto] !== strAtual){
                return false
            }
        }
    }

    return sinais.length === 0
}

console.log(sequenciaValidaSinais('{ [ () () {} [] ] {} }'))
console.log(sequenciaValidaSinais("{ } [ ] ( )"));