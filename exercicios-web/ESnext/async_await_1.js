function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornaValorRapido() {
    return 20
}

/*
esperarPor()
    .then(() => console.log('Executando promisse 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 3...'))
*/
async function executar() {
    let valor = await retornaValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executar().then(console.log)