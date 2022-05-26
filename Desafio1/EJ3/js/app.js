//ENTREGABLE DE LA CLASE 3 --OBLIGATORIO
//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

 let ingresarNumero = Number(prompt("ingrese numero"));
 let suma=0;

 for (let i=1;i<=10;i++){
   
   suma = suma + ingresarNumero;
   console.log("La suma es: " + suma);
   
}

