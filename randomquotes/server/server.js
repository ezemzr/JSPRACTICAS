const http = require('http')

http.createServer( (req, res)=>{
    // console.log(req.url);
    if(req.url == '/'){
        //si yo busco en google localhost:4000 me aparece "home" y si estoy en otra pagina me aparece la carita triste
        res.end("<h1>Home</h1>")
    }else if(req.url== "/nosotros"){
        res.writeHead("200", {'content-type': 'text/html'})
        res.end("<h1>Nosotros </h1>")
    }else{
        res.end("<h1 style='color:red'>:( 404 not found</h1>")
    }
} ).listen(4000, ()=>{
    console.log("Servidor corriendo en puerto 4000");
})

