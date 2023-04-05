// El usuario ingresa 3 notas.
// Por consola o alerta le mostramos el promedio y el mensaje si esta aprobado o 
//desaprobado;

let notaUno = parseInt(prompt("Ingresá tu primer nota"));
let notaDos = parseInt(prompt("Ingresá la segunda nota"));
let notaTres = parseInt(prompt("Ingresá la tercer nota"));
let promedio = (notaUno + notaDos + notaTres) / 3;

if(isNaN(notaUno) || isNaN(notaDos) || isNaN(notaTres)){
    alert("No ingresaste un número, intentalo nuevamente");
}else{
    if(promedio>=6){
        alert(`Tu promedio es ${promedio}. Estás aprobado!`);
    }else{
        alert(`Tu promedio es ${promedio}. Ponele ganas! Desaprobaste!`);
    }
}