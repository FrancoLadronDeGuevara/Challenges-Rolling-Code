//Realice un programa donde un personaje abra 10 cofres, los cofres pueden
//contener: 10 de oro, 2 pociones de vida, nada.
//a. Indique el oro final recolectado
//b. Indique cuantas pociones de Vida obtuvo
//c. Indique cuantos cofres vacíos hubo
//d. Cada vez que abre un cofre indique qué saco

alert("Ganaste 10 cofres! Reclamalos pulsando 'ACEPTAR'");

let cofre = ["oro", "pocion", "vacío"];
let oro = 0;
let pociones = 0;
let vacio = 0;
let contador = 0;

let intervalo = setInterval(function(){
    contador += 1;

    
    document.write(`<span>Abriendo cofre ${contador}...</span>`);
    let abriendoCofre = cofre[Math.floor(Math.random()*3)];
    
    if(abriendoCofre == "oro"){
        document.write(`<span><strong> -----> Obtuviste 10 de oro! 💰</strong></span><br>`);
        oro+=10;
    }else if(abriendoCofre == "pocion"){
        document.write(`<span><strong> -----> Obtuviste 2 pociones de vida! 🥤🥤</strong></span><br>`);
        pociones+=2;
    }else{
        document.write(`<span><strong> -----> Ups! Cofre vacío! 💀</strong></span><br>`);
        vacio+=1;
    }
    
    if(contador === 10){
        clearInterval(intervalo);
        totalObtenido();
    }
}, 2000);

function totalObtenido(){
    document.write(`<h1>Tu personaje 🧙‍♂️ obtuvo los siguientes items:</h1>`);
    document.write(`<h2>${oro} de oro! 💰</h2>`);
    document.write(`<h2>${pociones} pociones de vida! 🥤🥤</h2>`);
    document.write(`<h2>${vacio} cofres vacío(s)! 💀</h2>`);
}