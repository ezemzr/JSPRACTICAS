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








// let  = () =>{
//     let contenido = document.querySelector("#contenido")

//     perfiles.forEach(perfil => {
//         let {author,post_url}= perfil

//         contenido.innerHTML  = `

//         <p>Autor: ${author}  </p>
//         <a href="${post_url}" target="_blank">Ver imagen</a>
//         <hr/>
//     `
//     });
// }
let enviarPOST = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify({
            titulo:'Coderhouse',
            Mensaje:"Post de prueba",
            userId:5
        }),
        Headers: {
            'Content-type':'application/json; charset=UTF-8'
        }
    }) 
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((apiPost)=>{
        console.log(apiPost)
        // renderAPI(apiPost)
    })
    .catch((error)=>{
        console.log( error);
    })
}

let btnPOST = document.getElementById("btnPOST")
btnPOST.addEventListener("click",enviarPOST )