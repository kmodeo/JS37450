   
// Variables
const productosContainer = document.querySelector('#contenedor-productos')
const btnVaciarCarrito = document.querySelector('#vaciarCarrito')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')


let carrito

const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = 

            `
            <!--<div class="four-columns">-->
                  <div class="card">
                    <img class="imagen-curso u-full-width" src="${producto.imagen}" alt="Card image cap">    
                    
                        <div class="info-card">
                            <h5 class="card-header">${producto.nombre}</h5>
                            <img src="img/estrellas.png">
                            <p>Precio: $${producto.precio}</p>
                            <p>${producto.descripcion}</p>
                            <button class="u-full-width button-primary button input agregar-carrito" onClick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
                           
                        </div>
                    </div>
            <!--</div>-->
                           
                `
    productosContainer.append(div)
})


//AGREGAR AL CARRITO MISMA CANTIDAD
const agregarAlCarrito = (id) => {

    //BUSCO EN LA BASE
    const item = stockProductos.find( (producto) => producto.id === id)

    // BUSCO EN CARRITO SI YA EXISTE PARA ACUMULAR CANTIDAD
    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if(productoEnCarrito){
       
        productoEnCarrito.cantidad++;
       

    }else {
        
        item.cantidad = 1;
        carrito.push(item)
    

    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    render()


}


//Remover producto del carrito

const removerDelCarrito = (id) => {
    //Busco el elemento a eliminar 
    const itemABorrar = carrito.find((producto) => producto.id === id)
    
    //Busco el indice de ese elemento en el array
    const indice = carrito.indexOf(itemABorrar)

    //Borro el elemento
    carrito.splice(indice, 1)
     
    localStorage.setItem('carrito', JSON.stringify(carrito))

    render()
}

const vaciarCarrito = () => {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))
    render()

}

btnVaciarCarrito.addEventListener('click', vaciarCarrito)

const renderizarCarrito = () => {

    carritoContenedor.innerHTML = ''
    
        carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${producto.nombre}</p>
                    <p>Precio: $${producto.precio}</p>
                    <p>Cantidad:${producto.cantidad}</p>
                    <button onclick="removerDelCarrito(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}


const renderCantidad = () => {
    let totalCantidad = 0
    
      carrito.forEach((producto) => {
      totalCantidad += producto.cantidad;
      contadorCarrito.innerText = totalCantidad;
  
    })
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        
        total += producto.precio *producto.cantidad
        

    })
    precioTotal.innerText=total
    
}

/*Busco datos en LocalStorage */

if (carritoEnLS){
    carrito = carritoEnLS
    render()
}else{
    carrito=[]
}

function render(){
    renderizarCarrito()
    renderCantidad()
    renderTotal()
}
