function Mascota(nombre,animal,color,sexy){
    this.nombre = nombre;
    this.animal = animal;
    this.color = color;
    this.sexy = sexy;

    this.ladrar = function(){
        return"wooow wooow"
    }
}

let mascota1 = new Mascota("aegon","perro","amarillo","obvio")

// console.log(mascota1.nombre);
// console.log(mascota1.ladrar());

console.log("nombre" in mascota1);
console.log("abuelo" in mascota1);

for(let propiedad in mascota1){
    console.log(mascota1[propiedad])
}
