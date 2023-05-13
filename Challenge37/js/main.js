let numeroMagico = Math.round(Math.random()*100);
console.log(numeroMagico)
let intentos = 5;

const botonAdivinar = document.getElementById("botonAdivinar");
const numeroUsuario = document.getElementById("inputNumeroUsuario");

botonAdivinar.addEventListener("click", () =>{
    if(numeroUsuario.value == 0){
        alert("Debes ingresar el número primero");
    }else if(numeroUsuario.value == numeroMagico){
        if(confirm(`Ganaste! El número era ${numeroMagico}. Jugar de nuevo?`)){
            location.reload();
        }else{
            location.reload();
        }
    }else if(numeroUsuario.value != numeroMagico && intentos == 1){
        if(confirm(`Perdiste! El número era ${numeroMagico}. Jugar de nuevo?`)){
            location.reload();
        }else{
            location.reload();
        }
    }else if(numeroUsuario.value>numeroMagico){
        intentos--;
        if(intentos == 1){
            alert(`El número magico es menor. Te queda ${intentos} intento...`);
        }else{
            alert(`El número magico es menor. Te quedan ${intentos} intentos...`);
        }
        numeroUsuario.value="";
    }else if(numeroUsuario.value<numeroMagico){
        intentos--;
        if(intentos == 1){
            alert(`El número magico es mayor. Te queda ${intentos} intento...`);
        }else{
            alert(`El número magico es mayor. Te quedan ${intentos} intentos...`);
        }
        numeroUsuario.value="";
    }
})