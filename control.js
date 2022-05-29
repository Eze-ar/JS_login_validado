const usuario = document.getElementById("usuario"); //traigo la referencia del nodo que es constante
const password = document.getElementById("password");
const boton = document.getElementById("boton");

const validarIngreso = (usuario, password) => {
    usuario.setCustomValidity("");
    password.setCustomValidity("");

    if (password.value == "") {
        password.setCustomValidity(
            'Favor de completar el campo "password", gracias!'
        );
    }

    if (usuario.value == "") {
        usuario.setCustomValidity(
            'Favor de completar el campo "usuario", gracias!'
        );
    } else if (!usuario.value.includes("@")) {
        usuario.setCustomValidity('El usuario debe contener un "@", gracias!');
    }
};

boton.addEventListener("click", () => {
    /* //for debug
      console.log(usuario.value);
      console.log(password.value);
      */
    validarIngreso(usuario, password);
});