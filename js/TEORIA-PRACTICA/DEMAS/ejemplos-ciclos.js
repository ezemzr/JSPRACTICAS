// CICLOS

// CICLO for

// for (let i = 0; i < array.length; i++) {

// }

for (var i = 0; i < 100; i++) {
    if(i%2=== 0){
        document.write("<p>El numero "+ i + " es par </p>")
    }else{
        document.write("<p>El numero " + i + " es impar</p>")
    }
}


//CICLO-for-CONTINUE

for (let i = 0; i <=10; i++) {
    if(i===8){
        console.log("saltamos en 8....")
        continue;
    }
    console.log(i)
}

//CICLO WHILE

// while (condition) {
    
// }

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

// CICLO DO WHILE

// do {
    
// } while (condition);

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
