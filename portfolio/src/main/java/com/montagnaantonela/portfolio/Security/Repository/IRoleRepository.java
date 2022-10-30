package com.montagnaantonela.portfolio.Security.Repository;

import com.montagnaantonela.portfolio.Security.Entity.Role;
import com.montagnaantonela.portfolio.Security.Enums.RoleName;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author antom
 */
@Repository
public interface IRoleRepository extends JpaRepository<Role, Integer>{
    Optional<Role> findByRoleName(RoleName roleName);
    
}
