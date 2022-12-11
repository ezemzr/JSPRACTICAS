//OPERADOR TERNARIO 
//Es una simpplificacion del if...else

//ofrece un return implícito para cada caso.


//Su sintaxis consta en 3 partes
//la condicion // caso de ejecucion en caso que se cumpla //// y el caso else si no se cumple la condicion
//SINTAXIS 
condicion  ?  caso1  :  caso2


let temperatura = 31

if (temperatura > 30) {
    alert("Día caluroso!")
} else {
    alert("Día agradable")
}


//EJEMPLO 
temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable")



///////////////////////////////////////////////////////////
const autenticado = true;
const puedePagar = true; 

console.log(autenticado ?
    puedePagar?
        "puede pagar":
        "esta autenticado pero no puede pagar":
    "No esta autenticado"
);





////////////
const usuario = {
    nombre: "John Doe",
    edad: 17
}
  // declaramos y asignamos condicionalmente
const permiso = (usuario.edad >= 18) ? true : false
  // mostramos el mensaje
permiso ? alert("Puede comprar cerveza") : alert("No puede comprar")