// El objeto Storage (API de almacenamiento web) permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexión con el servidor.


// Si queremos almacenar la información de un objeto en un storage, hay que tener en cuenta que tanto la clave como el valor se almacenan en strings. 

//Los datos almacenados en localStorage, se almacenan en el navegador de forma indefinida
// La información almacenada en sessionStorage, se almacena en el navegador hasta que el usuario cierra la ventana. 

// SET.ITEM ES LA MANERA DE GUARDAR LOS DATOS EN FORMA DE CLAVE VALOR
localStorage.setItem("nombre", "ezequiel")
localStorage.setItem("edad", 21)
localStorage.setItem("casado", false)


//GET.ITEM ES LA MANERA DE ACCEDER O VER LOS DATOS
//Las claves y valores de Storage se guardan en formato de cadena de caracteres 

let recupero = localStorage.getItem("nombre")
recupero = localStorage.getItem("edad")
recupero = localStorage.getItem("obj")


console.log(recupero);
console.log(typeof recupero);//object

//RECORREMOS EL STORAGE E IMPRIMO PRIMERO LA CLAVE Y DESPUES EL VALOR
for(let i = 0; i<localStorage.length; i++){
    let clave = localStorage.key(i)
    console.log("clave " + clave ); // ESTO ES LA CLAVE(KEY)
    console.log("valor " + localStorage.getItem(clave)); //ESTO ES EL VALOR(VALUE)
}


//COMO ELIMINAR UN OBJETO
localStorage.removeItem('obj')

//METODO PARA ELIMINAR TOOODO EL LOCAL STORAGE
localStorage.clear()