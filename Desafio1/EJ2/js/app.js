//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

 let entrada = prompt("ingrese dato");
 let ingreso="";
  
 while(entrada != "ESC") {
    
        ingreso += entrada + "\n";
        entrada = prompt("Ingrese dato");
    }
alert(ingreso); 