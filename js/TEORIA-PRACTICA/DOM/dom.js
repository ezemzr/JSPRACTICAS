// Ejemplo de como ocultar cualquier elemento
elemento = document.forms[0].className= "ocultar"


//////////////////////////////////////////acceder a los nodos////////////////////////////////////////

document.getElementById
document.getElementsByClassName
document.getElementsByTagName
document.querySelector("#contenedor p") || (".contenedor")
//////////////////////////////////////////modificar nodos////////////////////////////////////////

//La propiedad innerText de un nodo nos permite modificar su nodo de texto. 
//Es decir, acceder y/o modificar el contenido textual de algún elemento del DOM.


let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = "Hola Coder!"
console.log( titulo.innerText ) // “Hola Coder!”

//innerHTML permite definir el código html interno del elemento seleccionado. 
//Al pasar un string con formato de etiquetas html y contenido a través de la propiedad innerHTML, el navegador genera nuevos nodos con su contenido dentro del elemento seleccionado. 

let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = `<h2>Hola mundo!</h2>
                        <p>Lorem ipsum</p>`

//////////////////////////////////////////modificar las clases ////////////////////////////////////////
//A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y definir cuáles van a ser sus clases:

let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = "<h2>Hola mundo!</h2>"
// cambio el atributo class
container.className = "container row"


////////////////////////////////////////Agregar o quitar Nodos////////////////////////////////////////////

// Para crear elementos se utiliza la función document.createElement(), y se debe indicar el nombre de etiqueta HTML que representará ese elemento.
// Luego debe agregarse como hijo el nodo creado con append(), al body o a otro nodo del documento actua

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);



//Se pueden eliminar nodos existentes y nuevos. El método remove() permite eliminar un nodo seleccionado del DOM:
let parrafo = document.getElementById("parrafo1");
//Elminando el propio elemento
parrafo.remove();

let paises = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].remove()


////////////////////////////////////////Obtener datos de Inputs////////////////////////////////////////////

// Accediendo a la propiedad value de cada input seleccionado:

//CODIGO HTML DE REFERENCIA
{
    /* <input id = "nombre" type="text">
        <input id = "edad"   type="number"> */
}

//CODIGO JS
document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 39;
