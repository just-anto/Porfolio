package com.montagnaantonela.portfolio.Service;


import com.montagnaantonela.portfolio.Entity.Users;
import com.montagnaantonela.portfolio.Repository.IUsersRepository;
import java.util.List;
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
public class ImpUsersService {
    @Autowired
    IUsersRepository iuserRepository;

public List<Users> list() {
        return iuserRepository.findAll();
    }

    public Optional<Users> getOne(int id) {
        return iuserRepository.findById(id);
    }

    public Optional<Users> getByName(String name) {
        return iuserRepository.findByName(name);
    }

    public void save(Users users) {
        iuserRepository.save(users);
    }

    public void delete(int id) {
        iuserRepository.deleteById(id);
    }

    public boolean existsById(int id) {
        return iuserRepository.existsById(id);
    }

    public boolean existsByName(String name) {
        return iuserRepository.existsByName(name);
    }
}
