const textElement = document.getElementById("titulo")

const usuario = prompt('Ingrese su nombre')

if (isNaN(usuario)){
    textElement.innerText = "Bienvenido " + usuario +" a mi pagina"
}else {
    alert("ingrese un nombre valido")
}


//SALUDO ALEATORIO AL USUARIO

let parrafo = document.getElementById("parrafo1");
let myArray = ['Bem-vinda', 'Bienvenido', 'Welcome', 'Benvenuto'];
let rand = Math.floor(Math.random()*myArray.length);
let rValue = myArray[rand];

parrafo.innerHTML =  rValue;


const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1500,
        img: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2500,
        img: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3500,
        img: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4500,
        img: "https://via.placeholder.com/150"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 5500,
        img: "https://via.placeholder.com/150"
    }
]

const productsContainer = document.querySelector('#products-container')

productos.forEach((producto) => {

const div = document.createElement('div')


    div.innerHTML = `<h4>${producto.nombre}</h4>
                    <img src=${producto.img}/>
                    <p>Precio: $ ${producto.precio}</p>
                    <hr>
                    `
    
    productsContainer.append(div)
})

