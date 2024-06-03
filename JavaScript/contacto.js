let nombre = document.getElementById("nombre-form"); //Nombre
let correo = document.getElementById("correo-form"); //correo
let telefono = document.getElementById("telefono-form"); //telefono
let comentario = document.getElementById("comentario-form"); //comentario

let btnEnviar = document.getElementById("btn-enviar"); //botón de enviar.

let alertaValidaciones = document.getElementById("alertaValidaciones"); //mensaje de error
let alertaTexto = document.getElementById("alerta-txt"); //mensaje de error


let isValid = true;


/// Se da Click al botón de enviar
btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    alertaTexto.innerHTML = ``;
    alertaValidaciones.style.display = "none";
    nombre.style.border = "solid 0.01rem #450920";
    correo.style.border = "solid 0.01rem #450920";
    telefono.style.border = "solid 0.01rem #450920";
    comentario.style.border = "solid 0.01rem #450920";
    isValid = true;
    if (nombre.value.length < 3) { //validación para nombre
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Nombre</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        nombre.style.border = "solid red medium";
        isValid = false;
        console.log("not valid");
    }
    if (correo.value.length < 3) { //validación para correo
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Correo electrónico</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        correo.style.border = "solid red medium";
        isValid = false;
        console.log("not valid");
    }
    if (telefono.value.length < 10 || telefono.value.length > 11) { //validación para telefono
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Teléfono</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        telefono.style.border = "solid red medium";
        isValid = false;
        console.log("not valid");
    }
    if (comentario.value.length < 3) { //validación para comentario
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Comentario</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        comentario.style.border = "solid red medium";
        isValid = false;
        console.log("not valid");
    }

    if (isValid) {
        //enviamos correo
        console.log(nombre.value);
        console.log(correo.value);
        console.log(telefono.value);
        console.log(comentario.value);
        console.log("btn-Enviar");
    }
    console.log("btn-Enviar");

});




window.addEventListener("load", function (event) {
    event.preventDefault();

});