//opcion uno
let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)

function respuestaClick(){
    console.log("Respuesta evento");
}

//opcion dos
let botonn = document.getElementById("btnPrincipal")
botonn.onclick = () =>{console.log("Respuesta 2")}



//CODIGO HTML DE REFERENCIA
{/* <form id="formulario">
<input type="text">
<input type="number">
<input type="submit" value="Enviar">
</form> */}
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
//Cancelamos el comportamiento del evento
e.preventDefault();

//Obtenemos el elemento desde el cual se disparó el evento
let formulario = e.target

//Obtengo el valor del primero hijo <input type="text">
console.log(formulario.children[0].value); 

//Obtengo el valor del segundo hijo <input type="number"> 
console.log(formulario.children[1].value);  
}
