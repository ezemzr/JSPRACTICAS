//CICLO WHILE

// while (condition) {
    
// }

// La estructura while permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada.
// El funcionamiento del bucle while se resume en: mientras se cumpla la condición indicada, repite las instrucciones incluidas dentro del bucle.
let i = 0;
while (i< 10) {
    console.log("Numero " + i)
    i=i+1;
}

let alumno = prompt("Ingresar alumno - afuera")

while (alumno != "esc") {
    console.log(alumno);
    alumno = prompt ("ingresar alumno");
}

//EJEMPLO 
//Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
