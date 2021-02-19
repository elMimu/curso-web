function tratarErroELancar(erro) {
    // throw new Error{'...'}
    // throw 10
    // throw true
    // throw 'msg'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase())
    } catch(e) {
        tratarErroELacar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome = 'Roberto' }
imprimirNomeGritado(obj)

// Evite mostrar pro usuário msg estruturais