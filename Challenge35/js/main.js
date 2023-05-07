//CLASE LIBRO
class Libro {
    //DEFINIENDO PROPIEDADES DE LA CLASE LIBRO
    constructor(titulo, genero, autor, leido = false) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
}

//CLASE LISTADELIBROS
class ListaDeLibros {
    //PROPIEDADES DE LA CLASE LISTADELIBROS
    constructor() {
        this.librosLeidos = 0;
        this.librosSinLeer = 0;
        this.siguienteLibro = null;
        this.libroActual = null;
        this.ultimoLibro = null;
        this.listaDeLibros = [];
    }
    //METODO PARA AGREGAR UN LIBRO
    agregarLibro(libro) {
        this.listaDeLibros.push(libro);
        this.actualizarEstadisticas();
    }
    //METODO PARA COLOCAR EL LIBRO ACTUAL COMO SIGUIENTE LIBRO PARA LEER
    colocarLibroActual() {
        this.libroActual = this.siguienteLibro;
        this.siguienteLibro = this.obtenerSiguienteLibro();
        this.actualizarEstadisticas();
    }
    //METODO PARA TERMINAR DE LEER EL LIBRO
    finalizarLibro() {
        if (this.libroActual !== null) {
            this.libroActual.leido = true;
            this.librosLeidos++;
            this.librosSinLeer--;
            this.ultimoLibro = this.libroActual;
            this.libroActual = null;
            this.actualizarEstadisticas();
        }
    }
    //METODO PARA SABER CUAL ES EL SIGUIENTE LIBRO NO LEIDO
    obtenerSiguienteLibro() {
        const librosSinLeer = this.listaDeLibros.filter((libro) => !libro.leido);
        if (librosSinLeer.length === 0) {
            return null;
        } else {
            return librosSinLeer[0];
        }
    }
    //METODO PARA ACTUALIZAR LOS LIBROS LEIDOS/NO LEIDOS Y FILTRARLOS
    actualizarEstadisticas() {
        this.librosLeidos = this.listaDeLibros.filter((libro) => libro.leido).length;
        this.librosSinLeer = this.listaDeLibros.length - this.librosLeidos;
        if (this.libroActual === null) {
            this.siguienteLibro = this.obtenerSiguienteLibro();
        }
    }
}

//CREANDO LIBROS (3 LEIDOS Y 3 NO LEIDOS)
const libroUno = new Libro("Don Quijote de la Mancha", "Novela", "Miguel De Cervantes", true);
const libroDos = new Libro("Harry Potter: El Prisionero de Azkaban", "Fantasía", "JK Rowling", true);
const libroTres = new Libro("Historia de dos Ciudades", "Novela", "Charles Dickens", false);
const libroCuatro = new Libro("El Señor de los Anillos", "Fantasía", "J.R.R. Tolkien", false);
const libroCinco = new Libro("El Principito", "Novela Corta", "Antoine de Saint-Exupéry", true);
const libroSeis = new Libro("El Hobbit", "Novela Fantástica", "J.R.R. Tolkien", false);

//CREANDO LISTA DE LIBROS
const listaLibrosFranco = new ListaDeLibros();

//AGREGANDO MANUALMENTE CADA LIBRO A LA LISTA
listaLibrosFranco.agregarLibro(libroUno);
listaLibrosFranco.agregarLibro(libroDos);
listaLibrosFranco.agregarLibro(libroTres);
listaLibrosFranco.agregarLibro(libroCuatro);
listaLibrosFranco.agregarLibro(libroCinco);
listaLibrosFranco.agregarLibro(libroSeis);

//VEMOS POR CONSOLA QUE TENEMOS 3 LIBROS LEIDOS Y 3 NO LEIDOS
console.log(listaLibrosFranco);
//OBTENEMOS EL SIGUIENTE LIBRO NO LEIDO (LIBRO TRES)
console.log(listaLibrosFranco.obtenerSiguienteLibro());
//LO COLOCAMOS COMO LIBRO ACTUAL
listaLibrosFranco.colocarLibroActual();
//LO LEEMOS
listaLibrosFranco.finalizarLibro();
//AHORA LOS LIBROS LEIDOS SON 4 Y LOS NO LEIDOS SON 2
console.log(listaLibrosFranco);