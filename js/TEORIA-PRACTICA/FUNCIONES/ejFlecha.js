
//Funciones flecha
// Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada. Están disponibles desde la versión ES6 de JavaScript, no usan la palabra function pero usa => (flecha) entre los parámetros y el bloque.

const suma  = (a, b) => { return a + b }

//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.

const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )

//Ejemplo aplicado: Calcular precio
const sumaa  = (a,b) => a + b
const restaa = (a,b) => a - b 

//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()

const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 

//Calculo el precioProducto + IVA - descuento

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 

console.log(nuevoPrecio)