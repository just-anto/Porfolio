package com.montagnaantonela.portfolio.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author antom
 */
public class DtoSkills {
    @NotBlank
    private String name;
@NotBlank
    private int porcentage;

//Construtor

    public DtoSkills() {
    }

    public DtoSkills(String name, int porcentage) {
        this.name = name;
        this.porcentage = porcentage;
    }

//getter & setter

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPorcentage() {
        return porcentage;
    }

    public void setPorcentage(int porcentage) {
        this.porcentage = porcentage;
    }
}
