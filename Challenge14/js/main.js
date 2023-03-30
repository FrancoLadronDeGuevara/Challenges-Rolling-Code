//1- A través de document.write concatena un saludo almacenado en 2 variables.

let saludoUno = "<h1>Hola ";
let saludoDos = "Comision 48i</h1>";

document.write(saludoUno+saludoDos);

//---------------------------------------------------------------------------

//2- Pedirle el nombre al usuario y devolver un msj con saludo en el HTML

let nombre = prompt("Por favor, ingresá tu nombre");

document.write(saludoUno + nombre + "!<br>");

//---------------------------------------------------------------------------

//3- (Introducir un número y devolver el doble del mismo num)

let num = parseInt(prompt("Ingresá un número"));

document.write(`El doble de ${num} es ${num*2}` + "<br>");

//---------------------------------------------------------------------------

//4- Recibir el apellido del usuario y mostrar por consola la utlima letra

let apellido = prompt("Ingresá tu apellido, por favor");

document.write(`La última letra de ${apellido} es ${apellido.slice(-1)}`);

//---------------------------------------------------------------------------