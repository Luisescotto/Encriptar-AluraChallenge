var buttonEncriptar = document.querySelector(".encriptar");
var buttonDesencriptar = document.querySelector(".desencriptar");
var textoEncriptado = document.querySelector(".texto-encriptado");
var encontrado = document.querySelector(".encontrado");
var no_encontrado = document.querySelector(".no-encontrado");

var copiar = document.querySelector(".copiar");



document.getElementById("textarea").addEventListener("keypress", verificar);
function verificar(e) {

    if (e.key.match(/[a-z\s]/g) === null) {
        e.preventDefault();
    }
}


function encriptar() {
    let texto = document.querySelector("#textarea").value.trim();
    if (texto != "") {
        let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        toggle();
        textoEncriptado.innerHTML = textoCifrado;
    } else {
        alert("El texto debe contener al menos un carácter");
    }
}


function desencriptar() {
    let texto = document.querySelector("#textarea").value.trim();
    if (texto != "") {
        let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        toggle();
        textoEncriptado.innerHTML = textoCifrado;
    } else {
        alert("El texto debe contener al menos un carácter")
    }
}

function toggle() {
    if (encontrado.classList.contains('no-mostrar')) {
        encontrado.classList.toggle('no-mostrar');
        no_encontrado.classList.toggle('no-mostrar');
    }
}

copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoEncriptado.innerHTML);
    copiar.innerHTML = "Copiado"

    setTimeout(function () {
        copiar.innerHTML = "Copiar"
    }, 2000);
});

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;






