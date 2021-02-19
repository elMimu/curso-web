Array.prototype.Map2 = function(callback) {
    let vetor = []

    for(let i = 0; i < this.length; i++){
        vetor.push(callback(this[i]))
    }

    return vetor
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

let resultado = carrinho.Map2(JSON.parse).Map2(a => a.preco)
console.log(resultado)


//retornar um ararray usando map apenas com os precos