const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

const chineseWomen = function (obj) {
    if(obj.genero == 'F' && obj.pais == 'China') {
        return obj
    }
}

const menorSalarios = function (acumulador, atual) {
    if(acumulador.salario < atual.salario) return acumulador
    else return atual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const chinesas = funcionarios.filter(chineseWomen)
    //console.log(chinesas)

    console.log(chinesas.reduce(menorSalarios))
})
