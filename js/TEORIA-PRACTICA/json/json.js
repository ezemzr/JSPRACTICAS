//Si queremos almacenar la información de un objeto en un storage, hay que tener en cuenta que tanto la clave como el valor se almacenan en strings. 

//al buscar almacenar un objeto sin una transformación previa(JSON), guardamos [object Object]


//STRINGIFY == PASAR [object Object] A STRING EN FORMATO JSON
//PARSE == PASAR STRING EN FORMATO JSON A OBJETO NORMAL JS


// PASAR UN [object Object] A string

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



////////////////////////////////EJEMPLO///////////////////////////
const producto1 = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}

const enJSONN    = '{"id":2,"producto":"Arroz"}';
const productoO1 = JSON.parse(enJSONN);

console.log(typeof enJSONN);     // string
console.log(typeof productoO1);  // object
console.log(productoO1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("productoO1"));
console.log(producto2.id);  // 2    

/////////////////////////////////////////////EJEMPLO 2///////////////////////////
class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];

//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos.push(new Producto(objeto));
    
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos)
    producto.sumaIva();

    