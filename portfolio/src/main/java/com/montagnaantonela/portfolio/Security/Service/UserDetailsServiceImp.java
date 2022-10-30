package com.montagnaantonela.portfolio.Security.Service;

import com.montagnaantonela.portfolio.Security.Entity.Admin;
import com.montagnaantonela.portfolio.Security.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author antom
 */
@Service
public class UserDetailsServiceImp implements UserDetailsService{

    @Autowired
    UserService userService;

    @Override
     public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userService.getByUserName(userName).get();
        return Admin.build(user);
    }
    
}
