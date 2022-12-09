//EJEMPLO 1//

let obtenerDatosTxt = () =>{
    fetch("data/data.txt") // http get pidiendo al servidor el archivo data/Data.txt
    //el fetch devuelve una promesa entonces hay que trabajar con las dos posibi. de si encuentre o no la url
    .then((respuesta)=>{
        console.log(respuesta);
        // el metodo text() devuelve otra promesa entonces hay que retornar el valor de respuesta y  crear otro .then con los datos
        return respuesta.text()
    })
    //segundo .then con los datos
    .then((datos)=>{
        console.log(datos);
    })
    //este catch esta por si no encuentra la url o la data pedida en el fetch
    .catch((error)=>{
        console.log( error);
    })
}

let btnTxt = document.getElementById("btnTxt")
btnTxt.addEventListener("click", obtenerDatosTxt)

////////////////////EJEMPLO 2////////////////////////////////////////////////////////////////

//render desestructura el objeto encontrado en data.json y su funcion hace que dentro del div"contenido" se cree un parrafo con cada objeto del json

let render = ({nombre, empresa, puesto}) =>{
    let contenido = document.querySelector("#contenido")
    contenido.innerHTML= `
        <p>Empleado: ${nombre}  </p>
        <p>Empresa: ${empresa}  </p>
        <p>Puesto: ${puesto}  </p>
        <pre>
            A partir del dia de la fecha queda despedido
        </pre>


    `
}
//la data encontrado en el archivo lo encontramos con el primer .then
let obtenerDatosJSON = () =>{
    fetch("data/data.json") 
    .then((respuesta)=>{
        //esa data encontrada es devuelta con .json para que quede en modo de objeto ya que lo encontramos dentro del objeto response con datos del header y demas http
        return respuesta.json();
        // para encontrar los datos que necesitamos existe el formato json, pero devuelve una promesa y por eso el segundo .then
    })
    // y lo que hacemos aca es imprimirla por consola y luego abrir la funcion render que lo muestra en la pagina
    .then((datos)=>{
        console.log(datos)
        render(datos)
    })
    //el catch obviamente por si no encuentra o la data  o la url
    .catch((error)=>{
        console.log( error);
    })
}

let btnJson = document.getElementById("btnJson")
btnJson.addEventListener("click", obtenerDatosJSON)

///////////////////EJEMPLO 3//////////////////////////

// LO QUE HACE ESTA FUNCION ES IMPRIMIR EN LA PAGINA LOS OBJETOS DISTINTOS PERO DE LA MISMA FORMA CON EL ("+=")
let renderArray = (empleados) =>{
    let contenido = document.querySelector("#contenido")

    empleados.forEach(empleado => {
        let {nombre,empresa,puesto}= empleado
        contenido.innerHTML  += `
        <p>Empleado: ${nombre}  </p>
        <p>Empresa: ${empresa}  </p>
        <p>Puesto: ${puesto}  </p>
        <hr/>
    `
    });
}
//FUNCION QUE YA SABEMOS LO QUE HACE POR EJEMPLOS ANTERIORES
let obtenerDatosArray = () =>{
    fetch("data/datos.json") 
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((datos)=>{
        //IMPRIME EN CONSOLA LOS OBJETOS DE EMPLEADOS
        console.log(datos)
        //IMPRIME EN LA PAGINA LOS OBJETOS DE LOS EMPLEADOS
        renderArray(datos)
    })
    .catch((error)=>{
        console.log( error);
    })
}

//DECLARA LOS BOTONES Y EL EVENTO
let btnArray = document.getElementById("btnArray")
btnArray.addEventListener("click", obtenerDatosArray)

//////////////////////////CONSUMIENDO APIS///////////////////
let renderAPI = (perfiles) =>{
    let contenido = document.querySelector("#contenido")

    perfiles.forEach(perfil => {
        let {author,post_url}= perfil

        contenido.innerHTML  = `

        <p>Autor: ${author}  </p>
        <a href="${post_url}" target="_blank">Ver imagen</a>
        <hr/>
    `
    });
}
let obtenerDatosAPI = () =>{
    fetch("https://picsum.photos/list") 
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((datos)=>{
        console.log(datos)
        renderAPI(datos)
    })
    .catch((error)=>{
        console.log( error);
    })
}

let btnAPI = document.getElementById("btnAPI")
btnAPI.addEventListener("click", obtenerDatosAPI)