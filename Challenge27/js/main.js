// En un juego de pelea un personaje utiliza un skill.
// La skill funciona de esta manera:
// El contrincante recibirá 10 golpes
// Cada uno de esos golpes proporciona un daño que varia entre 1000 y 2000 de manera aleatoria
//     a.Muestre cual fue el daño recibido por el contrincante en cada golpe
//     b.Muestre el daño total final que el enemigo recibió

let ryu = document.getElementById("imagenRyu");
let pelado = document.getElementById("imagenPelado");
let botonGolpear = document.getElementById("btnGolpear");
let golpesGenerados = document.getElementById("golpesGenerados");
let sumaGolpes = 0;
let contador = 0;

botonGolpear.addEventListener("click", golpeandoEnemigo);

function golpeandoEnemigo(){
    

    let intervalo = setInterval(function(){
        
        contador += 1;
        let golpe = golpeAleatorio(1000, 2000);
        golpesGenerados.innerText = `Golpe ${contador}: ${golpe}`;
        console.log(golpe);
        sumaGolpes = sumaGolpes + golpe;
        
        cambiarImagenes();
        if(contador === 2 || contador === 4 || contador === 6 || contador === 8){
            ryu.src = "./img/ryuParado.png";
            pelado.src = "./img/peladoParado.png";
        }
        
        if(contador === 10){
            clearInterval(intervalo);
            golpesGenerados.innerText = `Daño total: ¡${sumaGolpes}!`;
            ryu.src = "./img/ryuParado.png";
            pelado.src = "./img/peladoParado.png";
        }
    }, 1000);
    
}

function golpeAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cambiarImagenes(){
    ryu.src = "./img/ryuAddouken.png";
    pelado.src = "./img/peladoGolpeado.png";
}