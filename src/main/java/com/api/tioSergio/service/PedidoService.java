
package com.api.tioSergio.service;

import com.api.tioSergio.data.PedidoEntity;
import com.api.tioSergio.data.UsuarioEntity;
import com.api.tioSergio.repository.PedidoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PedidoService {

    private final PedidoRepository pedidoRepository;

    public PedidoEntity criarPedido(PedidoEntity pedido) {

    pedido.setData(LocalDateTime.now());

    
    if(pedido.getItens() != null){

        pedido.getItens().forEach(item -> {
            item.setPedido(pedido);
        });

    }

    return pedidoRepository.save(pedido);
}

    public List<PedidoEntity> listarPedidos() {
        return pedidoRepository.findAll();
    }

    public List<PedidoEntity> listarPedidosUsuario(UsuarioEntity usuario) {

        return pedidoRepository.findByUsuario(usuario);
    }

    public PedidoEntity buscarPorId(Long id) {

        return pedidoRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Pedido não encontrado"));
    }
}
