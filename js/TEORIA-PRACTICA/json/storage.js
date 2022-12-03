// SET.ITEM ES LA MANERA DE GUARDAR LOS DATOS EN FORMA DE CLAVE VALOR
localStorage.setItem("nombre", "ezequiel")
localStorage.setItem("edad", 21)
localStorage.setItem("casado", false)


//GET.ITEM ES LA MANERA DE RECUPERARLO O VER LOS DATOS

let recupero = localStorage.getItem("nombre")
recupero = localStorage.getItem("edad")
recupero = localStorage.getItem("obj")


console.log(recupero);
console.log(typeof recupero);

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