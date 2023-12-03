const scanner = require ("prompt-sync")({sigint: true})

const numero = scanner ("Dime un putojodidohijuefdetuputamadfre numero: ")

let concadena = 0

if (!Number(numero)) {
    console.log ("No entiendo...") 
    const numero = scanner ("Dime un putojodidohijuefdetuputamadfre numero: ")

} else if (Number(numero)) {
    concadena = concadena + numero
}