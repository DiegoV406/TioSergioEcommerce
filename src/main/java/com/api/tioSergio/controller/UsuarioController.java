
package com.api.tioSergio.controller;

import com.api.tioSergio.data.UsuarioEntity;
import com.api.tioSergio.service.UsuarioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping("/cadastro")
    public ResponseEntity<UsuarioEntity> cadastrarUsuario(
            @RequestBody @Valid UsuarioEntity usuario){

        UsuarioEntity novoUsuario = usuarioService.cadastrarUsuario(usuario);

        return ResponseEntity.ok(novoUsuario);
    }

    @PostMapping("/login")
    public ResponseEntity<UsuarioEntity> login(@RequestBody UsuarioEntity dados) {

        UsuarioEntity usuario
                = usuarioService.login(dados.getEmail(), dados.getSenha());

        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioEntity> buscarUsuario(@PathVariable Long id){

        UsuarioEntity usuario = usuarioService.buscarPorId(id);

        return ResponseEntity.ok(usuario);
    }
}

