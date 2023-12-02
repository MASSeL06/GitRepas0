const scanner = require ("prompt-sync")({sigint: true})

let palabra 
let palabrota = scanner ("Dame una palabra, gilipollas ")
let concadena = ""

while (palabrota !== "cancelar") {
    if (String(palabrota)) {
        palabra = String(palabrota)
        concadena = (concadena + " " + palabra) //como concadena esta vacio, se pone al principio para que empieze asi SIEMPRE (como en ej3basic

    } else {
        console.log("Dame una puta letra analfalbeltol")
    } 
    palabrota = scanner ("Dame una palabra, gilipollas ")
}
 console.log(concadena)

