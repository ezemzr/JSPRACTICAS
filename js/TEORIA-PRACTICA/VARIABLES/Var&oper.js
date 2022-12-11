const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log("Tu pedido se hizo correctamente");
}else{
    console.log("Hubo un error en el pago");
}



let efectivo = 3000;
let credito = 4000;
let disponible = efectivo + credito;
let totalCarrito = 7001;

if( efectivo>totalCarrito || credito> totalCarrito  ){
    console.log("Puede pagar con efectivo o credito")
}else if(disponible >= totalCarrito){
    console.log("Puede pagar con ambos")
}else{
    console.error("No puede pagar")
}
