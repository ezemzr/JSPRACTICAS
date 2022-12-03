let gritar = () => {
    alert("ESTOY GRITANDO")
}

let basado = () =>{
    alert("las mujeres a la cocina")
}


// CON DOCUMENT.GETELEMENTBY ID-CLASSNAME-TAG

let btn = document.getElementById("btn")
let btnDos = document.getElementById("btnDos")


// //FORMA UNO 

btn.addEventListener("click",gritar)
btn.addEventListener("click", function(){
    console.log("otra forma del metodo uno");
})

// //FORMA DOS

btnDos.onclick = () => alert("Puto el onclick");
btnDos.onclick = function (){console.log("otra forma del metodo dos")}
btnDos.onclick = gritar


//CON QUERYSELECTORALL

let boton = document.querySelectorAll("button")


//FORMA UNO

boton[0].addEventListener("click",gritar)
boton[1].addEventListener("click",basado)


//FORMA DOS
boton[0].onclick = gritar
bbotontn[1].onclick = basado


function playMusic(){
    console.log("PLAY");
}


let lis = document.querySelectorAll("li")
// console.log(lis);

for(let li of lis){
    li.addEventListener("click",playMusic)
}