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