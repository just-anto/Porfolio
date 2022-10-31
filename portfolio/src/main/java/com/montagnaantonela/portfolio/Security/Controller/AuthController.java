package com.montagnaantonela.portfolio.Security.Controller;

import com.montagnaantonela.portfolio.Security.Dto.JwtDto;
import com.montagnaantonela.portfolio.Security.Dto.NewUser;
import com.montagnaantonela.portfolio.Security.Dto.UserLogin;
import com.montagnaantonela.portfolio.Security.Entity.Role;
import com.montagnaantonela.portfolio.Security.Entity.User;
import com.montagnaantonela.portfolio.Security.Enums.RoleName;
import com.montagnaantonela.portfolio.Security.Jwt.JwtProvider;
import com.montagnaantonela.portfolio.Security.Service.RoleService;
import com.montagnaantonela.portfolio.Security.Service.UserService;
import java.util.HashSet;
import java.util.Set;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author antom
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin (origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserService userService;
    @Autowired
    RoleService roleService;
    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/new")
    public ResponseEntity<?> nuevo(@Valid @RequestBody NewUser newUser, BindingResult bindingResult){
        if(bindingResult.hasErrors())
            return new ResponseEntity(new Message("Nombre o email invalido"),HttpStatus.BAD_REQUEST);
        
        if(userService.existsByUserName(newUser.getUserName()))
            return new ResponseEntity(new Message("Ese nombre de usuario ya existe"), HttpStatus.BAD_REQUEST);
        
        if(userService.existsByEmail(newUser.getEmail()))
            return new ResponseEntity(new Message("Ese email ya existe"), HttpStatus.BAD_REQUEST);
        
        User user = new User(newUser.getName(), newUser.getUserName(),
            newUser.getEmail(), passwordEncoder.encode(newUser.getPassword()));
        
        Set<Role> roles = new HashSet<>();
        roles.add(roleService.getByRoleName(RoleName.ROLE_USER).get());
        
        if(newUser.getRole().contains("admin"))
            roles.add(roleService.getByRoleName(RoleName.ROLE_ADMIN).get());
        user.setRole(roles);
        userService.save(user);
        
        return new ResponseEntity(new Message("Usuario guardado"),HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody UserLogin userLogin,BindingResult bindingResult){
    if (bindingResult.hasErrors()) 
            return new ResponseEntity(new Message("Campos mal puestos"), HttpStatus.BAD_REQUEST);

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLogin.getUserName(), userLogin.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateToken(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());

    return new ResponseEntity(jwtDto, HttpStatus.OK);

    }
}
