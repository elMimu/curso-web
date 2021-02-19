const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// Ter em mente que a funcão carrega o escopode onde foi declarada
// Não no local de execução, mas onde foi definida