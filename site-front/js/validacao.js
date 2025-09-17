const form = document.getElementById("newForm");
const valid = document.getElementById("valid");

form.addEventListener("submit", function(event) {
    // Impede envio automático
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();

    // Condição de validação
    if (email === "") {
        valid1.innerHTML = "Digite um e-mail valido";
        return false;
    }

    // Validação simples: tem @ e .
    if (!email.includes("@") || !email.includes(".")) {
        valid2.innerHTML = "Email inválido, tente novamente";
        return false;
    } 

    valid3.innerHTML = "Email cadastrado com sucesso! ✅";

    // Limpa o campo
    form.reset();
});