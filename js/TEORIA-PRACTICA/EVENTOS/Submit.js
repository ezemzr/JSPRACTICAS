const form = document.querySelector("form")
const link = document.getElementById("enlace")

//este evento manda el link a youtube al presionarlo


link.addEventListener("click", (evt)=>{
    evt.preventDefault()
    console.log(evt);
})

//este evento manda la pagina a google cuando enviamos el formulario y lo imprime

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    console.log(evt);
    console.log("Enviamos formulario");
})


// Como guardar lo que este escrito en el input

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    let entrada = document.querySelector("input").value
    
    console.log(entrada.value);


    
    console.log(evt.target[0].value);
    
    console.log("Enviamos formulario");
})




//CODIGO HTML DE REFERENCIA
/* <form id="formulario">
<input type="text">
<input type="number">
<input type="submit" value="Enviar">
</form> */

//CODIGO JS

let miFormulario = document.getElementById("formulario");

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