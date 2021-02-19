 const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

 // Sem callback

 const notasBaixas1 = []

 for(let i in notas) {
     if (notas[i] < 7) {
         notasBaixas1.push(notas[i])
     }
 }

 // Com Callback

 console.log(notasBaixas1)

 const notasBaixas2 = notas.filter(function (nota) {
     return nota < 7
 })


 console.log(notasBaixas2)

 const notasBaixas3 = notas.filter(nota => nota < 7)
 console.log(notasBaixas3)

 // Mais elegante:

 //const notasMenorQueSete = nota => nota < 7
 //const notasBaixas4 = notas.filter(notasMenorQueSete)
 //console.log(notasBaixas4)