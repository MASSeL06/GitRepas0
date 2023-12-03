const scanner = require ("prompt-sync")({sigint: true})

const año = scanner ("Dime un año: ")

if (año %400 == 0 || año %4 == 0) {
    console.log ("Es un outo año puto bisisestos")
} else {
    console.log ("No loes, pero tu eres imbecil")
}
