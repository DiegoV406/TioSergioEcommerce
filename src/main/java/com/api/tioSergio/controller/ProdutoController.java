
package com.api.tioSergio.controller;

import com.api.tioSergio.data.ProdutoEntity;
import com.api.tioSergio.repository.ProdutoRepository;
import com.api.tioSergio.service.ProdutoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.ui.Model;

@RestController
@RequestMapping("/api/produtos")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProdutoController {

    
    
    private final ProdutoService produtoService;
    private final ProdutoRepository produtoRepository;
    
    @GetMapping("/api/produtos")
    public String listarProdutos(
            @RequestParam(required = false) String categoria,
            Model model) {

        List<ProdutoEntity> produtos;

        if (categoria != null && !categoria.isEmpty()) {
            produtos = produtoRepository.findByCategoriaNomeIgnoreCase(categoria);
        } else {
            produtos = produtoRepository.findAll();
        }

        model.addAttribute("produtos", produtos);

        return "produtos";
    }

    @GetMapping("/{id}")
    public ProdutoEntity buscarProduto(@PathVariable Long id){
        return produtoService.buscarPorId(id);
    }

    @PostMapping
    public ProdutoEntity cadastrarProduto(
            @RequestBody @Valid ProdutoEntity produto){

        return produtoService.salvarProduto(produto);
    }

    @PutMapping("/{id}")
    public ProdutoEntity atualizarProduto(
            @PathVariable Long id,
            @RequestBody ProdutoEntity produto){

        return produtoService.atualizarProduto(id, produto);
    }

    @DeleteMapping("/{id}")
    public void deletarProduto(@PathVariable Long id){
        produtoService.deletarProduto(id);
    }
    
    
}

