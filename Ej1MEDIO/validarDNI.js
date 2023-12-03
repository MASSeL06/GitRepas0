const scanner = require ("prompt-sync")({sigint: true})

function validarletraDNI(dni) {
    var formatoDNI = /^\d{8}[a-zA-Z]$/;

    if (!formatoDNI.test(dni)) {
        return false;
    }

var numeros = dni.substring(0, 8);
var letra = dni.charAt(8).toUpperCase();

var letrasPosibles = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
var resto = numeros % 23;
var letraEsperada = letrasPosibles.charAt(resto);

return letra === letraEsperada;

}