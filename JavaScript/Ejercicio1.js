// Alexey Romero Sánchez - Ejercicio 1
proceso_ej1(array1 = [2, 3, 4, 6])
proceso_ej1(array1 = [123, 67, 890, 4])
proceso_ej1(array1 = [2, 3, 7, 9, 4, 5, 6, 9, 12])

/*
var array1 = diferentes arrays dados
var answer1 = almacenador de respuestas
var timesx = multiplicador para cada array
"i" y "c" = contadores
*/

function proceso_ej1(arreglo) {
    var answer1 = [];
    for (i = 0; i < array1.length; i++) {
        var timesx = 1;
        for (c = 0; c < array1.length; c++) {
            if (i != c) {
                timesx = timesx * array1[c];
            }
            else {
                timesx = timesx;
            }
        }
        answer1.push(timesx);
    }
    console.dir(answer1);
}
