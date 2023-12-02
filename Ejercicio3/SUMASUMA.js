const scanner = require ("prompt-sync")({sigint: true})

let numero1 
let cancelar = false
let numInput 
let suma = 0

while (!cancelar) {
    numInput = scanner ("Dame tu puto numero ")
if (Number(numInput)) {
    numero1 = Number(numInput)
    suma += numero1 //el += es para que vuelva a sumar el numero con el anterior
} else if (numInput !== "cancelar") {
    console.log("Dame un puto numero imbecil de mierda")
} else {cancelar = true }

} 
    console.log ("La suma es: " + suma)
