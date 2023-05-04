/*1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero.*/


function escribirPiramide(num) {
    for (let i=1; i<=num; i++) {
      let fila = "";
      for (let j=1; j<=i; j++) {
        fila += j;
      }
      console.log(fila);
    }
  }


escribirPiramide(8);
escribirPiramide(5);


/*2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos*/

let lista1 = ['quiero', 'actitud', 'trabajo','amarillo',5,'ser', 'caramelo', false, 'parte','coincidir', 'del', 3, 'equipo','disciplina','100%'];
let lista2 = ['blanco', 'negro', 'quiero', 'moto', 'ser', true,'parte', 'negro', 'del', 90,'equipo','compromiso', '100%', 'esfuerzo', 'dedicación'];


function mensajeOculto(lista1, lista2) {
  let comunes = [];
  for(let i = 0; i < lista1.length; i++) {
    for(let j = 0; j < lista2.length; j++) {
      if(lista1[i] === lista2[j]) {
        comunes.push(lista1[i]);
      }
    }
  }
  return comunes;
}


console.log(mensajeOculto(lista1, lista2)); 





/*3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.*/
/*
class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
}
*/


/*3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal.
agregarProducto(nombre, precio, unidades) {
      let producto = {
        nombre: "",
        precio: 0,
        unidades: 0
      };


3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”*/


class Carrito {
    constructor() {
      this.productos = [];
      this.montoTotal = 0;
    }
  
    agregarProducto(nombre, precio, unidades) {
      let productoExistente = this.productos.find(p => p.nombre === nombre);
      if (productoExistente) {
        console.log(`Ya existe ${productoExistente.nombre} con ${productoExistente.unidades} unidades`);
        return;
      }
  
      let nuevoProducto = {
        nombre: nombre,
        precio: precio,
        unidades: unidades
      };
  
      this.productos.push(nuevoProducto);
      this.montoTotal += precio * unidades;
    }
  }
  
  

  let carrito = new Carrito();
  console.log(carrito); 
  carrito.agregarProducto("Leche", 3, 1); 
  carrito.agregarProducto("Azucar", 5, 2);
  console.log(carrito); 
  
  carrito.agregarProducto("Leche", 3, 1); 
  console.log(carrito); 
  


