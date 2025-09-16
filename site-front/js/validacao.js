const form = document.getElementById("newForm");

form.addEventListener("submit", function(event) {
    // Impede envio automático
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();

    // Condição de validação
    if (email === "") {
        alert("Digite um e-mail valido")
        return false;
    }


    // Limpa o campo
    form.reset();
});