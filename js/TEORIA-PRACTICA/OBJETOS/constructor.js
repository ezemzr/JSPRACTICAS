//el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario

function SuperHeroe(nombre, alterego, planeta, poder){
    this.nombre = nombre;
    this.alterego = alterego;
    this.planeta = planeta;
    this.poder = poder;
}
let superHeroe2 = new SuperHeroe("Diana Prince","Mujer Maravilla","Triangulo de las Bermudas","Lazo de la Verdad")


let superHeroe3 = new SuperHeroe("Bruno Diaz","Batman","Ciudad Gotica","Dinero")


document.write(superHeroe2.nombre);
document.write(superHeroe3["planeta"]);

//ejemplo 2

function Mascota(nombre,animal,color,sexy){
    this.nombre = nombre;
    this.animal = animal;
    this.color = color;
    this.sexy = sexy;
}
let mascota1 = new Mascota("aegon","perro","amarillo","obvio")
console.log(mascota1);

let mascota2 = new Mascota ("Vhagar","Dragon","negro","seeee")
console.log(mascota2["nombre"]);
