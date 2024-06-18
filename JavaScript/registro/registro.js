
/* <-------------ELEMENTOS DEL FORMULARIO-----------> */
const formName = document.getElementById('name');
const formLastName = document.getElementById('lastName');
const formEmail = document.getElementById('email');
const formPassword = document.getElementById('password');
const formPasswordConfirm = document.getElementById('passwordConfirm');

/*<---------Boton para nuevo Usuario---->*/
const btnNewUser = document.getElementById('newUser');

/* <-------- Alertas---------------->*/ 
let alertaValidaciones = document.getElementById("alertaValidaciones"); //mensaje de error
let alertaTexto = document.getElementById("alerta-txt"); //mensaje de error

let userArray = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];


/* <----------- REGEX ------------> */
let blankRegex = /^\S*$/; //Regex para espacios en blanco y vacío
let precioRegex = /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/; //Validar precio, que tenga al menos un digito y pueda o no estar acompañado de decimales
let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
let nombreRegex = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

/// Se da Click al botón de enviar
btnNewUser.addEventListener("click", validateForm);



function validateForm(event) {
    event.preventDefault();

    alertaTexto.innerHTML = ``;
    alertaValidaciones.style.display = "none";
    formName.style.border = "solid 0.01rem #450920";
    formLastName.style.border = "solid 0.01rem #450920";
    formEmail.style.border = "solid 0.01rem #450920";
    formPassword.style.border = "solid 0.01rem #450920";
    formPasswordConfirm.style.border = "solid 0.01rem #450920";
    isValid = true;
    
    !nombreRegex.test(formName.value) ? console.log("se cumple condicion nombreRegex") : console.log("NO se cumple condicion nombreRegex");
    formName.value.length < 3  ? console.log("se cumple condicion de longitud") : console.log("NO se cumple condicion LONGITUD"); 
    !blankRegex.test(formName.value) ? console.log("se cumple condicion de BLANK") :  console.log("NO se cumple condicion BLANK");

    if (!nombreRegex.test(formName.value) ||formName.value.length < 3) { //validación para formName
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Nombre</b> no es válido. Debe contener al menos tres caracteres</p>`;
        alertaValidaciones.style.display = "block";
        formName.style.border = "solid red medium";
        isValid = false;
    }
    

    if (formLastName.value.length < 3 || !blankRegex.test(formLastName.value)) { //validación para formLastName
        alertaTexto.innerHTML += `<p>El <b style="color: red;">Apellido</b> no es válido. Debe contener al menos tres caracteres</p>`;
        alertaValidaciones.style.display = "block";
        formLastName.style.border = "solid red medium";
        isValid = false;
    }

    if (!emailRegex.test(formEmail.value) || formEmail.value.length < 3 || !blankRegex.test(formEmail.value)) { //validación para formEmail
        alertaTexto.innerHTML += `<p>El <b style="color: red;">email</b> no tiene el formato correcto o el campo está vacío.</p>`;
        alertaValidaciones.style.display = "block";
        formEmail.style.border = "solid red medium";
        isValid = false;
    }
                                   
    if (!passRegex.test(formPassword.value) || !blankRegex.test(formPassword.value)) { //validación para formPassword
        alertaTexto.innerHTML += `<p>La <b style="color: red;">contraseña</b> no es válida.</p>`;
        alertaValidaciones.style.display = "block";
        formPassword.style.border = "solid red medium";
        isValid = false;
    }

    if (formPasswordConfirm.value != formPassword.value || !blankRegex.test(formPasswordConfirm.value)) { //validación para formPasswordConfirm
        alertaTexto.innerHTML += `<p>Las <b style="color: red;">Contraseñas</b> no coinciden o el campo está vacío.</p>`;
        alertaValidaciones.style.display = "block";
        formPasswordConfirm.style.border = "solid red medium";
        isValid = false;
    }

    if (isValid){
        // Crear objeto usuario
        newUser = {
            name : formName.value,
            lastName: formLastName.value,
            email: formEmail.value,
            password: formPassword.value,
            passwordConfirm: formPasswordConfirm.value,
            
        }
    addUser(newUser);

    }!blankRegex.test(formName.value)

}

function addUser(userObject) {
    // Agregar usuario al array de usuarios
    userArray.push(userObject);
    // Mandar el array de datos al localStorage
    //          .agregarCosa Nombre de Cosa, lo volvemos string porque asi se leen los datos en el lS           
    localStorage.setItem('userArray',JSON.stringify(userArray));
}





