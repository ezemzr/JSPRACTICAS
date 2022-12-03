
//OPERADOR TERNARIO 
let temperatura = 31

if (temperatura > 30) {
    alert("Día caluroso!")
} else {
    alert("Día agradable")
}

//SINTAXIS 
condicion  ?  caso1  :  caso2

//EJEMPLO 
temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable")




const autenticado = true;
const puedePagar = true; 

console.log(autenticado ?
    puedePagar?
        "puede pagar":
        "esta autenticado pero no puede pagar":
    "No esta autenticado"
);
