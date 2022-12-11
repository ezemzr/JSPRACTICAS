// CICLO DO WHILE

// do {
    
// } while (condition);

// La estructura do...while permite crear bucles que se ejecutan una o más veces, dependiendo de la condición indicada.
// A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, porque la condición se evalúa al final.


//EJEMPLO

//Algoritmo que solicita una entrada y se detiene cuando NO es un número

let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°

    numero = prompt("Ingresar Número");
    console.log(numero);

//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));


///////////////////////////////////////////////////
do {
    let alumno= prompt("INGRESAR ALUMNO")
    if(alumno == "esc"){
        console.log(alumno)
    }
    console.log(alumno)
    
} while (alumno != "esc");



let i = 100;
do {
    console.log("numero " + i)
    i+=1;
} while (i <= 10);


do {
    alumno = prompt("ingresar alumno")
    if(alumno != "esc"){
    console.log(alumno)    
    }
} while (alumno != "esc")
