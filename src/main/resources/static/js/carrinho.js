const API = "http://localhost:8080/api";

// ===============================
// VERIFICA USUÁRIO LOGADO
// ===============================

let usuarioLogado = null;

try {
    usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
} catch(e){
    console.error("Erro ao ler usuarioLogado:", e);
}

if (!usuarioLogado) {

    alert("Você precisa estar logado para acessar o carrinho.");
    window.location.href = "/login";

}

// ===============================
// ELEMENTOS DA TELA
// ===============================

const tabela = document.getElementById("listaCarrinho");
const totalSpan = document.getElementById("totalCarrinho");

// pega carrinho usando storage seguro
let carrinho = CarrinhoStorage.obter();


// ===============================
// CARREGAR CARRINHO
// ===============================

function carregarCarrinho() {

    tabela.innerHTML = "";

    let total = 0;

    carrinho = CarrinhoStorage.obter();

    carrinho.forEach((p, index) => {

        const subtotal = p.preco * p.quantidade;

        total += subtotal;

        tabela.innerHTML += `

        <tr>

        <td class="d-flex align-items-center gap-3">

        <img src="/img/${p.imagem}"
             width="60"
             height="60"
             style="object-fit:cover"
             class="rounded border">

        <div>
        <strong>${p.nome}</strong>
        </div>

        </td>

        <td>
        R$ ${p.preco.toFixed(2).replace('.', ',')}
        </td>

        <td>

        <input type="number"
               min="1"
               value="${p.quantidade}"
               class="form-control w-50"
               onchange="alterarQtd(${index}, this.value)">

        </td>

        <td>

        R$ ${subtotal.toFixed(2).replace('.', ',')}

        </td>

        <td>

        <button class="btn btn-sm btn-danger"
        onclick="remover(${index})">

        <i class="bi bi-trash"></i>

        </button>

        </td>

        </tr>

        `;
    });

    totalSpan.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;

}


// ===============================
// ALTERAR QUANTIDADE
// ===============================

function alterarQtd(index, quantidade) {

    carrinho[index].quantidade = Number(quantidade);

    CarrinhoStorage.salvar(carrinho);

    carregarCarrinho();

    atualizarBadgeCarrinho();

}


// ===============================
// REMOVER ITEM
// ===============================

function remover(index) {

    carrinho.splice(index, 1);

    CarrinhoStorage.salvar(carrinho);

    carregarCarrinho();

    atualizarBadgeCarrinho();

}


// ===============================
// BADGE DO CARRINHO
// ===============================

function atualizarBadgeCarrinho() {

    const badge = document.getElementById("badgeCarrinho");

    if (!badge) return;

    const carrinho = CarrinhoStorage.obter();

    const total = carrinho.reduce((soma, item) => {

        return soma + item.quantidade;

    }, 0);

    badge.textContent = total;

}


// ===============================
// FINALIZAR COMPRA
// ===============================

const btnFinalizar = document.getElementById("btnFinalizar");

if(btnFinalizar){
    btnFinalizar.addEventListener("click", finalizarPedido);
}

function finalizarPedido(){

const carrinho = CarrinhoStorage.obter();

if(carrinho.length === 0){

alert("Carrinho vazio");
return;

}

if(!usuarioLogado){

alert("Faça login para finalizar a compra");
window.location.href="/login";
return;

}

let total = 0;

const itens = carrinho.map(p => {

const preco = Number(p.preco);
const quantidade = Number(p.quantidade);

total += preco * quantidade;

return {

quantidade: quantidade,
preco: preco,

produto: {
id: p.id
}

};

});

const pedido = {

usuario: {
id: usuarioLogado.id
},

total: total,

itens: itens

};

fetch(API + "/pedidos", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify(pedido)

})

.then(res => {

if(!res.ok){
throw new Error("Erro ao finalizar pedido");
}

return res.json();

})

.then(() => {

alert("Pedido realizado com sucesso!");

CarrinhoStorage.limpar();

atualizarBadgeCarrinho();

window.location.href="/meusPedidos";

})

.catch(err => {

console.error(err);

alert("Erro ao finalizar pedido");

});

}


// ===============================
// INICIALIZAÇÃO
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    carregarCarrinho();

    atualizarBadgeCarrinho();

});