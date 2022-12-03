function numeroMaximo(valor1, valor2){
    if(valor1>valor2){
        return valor1;
    }else { 
        return valor2;
    }
}
console.log(numeroMaximo(10,20));

document.write("El numero maximo es: " + numeroMaximo(1,9));
