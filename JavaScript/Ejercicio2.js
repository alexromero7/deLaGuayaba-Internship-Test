// Alexey Romero Sánchez - Ejercicio 2

/*
var n = valor deseado por el usuario
var resultado = almacenador del procedimiento
var i = contador de posiciones
funcion factorizar = procedimiento
*/

var n = prompt("Ingrese un valor: ");
n = parseInt(n);
console.log(factorizar(n));

function factorizar(n){
  var resultado = 1;
  for(i = 0; i < n+1; i++){
    if(i != 0){
      resultado *= i;
      console.log(i + " != " + resultado);
    }
    else{
      console.log(i + " != " + (i+1));
    }
  } 
  return resultado;
}
