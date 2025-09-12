// variáveis
const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("result");
const message = document.getElementById("message");

// Função
function resultadoIdadeClick(event) {
    event.preventDefault()

    // Validação de formulário
     if (inputIdade.value == "") {
        message.style.display = "block";
        return false;
    }

    message.style.display = "none";

    // Lógica - Condição
    if (inputIdade.value >= 18) {
        resultado.innerHTML = "Bem vindo á festa🎉";
    } else {
        resultado.innerHTML = "Um dia mas hoje não🔞";
    }

    inputIdade.value = "";

}