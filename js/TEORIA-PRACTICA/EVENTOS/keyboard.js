function teclear(){
    console.log("teclear");
}
let input1 = document.getElementById("nombre")

let input2 = document.getElementById("edad")

input1.onkeyup = () => {console.log("keyUp")}

input2.onkeydown = () => {console.log("keyDown")}





function presionTecla(){
    console.log("presionaaar");
}

function soltarTecla(){
    console.log("soltarrr");
}


let input = document.querySelector("input")


input.addEventListener("keydown",presionTecla)

input.addEventListener("keyup",soltarTecla)



function perderFoco(){
    console.log("Perder Foco");
}


// let input = document.querySelector("input")

input.addEventListener("blur",perderFoco)
