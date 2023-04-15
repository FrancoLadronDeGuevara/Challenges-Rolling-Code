//Realizar una página con un script que calcule el valor de la letra
//de un número de DNI (Documento nacional de identidad).
//El algoritmo para calcular la letra del dni es el siguiente:
//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23
//Según el resultado, de 0 a 22, ke corresponderá una letra de las siguientes:
//(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//Si lo introducido no es un número deberáindicarse con un alert y volver
//a preguntar. Deberá repetirse el proceso hasta que el usuario pulse
//<<cancelar>>
//Ejemplo: INPUT: 40773821 - OUTPUT 'L'

let letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

do{
    let numeroDni = parseInt(prompt("Por favor, ingresá tu número de DNI"));
    if(numeroDni<0 || numeroDni>99999999 || isNaN(numeroDni)){
        alert("Ups, ingresaste un DNI inválido!");
    }else{
        alert(`La letra correspondiente al DNI N°:${numeroDni} es la letra ${letrasDni[numeroDni%23]}`);
    }
}while(confirm("¿Deseas agregar otro DNI?"));
