// CLICK EN HOME 
// EJECUTAR FUNCION RENDER Y DEJAR EN BLANCO campo #BUSCADOR
const homeSite = document.querySelector("#home")

homeSite.addEventListener("click", () => {
    inputBusqueda.value=''
    document.getElementById("contenedor-productos").innerHTML=``
    cargarProductos();

});


//VALIDACION Y SIMULACION DEL FORMULARIO DE CONSULTA
const formNombre= document.getElementById("mce-FNAME")
const formEmail= document.getElementById("mce-EMAIL")
const formMensaje= document.getElementById("mce-TEXTAREA")
const parrafo=document.getElementById("warnings")
const contactForm=document.getElementById("mc-embedded-subscribe-form")
const formularioContacto = document.querySelector(".subscribe")

formularioContacto.addEventListener("click", () => {

    //VALIDACIONES PARA LOS CAMPOS DE CONTACTO
    
    let warnings=""
    let expReg=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    if (formNombre.value.length<5) {

            warnings +=`El nombre es muy corto <br>`
        }

        else if (!expReg.test(formEmail.value)) {
            warnings += `El correo no es valido <br>`
        }

        else if (formMensaje.value.length==0) {

            warnings +=`El mensaje no puede estar vacio <br>`
        }


        else {
           
            Swal.fire({
                icon: 'success',
                title: 'Gracias',
                text: 'Pronto nos contactaremos con usted.',
                
                })
    
                contactForm.reset()
        }
        parrafo.innerHTML=warnings
           
});
//FIN FORMULARIO CONSULTA


//MODAL DE PAGO
const finalizarCompra = document.querySelector(".finalizarCompra");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const btn_checkout=document.querySelector(".payButton")

finalizarCompra.addEventListener("click", () => {
    //verifico si el precio total esta en 0 en el modal

   if (document.getElementById("precioTotal").innerHTML==='0'){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El carrito esta vacio, por favor compre algun producto!',
        
        })
    }else{
       //cierro modal carrito antes
        botonCerrar.click()
        //abro modal de pago
        payment.style.display = "flex";


    }
  
});

//BOTON CHECKOUT DE REALIZAR EL PAGO

btn_checkout.addEventListener("click", () => {
    
        Swal.fire({
        icon: 'success',
        title: 'Gracias',
        text: 'Tu compra se realizo con éxito.',
        
        })
        payment.style.display = "none";
    
        vaciarCarrito();
      
    });


close.addEventListener("click", () => {
  payment.style.display = "none";
});


// Variables
const productosContainer = document.querySelector('#contenedor-productos')
const btnVaciarCarrito = document.querySelector('#vaciarCarrito')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')


let carrito

const carritoEnLS = JSON.parse( localStorage.getItem('carrito') ) || []

let stockProductos=[]

//carga de prod con async

const cargarProductos =  async() =>{

    const resp= await fetch('./data/stock.json')
    const datos = await resp.json()

    stockProductos= datos

       stockProductos.forEach((producto) => {
                    const div = document.createElement('div')
                    div.classList.add('producto')
                         
                    let {imagen, nombre, precio, descripcion, id} = producto;
                    
                    
                    div.innerHTML = 
                
                            `
                            <!--<div class="four-columns">-->
                            <div class="card" >
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
                
            }         
            

cargarProductos()


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
        
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))
    render()

   
}


btnVaciarCarrito.addEventListener('click', () => {
    
    if (carrito.length===0)
        {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El carrito ya esta vacio !',
                
              })
              

        } else{

        
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
                                    duration: 1000,
                                    style: {
                                        background: "linear-gradient(to right, #f17b5d, #f02f2f)",
                                    }
                                }).showToast()
                            }
                    } )
                }


        })


function renderizarCarrito  () {

        carritoContenedor.innerHTML = ''
        carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

     
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
        
        text: `${producto} agregado al carrito `,
        duration:2000,
        gravity : 'bottom',
        
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
         
        text: `${producto} eliminado al carrito `,
        duration:3000,
        gravity : 'bottom',
        style: {
            background: "linear-gradient(to right, #EE0979, #FF6A00)",
          }
        
    }).showToast()
}


//BUSQUEDA DE DATOS 

const consultarCurso = async(curso) =>{

    const resp= await fetch('./data/stock.json')
    const datos = await resp.json()
    cursosABuscar= datos
    
    let seleccionados = [];
    seleccionados.length = 0;
    
    cursosABuscar.forEach(j => {
                  
        
        if (j.nombre.toLowerCase().includes(curso.toLowerCase())) {
          // si lo incluye agregalo al array de los seleccionados
            seleccionados.push(j)
         
        } 

        
  })

 
    if (seleccionados.length>0){
        return(seleccionados)
    }else{
        return false
    }
  
  
}



const btnBuscar=document.querySelector('#btn-busqueda')
const inputBusqueda=document.querySelector('#buscador')

const contenedorBusqueda=document.querySelector('#contenedor-busqueda')

/*prevenir tecla enter en buscador*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#buscador').forEach( node => node.addEventListener('keypress', e => {

    if (inputBusqueda==''){
  
        if(e.keyCode == 13) {
            e.preventDefault();
          }
    }  

    }))
  });

//BUSCAR CURSO ALTERNATIVO

btnBuscar.addEventListener('click', () =>{
  
    let value=inputBusqueda.value
        
    if (value !==''){
      
        consultarCurso(value)
        

        .then((resp)=>{
               
        const resultadoBusqueda=resp
        productosContainer.innerHTML = ''

        resultadoBusqueda.forEach((e) => {
           
            const div = document.createElement('div')
            div.classList.add('producto')
                 
            let {imagen, nombre, precio, descripcion, id} = e;
     
            div.innerHTML = 
        
                    `
                    <div class="card" >
                            <img class="imagen-curso u-full-width" src="${imagen}" alt="Card image cap">    
                            
                                <div class="info-card">
                                    <h5 class="card-header">${nombre}</h5>
                                    <img src="img/estrellas.png">
                                    <p>Precio: $${precio}</p>
                                    <p>${descripcion}</p>
                                    <button class="u-full-width button-primary button input agregar-carrito" onClick="agregarAlCarrito(${id})">Añadir al carrito</button>
                                   
                                </div>
                    </div>
                                                   
                        `
            productosContainer.append(div)
            
        })        


     })

            .catch((err)=>{
               
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No se encontraron resultados!',
                                
                            })
                            
                            inputBusqueda.value=''
                
                        })
                
                        inputBusqueda.value=''
                
                
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Por favor ingrese el nombre del curso a buscar',
                            
                        })
                    }
    
        })

  
//FUNCIONES RENDER
function render(){
    renderizarCarrito()
    renderCantidad()
    renderTotal()
}
