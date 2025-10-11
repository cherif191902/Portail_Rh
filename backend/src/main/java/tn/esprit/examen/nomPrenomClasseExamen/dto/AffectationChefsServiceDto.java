package tn.esprit.examen.nomPrenomClasseExamen.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/**
 * DTO pour l'affectation des Chef A et Chef B à un service
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AffectationChefsServiceDto {
    
    private Integer chefAId;
    private Integer chefBId;
    
    /**
     * Validation : Chef A et Chef B ne peuvent pas être la même personne
     */
    public boolean isValid() {
        if (chefAId == null && chefBId == null) {
            return true; // OK de ne pas affecter de chefs
        }
        if (chefAId != null && chefBId != null) {
            return !chefAId.equals(chefBId); // Ils doivent être différents
        }
        return true; // OK si seulement un des deux est défini
    }
    
    @Override
    public String toString() {
        return "AffectationChefsServiceDto{" +
                "chefAId=" + chefAId +
                ", chefBId=" + chefBId +
                '}';
    }
}