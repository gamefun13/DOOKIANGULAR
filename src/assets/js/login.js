const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar/ocultar la contraseña del Registro
    const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");
    const registerPasswordField = document.getElementById("register-password");

    if (toggleRegisterPassword && registerPasswordField) {
        toggleRegisterPassword.addEventListener("click", function() {
            if (registerPasswordField.type === "password") {
                registerPasswordField.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                registerPasswordField.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    }

    // Función para mostrar/ocultar la contraseña del Login
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");
    const loginPasswordField = document.getElementById("login-password");

    if (toggleLoginPassword && loginPasswordField) {
        toggleLoginPassword.addEventListener("click", function() {
            if (loginPasswordField.type === "password") {
                loginPasswordField.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                loginPasswordField.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    }
});
