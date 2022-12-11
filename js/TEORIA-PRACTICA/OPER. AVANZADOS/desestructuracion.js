//Si intentamos desestructurar una propiedad inexistente en el objeto, obtendremos undefined.

let producto = {
    nombre: "papas fritas",
    precio: 200,
    disponible: true,
    telefono: {
        casa:264324123,
        celular:26163626828
    }
}
console.log(producto.nombre);

let {nombre ,telefono:{celular} } = producto
console.log(nombre);
console.log(celular);

/////EJEMPLO 2
const usuario = {
    nombreE: "John Doe",
    edad: 32
}
const { nombreE, edad } = usuario
console.log(nombreE) // "John Doe"
console.log(edad) // 32

//fUNCION PARA DESTRUCTURAR OBJETOS 
const productoo = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}
const desestructurar = (item) => {
    // desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre)
}
desestructurar(productoo) // 10 Curso Javascript

////////////////////////////////////DESTRUCTURACION DE ARRAYS////////////////////////

//Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves. 

//La diferencia con la desestructuración de objetos es que la de arrays es posicional. 

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

const [a, b] = nombres

console.log(a) // "Juan"
console.log(b) // "Julieta"

