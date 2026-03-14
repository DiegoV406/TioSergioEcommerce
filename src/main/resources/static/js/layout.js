
// ================================
// BADGE DO CARRINHO GLOBAL
// ================================

function atualizarBadgeCarrinho() {

    const badge = document.getElementById("badgeCarrinho");

    if (!badge) return;

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const total = carrinho.reduce((soma, item) => {

        return soma + item.quantidade;

    }, 0);

    badge.textContent = total;

}


// ================================
// ATUALIZA AO CARREGAR A PÁGINA
// ================================

document.addEventListener("DOMContentLoaded", atualizarBadgeCarrinho);


// ================================
// ATUALIZA SE LOCALSTORAGE MUDAR
// ================================

window.addEventListener("storage", atualizarBadgeCarrinho);


