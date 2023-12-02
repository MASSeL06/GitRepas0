const scanner = require ("prompt-sync")({sigint: true})

const Nota = scanner ("Introduce tu mierda de nota: ")

    if ( Nota < 3) {
        console.log ("Menos q una mierda")
    } else if (Nota >= 3 && Nota < 5) {
        console.log ("Insuficiente")
    } else if (Nota >= 5 && Nota < 6) {
        console.log ("Suficiente")
    } else if (Nota >= 6 && Nota < 7 ) {
        console.log ("Bien")
    } else if (Nota >= 7 && Nota < 9 ) {
        console.log ("N0table")
    } else if (Nota >= 9 && Nota <= 10 ) {
        console.log ("Eres el puto amo")
    } 