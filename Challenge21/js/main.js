// Realizar un programa que dada la vida de un personaje, realice una acción
// *Si la vida está entre 0 y 20 que el personaje huya(escribir)
// *Si la vida está entre 21 y 50 que el personaje se ponga en modo defensivo
// *Si la vida está entre 51 y 80 que el personaje se ponga en modo moderado
// *Si la vida está entre 81 y 100 que el personaje se ponga en modo ofensivo

// a) Resolverlo sin conectores lógicos
// b) Resolverlo con conectores lógicos (contemplar que tanto valores menores
//     a cero y mayores a 100 no pueden ser validos)



// A) SIN CONECTORES LÓGICOS
let finBucle = false;

do{
    let puntosDeVidaActuales = parseInt(prompt("Introducí los puntos de vida de tu personaje"));
    if(isNaN(puntosDeVidaActuales)){
        alert("Error, caracter ingresado no válido");
    }else if(puntosDeVidaActuales<0){
        alert("Tu salud no puede ser menor a 0pts.");
    }else if(puntosDeVidaActuales>=0){
        if(puntosDeVidaActuales<=20){
            alert(`Tus salud es baja! HUYE!`);
            finBucle = true;
        }else if(puntosDeVidaActuales<=50){
            alert(`PS: ${puntosDeVidaActuales} - MODO DEFENSIVO: ACTIVADO`);
            finBucle = true;
        }else if(puntosDeVidaActuales<=80){
            alert(`PS: ${puntosDeVidaActuales} - MODO MODERADO: ACTIVADO`);
            finBucle =  true;
        }else if(puntosDeVidaActuales<=100){
            alert(`PS: ${puntosDeVidaActuales} - MODO OFENSIVO: ACTIVADO`);
            finBucle = true;
        }else{
            alert(`Tu salud no puede ser mayor a 100pts.`)
        }
    }
    
}while(finBucle == false);



// B) CON CONECTORES LÓGICOS

do{
    let puntosDeVidaActuales = parseInt(prompt("Introducí los puntos de vida de tu personaje"));
    if(isNaN(puntosDeVidaActuales) || puntosDeVidaActuales<0 || puntosDeVidaActuales>100){
        alert("Los puntos de vida deben ser números entre 0 y 100!");
    }else{
        if(puntosDeVidaActuales>=0 && puntosDeVidaActuales<=20){
            alert(`Tus salud es baja! HUYE!`);
            finBucle = true;
        }else if(puntosDeVidaActuales>20 && puntosDeVidaActuales<=50){
            alert(`PS: ${puntosDeVidaActuales} - MODO DEFENSIVO: ACTIVADO`);
            finBucle = true;
        }else if(puntosDeVidaActuales>50 && puntosDeVidaActuales<=80){
            alert(`PS: ${puntosDeVidaActuales} - MODO MODERADO: ACTIVADO`);
            finBucle =  true;
        }else{
            alert(`PS: ${puntosDeVidaActuales} - MODO OFENSIVO: ACTIVADO`);
            finBucle = true;
        }
    }
    
}while(finBucle == false);