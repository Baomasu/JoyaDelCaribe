let correof = document.getElementById("correo-footer"); //correo
let btnSub = document.getElementById("btn-subscribir"); //botón de enviar.

let isValidf = true;
let contadorf = true;
let erCorreof = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


/// Se da Click al botón de enviar
btnSub.addEventListener("click", function (event) {
    event.preventDefault();
    correof.style.border = "";
    isValidf = true;
    if (!erCorreof.test(correof.value) && contadorf == true) { //validación para correo
        correof.style.border = "solid red medium";
        isValidf = false;
    }

    if (isValidf && contadorf) {

        //Se registra correo en la Base de Datos.
        console.log(correof.value.toLowerCase())
        correof.value="";
        correof.style.border = "";
        btnSub.innerHTML=`<strong>Suscrito</strong>`;
        contadorf = false;

    }

});
