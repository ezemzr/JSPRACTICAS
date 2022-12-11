let i = 0

let x = setInterval(()=>{
    i+=1;
    console.log(i);
    console.log("hola");
    if(i>=10){
        clearInterval(x)
        console.log("Termino el intervalo");
    }
},1000)