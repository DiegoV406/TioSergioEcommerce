
package com.api.tioSergio.repository;

import com.api.tioSergio.data.ProdutoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoEntity, Long> {

    List<ProdutoEntity> findByNomeContainingIgnoreCase(String nome);

    List<ProdutoEntity> findByModeloContainingIgnoreCase(String modelo);

    List<ProdutoEntity> findByCategoriaNomeIgnoreCase(String nome);

}