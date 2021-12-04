var numero = 30;
var numero2 = 40;

if(numero !== numero2) {
    console.log("la condición se cumplió");
} else {
    console.log("la condición no se cumplió");
}

// = significa asignar
// == comparacion debil
// === comparacion estricta
// ! significa negar

// Es de buenas prácticas utilizar el === que el == en JS

// En JS para que dos objetos(objetos o arreglos) tienen que apuntar a la misma direccion en memoria

/* ---------------------------------- */

var edad = 18;

if (edad = 18) {
    console.log("Hey, esta sera tu primera votacion");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

//Operador ternario
condition ? true : false;

// Esto es lo mismo que la primera condicion que vimos
var obj_1 = {num1: 2, num2: 20};
var obj_2 = {num1: 2, num2: 20};

(obj_1 == obj2)
  ? console.log("La condicion se cumplio")
  : console.log("La condicion no se cumplio") ;
