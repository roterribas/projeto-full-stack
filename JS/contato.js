// ===============================
// VALIDAÇÃO DO FORMULÁRIO CONTATO
// ===============================
const form = document.getElementById("form-contato");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede envio automático

        // Captura dos campos
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const mensagem = document.getElementById("mensagem");
        const sucesso = document.getElementById("msg-sucesso");

        let valido = true;

        // Apagar mensagens antigas
        document.querySelectorAll(".erro").forEach(e => e.innerText = "");

        // ===== NOME =====
        if (nome.value.trim() === "") {
            mostrarErro(nome, "Digite seu nome completo.");
            valido = false;
        }

        // ===== EMAIL =====
        if (email.value.trim() === "") {
            mostrarErro(email, "Digite seu email.");
            valido = false;
        } else if (!email.value.includes("@") || !email.value.includes(".")) {
            mostrarErro(email, "Digite um email válido.");
            valido = false;
        }

        // ===== MENSAGEM =====
        if (mensagem.value.trim().length < 5) {
            mostrarErro(mensagem, "Digite uma mensagem mais detalhada.");
            valido = false;
        }

        if (valido) {
            sucesso.style.display = "block";

            nome.value = "";
            email.value = "";
            telefone.value = "";
            mensagem.value = "";

            setTimeout(() => {
                sucesso.style.display = "none";
            }, 3000);
        }
    });
}


// Função para exibir erros
function mostrarErro(campo, mensagem) {
    let erro = campo.parentElement.querySelector(".erro");

    if (!erro) {
        erro = document.createElement("p");
        erro.classList.add("erro");
        campo.parentElement.appendChild(erro);
    }

    erro.textContent = mensagem;
}
