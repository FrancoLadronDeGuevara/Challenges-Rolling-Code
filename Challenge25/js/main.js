// En un juego de pelea recibimos un array (generarlo) con 10 golpes 
// aleatorios que recibe un personaje, mostrar todos los valores y 
// luego buscar cual es el golpe mas fuerte que se dio.

let golpes = [];

for(let i=0; i<10; i++){
    golpes.push(Math.round(Math.random()*100));
    document.write(`<p>Golpe  ${i+1}: 🥴💥🤛😣----> <strong>${golpes[i]}</strong></p>`);
}

let golpeMasFuerte = Math.max(...golpes);

document.write(`<h1>El golpe más fuerte que recibió tu personaje 🤕 es:</h1>`);
document.write(`<h2>----->🥊${golpeMasFuerte}🥊<-----</h2>`);