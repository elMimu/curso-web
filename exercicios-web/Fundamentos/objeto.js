// objeto em javaScript é uma coleção de chave e valor
// nome do atributo e passa um valor pra ele

const prod1 = {} // forma literal, objeto vazio
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{"nome": "Camisa Polo", "preco": 79.90 }' // json -> formato textual
// forma de intercomunicação entre sistemas


console.log(prod2)