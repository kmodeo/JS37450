//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada
//let ingresarNumero = Number(prompt("ingrese numero"));

let ingresarNumero = Number(prompt("ingrese numero"));
let acumula='';

for (let i=1;i<=ingresarNumero;i++){

    acumula += "hola" +"\n" ;

}
alert(acumula)+"\n";