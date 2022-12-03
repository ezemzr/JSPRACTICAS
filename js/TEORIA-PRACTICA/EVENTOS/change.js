//Selecciona en JS el AUDIO

const player = document.querySelector("#player");

// CREA LAS FUNCIONES QUE VAN CON CADA BOTON

const playMusic = () => {
    console.log("play");
    player.play()
}
const pauseMusic = () => {
    console.log("pause");
    player.pause()
}
const stopMusic= () => {
    console.log("stop");
    player.pause()
    player.currentTime = 0;
}

//SELECCIONA EN EL JS LOS BOTONES Y LES AGREGA EVENTOS Y DENTRO DE LOS EVENTOS LAS FUNCIONES

document.addEventListener("DOMContentLoaded",()=>{
    const play = document.querySelector("#play")
    const pause = document.querySelector("#pause")
    const stop = document.querySelector("#stop")



    play.addEventListener("click",playMusic)
    pause.addEventListener("click",pauseMusic)
    stop.addEventListener("click",stopMusic)

})

