//DECLARAMOS NUESTRO SALDO INICIAL PARA EL CAJERO
let saldo = 50000;

// ESTA ES LA PRIMERA FUNCION PARA TODO
function entrarAlCajero(){
    let tarjeta = confirm("ingrese tarjeta")
    ingresarClave(tarjeta)
}
// SEGUNDA FUNCION PARA EL INGRESO PERMITIDO
function ingresarClave(tarjeta){
    if(tarjeta){
        let clave = prompt("Ingresar clave")
        validarClave(clave)
    }else{
        alert("Es necesaria una tarjeta")
    }
}
function validarClave(clave){
    if(clave === "1234"){
        seleccionarOperacion()
    }else{
        alert("Clave incorrecta")
    }
    entrarAlCajero()
}

// SI LA CLAVE ES CORRECTA TE PERMITE ESTAS OPCIONES
function seleccionarOperacion(){
    console.log("1: retirar dinero");
    console.log("2: consultar saldo");
    console.log("3: Depositar Dinero");
    console.log("4: salir");
    
// SELECTOR DE OPERACIONES
    let op = prompt("Ingresar opcion")
    switch (op) {
        case"1":
            let monto = Number(prompt("Monto a retirar"))
            RetirarDinero(monto)
            break;
        case"2" :
        ConsultarSaldo()
            break;
        case"3" :
            let deposito = Number(prompt("Monto a Depositar"));
            DepositarDinero(deposito)
            break;
        case "4":
            salir()
            break;
        default:
            alert("Operacion invalida");
    }
}

//OPERACION 1
function RetirarDinero(monto){
    if(monto > saldo){
        alert("Fondos insuficientes")        
    }else{
        saldo -= monto;
    }
    seleccionarOperacion()
}
//OPERACION 2
function ConsultarSaldo(monto){
    alert("su saldo es " + saldo)
    seleccionarOperacion()

}

function DepositarDinero(deposito){
    if(deposito === 0 ){
        alert("Ingrese Monto a depositar")
    }else{
        saldo += deposito;
    }
    seleccionarOperacion()
}

//OPERACION 4
function salir(){
    alert("Fin del proceso")
}



entrarAlCajero()




//METODO DE PAGO 


let metodoPago = prompt("Metodo de pago").toLowerCase()


switch (metodoPago) {
    case "efectivo":
        console.log("pagaste con " + metodoPago)
        break;
    case "tarjeta":
        console.log("pagaste con " + metodoPago)
        break;
    case "cheque":
        console.log("pagaste con " + metodoPago)
        break;
    default:
        console.log("no aceptamos " + metodoPago)
        break;
}

