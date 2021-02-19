{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera)
            } 
        } 
    } 
}

console.log(sera)
// Variavel tipo 'var' dentro de um bloco de código que não seja uma função
// ficará visível também fora desse bloco de código 

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local)

