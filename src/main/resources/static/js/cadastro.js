const API = "";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formCadastro");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const usuario = {

                nome: document.getElementById("nome").value.trim(),
                email: document.getElementById("email").value.trim(),
                senha: document.getElementById("senha").value.trim()

            };

            fetch("/api/usuarios/cadastro", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(usuario)

            })
                    .then(res => {

                        if (!res.ok) {
                            throw new Error();
                        }

                        return res.json();

                    })
                    .then(usuario => {

                        alert("Cadastro realizado com sucesso!");

                        window.location.href = "/login";

                    })
                    .catch(() => {

                        alert("Erro ao cadastrar usuário");

                    });

        });

    }

});


// ===============================
// BADGE DO CARRINHO
// ===============================

function atualizarBadgeCarrinho() {

    const badge = document.getElementById("badgeCarrinho");

    if (!badge) return;

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const total = carrinho.reduce((soma, item) => {

        return soma + item.quantidade;

    }, 0);

    badge.textContent = total;

}


// ===============================
// ANO AUTOMÁTICO NO RODAPÉ
// ===============================

function atualizarAnoRodape() {

    const ano = document.getElementById("anoAtual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

}

// Atualiza badge ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarBadgeCarrinho);