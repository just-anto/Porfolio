package com.montagnaantonela.portfolio.Repository;

import com.montagnaantonela.portfolio.Entity.Experience;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author antom
 */
@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Integer> {

    public Optional<Experience> findByNameE(String nameE);

    public boolean existsByNameE(String nameE);
    
}
