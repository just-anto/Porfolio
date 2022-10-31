package com.montagnaantonela.portfolio.Security.Service;

import com.montagnaantonela.portfolio.Security.Entity.User;
import com.montagnaantonela.portfolio.Security.Repository.IUserRepository;
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
public class UserService {
    @Autowired
    IUserRepository iuserRepository;

    public Optional<User> getByUserName(String userName) {
        return iuserRepository.findByUserName(userName);
    }

    public boolean existsByUserName(String userName) {
        return iuserRepository.existsByUserName(userName);
    }

    public boolean existsByEmail(String email) {
        return iuserRepository.existsByEmail(email);
    }

    public void save(User user) {
        iuserRepository.save(user);
    }
}
