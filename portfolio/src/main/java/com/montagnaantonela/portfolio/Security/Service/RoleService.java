package com.montagnaantonela.portfolio.Security.Service;

import com.montagnaantonela.portfolio.Security.Entity.Role;
import com.montagnaantonela.portfolio.Security.Enums.RoleName;
import com.montagnaantonela.portfolio.Security.Repository.IRoleRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author antom
 */
@Service
@Transactional
public class RoleService {
    @Autowired
    IRoleRepository iroleRepository;

    public Optional<Role> getByRoleName(RoleName roleName) {
        return iroleRepository.findByRoleName(roleName);
    }

    public void save(Role role) {
        iroleRepository.save(role);
    }
}
