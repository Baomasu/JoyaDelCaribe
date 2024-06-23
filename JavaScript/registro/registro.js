
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
let blankRegex = /^\S*$/; //Regex para espacios en blanco y vacío
let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
let nombreRegex = /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/;

/// Se da Click al botón de enviar
formRegistro.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Validaciones

    if (!nombreRegex.test(formName.value) || formName.value.length < 3) { //validación para formName
        nameAlert.classList.remove("d-none")
        formName.classList.add("is-invalid")
        isValid = false;
    } else {
        formName.classList.add("is-valid")
        formName.classList.remove("is-invalid")
        nameAlert.classList.add("d-none")
    }

    if (!nombreRegex.test(formLastName.value) || formLastName.value.length < 3) { //validación para formLastName
        lastNameAlert.classList.remove("d-none")
        formLastName.classList.add("is-invalid")
        isValid = false;
    } else {
        formLastName.classList.add("is-valid")
        formLastName.classList.remove("is-invalid")
        lastNameAlert.classList.add("d-none")
    }

    if (formPhone.value.length < 3) { //validación para formPhone
        phoneAlert.classList.remove("d-none")
        formPhone.classList.add("is-invalid")
        isValid = false;
    } else {
        formPhone.classList.add("is-valid")
        formPhone.classList.remove("is-invalid")
        phoneAlert.classList.add("d-none")
    }

    if (!emailRegex.test(formEmail.value) || formEmail.value.length < 3 || !blankRegex.test(formEmail.value)) { //validación para formEmail
        emailAlert.classList.remove("d-none")
        formEmail.classList.add("is-invalid")
        isValid = false;
    } else {
        formEmail.classList.add("is-valid")
        formEmail.classList.remove("is-invalid")
        emailAlert.classList.add("d-none")
    }

    if (!passRegex.test(formPassword.value) || !blankRegex.test(formPassword.value)) { //validación para formPassword
        passAlert.classList.remove("d-none")
        formPassword.classList.add("is-invalid")
        isValid = false;
    } else {
        formPassword.classList.add("is-valid")
        formPassword.classList.remove("is-invalid")
        passAlert.classList.add("d-none")
    }

    if (!blankRegex.test(formPasswordConfirm.value) || formPasswordConfirm.value != formPassword.value) { //validación para formPasswordConfirm
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
    // !blankRegex.test(formName.value)

}

function addUser(userObject) {
    // Agregar usuario al array de usuarios
    userArray.push(userObject);
    // Mandar el array de datos al localStorage
    //          .agregarCosa Nombre de Cosa, lo volvemos string porque asi se leen los datos en el lS           
    localStorage.setItem('userArray', JSON.stringify(userArray));
}





