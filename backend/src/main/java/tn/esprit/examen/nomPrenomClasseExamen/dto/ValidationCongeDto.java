package tn.esprit.examen.nomPrenomClasseExamen.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * DTO pour les actions de validation/refus de congés
 */
@Getter
@Setter
public class ValidationCongeDto {
    private String commentaire; // Commentaire optionnel du validateur
    private String action; // "VALIDER" ou "REFUSER"
    
    public ValidationCongeDto() {}
    
    public ValidationCongeDto(String action, String commentaire) {
        this.action = action;
        this.commentaire = commentaire;
    }
    
    public boolean isValidation() {
        return "VALIDER".equalsIgnoreCase(action);
    }
    
    public boolean isRefus() {
        return "REFUSER".equalsIgnoreCase(action);
    }
}