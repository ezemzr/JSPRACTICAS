// La estructura switch  está especialmente diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable (técnicamente se podría resolver con un if, pero el uso de switch es más ordenado). 
switch(numero) {
    case 5:

        break;
    case 8:

        break;
    case 20:

        break;
    default:

        break;
}
//EJEMPLO
// Algoritmo que hace la operación según la entrada, pero ignora la ejecución de bloque si la entrada es en “ESC”.
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
}
    entrada = prompt("Ingresar un nombre");
}

//EJEMPLO CALCULADORA
function calculadora(primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;           
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(50,234857,"/"))



