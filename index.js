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

console.log(" ");
console.log("Ejercicio 2");
console.log(" ");


//ejercicio 2
//A)pedir al usuario que ingrese su nombre.
//B) pedir al usuario su apellido.
//c) pedir al usuario su edad.
//d) crear el objeto con los datos solicitados.
//e) mostrar el objeto.
//Ej: 
//{
    //nombre: "",
    //apellido: "",
    //edad: 0
//  }
let nombre1 = readlineSync.question('me escribis tu nombre? ');
let apellido = readlineSync.question('me escribis tu apellido? ');
let edad = readlineSync.question('me escribis tu edad? ');
let objeto = {
    nombre: nombre1,
    apellido: apellido,
    edad: edad
}
console.log(objeto)

console.log(" ");
console.log("Ejercicio 3");
console.log(" ");

//ejercicio 3
//A)escribir una función que espere dos parámetros.
//B)uno debe ser un array y el otro el elemento a buscar el array.
//C)si encuentra ese valor deberá decir  "Elemento encontrado en la posicion (posición)".
//
const miLista1 = [2, "Eric", "Jarra"];
const miLista2 = ["Leche", "Café", "Chocolate"];
function buscarElemento(array, elemento) {
    let posicion = array.indexOf(elemento)   
    console.log("Elemento encontrado en la posicion " + posicion)
  }
  buscarElemento(miLista1, "Jarra");
  buscarElemento(miLista2, "Café");
//ejercicio 4
//A)partiemdo de una lista o array.
//B)invertir sus elementos. ejemplo lista (auto, casa, cama) tiene que salir (cama, casa, auto).