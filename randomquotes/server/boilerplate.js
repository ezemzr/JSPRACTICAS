const fs = require('fs')
// console.log(fs);


// console.log(process.argv);

const foldername = process.argv[2] || 'proyect'
// console.log(foldername);




// imprimiendo en la terminal node boilerplate:

//Con FileSystem cree una carpeta llamada carritocompras que contiene este carpeta.
fs.mkdirSync(foldername)
//Dentro de la carpeta de arriba cree otra carpeta de imagenes
fs.mkdirSync(foldername + "/img")
//Luego cree 3 archivos de html-js-css con este comando
fs.writeFileSync(`${foldername}/index.html`, '')
fs.writeFileSync(`${foldername}/main.js`, '')
fs.writeFileSync(`${foldername}/style.css`, '')