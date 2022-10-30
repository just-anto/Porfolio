package com.montagnaantonela.portfolio.Security.Repository;

import com.montagnaantonela.portfolio.Security.Entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author antom
 */
@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUserName(String userName);

    boolean existsByUserName(String userName);

    boolean existsByEmail(String email);

    public void save(com.montagnaantonela.portfolio.Entity.Users user);
    
}
