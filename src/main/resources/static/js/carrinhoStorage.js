const CarrinhoStorage = {

obter(){

try{

const dados = localStorage.getItem("carrinho");

return dados ? JSON.parse(dados) : [];

}catch(e){

console.error("Carrinho corrompido");

localStorage.removeItem("carrinho");

return [];

}

},

    salvar(carrinho){

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

    },

    adicionar(produto){

        const carrinho = this.obter();

        const item = carrinho.find(p => p.id === produto.id);

        if(item){

            item.quantidade++;

        }else{

            carrinho.push({
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                imagem: produto.imagem,
                quantidade: 1
            });

        }

        this.salvar(carrinho);

        return carrinho;

    },

    remover(id){

        let carrinho = this.obter();

        carrinho = carrinho.filter(p => p.id !== id);

        this.salvar(carrinho);

        return carrinho;

    },

    limpar(){

        localStorage.removeItem("carrinho");

    }

};


