// Ejercicio descuento según marca y modelo del auto:
// Le pedimos al usuario que ingrese marca y modelo del auto, 
// en caso que el auto sea Ford fiesta el descuento que se aplica
//  será del 5%, si es un Ford Focus el descuento será del 10%. 
//  Mostramos por consola el descuento que obtendrá.

let marca = prompt("Por favor, ingresa la marca del vehículo").toLowerCase();
let modelo = prompt("Ingresa el modelo del vehículo").toLowerCase();

if(marca == "ford" && modelo == "fiesta"){
    alert("Felicidades! Obtienes un descuento del 5%");
}else if(marca == "ford" && modelo == "focus"){
    alert("Felicidades! Obtienes un descuento del 10%");
}else{
    alert("La marca o el modelo ingresado no tiene descuentos!");
}