const scanner = require ("prompt-sync")({sigint: true})

const numeroAleatorio = Math.round (Math.random()*100) // mathround -> redondear para q no haya decimales, mathrandom para q vaya del () (0) a 100
console.log (numeroAleatorio)

do { const numUsuario = scanner ("Dame tu numero de mierda: ")
    if (numUsuario == numeroAleatorio) {
        
        console.log("Has acertado")
        break // salir del programa
    } else if (numUsuario < numeroAleatorio) {
        
        console.log("Te has quedado corto")
    } else if (numUsuario > numeroAleatorio) {
        console.log ("Te has pasado broh")
    } else if (numUsuario != Number) {
        console.log ("Eres subnormal")
    }
    
} while (true);