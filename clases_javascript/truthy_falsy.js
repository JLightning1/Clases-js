//Ejemplos en los que booleanm devuelve falso: 
Boolean(0); //0 = false, 1 = true
Boolean(null); //false
Boolean(NaN); //false Not A Number
Boolean(undefined); //false
Boolean(false); // false
Boolean(""); //false

//Ejemplos en los que boolean devuelve true
Boolean(1); //true
Boolean("a"); //true
Boolean([]); //true aunque el arreglo este vacio;
Boolean({}); //true aunque el objeto este vacio;
Boolean(function(){}); //true aunque la funcion este vacia;

/* 
undefined: Una variable a la que no se le ha asigando valor, o no se ha declarado en absoluto
null: Representa intencionalmente un valor nulo o "vacio".
*/

var numero1;
var numero2 = null;

console.log(numero1);
console.log(numero2);