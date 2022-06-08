

class Carrito{

    constructor(nombre, precio, cantidad){
    this.nombre=nombre
    this.precio=precio
    this.cantidad=cantidad
    }

}

const carritoCompra =[]
   
    function agregarItem(){

     let nombre=prompt("Ingrese nombre del producto, si existe se sumará la cantidad")
     let precio=Number(prompt("Ingrese precio"))
     let cantidad=Number(prompt("Ingrese cantidad"))

    for (let i in carritoCompra){
        if (carritoCompra[i].nombre === nombre){
            carritoCompra[i].cantidad += cantidad
            return;
        }
    }
 
    carritoCompra.push(new Carrito(nombre, precio, cantidad)) 
    
    let pregunta= prompt("Ingresa mas productos al carrito? (S/N)")

    if (pregunta==="S"){
        agregarItem()
           
        
    }

    console.log("listado actualizado")
    console.log(carritoCompra)
}

    function calcularVenta(){
        let valorTotal=0;
        for (let i in carritoCompra){
            valorTotal += carritoCompra[i].precio*carritoCompra[i].cantidad
            
        }
        alert("Total a abonar por su compra: $" + valorTotal)
        
    }

agregarItem();

calcularVenta();


