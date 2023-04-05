// Realice un programa que dada la vida de un personaje, indique una acción: 
// ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida 
// y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida 
// y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// ∙ la poción de vida chica cura 25 y la grande 50.

let vidaActual = parseInt(prompt("Ingresá la cantidad de puntos de vida de tu personaje"));
let pocionGrande = 50;
let pocionChica = 25;

switch ((isNaN(vidaActual) || vidaActual<=0? 0 : 0) + (vidaActual>=1 && vidaActual<50? 1 : 0) + 
        (vidaActual>49 && vidaActual<75? 2 : 0) + (vidaActual>=75? 3 : 0)) {
    case 0:
        alert("No ingresaste puntos de vida validos! Intentalo nuevamente...");
        break;
    case 1:
        vidaActual += pocionGrande;
        alert(`Bebiendo poción grande...! Ahora tu personaje tiene ${vidaActual} puntos de vida`);
        break;
    case 2:
        vidaActual += pocionChica;
        alert(`Bebiendo poción chica...! Ahora tu personaje tiene ${vidaActual} puntos de vida`);
        break;
    case 3:
        alert(`No es necesario tomar una poción! Tienes ${vidaActual} puntos de vida`);
        break;
    default:
        alert("Tu personaje murió!");
        break;
}