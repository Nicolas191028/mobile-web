const form = document.getElementById("newForm");

form.addEventListener("submit", function(event) {
    // Impede envio automático
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();

    // Condição de validação
    if (email === "") {
        form.innerHTML = "Digite um e-mail valido";
        novidades.style.display = "block";
        return false;
    }

    novidades.style.display = "none";

    // Validação simples: tem @ e .
    if (!email.includes("@") || !email.includes(".")) {
        form.innerHTML = "Email inválido ou incompleto tente novmente";
        novidades.style.display = "block";
        return;
    } 

    novidades.style.display = "none";
    
    form.innerHTML = "Email cadastrado com sucesso! ✅";

    // Limpa o campo
    form.reset();
});