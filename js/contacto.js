//Validación del formulario 


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});


function validarFormulario(event){
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('Completa el campo Nombre y Apellido');
        return;
    }

    let correo = document.getElementById('correo').value;
    if (correo.length == 0){
        alert('Ingrese su correo');
        return;
    }

    let asunto = document.getElementById('asunto').value;
    if (asunto.length == 0){
        alert('Por favor ingrese un asunto al mensaje');
        return;
    }

    let comentario = document.getElementById('comentario').value;
    if (comentario.length == 0) {
        alert('Ingrese un comentario');
        return;
    }

   

    this.submit();
}
