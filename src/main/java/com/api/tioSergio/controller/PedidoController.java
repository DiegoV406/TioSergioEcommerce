
package com.api.tioSergio.controller;


import com.api.tioSergio.data.PedidoEntity;
import com.api.tioSergio.data.UsuarioEntity;
import com.api.tioSergio.service.PedidoService;
import com.api.tioSergio.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/pedidos")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PedidoController {

    private final PedidoService pedidoService;
    private final UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> criarPedido(@RequestBody PedidoEntity pedido) {

        PedidoEntity salvo = pedidoService.criarPedido(pedido);

        return ResponseEntity.ok(Map.of(
                "id", salvo.getId(),
                "mensagem", "Pedido criado com sucesso"
        ));
    }

    @GetMapping
    public List<PedidoEntity> listarPedidos(){

        return pedidoService.listarPedidos();
    }

    @GetMapping("/{id}")
    public PedidoEntity buscarPedido(@PathVariable Long id){

        return pedidoService.buscarPorId(id);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<PedidoEntity> listarPedidosUsuario(
            @PathVariable Long usuarioId){

        UsuarioEntity usuario = usuarioService.buscarPorId(usuarioId);

        return pedidoService.listarPedidosUsuario(usuario);
    }
}
