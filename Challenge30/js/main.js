let numeroOponente = Math.floor(Math.random()*3);
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
let botonJugar = document.getElementById("jugar");
let imagenOponente = document.getElementById("oponente");
let textoResultado = document.getElementById("textoResultado");
let eleccionJugador;

piedra.addEventListener("click", ()=>{
    papel.classList.remove("seleccionado");
    tijera.classList.remove("seleccionado");
    piedra.classList.add("seleccionado");
    eleccionJugador = 0;
})

papel.addEventListener("click", ()=>{
    piedra.classList.remove("seleccionado");
    tijera.classList.remove("seleccionado");
    papel.classList.add("seleccionado");
    eleccionJugador = 1;
})

tijera.addEventListener("click", ()=>{
    piedra.classList.remove("seleccionado");
    papel.classList.remove("seleccionado");
    tijera.classList.add("seleccionado");
    eleccionJugador = 2;
})

botonJugar.addEventListener("click", ()=>{
    imagenOponente.innerHTML = `<img src="./img/${numeroOponente}.png" class="img-fluid w-25"></img>`;

    if((eleccionJugador==0 && numeroOponente==2) || (eleccionJugador==1 && numeroOponente==0) || (eleccionJugador==2 && numeroOponente==1)){
        textoResultado.innerHTML = "Ganaste!"
    }else if((eleccionJugador==0 && numeroOponente==1) || (eleccionJugador==1 && numeroOponente==2) || (eleccionJugador==2 && numeroOponente==0)){
        textoResultado.innerHTML = "Perdiste!"
    }else{
        textoResultado.innerHTML = "Empate..."
    }
    let intervalo = setInterval(() => {
        if(confirm("Volver a jugar?")){
            location.reload();
        }else{
            clearInterval(intervalo);
            botonJugar.setAttribute("disabled", "");
        }
    }, 3000);
})