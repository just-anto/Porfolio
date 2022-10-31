package com.montagnaantonela.portfolio.Repository;

import com.montagnaantonela.portfolio.Entity.Education;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author antom
 */
@Repository
public interface EducationRepository extends JpaRepository<Education, Integer> {

    public Optional<Education> findByNameE(String nameE);

    public boolean existsByNameE(String nameE);
    
}
