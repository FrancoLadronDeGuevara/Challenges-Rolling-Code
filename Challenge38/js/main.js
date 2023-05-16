document.querySelector("#iniciar").addEventListener("click", iniciarCronometro);
document.querySelector("#pausar").addEventListener("click", pausarCronometro);
document.querySelector("#reiniciar").addEventListener("click", resetearCronometro);

let cronometro = null;
let horas = 0;
let minutos = 0;
let segundos = 0;

function iniciarCronometro() {
    document.querySelector("#iniciar").classList.add("disabled");
    document.querySelector("#pausar").classList.remove("disabled");
    cronometro = setInterval(function () {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        if (minutos == 60) {
        minutos = 0;
        horas++;
        }
    }
    tiempoCronometro();
    }, 1000);
}

function pausarCronometro() {
    document.querySelector("#pausar").classList.add("disabled");
    document.querySelector("#iniciar").classList.remove("disabled");
    clearInterval(cronometro);
}

function resetearCronometro() {
    location.reload();
}

function tiempoCronometro() {
    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;
    let time = h + ":" + m + ":" + s;
    document.querySelector(".tiempoCronometro").innerHTML = time;
}


