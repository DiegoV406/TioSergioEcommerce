const API = "";

// ===============================
// LOGIN
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formLogin");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();

            if (!email || !senha) {

                alert("Preencha todos os campos.");
                return;

            }

            fetch("/api/usuarios/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    senha: senha
                })

            })

                    .then(res => {

                        if (!res.ok) {
                            throw new Error();
                        }

                        return res.json();

                    })

                    .then(usuario => {

                        localStorage.setItem(
                                "usuarioLogado",
                                JSON.stringify(usuario)
                                );

                        alert("Login realizado com sucesso!");

                        window.location.href = "/inicio";

                    })

                    .catch(() => {

                        alert("Email ou senha inválidos");

                    });

        });

    }

    
    atualizarAnoRodape();

});




// ===============================
// ANO AUTOMÁTICO NO RODAPÉ
// ===============================

function atualizarAnoRodape(){

    const ano = document.getElementById("anoAtual");

    if(ano){
        ano.textContent = new Date().getFullYear();
    }

}

