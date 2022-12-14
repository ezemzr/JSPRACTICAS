export default class API{
    async getCharacters(id){
    try{
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        
        const data = await res.json()
        return data; 
    }catch(err){
        console.log(err);
    }
}
}
