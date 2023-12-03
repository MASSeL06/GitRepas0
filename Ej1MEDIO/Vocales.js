const scanner = require ("prompt-sync")({sigint: true})

const palabra = scanner ("Dame una palabra: ")
const frase = palabra.toLowerCase() //la palabra la transforma SIEMPRE en minusculas
let vocales = 0

    for (let x = 0; x < frase.length; x++) {
        if (
                frase.charAt(x) === "a" || 
                frase.charAt(x) === "e" || 
                frase.charAt(x) === "i" || 
                frase.charAt(x) === "o" || 
                frase.charAt(x) === "u" ) {
                    vocales = vocales + 1
                }   
        
    }
    console.log("La puta suma es " + vocales)
