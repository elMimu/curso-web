const jurosSimples = function (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let montante = capitalInicial * (1.0 + taxaDeJuros*tempoDeAplicacao)
    return montante.toFixed(2)
}

const jurosComplexos = function (capitalInicial, taxadeJuros, tempoDeAplicacao) {
    let montante = capitalInicial * ((1.0 + taxadeJuros) ** tempoDeAplicacao)
    return montante.toFixed(2)
}

console.log(jurosSimples(1000, 0.1, 3))
console.log(jurosComplexos(1000, 0.1, 3))