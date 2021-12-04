/* Objeto: Un ente abstracto que almacena algo, tiene una identidad, compartimiento y estado */
/* Variable: Es una unidad de datos que cambia su valor, espacio de memoria que almacena un dato */
/* Funcion: Recibe mensaje, las procesa y envia otros mensajes de manera similar */

var num1 = 5;
var num2 = 10;


var funcion_fachera = function suma(valor1,valor2) {
    respuesta = valor1 + valor2;
    return respuesta;
}

/* console.log("chino y nacho"); */
/* console.log(suma(num1,num2)); */

/* --------------------------------------- */

// Tipos de datos en JavaScript 
var numero_entero = 5; //Entero
var numero_decimal = 6.556; //Decimal
var cadena = "Hola esto es una cadena";  // Conjunto de caracter
var booleano = true; //Verdadero o falso
var array = [5,6.5556, "Hola mundo", false] //Esto es un arreglo

var Objeto = {
    //key: value
    "nombre" : "Jair",
    "apellidos" : "Sanchez Arana",
    "edad" : 21
}

/* console.log(funcion_fachera); */

/* console.log(array[4]);*/
/* console.log(Objeto.nombre) */

const fachera = funcion_facherisima = () => {
    console.log("Brawer cabro")
}

fachera()

