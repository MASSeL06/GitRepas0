const scanner = require ("prompt-sync")({sigint: true})

const Nombre = scanner ("Escribe tu nombre:")

const Edad = scanner ("Escribe tu edad:")
if (Edad => 18) { 
    console.log ("Felicidades" + Nombre + "Puedes conducir")
} else {
    console.log ("Lo siento" + Nombre + "no puedes conducir")
} 