
package com.api.tioSergio.service;

import com.api.tioSergio.data.ProdutoEntity;
import com.api.tioSergio.repository.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProdutoService {

    private final ProdutoRepository produtoRepository;

    public List<ProdutoEntity> listarProdutos() {
        return produtoRepository.findAll();
    }

    public ProdutoEntity buscarPorId(Long id) {

        Optional<ProdutoEntity> produto = produtoRepository.findById(id);

        return produto.orElseThrow(() ->
                new RuntimeException("Produto não encontrado"));
    }

    public ProdutoEntity salvarProduto(ProdutoEntity produto) {
        return produtoRepository.save(produto);
    }

    public ProdutoEntity atualizarProduto(Long id, ProdutoEntity produtoAtualizado) {

        ProdutoEntity produto = buscarPorId(id);

        produto.setNome(produtoAtualizado.getNome());
        produto.setModelo(produtoAtualizado.getModelo());
        produto.setAno(produtoAtualizado.getAno());
        produto.setLado(produtoAtualizado.getLado());
        produto.setPreco(produtoAtualizado.getPreco());
        produto.setDescricao(produtoAtualizado.getDescricao());
        produto.setImagem(produtoAtualizado.getImagem());
        produto.setCategoria(produtoAtualizado.getCategoria());

        return produtoRepository.save(produto);
    }

    public void deletarProduto(Long id) {

        ProdutoEntity produto = buscarPorId(id);

        produtoRepository.delete(produto);
    }
}
