function encontraNumDuplicado(array) {
    const numVisto = {}
    const numDuplicados = []

    for (let i = 0; i < array.length; i++){
        const numAtual = array[i]

        //Se o número já foi visto, adiciona ao array de duplicados
        if(numVisto[numAtual] !== undefined){
            numDuplicados.push(numAtual)
        } else {
        // Determina se o número como visto
            numVisto[numAtual] = true
        }
    }

    return numDuplicados

}

const entradaArray = [4, 5, 44, 98, 4, 5, 44]
const result = encontraNumDuplicado(entradaArray)

console.log(result)