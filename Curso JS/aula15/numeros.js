var numeros = [8 , 1 , 7, 4, 2 , 9 ]

/*
for (pos =0; pos<numeros.length; pos++) {
    console.log(`a posição ${pos} tem o numero ${numeros[pos]}`)
}

for (var pos in numeros) {
    console.log(numeros[pos])
}
*/

let pos = numeros.indexOf(7)
console.log(pos)
let pos1 = numeros.indexOf(21)

if (pos1 == -1) {
    console.log(`o Número não foi encontrado`)
} else {
    console.log(`esse é o número`)
}