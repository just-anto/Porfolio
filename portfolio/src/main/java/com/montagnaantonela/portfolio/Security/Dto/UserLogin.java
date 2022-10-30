package com.montagnaantonela.portfolio.Security.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author antom
 */
public class UserLogin {
    @NotBlank
    private String userName;
    @NotBlank
    private String password;
    
//Getter & Setter

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
