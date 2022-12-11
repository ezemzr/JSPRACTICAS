let carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre:"Television 50 pulgadas",precio:700},
    {nombre:"Tablet",precio:300},
    {nombre:"Audifonos",precio:200},
    {nombre:"Teclado",precio:50},
    {nombre:"Celular",precio:500},
    {nombre:"Laptop",precio:800},
    {nombre:"Parlantes",precio:300},
];

//retorna true o false dependiendo de si todo el array cumple con la condicion

// si uno solo ya no cumple con la condicion retorna false


let h = carrito.every(item => item.precio < 1000) 



console.log(h );
