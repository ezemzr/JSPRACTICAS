function $(id){
    return document.getElementById(id)
}
let titulo = document.getElementById("titulo")

titulo.innerHTML = "La pelea del siglo"

let container = $("container")
container.innerHTML=`
    <p>aguante messi loco</p>
`
