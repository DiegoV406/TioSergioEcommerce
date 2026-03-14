package com.api.tioSergio.controller;

import com.api.tioSergio.data.ProdutoEntity;
import com.api.tioSergio.repository.ProdutoRepository;
import com.api.tioSergio.service.ProdutoService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
public class PageController {

    private final ProdutoService produtoService;
    private final ProdutoRepository produtoRepository;

    // ===============================
    // PÁGINA PRODUTOS + FILTROS
    // ===============================
    @GetMapping("/produtos")
    public String paginaProdutos(
            @RequestParam(required = false) String categorias,
            @RequestParam(required = false) Double precoMin,
            @RequestParam(required = false) Double precoMax,
            Model model){

        List<ProdutoEntity> produtos = produtoRepository.findAll();

        if (categorias != null && !categorias.isEmpty()) {
            produtos = produtos.stream()
                    .filter(p -> p.getCategoria() != null &&
                            p.getCategoria().getNome().equalsIgnoreCase(categorias))
                    .toList();
        }

        if (precoMin != null) {
            produtos = produtos.stream()
                    .filter(p -> p.getPreco() >= precoMin)
                    .toList();
        }

        if (precoMax != null) {
            produtos = produtos.stream()
                    .filter(p -> p.getPreco() <= precoMax)
                    .toList();
        }

        model.addAttribute("produtos", produtos);

        return "produtos";
    }

    // ===============================
    // PÁGINA INÍCIO
    // ===============================
    @GetMapping("/inicio")
    public String paginaInicio(Model model) {

        model.addAttribute("produtos", produtoService.listarProdutos());

        return "inicio";
    }
    
    
    // ===============================
    // PÁGINA DETALHES
    // ===============================
    @GetMapping("/detalhes")
    public String paginaDetalhes(
            @RequestParam Long id,
            Model model) {

        ProdutoEntity produto = produtoService.buscarPorId(id);

        model.addAttribute("produto", produto);

        return "detalhes";
    }
    
    
    // ===============================
    // PÁGINA CADASTRO
    // ===============================
    @GetMapping("/cadastro")
    public String paginaCadastro() {
        return "cadastro";
}
    
    // ===============================
    // PÁGINA LOGIN
    // ===============================
    @GetMapping("/login")
    public String paginaLogin() {
        return "login";
    }
    
    // ===============================
    // PÁGINA CARRINHO
    // ===============================
    @GetMapping("/carrinho")
    public String paginaCarrinho() {
        return "carrinho";
    }
    
    // ===============================
    // PÁGINA MEUS PEDIDOS
    // ===============================
    @GetMapping("/meusPedidos")
    public String paginaMeusPedidos() {
        return "meusPedidos";
    }

}
