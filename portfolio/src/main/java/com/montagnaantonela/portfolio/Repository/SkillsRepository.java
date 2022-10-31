package com.montagnaantonela.portfolio.Repository;

import com.montagnaantonela.portfolio.Entity.Skills;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author antom
 */
public interface SkillsRepository extends JpaRepository<Skills, Integer> {

    Optional<Skills> findByName(String name);

    public boolean existsByName(String name);
    
}
