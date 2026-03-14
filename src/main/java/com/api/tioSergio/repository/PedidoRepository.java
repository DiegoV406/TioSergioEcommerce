
package com.api.tioSergio.repository;

import com.api.tioSergio.data.PedidoEntity;
import com.api.tioSergio.data.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<PedidoEntity, Long> {

    List<PedidoEntity> findByUsuario(UsuarioEntity usuario);

}
