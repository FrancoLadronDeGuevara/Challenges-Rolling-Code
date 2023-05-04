// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.

// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.

// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

// let tabla = document.createElement("table");
// let nuevaFila = document.createElement("tr");
// let nuevaColumna = document.createElement("td");

const listaProductos = ["Leche", "Huevos", "Mayonesa", "Pan", "Gaseosa", "Harina", "Yogurt", "Hamburguesas", "Gelatina", "Polenta", "Maquina de afeitar", "Ravioles", "Fideos", "Ázucar", "Aceite", "Puré de tomate", "Sal", "Picadillo", "Arroz", "Ketchup"];


class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        document.write(`<h2>${this.nombre}</h2>`);
        document.write(`Código: <b>${this.codigo}</b> ---> Precio: 💲<b>${this.precio}</b><br>`);        
    }
}

let arrayDeObjetos = 
[producto1 = new Producto(Math.floor(Math.random()*10000000), listaProductos[Math.floor(Math.random()*20)], Math.floor(Math.random()*1000)),  
producto2 = new Producto(Math.floor(Math.random()*10000000), listaProductos[Math.floor(Math.random()*20)], Math.floor(Math.random()*1000)),
producto3 = new Producto(Math.floor(Math.random()*10000000), listaProductos[Math.floor(Math.random()*20)], Math.floor(Math.random()*1000)),]

arrayDeObjetos.forEach(producto => {
    producto.imprimeDatos();
});
