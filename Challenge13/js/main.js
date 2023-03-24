alert("Para continuar, debes ingresar tres números")

//Se crean dos variables con strings
let saludo_uno = "<h1>Hola ";
let saludo_dos = "comisión 48i!</h1>";
//Se imprime el saludo concatenando ambas variables
document.write(saludo_uno + saludo_dos);


//Se pide al usuario que ingrese los números por prompt, se los convierte en entero con
//parseInt y se los almacena en su variable correspondiente
let num1 = parseInt(prompt("Ingresá el primer número"));
let num2 = parseInt(prompt("Ingresá el segundo número"));
let num3 = parseInt(prompt("Ingresá el tercer número"))

//Se muestra en pantalla los números ingresados
document.write(`Números ingresados: <strong>(${num1})</strong>, <strong>(${num2})</strong>, <strong>(${num3})</strong>`+"<br>"+ "<br>");

//Se crea una variable para almacenar el resultado de los dos primeros números sumados
//y se muestra el resultado con document.write
let resultado = num1 + num2;
document.write(`${num1} + ${num2} es = <strong>${resultado}</strong>` + "<br>");
//Se imprime en pantalla el resultado de los dos primeros números sumados al tercero
document.write(`La suma de los dos primeros n°s más el tercer n° es = `, resultado + num3 + "<br>" + "<br>")

//Se modifica la variable definida para almacenar el resultado del primer número menos el segundo
//y se muestra el resultado con document.write
resultado = num1 - num2;
document.write(`${num1} - ${num2} es = <strong>${resultado}</strong>` + "<br>");
//Se imprime en pantalla el resultado de los dos primeros números menos el tercero
document.write(`La resta de los dos primeros n°s menos el tercer n° es = `, resultado - num3 + "<br>" + "<br>")

//Se modifica la variable definida para almacenar el resultado de los dos primeros números multiplicados
//y se muestra el resultado con document.write
resultado = num1 * num2;
document.write(`${num1} x ${num2} es = <strong>${resultado}</strong>` + "<br>");
//Se imprime en pantalla el resultado de los dos primeros números multiplicados al tercero
document.write(`El producto de los dos primeros n°s multiplicado por el tercer n° es = `, resultado * num3 + "<br>" + "<br>")

//Se modifica la variable definida para almacenar el resultado del primer número dividido en el segundo
//y se muestra el resultado con document.write
resultado = num1 / num2;
document.write(`${num1} / ${num2} es = <strong>${resultado}</strong>` + "<br>" + "<br>");

//Se verifica si el primer número es par o impar usando el operador ternario
//se imprime el resultado
document.write(num1%2==0 ? `El número ${num1} es par` : `El número ${num1} es impar`);
document.write("<br>");

//Se verifica si el segundo número es par o impar usando el operador ternario
//se imprime el resultado
document.write(num2%2==0 ? `El número ${num2} es par` : `El número ${num2} es impar`);