
/* <-------------ELEMENTOS DEL FORMULARIO-----------> */
const formRegistro = document.getElementById('formRegistro');
const formEmail = document.getElementById('email');
const formPassword = document.getElementById('password');

/* <-------- Alertas---------------->*/
let emailAlert = document.getElementById("emailAlert")
let passAlert = document.getElementById("passAlert")

let userArray = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];

/* <----------- REGEX ------------> */
// https://emailregex.com/
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Mínimo ocho caracteres, al menos una letra inglesa mayúscula, una letra inglesa minúscula, un número y un carácter especial
let passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

/// Se da Click al botón de enviar
formRegistro.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Validaciones
    if (!validacion(emailRegex, formEmail, emailAlert)) {
        isValid = false;
    }

    if (!validacion(passRegex, formPassword, passAlert)) {
        isValid = false;
    }

    console.log(isValid);
    if (isValid) {
        document.getElementById('newUser').disabled = true;
        // Crear objeto usuario
        let newUser = {
            email: formEmail.value.trim().toLowerCase(),
            password: formPassword.value,
        }
        addUser(newUser);

        
        
        // Swal.fire({
        //     icon: "success",
        //     title: "¡Registro exitoso!",
        //     text: "¡Bienvenido a Joya del Caribe!",
        //     showConfirmButton: false,
        // });
        // setTimeout(() => {
        //     window.location.href = "../index.html";
        // }, 3000);
    }
}

function addUser(userObject) {
    // Agregar usuario al array de usuarios
    userArray.push(userObject);
    // Mandar el array de datos al localStorage
    //          .agregarCosa Nombre de Cosa, lo volvemos string porque asi se leen los datos en el lS           
    localStorage.setItem('userSession', JSON.stringify(userArray));
}

function validacion(regex, form, alert) {
    if (!regex.test(form.value) || form.value.length < 3) {
        alert.classList.remove("d-none")
        form.classList.add("is-invalid")
        return false;
    } else {
        form.classList.add("is-valid")
        form.classList.remove("is-invalid")
        alert.classList.add("d-none")
        return true;
    }
}
