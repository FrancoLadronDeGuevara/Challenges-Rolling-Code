//1- Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.
let num1 = parseInt(prompt("Por favor, ingresá el primer número"));
let num2 = parseInt(prompt("Ahora ingresá el segundo número"));
document.write(`<h2>Los números ingresados son ${num1} y ${num2} </h2>`);
document.write(`${num1} - ${num2} es ${num1-num2} <br>`);
document.write(`${num1} * ${num2} es ${num1*num2} <br>`);
//-----------------------------------------------------------------------------------------------------


//2- El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no)
let nombre = prompt("Ingresá tu nombre y apellido, por favor").toLowerCase;
String(nombre).includes("m") || String(nombre).includes("a") ? document.write("Tu nombre si contiene letras 'a' o 'm'<br>") : document.write("Tu nombre no contiene letras 'a' o 'm' <br>");
//-----------------------------------------------------------------------------------------------------


//3- Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito')
//investigar a través de que método podemos quitar los guiones y reemplazar por espacios.
let frase = "Pablito-clavo-un-clavito";
document.write(`El trabalenguas ${frase} sin guiones quedaría : <br> ${frase.replaceAll('-'," ")}`)
//-----------------------------------------------------------------------------------------------------