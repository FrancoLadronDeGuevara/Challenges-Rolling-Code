//Realizar una calculadora simple que incluya suma, resta, multiplicación y división.

let seleccionarOperacion = parseInt(prompt(`¿Que operación desea realizar?\n1-Suma\n2-Resta\n3-Multiplicación\n4-División`));
let numUno, numDos, resultado;

while(isNaN(seleccionarOperacion) || seleccionarOperacion<=0 || seleccionarOperacion>=5){
    seleccionarOperacion = parseInt(prompt(`Debe ingresar un número entre 1 y 4\n1-Suma\n2-Resta\n3-Multiplicación\n4-División`));
}

switch (seleccionarOperacion) {
    case 1:
        sumar();
        break;
    case 2:
        restar();
        break;
    case 3:
        multiplicar();
        break;
    case 4:
        dividir();
        break;
}

function sumar(){
    numUno = parseInt(prompt(`Ingresá el primer número`));
    while(isNaN(numUno)){
        numUno = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    numDos = parseInt(prompt(`Ingresá el segundo número`));
    while(isNaN(numDos)){
        numDos = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    resultado = numUno + numDos;
    document.write(`${numUno} + ${numDos} = ${resultado}`)
}

function restar(){
    numUno = parseInt(prompt(`Ingresá el primer número`));
    while(isNaN(numUno)){
        numUno = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    numDos = parseInt(prompt(`Ingresá el segundo número`));
    while(isNaN(numDos)){
        numDos = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    resultado = numUno - numDos;
    document.write(`${numUno} - ${numDos} = ${resultado}`)
}

function multiplicar(){
    numUno = parseInt(prompt(`Ingresá el primer número`));
    while(isNaN(numUno)){
        numUno = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    numDos = parseInt(prompt(`Ingresá el segundo número`));
    while(isNaN(numDos)){
        numDos = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    resultado = numUno * numDos;
    document.write(`${numUno} x ${numDos} = ${resultado}`)
}

function dividir(){
    numUno = parseInt(prompt(`Ingresá el primer número`));
    while(isNaN(numUno)){
        numUno = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    numDos = parseInt(prompt(`Ingresá el segundo número`));
    while(isNaN(numDos)){
        numDos = parseInt(prompt(`Número ingresado inválido, intentalo nuevamente!`));
    }
    resultado = numUno / numDos;
    document.write(`${numUno} % ${numDos} = ${resultado}`)
}