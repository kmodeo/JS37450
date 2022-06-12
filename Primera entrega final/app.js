const carritoCompra =[];
let totalAPagar = 0;

class Productos{

        constructor(nombre, precio, cantidad){
        this.nombre=nombre
        this.precio=precio
        this.cantidad=cantidad
        }
    
}

const productos = [
    new Productos("p1", 100, 2),
    new Productos("p2", 200, 2),
    new Productos("p3", 300, 2),
    new Productos("p4", 400, 2)]



    
    function agregarProductosCarrito(){

        let nombre=prompt("Ingrese nombre del producto")
        let precio=Number(prompt("Ingrese precio"))
        let cantidad=Number(prompt("Ingrese cantidad"))

        let productoEnCarrito = carritoCompra.find(producto => producto.nombre == nombre);

        if (productoEnCarrito){

            productoEnCarrito.cantidad+=cantidad;
          
        }else{
            
            carritoCompra.cantidad=1;
            let producto = new Productos(nombre, precio, cantidad)
            carritoCompra.push(producto)

        }

        let pregunta= prompt("Ingresa mas productos al carrito? (s/n)")
        
        if (pregunta==="s"){
            agregarProductosCarrito()
                         
        }else{

            console.log("Listado del carrito")
            console.log(carritoCompra)
            calculoTotal()
            filtrarPrecio()
        }
       

    }

    function calculoTotal(){

        carritoCompra.forEach((producto) => {
            totalAPagar += producto.precio * producto.cantidad;
        });
        
        console.log("El total de su compra es de $: " + totalAPagar)
              
    }
    
    function filtrarPrecio(){

        let filtro = productos.filter(producto => producto.precio > 200);
        console.log("Filtro de productos con precio > a $200")
        console.log(filtro);
      
    }

    agregarProductosCarrito()
 