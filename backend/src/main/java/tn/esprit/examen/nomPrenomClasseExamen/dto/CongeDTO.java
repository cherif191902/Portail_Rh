package tn.esprit.examen.nomPrenomClasseExamen.dto;

import lombok.Data;
import tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge;
import java.time.LocalDate;

@Data
public class CongeDTO {
    private Long idConge;
    private LocalDate dateCong;
    private LocalDate dateDeb;
    private LocalDate dateFin;
    private String motif;
    private String commentaire;
    private int nbJours;
    private StatutConge statutConge;
    private String statut; // Pour compatibilité frontend
    private LocalDate dateValidationChefA;
    private LocalDate dateValidationChefB;
    private LocalDate dateValidationRh;
    
    // Personnel information (simplified)
    private PersonnelSimpleDTO personnel;
    private PersonnelSimpleDTO validateurChefA;
    private PersonnelSimpleDTO validateurChefB;
    private PersonnelSimpleDTO validateurRh;
    
    // Type de congé
    private TypeCongeSimpleDTO typeConge;
    
    @Data
    public static class PersonnelSimpleDTO {
        private Integer id;
        private String nom;
        private String prenom;
        private String matriculeP;
        private String poste;
        private String email;
        
        // Service simplifié
        private ServiceSimpleDTO service;
        
        @Data
        public static class ServiceSimpleDTO {
            private Long idService;
            private String nomService;
        }
    }
    
    @Data
    public static class TypeCongeSimpleDTO {
        private Long idTypeConge;
        private String nomTypeConge;
        private String description;
        private int dureeMax;
    }
}