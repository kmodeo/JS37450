   
// Variables
const productosContainer = document.querySelector('#contenedor-productos')
const btnVaciarCarrito = document.querySelector('#vaciarCarrito')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')


let carrito

const carritoEnLS = JSON.parse( localStorage.getItem('carrito') ) || []

//CARGA DE PRODUCTOS //
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    let {imagen, nombre, precio, descripcion, id} = producto;

    div.innerHTML = 

            `
            <!--<div class="four-columns">-->
                  <div class="card">
                    <img class="imagen-curso u-full-width" src="${imagen}" alt="Card image cap">    
                    
                        <div class="info-card">
                            <h5 class="card-header">${nombre}</h5>
                            <img src="img/estrellas.png">
                            <p>Precio: $${precio}</p>
                            <p>${descripcion}</p>
                            <button class="u-full-width button-primary button input agregar-carrito" onClick="agregarAlCarrito(${id})">Añadir al carrito</button>
                           
                        </div>
                    </div>
            <!--</div>-->
                           
                `
    productosContainer.append(div)
})


//AGREGAR AL CARRITO Y VERIFICAR SI YA TIENE CANTIDAD
//DESESTRUCTURO EN 1 OBJETO DIFERENTE

const agregarAlCarrito = (idProducto) => {

    const itemEnCarrito = carrito.find( (producto) => producto.id === idProducto)

    if (itemEnCarrito){
        itemEnCarrito.cantidad+=1;

    }else{
    
        const {id, nombre, precio} = stockProductos.find( (producto) => producto.id === idProducto)
        const itemEnCarrito ={
        id, 
        nombre, 
        precio, 
        cantidad:1
        }
        carrito.push(itemEnCarrito)
    }
   

    localStorage.setItem('carrito', JSON.stringify(carrito))
    
     render()

}


//Remover producto del carrito

const removerDelCarrito = (id) => {
    //Busco el elemento a eliminar 
    const itemABorrar = carrito.find((producto) => producto.id === id)

    itemABorrar.cantidad -= 1;

    if (itemABorrar.cantidad===0){
        const  indice = carrito.indexOf(itemABorrar)
        carrito.splice(indice, 1)
    }
  
    localStorage.setItem('carrito', JSON.stringify(carrito))

    render()
}

const vaciarCarrito = () => {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))
    render()

}

btnVaciarCarrito.addEventListener('click', vaciarCarrito)


function renderizarCarrito  () {

        carritoContenedor.innerHTML = ''
        carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        //desestructuracion carrito
        let {nombre, precio, cantidad, id} = producto;

                     div.innerHTML = `
                    <p>${nombre}</p>
                    <p>Precio: $${precio}</p>
                    <p>Cantidad:${cantidad}</p>
                    <button onclick="removerDelCarrito(${id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}


const renderCantidad = () => {
contadorCarrito.innerText = carrito.reduce((acumulador, producto) => acumulador+producto.cantidad, 0)
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
    
    let {precio, cantidad}=producto

    total += precio *cantidad
        

    })
    precioTotal.innerText=total
    
}

/*Busco datos en LocalStorage, con operador ternario */

 carritoEnLS ? (carrito=carritoEnLS, render()) : carrito=[]


function render(){
    renderizarCarrito()
    renderCantidad()
    renderTotal()
}
