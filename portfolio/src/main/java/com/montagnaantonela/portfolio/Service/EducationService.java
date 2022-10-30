package com.montagnaantonela.portfolio.Service;

import com.montagnaantonela.portfolio.Entity.Education;
import com.montagnaantonela.portfolio.Repository.EducationRepository;
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
public class EducationService {
    @Autowired
    EducationRepository educationRepository;

    public List<Education> list() {
        return educationRepository.findAll();
    }

    public Optional<Education> getOne(int id) {
        return educationRepository.findById(id);
    }

    public Optional<Education> getByNameE(String nameE) {
        return educationRepository.findByNameE(nameE);
    }

    public void save(Education edu) {
        educationRepository.save(edu);
    }

    public void delete(int id) {
        educationRepository.deleteById(id);
    }

    public boolean existsById(int id) {
        return educationRepository.existsById(id);
    }

    public boolean existsByNameE(String nameE) {
        return educationRepository.existsByNameE(nameE);
    }
}
