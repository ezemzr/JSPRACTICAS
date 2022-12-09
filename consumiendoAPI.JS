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