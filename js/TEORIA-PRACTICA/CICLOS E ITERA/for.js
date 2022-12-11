// CICLOS

// CICLO for

// for (let i = 0; i < array.length; i++) { }

for (var i = 0; i < 100; i++) {
    if(i%2=== 0){
        document.write("<p>El numero "+ i + " es par </p>")
    }else{
        document.write("<p>El numero " + i + " es impar</p>")
    }
}


//EJEMPLO
//Algoritmo para calcular la tabla de multiplicar de un número

// Solicitamos un valor al usuario

let ingresarNumero = parseInt(prompt("Ingresar Numero"));

// En cada repetición, calculamos el número ingresado x el número de repetición (i)

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}

//EJEMPLO 2

// Algoritmo para dar turno del 1 al 20 a los nombres ingresados. 

for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

//CICLO-for-BREAK
for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        break;
    }
    alert(i);
}

//CICLO-for-CONTINUE

for (let i = 0; i <=10; i++) {
    if(i===8){
        console.log("saltamos en 8....")
        continue;
    }
    console.log(i)
}

