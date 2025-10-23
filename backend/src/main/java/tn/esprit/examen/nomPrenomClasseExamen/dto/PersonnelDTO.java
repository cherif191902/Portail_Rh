package tn.esprit.examen.nomPrenomClasseExamen.dto;

import lombok.Data;
import java.util.Set;

@Data
public class PersonnelDTO {
    private Integer id;
    private String email;
    private String matriculeP;
    private String nom;
    private String prenom;
    private String department;
    private int numTel;
    private String poste;
    private Integer niveau;
    
    // Service information (simplified)
    private ServiceSimpleDTO service;
    
    // Roles (simplified)
    private Set<String> roles;
    
    // Chef information (simplified)
    private PersonnelSimpleDTO chefA;
    private PersonnelSimpleDTO chefB;
    private PersonnelSimpleDTO responsable;
    private PersonnelSimpleDTO rhResponsable;
    
    @Data
    public static class ServiceSimpleDTO {
        private Long idService;
        private String nomService;
        private String libService;
    }
    
    @Data
    public static class PersonnelSimpleDTO {
        private Integer id;
        private String nom;
        private String prenom;
        private String matriculeP;
        private String poste;
    }
}