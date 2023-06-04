const readlineSync = require('readline-sync');

console.log(" ");
console.log("Ejercicio 1");
console.log(" ");
//ejercicio 1
//A)Pedir al usuario el nombre.
//B)Escribir una funcion  a la que le pase el nombre.
//B)mostrar por pantalla el saludo ¡hola nombre!.
let nombre = readlineSync.question('me escribis un nombre? ');
function saludar(nombre){
    console.log("hola " + nombre)
}
saludar(nombre)
//ejercicio 2
//A)pedir al usuario que ingrese su nombre apellido y edad.
//B)luego mostrar un objeto con esos datos.
//Ej: 
//{
    //nombre: "",
    //apellido: "",
    //edad: 0
//  }

//ejercicio 3
//A)escribir una función que espere dos parámetros.
//B)uno debe ser un array y el otro el elemento a buscar el array.
//C)si encuentra ese valor deberá decir  "Elemento encontrado en la posicion (posición)".
//
//ejercicio 4
//A)partiemdo de una lista o array.
//B)invertir sus elementos. ejemplo lista (auto, casa, cama) tiene que salir (cama, casa, auto).