package tn.esprit.examen.nomPrenomClasseExamen.dto;

/**
 * DTO pour la validation des congés dans le workflow hiérarchique
 * chef_a → chef_b → RH
 */
public class ValidationCongeDto {
    
    private String action; // "APPROUVER" ou "REFUSER"
    private String commentaire; // Commentaire optionnel du validateur
    
    // Constructeurs
    public ValidationCongeDto() {}
    
    public ValidationCongeDto(String action, String commentaire) {
        this.action = action;
        this.commentaire = commentaire;
    }
    
    // Getters et Setters
    public String getAction() {
        return action;
    }
    
    public void setAction(String action) {
        this.action = action;
    }
    
    public String getCommentaire() {
        return commentaire;
    }
    
    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }
    
    // Méthodes utilitaires
    public boolean estApprobation() {
        return "APPROUVER".equalsIgnoreCase(action);
    }
    
    public boolean estRefus() {
        return "REFUSER".equalsIgnoreCase(action);
    }
    
    @Override
    public String toString() {
        return "ValidationCongeDto{" +
                "action='" + action + '\'' +
                ", commentaire='" + commentaire + '\'' +
                '}';
    }
}