const scanner = require ("prompt-sync")({sigint: true})

const Nombre = scanner ("Escribe tu nombre:")

const Edad = scanner ("Escribe tu edad:")
if (Number(Edad)) {
    if (Edad >= 18) { 
        console.log ("Felicidades " + Nombre + " puedes conducir")
    } else {
        console.log ("Lo siento " + Nombre + " no puedes conducir")
    } 
}
else {
    console.log ("Oye, " + Nombre + ", escribe un numero, gilipollas")
}