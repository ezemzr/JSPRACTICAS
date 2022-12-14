let links = document.querySelectorAll('nav a')
// console.log(links);

for(let link of links){
    link.addEventListener("click", pedirPagina)
}

function pedirPagina(evt) {
    //con este evt.preventdefault hago q no se vaya a link de cada boton
    evt.preventDefault()
    console.dir(evt.target);
    const url = evt.target.dataset.pagina + ".html"
    const miPagina = document.getElementById("miPagina")
    fetch(url)
    .then(pagina => {
        return pagina.text()
    })
    .then(page =>{
        
        miPagina.innerHTML =page
    })
    .catch(err => console.log(err))
}