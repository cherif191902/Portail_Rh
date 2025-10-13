package tn.esprit.examen.nomPrenomClasseExamen.dto;

public class AffectationChefRequest {
    private Long serviceId;
    private Integer chefId;
    private String typeChef; // "CHEF_A" ou "CHEF_B"

    // Constructeurs
    public AffectationChefRequest() {}

    public AffectationChefRequest(Long serviceId, Integer chefId, String typeChef) {
        this.serviceId = serviceId;
        this.chefId = chefId;
        this.typeChef = typeChef;
    }

    // Getters et Setters
    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public Integer getChefId() {
        return chefId;
    }

    public void setChefId(Integer chefId) {
        this.chefId = chefId;
    }

    public String getTypeChef() {
        return typeChef;
    }

    public void setTypeChef(String typeChef) {
        this.typeChef = typeChef;
    }
}