//Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos. 
class Mascota{
    constructor(nombre,tipo,color,){
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
        this.ladrar = function(){
            return"wooow wooow"
        }
    }
}
let mascota1 = new Mascota("messi", "golden", "amarillo")
console.log(mascota1);

for(let propiedades in mascota1){
    console.log(propiedades);
}

let mascota2 = new Mascota("gino", "chillon",1)
console.log(mascota2);

//EJEMPLO



class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre  = nombre;
        this.precio  = precio;
        this.descripcion = descripcion;
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

let nombre = prompt("Ingresar nombre")
let precio = prompt("Ingresar precio")
let descripcion = prompt("Ingresar descripcion")

let producto1 = new Producto(nombre, precio, descripcion)
console.log(producto1);