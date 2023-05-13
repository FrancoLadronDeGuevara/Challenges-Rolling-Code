let agendaTelefonica = [];
let opcionesAgenda = 0;

let nombrePropietario = prompt("Ingrese su nombre, por favor");
while(!isNaN(nombrePropietario) || nombrePropietario.length<2){
    nombrePropietario = prompt("Por favor, introduce un nombre válido...");
}

let cantidadContactos = parseInt(prompt(`¿Cuántos contactos deseas en tu agenda telefónica?
    Mínimo: 1
    Máximo: 10`));
while(cantidadContactos<1 || cantidadContactos>10 || isNaN(cantidadContactos)){
    if(isNaN(cantidadContactos)){
        cantidadContactos = parseInt(prompt(`Debes ingresar un valor númerico (del 1 al 10)`));
    }else{
        cantidadContactos = parseInt(prompt(`Recuerda:
        Mínimo: 1
        Máximo: 10`));
    }
}

class Agenda{
    static anadirContacto(nombreContacto, numeroContacto){
        agendaTelefonica.push(nombreContacto, numeroContacto)
        cantidadContactos--;
    }
    static existeContacto(nombreContacto, numeroContacto){
        if (agendaTelefonica.indexOf(nombreContacto) === -1) {
            agendaTelefonica.push(nombreContacto, numeroContacto);
            cantidadContactos--;
        } else if (agendaTelefonica.indexOf(nombreContacto) > -1) {
            alert(`${nombreContacto} ya existe en la agenda!`);
        }
    }
    static listarContactos(){
        if(agendaTelefonica.length == 0){
            alert("Todavía no agregaste ningún contacto")
        }else{
            for(let i=0; i<agendaTelefonica.length; i++){
                if(i%2 == 0){
                    console.log(`Nombre: `+ agendaTelefonica[i])
                }else{
                    console.log(`Telefono: `+ agendaTelefonica[i])
                }
            }
        }
        
    }
    static buscarContacto(nombreContacto){
        if (agendaTelefonica.indexOf(nombreContacto) === -1) {
            alert(`El nombre que ingresaste no se encuentra en la Agenda Telefónica`)
        } else if (agendaTelefonica.indexOf(nombreContacto) > -1) {
            alert(`Teléfono: ${agendaTelefonica[agendaTelefonica.indexOf(nombreContacto)+1]} del contacto ${nombreContacto}`)
        }
    }
    static eliminarContacto(nombreContacto){
        if(agendaTelefonica.indexOf(nombreContacto) > -1){
            agendaTelefonica.splice(agendaTelefonica.indexOf(nombreContacto), 2);
            cantidadContactos++;
            alert(`Se ha eliminado a ${nombreContacto}`)
        }else if( agendaTelefonica.indexOf(nombreContacto) === -1){
            alert("El contacto que ingresaste no existe!");
        }
    }
    static agendaLlena(){
        alert("No puedes agregar más contactos. Tu agenda está llena!");
    }
    static huecosLibres(){
        if(cantidadContactos == 0){
            this.agendaLlena();
        }else{
            alert(`Quedan ${cantidadContactos} espacios libres en tu agenda`);
        }
    }
}


do{
    opcionesAgenda = parseInt(prompt(`Hola ${nombrePropietario}!
    ¿Qué deseas hacer con tu agenda?
    1 👉 Añadir un contacto
    2 👉 Ver todos tus contactos
    3 👉 Buscar un contacto
    4 👉 Eliminar un contacto
    5 👉 Ver espacios disponibles en tu agenda
    6 👉 Salir`));


    while(opcionesAgenda<1 || opcionesAgenda>6 || isNaN(opcionesAgenda)){
        opcionesAgenda = parseInt(prompt(`⚠ Opción ingresada incorrecta ⚠
    1 👉 Añadir un contacto
    2 👉 Ver todos tus contactos
    3 👉 Buscar un contacto
    4 👉 Eliminar un contacto
    5 👉 Ver espacios disponibles en tu agenda
    6 👉 Salir`))
    }

    let nombreContacto;
    let numeroContacto;
    if(opcionesAgenda == 1){
        nombreContacto = prompt("Ingresa el nombre del contacto");
        while(!isNaN(nombreContacto)){
            nombreContacto = prompt("Por favor, ingresa un nombre válido");
        }
        numeroContacto = parseInt(prompt(`Ingresa su número de celular`));
        while(isNaN(numeroContacto)){
            numeroContacto = parseInt(prompt("Ups... Parece que ingresaste mal el número. Intenta nuevamente..."))
        }
        if(cantidadContactos == 0){
            Agenda.agendaLlena();
        }else if(agendaTelefonica.length > 0){
            Agenda.existeContacto(nombreContacto, numeroContacto);
        }else{
            Agenda.anadirContacto(nombreContacto, numeroContacto);
        }
    }else if(opcionesAgenda == 2){
        Agenda.listarContactos();
    }else if(opcionesAgenda == 3){
        nombreContacto = prompt("Ingresa el nombre del contacto que quieres buscar");
        Agenda.buscarContacto(nombreContacto);
    }else if(opcionesAgenda == 4){
        nombreContacto = prompt("Ingresa el nombre del contacto que quieres eliminar");
        Agenda.eliminarContacto(nombreContacto);
    }else if(opcionesAgenda == 5){
        Agenda.huecosLibres();
    }
}while(opcionesAgenda != 6);