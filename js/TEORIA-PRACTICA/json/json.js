//STRINGIFY == PASAR OBJETO-OBJETO A STRING
//PARSE == PASAR STRING A OBJETO


// PASAR UN OBJECT-OBJECT A string

localStorage.setItem("obj",JSON.stringify({nombre: "adrian", edad:46}))

// IMPRIME EL OBJETO DE ARRIBA PERO LAS KEYS PASADA A STRING

console.log(objStorage)

//METEMOS EN UNA VARIABLE EL OBJETO CONVERTIDO EN STRING

let objStorage = localStorage.getItem("obj")

//Y VOLVEMOS A METERLO EN OTRA VARIABLE CONVERTIDO A OBJETO

let objJson = JSON.parse(objStorage)

//IMPRIME EL OBJETO 

console.log(objJson)

//CONFIRMAMOS QUE ES UN OBJETO

console.log(typeof objJson);

// IMPRIME EL NOMBRE DEL OBJETO("adrian")
console.log(objJson.nombre);