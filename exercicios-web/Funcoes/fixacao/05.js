function valorFormatoMoeda(x) {
    valorEmReais = `R$ ${x.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

valorFormatoMoeda(0.1 + 0.2)
