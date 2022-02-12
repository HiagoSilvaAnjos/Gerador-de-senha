let slideElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");


let charset = "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";

let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";

    let i = 0;
    let lengthCharset = charset.length;

    for (i = 0; i < slideElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * lengthCharset));
    }
    

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}


function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    console.log(novaSenha);
    alert("Senha copiada com sucesso!");
}