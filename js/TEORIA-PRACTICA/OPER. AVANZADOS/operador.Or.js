// OR ( || ) consta de dos operandos y no de una condición explícita: operando1 || operando2.

//tabla de evaluación de valores falsy
//si operando uno es distinto a los valores de falsy no es falsy

console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy

///ejemplo
const usuario1 = {
    nombre: "John Doe",
    edad: 14
}
const usuario2 = null

console.log( usuario1 || "El usuario no existe" )
  // { nombre: 'John Doe', edad: 14 }

console.log( usuario2 || "El usuario no existe" )
  // El usuario no existe
