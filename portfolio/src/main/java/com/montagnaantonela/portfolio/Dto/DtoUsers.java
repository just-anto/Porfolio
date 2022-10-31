package com.montagnaantonela.portfolio.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author antom
 */
public class DtoUsers {
    @NotBlank
    private String name;
    @NotBlank
    private String lastname;
    @NotBlank
    private String description;
    @NotBlank
    private String img;

//constructor

    public DtoUsers() {
    }

    public DtoUsers(String name, String lastname, String description, String img) {
        this.name = name;
        this.lastname = lastname;
        this.description = description;
        this.img = img;
    }

//getter & setter

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
