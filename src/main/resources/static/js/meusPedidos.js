// ===============================
// CONFIG API
// ===============================
const API = "";

// ===============================
// DOM READY
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    const lista = document.getElementById("listaPedidos");

    // Se não estiver na página de pedidos, não executa
    if (!lista) return;

    atualizarBadgeCarrinho();
    atualizarAnoRodape();

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        alert("Você precisa estar logado para acessar seus pedidos.");
        window.location.href = "/login";
        return;
    }

    carregarPedidos(usuarioLogado.id);

});


// ===============================
// CARREGAR PEDIDOS
// ===============================
function carregarPedidos(usuarioId) {

    const lista = document.getElementById("listaPedidos");

    if (!lista) return;

    fetch(`${API}/api/pedidos/usuario/${usuarioId}`)

        .then(res => {

            if (!res.ok) {
                throw new Error("Erro ao buscar pedidos");
            }

            return res.json();

        })

        .then(pedidos => {

            if (!pedidos || pedidos.length === 0) {

                lista.innerHTML = `
                    <p class="text-muted">
                        Você ainda não realizou nenhum pedido.
                    </p>
                `;
                return;
            }

            lista.innerHTML = "";

            pedidos.forEach(pedido => {

                lista.innerHTML += `

                <div class="card mb-4 shadow-sm">

                    <div class="card-body">

                        <div class="d-flex justify-content-between mb-3">

                            <h5 class="mb-0">
                                Pedido #${pedido.id}
                            </h5>

                            <span class="text-muted">
                                ${formatarData(pedido.data)}
                            </span>

                        </div>

                        <ul class="list-group list-group-flush mb-3">

                            ${pedido.itens.map(item => `

                                <li class="list-group-item d-flex justify-content-between">

                                    <span>
                                        ${item.produto.nome} (x${item.quantidade})
                                    </span>

                                    <strong>
                                        R$ ${(item.preco * item.quantidade)
                                            .toFixed(2)
                                            .replace('.', ',')}
                                    </strong>

                                </li>

                            `).join("")}

                        </ul>

                        <div class="text-end">

                            <strong class="text-success">

                                Total: R$ ${pedido.total
                                    .toFixed(2)
                                    .replace('.', ',')}

                            </strong>

                        </div>

                    </div>

                </div>
                `;

            });

        })

        .catch(err => {

            console.error(err);

            lista.innerHTML = `
                <p class="text-danger">
                    Erro ao carregar pedidos.
                </p>
            `;

        });

}


// ===============================
// FORMATAR DATA
// ===============================
function formatarData(data) {

    if (!data) return "";

    const d = new Date(data);

    return d.toLocaleDateString("pt-BR") + " " +
           d.toLocaleTimeString("pt-BR");

}


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
// ANO DO RODAPÉ
// ===============================
function atualizarAnoRodape() {

    const ano = document.getElementById("anoAtual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

}
