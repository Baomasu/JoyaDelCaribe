let correo = document.getElementById("correo-footer"); //correo
let btnSub = document.getElementById("btn-subscribir"); //botón de enviar.

let isValid = true;
let contador = true;
let erCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


/// Se da Click al botón de enviar
btnSub.addEventListener("click", function (event) {
    event.preventDefault();
    correo.style.border = "";
    isValid = true;
    if (!erCorreo.test(correo.value) && contador == true) { //validación para correo
        correo.style.border = "solid red medium";
        isValid = false;
    }

    if (isValid && contador) {

        //Se registra correo en la Base de Datos.
        console.log(correo.value.toLowerCase())
        correo.value="";
        correo.style.border = "";
        btnSub.innerHTML=`<strong>Suscrito</strong>`;
        contador = false;

    }

});
