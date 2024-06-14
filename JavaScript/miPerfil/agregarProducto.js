

/* <----------- BOTONES ------------> */
let btnCrear = document.getElementById('btn-crear');
let btnImagen = document.getElementById('btn-img');

/* <----------- FORMULARIO ------------> */
let formCategoria = document.getElementById('form-categoria');
let formPrecio = document.getElementById('form-precio');
let formDetalles = document.getElementById('form-detalles');
let formTipo = document.getElementById('form-tipo');
let formNombre = document.getElementById('form-nombre');

/* <----------- ALERTAS ------------> */

let alertaValidaciones = document.getElementById("alertaValidaciones"); //mensaje de error
let alertaTexto = document.getElementById("alerta-txt"); //mensaje de error

/* <----------- REGEX ------------> */
let blankRegex = /^\S*$/; //Regex para espacios en blanco y vacío
let precioRegex = /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/; //Validar precio, que tenga al menos un digito y pueda o no estar acompañado de decimales

/// Se da Click al botón de enviar
btnCrear.addEventListener("click", validateForm);


///btn agregar img
let widget_cloudinary;
let urlImg = "";
btnImagen.addEventListener('click', () => {

    widget_cloudinary.open();

}, false);

widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'joyadelcaribe',
    uploadPreset: 'CloudinaryJoyaDelCaribe'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        urlImg = result.info.secure_url;
        console.log(urlImg);
    }
});

function validateForm(event) {
    event.preventDefault();
    alertaTexto.innerHTML = ``;
    alertaValidaciones.style.display = "none";
    formNombre.style.border = "solid 0.01rem #450920";
    formCategoria.style.border = "solid 0.01rem #450920";
    formPrecio.style.border = "solid 0.01rem #450920";
    formTipo.style.border = "solid 0.01rem #450920";
    formDetalles.style.border = "solid 0.01rem #450920";
    btnImagen.style.border = "solid 0.01rem #450920";
    isValid = true;
    if (formNombre.value.length < 3 || !blankRegex.test(formNombre.value)) { //validación para formNombre
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Nombre</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        formNombre.style.border = "solid red medium";
        isValid = false;
    }
    //Mide mas de 3 caracteres       ↓           No esta en blanco ni tiene solo espacios ↓ 
    if (formTipo.value.length < 3 || !blankRegex.test(formTipo.value)) { //validación para formTipo
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Tipo</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        formTipo.style.border = "solid red medium";
        isValid = false;
    }

    if (formDetalles.value.length < 3 || !blankRegex.test(formDetalles.value)) { //validación para formDetalles
        alertaTexto.innerHTML += `<p>Los <b style="color: red;">detalles</b> no son correctos.</p>`;
        alertaValidaciones.style.display = "block";
        formDetalles.style.border = "solid red medium";
        isValid = false;
    }
    //Valida formato del precio ↓                                ↓ No esta en blanco ni tiene solo espacios 
    if (!precioRegex.test(formPrecio.value) || !blankRegex.test(formPrecio.value)) { //validación para formPrecio
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Precio</b> no es correcto.</p>`;
        alertaValidaciones.style.display = "block";
        formPrecio.style.border = "solid red medium";
        isValid = false;
    }

    if (formCategoria.value.length < 3 || !blankRegex.test(formCategoria.value)) { //validación para formCategoria
        alertaTexto.innerHTML += `<p>La <b style="color: red;">Categoría</b> no es correcta.</p>`;
        alertaValidaciones.style.display = "block";
        formCategoria.style.border = "solid red medium";
        isValid = false;
    }

    if (urlImg == "") {
        alertaTexto.innerHTML += `<p>La <b style="color: red;">Imágen</b> no cargada. </p>`;
        alertaValidaciones.style.display = "block";
        btnImagen.style.border = "solid red medium";
        isValid = false;
    }


    if (isValid) {


        sendData(); //push a arreglo de json

    }

}
function sendData() {
    const promise = fetch('../JSONS/productos.json', { method: 'GET' });
    promise
        .then((response) => {
            response.json()
                .then((productObj) => {

                    productObj.productos.push(
                        {
                            "id": productObj.productos.length+1,
                            "name": formNombre.value,
                            "product": formTipo.value,
                            "description": formDetalles.value,
                            "price": formPrecio.value,
                            "category": formCategoria.value,
                            "img": urlImg,
                            "discount": 0
                        }
                    );
                    console.log(productObj.productos[productObj.productos.length-1]);
                })
                .catch((error) => {
                    console.log('Hubo un problema con el JSON ' + error);
                });
        })
        .catch((error) => {
            console.log('Hubo un problema con la solicitud ' + error);
        });
}
