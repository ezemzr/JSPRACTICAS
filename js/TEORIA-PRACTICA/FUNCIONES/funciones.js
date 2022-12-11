// Se declara a través de la palabra reservada function. 
// Deben tener un nombre en minúscula y sin espacios seguidos de los característicos paréntesis (). 
// El contenido de la función se escribe entre las llaves. 
// El nombre de la función no se puede repetir en otra.
function saludar() {
    console.log("¡Hola estudiantes!");
}
//llamado
saludar();


//PARAMETROS
// Los parámetros son variables que se declaran dentro de la función, entre sus paréntesis. Los valores de éstos se definen luego en el llamado.
function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}
conParametros("Hola", "Coder"); // -> “Hola Coder”
conParametros("Cursando", "JS"); // -> “Cursando JS”

//Funciones flecha
// Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada. Están disponibles desde la versión ES6 de JavaScript, no usan la palabra function pero usa => (flecha) entre los parámetros y el bloque.



//Funciones anónimas
// Una función anónima es una función que se define sin nombre y se utiliza para ser pasada como parámetro o asignada a una variable.
//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )
















//EJEMPLOS
function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
} 
solicitarNombre();

//ej1

//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); 


//ej2
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultadoo = sumar(5, 8);

console.log(resultado)  // ⇒ 13
