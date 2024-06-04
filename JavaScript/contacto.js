let nombre = document.getElementById("nombre-form"); //Nombre
let correo = document.getElementById("correo-form"); //correo
let telefono = document.getElementById("telefono-form"); //telefono
let comentario = document.getElementById("comentario-form"); //comentario

let btnEnviar = document.getElementById("btn-enviar"); //botón de enviar.

let alertaValidaciones = document.getElementById("alertaValidaciones"); //mensaje de error
let alertaTexto = document.getElementById("alerta-txt"); //mensaje de error


let isValid = true;
let contador = true;
let erCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let erTelefono = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;


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
    if (nombre.value.length < 3 && contador == true) { //validación para nombre
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Nombre</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        nombre.style.border = "solid red medium";
        isValid = false;
    }
    if (!erCorreo.test(correo.value) && contador == true) { //validación para correo
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Correo electrónico</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        correo.style.border = "solid red medium";
        isValid = false;
    }
    if (!erTelefono.test(telefono.value) && contador == true) { //validación para telefono
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Teléfono</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        telefono.style.border = "solid red medium";
        isValid = false;
    }
    if ((comentario.value.length < 4 || comentario.value.length > 150) && contador == true) { //validación para comentario
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Comentario</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        comentario.style.border = "solid red medium";
        isValid = false;
    }

    if (isValid && contador) {

        (function () {
            emailjs.init({
                publicKey: "cmJyxtBQKn2YS9e4G",
            });
        })();

        let serviceID = "service_2rr4m9e";
        let templateID = "template_vdxekd4";

        params = {
            nombre_: nombre.value,
            correo_: correo.value.toLowerCase(),
            telefono_: telefono.value,
            comentario_: comentario.value
        }


        //Enviar Correo.
        emailjs.send(serviceID, templateID, params).then(() => {
            alertaTexto.innerHTML = ``;
            alertaValidaciones.style.display = "none";
            nombre.style.border = "solid 0.01rem #450920";
            correo.style.border = "solid 0.01rem #450920";
            telefono.style.border = "solid 0.01rem #450920";
            comentario.style.border = "solid 0.01rem #450920";
            nombre.value = '';
            correo.value = '';
            telefono.value = '';
            comentario.value = '';
            btnEnviar.style.opacity = 0.3;
            btnEnviar.innerText = "Enviado";
            contador = false;
            console.log("prueba para solo mandar un mensaje");
        }).catch();

    }

});




window.addEventListener("load", function (event) {
    event.preventDefault();

});