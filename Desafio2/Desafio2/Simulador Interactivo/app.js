
//INGRESAR PRODUCTO
let producto = prompt("Ingrese nombre del Producto: ")

while(producto) {
    
    let precio= Number(prompt("Precio del Producto: "));
    let cantidad= Number(prompt("Ingrese cantidad a comprar: "));
    let envio = prompt("Es con envio?: SI o NO").toUpperCase();
    costoEnvio= Number(calculaEnvio(envio));
    costo = Number(calculaCostoProductos(cantidad, precio))
       
    if (costoEnvio>0){
        let costoTotal=costo+costoEnvio
        alert("Usted compro: " + producto + " con costo total de $ " + costoTotal + " incluyendo el envio") ;
    }else{
         alert("Usted compro: " + producto + " con un costo total de $ " + costo) ;
    }

    producto = prompt("Ingrese nombre del Producto: ")      
 }


function calculaEnvio(envio){
    if (envio==="SI"){
       let costoEnvio=1500
        return costoEnvio
    } else{
        return costoEnvio=0;
    }

}

function calculaCostoProductos(cantidad, precio){
    return cantidad * precio
}
