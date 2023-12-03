const scanner = require ("prompt-sync")({sigint: true})

const palabra = scanner ("Dame una palabra: ")
const frase = palabra.toLowerCase() //la palabra la transforma SIEMPRE en minusculas
let vocales = 0

    for (let x = 0; x < frase.length; x++) {
        if (
                frase.charAt(x) === "a" || // que cuente cuantas veces el valor de "x" es = a
                frase.charAt(x) === "e" || 
                frase.charAt(x) === "i" || // las || significan o esto, o estos
                frase.charAt(x) === "o" || 
                frase.charAt(x) === "u" ) {
                    vocales = vocales + 1 // cada vocal equivale a 1 valor
                }   
        
    }
    console.log("La puta suma es " + vocales)