function tipoTriangulo(a, b, c) {
    if(a == b && b == c) console.log('Equilátero')
    else if(a != b && b != c && c != a) console.log('Escaleno')
    else console.log('Isósceles')
}

tipoTriangulo(3, 4, 5)
tipoTriangulo(3, 2, 3)
tipoTriangulo(3, 3, 2)
tipoTriangulo(2, 3, 3)
tipoTriangulo(3, 3, 3)