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
//DESPLIEGO ALERTAS CON TOASTIFY

function agregarAlCarrito (idProducto) {
    // const agregarAlCarrito = (idProducto) => {

    const itemEnCarrito = carrito.find( (producto) => producto.id === idProducto)

    if (itemEnCarrito){
        itemEnCarrito.cantidad+=1;
        toastAgregoCarrito(itemEnCarrito.nombre)
    }else{
    
        const {id, nombre, precio} = stockProductos.find( (producto) => producto.id === idProducto)
        const itemEnCarrito ={
        id, 
        nombre, 
        precio, 
        cantidad:1
        }
        carrito.push(itemEnCarrito)
        toastAgregoCarrito(nombre)
    }
   

    localStorage.setItem('carrito', JSON.stringify(carrito))
    
     render()

}


//Remover producto del carrito


function removerDelCarrito (id) {
    // const removerDelCarrito = (id) => {
    //Busco el elemento a eliminar 
    const itemABorrar = carrito.find((producto) => producto.id === id)

    itemABorrar.cantidad -= 1;

    if (itemABorrar.cantidad===0){
        const  indice = carrito.indexOf(itemABorrar)
        carrito.splice(indice, 1)
         //Toast elimino del carrito
        toastEliminoCarrito(itemABorrar.nombre)
    }
  
    localStorage.setItem('carrito', JSON.stringify(carrito))

    render()
}



//VACIAR CARRITO

function vaciarCarrito () {
    // const vaciarCarrito = () => {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))

   render()
   
}

btnVaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Está seguro?',
        text: "Está a punto de vaciar el carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'No, cancelar'
      }).then( (result) => {
            if (result.isConfirmed) {
                vaciarCarrito()
                botonCerrar.click()
                Toastify({
                    text: 'Se vació el carrito',
                    position: 'left',
                    gravity: 'bottom',
                    duration: 5000,
                    style: {
                        background: "linear-gradient(to right, #f17b5d, #f02f2f)",
                      }
                }).showToast()
            }
      } )
})


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

function toastAgregoCarrito(producto){

    Toastify({
        
        // text: `Se agregó ${item.nombre} correctamente al carrito `,
        text: `${producto} agregado al carrito `,
        duration:2000,
        gravity : 'bottom',
        // position: 'rigth'
        onClick: () => {
            botonAbrir.click()
        },
        style: {
            background: "linear-gradient(to right, #39B039, #09B609)",
          }
    }).showToast()
}


function toastEliminoCarrito(producto){

    Toastify({
         
        // text: `Se agregó ${item.nombre} correctamente al carrito `,
        text: `${producto} eliminado al carrito `,
        duration:3000,
        gravity : 'bottom',
        // position: 'rigth',
        style: {
            background: "linear-gradient(to right, #EE0979, #FF6A00)",
          }
        
    }).showToast()
}


function render(){
    renderizarCarrito()
    renderCantidad()
    renderTotal()
}
