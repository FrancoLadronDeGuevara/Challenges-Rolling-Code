
//La app pide números hasta que pida cancelar.
//Cuando se cancela se deben mostrar todos los números ingresados juntos.
//y si se ingresa algo que no sea válido se debe mostrar un alert y seguir
//pidiendo un número.

let numberUser;
let listOfNumbers = ""

do{
    numberUser = parseInt(prompt(`Por favor, ingrese un número`));
    while(isNaN(numberUser)){
        alert(`Debes ingresar un número!`)
        numberUser = parseInt(prompt(`Por favor, ingrese un número válido...`));
    }
    listOfNumbers = numberUser + "-" + listOfNumbers;
}while(confirm(`Desea seguir agregando números?`));

document.write(`<h1>Números ingresados por el usuario:</h1>`);
document.write(`${listOfNumbers.substring(0, listOfNumbers.length-1)}`);
console.log(typeof(listOfNumbers));