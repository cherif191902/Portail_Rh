package tn.esprit.examen.nomPrenomClasseExamen.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * DTO pour l'affectation hiérarchique d'un employé
 */
@Getter
@Setter
public class AffectationHierarchiqueDto {
    private Integer employeId;
    private Integer chefAId;
    private Integer chefBId;
    private Integer rhResponsableId;

    public AffectationHierarchiqueDto() {}

    public AffectationHierarchiqueDto(Integer employeId, Integer chefAId, Integer chefBId, Integer rhResponsableId) {
        this.employeId = employeId;
        this.chefAId = chefAId;
        this.chefBId = chefBId;
        this.rhResponsableId = rhResponsableId;
    }
}