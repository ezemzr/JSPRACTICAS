//Es una funcion que permite realizar acciones asincronicamente 
//Necesita una callback(funcion como parametro) y unos segundos pasados en miles
setTimeout(()=> {
    console.log("Proceso asincrónico")
}, 3000)

////////////////////////////////////////////////////////////////////////////////////////////////////
function saludar(){
    console.log("Proceso asincrónico")
}

console.log("inicio");
setTimeout(saludar, 5000);
console.log("Termino el partido");

////////////////////////////////////////////////////////////////////////////////////
for(let letra of "hola"){
    setTimeout(()=>{
        console.log(letra);
    },2000)
}

for(let letra of "hola"){
    setTimeout(()=>{
        console.log(letra);
},5000)
}

///////////////////////////////////////////////////////////////////
//cambiando de clase al parrafo con un click(cambia tambien de color ) y sacandoselo despues de 5 segundos

const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 5000)
})
// //codigo css
// .popup-active {
//     background-color: aqua;
// }
