document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    const textoUsuario = document.getElementById("textoUsuario");
    const areaUsuario = document.getElementById("areaUsuario");
    const btnLogout = document.getElementById("btnLogout");

    if (!areaUsuario || !textoUsuario || !btnLogout) return;

    if (usuario) {

        // ============================
        // USUÁRIO LOGADO
        // ============================

        textoUsuario.innerHTML =
            `Olá, <strong>${usuario.nome}</strong>`;

        btnLogout.classList.remove("d-none");

        btnLogout.addEventListener("click", () => {

            localStorage.removeItem("usuarioLogado");

            window.location.href = "/inicio";

        });

    } else {

        // ============================
        // USUÁRIO NÃO LOGADO
        // ============================

        areaUsuario.style.cursor = "pointer";

        areaUsuario.addEventListener("click", () => {

            window.location.href = "/login";

        });

    }

});

