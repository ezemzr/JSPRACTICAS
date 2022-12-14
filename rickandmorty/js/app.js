import API from "./api.js"

const api = new API()

let currentCharacters = 1;

let loadNext = document.querySelector('#load-next')

loadNext.addEventListener("click", async ()=>{
    let characterData = await api.getCharacters((currentCharacters +=1))
    console.log(characterData);
})


async function initApp(initCharacterID){
    let characterData = await api.getCharacters(initCharacterID)
    console.log(characterData);
}











initApp(currentCharacters)