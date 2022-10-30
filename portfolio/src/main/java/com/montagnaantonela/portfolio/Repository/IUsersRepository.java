package com.montagnaantonela.portfolio.Repository;

import com.montagnaantonela.portfolio.Entity.Users;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author antom
 */
@Repository
public interface IUsersRepository extends JpaRepository<Users, Integer> {

    public Optional<Users> findByName(String name);
    public boolean existsByName(String name);
    
}
