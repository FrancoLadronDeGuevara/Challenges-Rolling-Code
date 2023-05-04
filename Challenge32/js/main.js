// Eres el líder de una tripulación pequeña de piratas y tienes un plan. Con la ayuda de POO tienes que hacer una función para identificar barcos con un botín pesado a bordo.
// Por desgracia, la gente perdió mucho estos días, entonces, cómo sabes si un barco está lleno de oro y no de personas?
// Cada vez que tus espias vean un barco nuevo entrando al muelle, van a crear un nuevo objeto de barco basado en sus observaciones:
// Draft: Un estimado del peso del barco basado en qué tan bajo está en el agua
// Crew: La cantidad de tripulantes a bordo
// Tienes acceso al "Draft" y la "Crew" del barco. "Draft" es el peso total del barco y "Crew" es el número de personas en el barco.
// Cada miembro añade 1.5kg al peso del barco. Si luego de remover el peso de las personas, el peso del barco sigue siendo más de 20kg, significa que el botín es bueno.
// Añade el método "botinBueno" para decidir si vale la pena saquear el barco.

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

let audio = document.getElementById("audio");

audio.play();

let pesoBarco = document.getElementById("pesoBarco");
let cantidadPersonas = document.getElementById("cantidadPersonas");
let botonSaqueo = document.getElementById("calcularSaqueo");
let textoSaquear = document.getElementById("textoSaquear");

alert("¡Está entrando un nuevo barco pirata en el muelle!")

class Barco{
    constructor(draft, crew){
        this.draft = draft;
        this.crew = crew;
    }

    botinBueno(pesoTotalBarco){
        if(pesoTotalBarco > 20){
            textoSaquear.classList.remove("d-none");
        }else{
            textoSaquear.classList.remove("d-none");
            textoSaquear.innerText = "Lo voy a dejar pasar...";
        }
    }
}


botonSaqueo.addEventListener("click", ()=>{
    let nuevoBarco = new Barco(pesoBarco.value, cantidadPersonas.value)
    audio.play();

    if(pesoBarco.value < 100 || pesoBarco.value > 1000){
        alert("Peso mínimo del barco: 100KG\nPeso máximo del barco: 1000KG");
    }else if(cantidadPersonas.value < 1 || cantidadPersonas.value > 200){
        alert("Capacidad mínima de tripulantes: 1\nCapacidad máxima de tripulantes: 200");
    }else if(pesoBarco.value >= 100 || pesoBarco.value <= 1000 && cantidadPersonas.value >= 1 || cantidadPersonas.value <=200){
        let pesoTotalBarco = (nuevoBarco.draft-(nuevoBarco.crew*1.5));
        nuevoBarco.botinBueno(pesoTotalBarco);
    }
    
})

