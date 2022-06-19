
const inputNombre = document.getElementById('input1')
const inputApellido = document.getElementById('input2')
const errorNombre = document.getElementById('error-nombre')
const errorApellido = document.getElementById('error-apellido')



inputNombre.addEventListener('input', (e) => {
     console.log(e)

    let nombre = inputNombre.value

    if (nombre.length < 4) {
        inputNombre.classList.add('input-error')
        errorNombre.classList.add('error-show')
    } else {
        inputNombre.classList.remove('input-error')
        errorNombre.classList.remove('error-show')
    }
})


inputApellido.addEventListener('input', () => {
    let apellido = inputApellido.value

    if (apellido.length < 4) {
        inputApellido.classList.add('input-error')
        errorApellido.classList.add('error-show')
    } else {
        inputApellido.classList.remove('input-error')
        errorApellido.classList.remove('error-show')
    }
})


//TECLA ENTER PARA CAMBIAR DEL INPUT1 AL INPUT2

document.getElementById('input1').addEventListener('keydown', inputCharacters);

function inputCharacters(event) {
 
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('input2').focus();
    console.log("paso al 2")
    
  }

}


//VALIDA MAIL
const email = document.getElementById("mail");

 email.addEventListener("input", () => {

  if (email.validity.typeMismatch)  {
      
     email.setCustomValidity("Por favor ingrese un correo electronico valido");
   } else {
     email.setCustomValidity("");
   }

 });


 //validar campo obligatorio
const valor = document.getElementById("mail").value;
if( valor == null || valor.length == 0 ) {
  email.setCustomValidity("Este campo no puede estar vacio");
}
