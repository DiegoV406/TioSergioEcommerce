function comprarProduto(btn){

const produto = {

id: Number(btn.dataset.id),
nome: btn.dataset.nome,
preco: Number(btn.dataset.preco),
imagem: btn.dataset.imagem

};

CarrinhoStorage.adicionar(produto);

atualizarBadgeCarrinho();

window.location.href="/carrinho";

}