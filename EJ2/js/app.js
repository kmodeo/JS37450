//SENTENCIA FOR
//tabla de multiplicar de un numero

/*let ingresarNumero = Number(prompt("ingrese numero"));

for (let i=1;i<=10;i++){
    let resultado=i*ingresarNumero;
    
    alert(ingresarNumero + "X" + i + " = " + resultado)
}
*/
//Algoritmo para dar turno del 1 al 20 a los nombres ingresados


/*for (let i=1; i<=5;i++){
    let ingresarNombre = prompt("ingrese nombre");
    alert("Turno N°:" + i + ingresarNombre);

}*/

//break
/*
for (let i=1;i<=10;i++){
    if (i==5){
        //break;
        continue; //el numero 5 no se muestra
    }
    alert(i);
}*/

//BOOKLET 
//Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo
/*
let ingresarNumero = Number(prompt("ingrese numero"));

for (let i=1;i<=ingresarNumero;i++){
    
    //let resultado=i*ingresarNumero;
        if (ingresarNumero>4){
        break;
    }
    alert("Lado" + i);
}*/

//Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
//Luego realizar un única salida por alerta, con el listado de alumnos registrados
/*
let alumnos ="";
for (let i=0; i<3;i++){
       alumnos += prompt("ingrese nombre alumno") +"\n";
}
alert(alumnos);
*/

//SENTENCIA WHILE
//Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”
/*
let entrada = prompt("ingrese dato");
while(entrada != "ESC"){
    alert("el usuario ingresó"+ entrada);
    entrada = prompt("ingrese dato");
}
*/

//SENTENCIA DO..WHILE
//Algoritmo que solicita una entrada y se detiene cuando NO es un número

/*let numero =0;
do{
    numero=prompt("ingrese numero");
    alert(numero);
}while (Number(numero));
*/

//SENTENCIA SWITCH Y WHILE
//Algoritmo que hace la operación según la entrada, pero ignora la ejecución de bloque si la entrada es en “ESC”.
/*
let entrada=prompt("ingresar nombre");
//repito hasta q se ingresa ESC
while (entrada != "ESC"){
    switch (entrada){
        case "ANA":
            alert("Hola ANA");
            break;
        case "CRIS":
            alert("Hola CRIS");
            break;
        default:
            alert("quien sos?");
            break;
    }
    entrada=prompt("ingresar nombre");
}
*/

//ENTREGABLE DE LA CLASE 3 --OBLIGATORIO
//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

/*
 let ingresarNumero = Number(prompt("ingrese numero"));
 let suma=0;

 for (let i=1;i<=10;i++){
   
   suma = suma + ingresarNumero;
   console.log("La suma es: " + suma);
    
}*21323464549851951237895123789564123598798/


//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.


    /*
    let alumnos = '';
    for (let index = 0; index < 10; index++) {
        alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
    }
    alert(alumnos);
    */
    /*    let entrada    = prompt("INGRESAR NOMBRE");
        let ingresados = '';
        while (entrada != 'Voldemort') {
            ingresados += entrada +"\n";
            entrada     = prompt("INGRESAR NOMBRE");
        }
        alert(ingresados);
    */
/*
 let entrada = prompt("ingrese dato");
 let ingreso="";
  
 while(entrada != "ESC") {
    
        ingreso += entrada + "\n";
        entrada = prompt("Ingrese dato");
    }
alert(ingreso); 
*/


//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada

//let ingresarNumero = Number(prompt("ingrese numero"));

let ingresarNumero = Number(prompt("ingrese numero"));
let acumula='';

for (let i=1;i<=ingresarNumero;i++){

    acumula += "hola" +"\n" ;
      //if (ingresarNumero){
      //console.log("Hola") + "\n";
   //}
}
alert(acumula)+"\n";