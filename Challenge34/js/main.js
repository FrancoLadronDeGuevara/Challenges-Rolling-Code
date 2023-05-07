// - Crea una clase llamada Persona que siga las siguientes condiciones:

// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

// Los métodos que se debe poder utilizar  son:

// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

// mostrarDatos: devuelve toda la información del objeto.

// generaDNI(): genera un número aleatorio de 8 cifras.

const titleModal = document.getElementById("titleModal");
const bodyModal = document.getElementById("bodyModal");
const modal = document.getElementById("exampleModal");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const dni = document.getElementById("dni");
const generoHombre = document.getElementById("generoHombre");
const generoMujer = document.getElementById("generoMujer");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const rangoAnio = document.getElementById("rangoAnio");
const anioNacimiento = document.getElementById("anioNacimiento");
const botonEnviar = document.getElementById("botonEnviar");
const botonDni = document.getElementById("botonDni");


let genero;

class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anio){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }

    mostrarGeneracion(){
        if(this.anio>=1930 && this.anio<=1948){
            return "Silent Generation (Los niños de la posguerra), tienes como rasgo caraterístico la AUSTERIDAD 😐";
        }else if(this.anio>=1949 && this.anio<=1968){
            return "Baby Boom, tienes como rasgo característico la AMBICIÓN 🤑";
        }else if(this.anio>=1969 && this.anio<=1980){
            return "Generación X, tienes como rasgo característico la OBSESIÓN POR EL ÉXITO 😎";
        }else if(this.anio>=1981 && this.anio<=1993){
            return "Generación Y (millennials), tienes como rasgo característico la FRUSTRACIÓN 😖";
        }else if(this.anio>=1994 && this.anio<=2010){
            return "Generación Z, tienes como rasgo característico la IRREVERENCIA 😋";
        }
    }

    esMayorDeEdad(){
        if(this.edad>=18){
            return "Mayor de edad: <b>SI</b>";
        }else{
            return "Mayor de edad: <b>NO</b>";
        }
    }

    mostrarDatos(){
        if(nombre.value == "" || edad.value == "" || dni.value == "" || peso.value == "" || altura.value == "" || genero == undefined){
            alert("Te falto ingresar uno o más datos");
            modal.classList.add("d-none");
            location.reload();
        }else{
            titleModal.innerText = `Datos del formulario:`
            bodyModal.innerHTML = `Nombre:\t<b>${this.nombre}</b><br>Edad:\t<b>${this.edad} años</b><br>
            DNI:\t<b>${this.dni}</b><br>Sexo:\t<b>${this.sexo}</b><br>Peso:\t<b>${this.peso} Kg</b><br>
            Altura:\t<b>${this.altura} cm</b><br>Año de nacimiento:\t<b>${this.anio}</b><br>
            Generación:\t<b>${this.mostrarGeneracion()}</b><br>${this.esMayorDeEdad()}`
            
        }
    }
}

botonDni.addEventListener("click", generaDni);

function generaDni(){
    dni.value = Math.floor(Math.random()*10000000);
}

edad.addEventListener("input", ()=>{
    anioNacimiento.innerText = 2023 - edad.value;
    rangoAnio.value = 2023 - edad.value;
})

edad.addEventListener("change", ()=>{
    if(edad.value < 13 || edad.value > 93 ){
        alert("¡No mientas tu edad!");
        edad.value = 13;
        anioNacimiento.innerText = 2023;
    }
})



generoHombre.addEventListener("click", ()=>{
    generoMujer.removeAttribute("checked");
    generoHombre.setAttribute("checked", "");
    genero = "Hombre";
})

generoMujer.addEventListener("click", ()=>{
    generoHombre.removeAttribute("checked");
    generoMujer.setAttribute("checked", "");
    genero = "Mujer";
})

rangoAnio.addEventListener("change", ()=>{
    anioNacimiento.innerText = rangoAnio.value;
    edad.value = 2023 - rangoAnio.value;
})

botonEnviar.addEventListener("click", ()=>{
    let nuevaPersona = new Persona(nombre.value, edad.value, dni.value, genero, peso.value, altura.value, rangoAnio.value);
    nuevaPersona.mostrarDatos();
})