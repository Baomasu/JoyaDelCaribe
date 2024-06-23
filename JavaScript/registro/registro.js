
/* <-------------ELEMENTOS DEL FORMULARIO-----------> */
const formRegistro = document.getElementById('formRegistro');
const formName = document.getElementById('name');
const formLastName = document.getElementById('lastName');
const formPhone = document.getElementById('phone');
const formEmail = document.getElementById('email');
const formPassword = document.getElementById('password');
const formPasswordConfirm = document.getElementById('passwordConfirm');

/* <-------- Alertas---------------->*/
let nameAlert = document.getElementById("nameAlert")
let lastNameAlert = document.getElementById("lastNameAlert")
let phoneAlert = document.getElementById("phoneAlert")
let emailAlert = document.getElementById("emailAlert")
let passAlert = document.getElementById("passAlert")
let confirmPassAlert = document.getElementById("confirmPassAlert")

let userArray = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];

/* <----------- REGEX ------------> */
// Permite guiones y apóstrofes
let nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
// Solo acepta 10 números y no más de 3 ceros seguidos
let phoneRegex = /^(?!.*0{3})\d{10}$/;
// https://emailregex.com/
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Mínimo ocho caracteres, al menos una letra inglesa mayúscula, una letra inglesa minúscula, un número y un carácter especial
let passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

formName.addEventListener("blur", () => { validacion(nombreRegex, formName, nameAlert); })
formLastName.addEventListener("blur", () => { validacion(nombreRegex, formLastName, lastNameAlert); })
formPhone.addEventListener("blur", () => { validacion(phoneRegex, formPhone, phoneAlert); })
formEmail.addEventListener("blur", () => { validacion(emailRegex, formEmail, emailAlert); })
formPassword.addEventListener("blur", () => { validacion(passRegex, formPassword, passAlert); })
formPasswordConfirm.addEventListener("blur", () => {
    if (formPasswordConfirm.value != formPassword.value) {
        console.log("No son iguales");
        confirmPassAlert.classList.remove("d-none")
        formPasswordConfirm.classList.add("is-invalid")
    } else {
        formPasswordConfirm.classList.add("is-valid")
        formPasswordConfirm.classList.remove("is-invalid")
        confirmPassAlert.classList.add("d-none")
    }
})

/// Se da Click al botón de enviar
formRegistro.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Validaciones
    validacion(nombreRegex, formName, nameAlert);
    validacion(nombreRegex, formLastName, lastNameAlert);
    validacion(phoneRegex, formPhone, phoneAlert);
    validacion(emailRegex, formEmail, emailAlert);
    validacion(passRegex, formPassword, passAlert);

    if (formPasswordConfirm.value != formPassword.value) {
        console.log("No son iguales");
        confirmPassAlert.classList.remove("d-none")
        formPasswordConfirm.classList.add("is-invalid")
        isValid = false;
    } else {
        formPasswordConfirm.classList.add("is-valid")
        formPasswordConfirm.classList.remove("is-invalid")
        confirmPassAlert.classList.add("d-none")
    }

    if (isValid) {
        // Crear objeto usuario
        let newUser = {
            name: formName.value,
            lastName: formLastName.value,
            email: formEmail.value,
            password: formPassword.value,
            passwordConfirm: formPasswordConfirm.value,
        }
        addUser(newUser);
    }
}

function addUser(userObject) {
    // Agregar usuario al array de usuarios
    userArray.push(userObject);
    // Mandar el array de datos al localStorage
    //          .agregarCosa Nombre de Cosa, lo volvemos string porque asi se leen los datos en el lS           
    localStorage.setItem('userArray', JSON.stringify(userArray));
}

function validacion(regex, form, alert) {
    if (!regex.test(form.value) || form.value.length < 3) {
        alert.classList.remove("d-none")
        form.classList.add("is-invalid")
        return isValid = false;
    } else {
        form.classList.add("is-valid")
        form.classList.remove("is-invalid")
        alert.classList.add("d-none")
    }
}
