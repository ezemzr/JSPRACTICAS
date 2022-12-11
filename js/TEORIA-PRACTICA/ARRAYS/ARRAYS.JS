// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];

//Acceso al array
let  numeros = [1,2,3,4,5];
console.log( numeros[0] ) // 1; 
console.log( numeros[3] ) // 4; 
let resultado  = numeros[1] + numeros[2] 
console.log( resultado  ) // 5;

//Recorrido del array
//ciclo for
let numeross = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeross[index]);
}
//For.. Of
// La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.

const productos = [
    { id: 1, producto: "Arroz" },
    { id: 2,  producto: "Fideo" },
    { id: 3,  producto: "Pan" }
];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}


// //Agregar elementos
// Para sumar un elemento a un Array ya existente, se utiliza el método push, pasando como parámetro el valor (o variable) a agregar.

const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento')

console.log(miArray.length) // ⇒ 4
console.log(miArray)
//["marca", 3, "palabra", “otro elemento”]

//Si queremos agregar al inicio del array, utilizamos el método unshift() de forma similar:
const miArrayy = ["marca", 3, "palabra"]

miArrayy.unshift('otro elemento')

console.log(miArrayy)
//[“otro elemento”, "marca", 3, "palabra"]

//Quitar elementos

// De forma inversa, existen métodos para eliminar elementos del array.
// Si queremos eliminar el primer elemento del array utilizamos el método shift(); y si queremos eliminar el último elemento, el método pop().

const nombres = ["Luis", "Ana", "Julia", "Juan"]

nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]

nombres.shift()
console.log(nombres) // ["Ana", "Julia"]


