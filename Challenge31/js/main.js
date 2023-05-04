//Crear un arreglo de objetos que contenga datos de peliculas como:
// Titulo
// Genero
// Año
// sinopsis
// Crea una funcion que permita mostrar en una lista
// cada pelicula con sus datos

const listaPeliculas = [
    {titulo: "Titanic", genero: "drama", anio: 1998, sinopsis: "drama romantico que sucede en el transatlantico mas famoso del mundo"},
    {titulo: "El libro de Eli", genero: "accion", anio: 2015, sinopsis: "En un mundo postapocaliptico, Eli debe defender el libro que le fue designado"},
]

function datosPeliculas(){
    listaPeliculas.forEach(pelicula => {
        console.log(`Titulo: ${pelicula.titulo}\nGenero: ${pelicula.genero}\nAño: ${pelicula.anio}\nSinopsis: ${pelicula.sinopsis}`)
    });
}

datosPeliculas();