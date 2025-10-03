package tn.esprit.examen.nomPrenomClasseExamen.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class DemandeCongeDto {
    private Long id;
    private String typeConge;
    
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateDebut;
    
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateFin;
    
    private Integer duree;
    private String statut;
    
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateDemande;
    
    private String commentaire;
    private String motifRefus;
    
    // Constructeur par défaut
    public DemandeCongeDto() {}
    
    // Constructeur avec tous les champs
    public DemandeCongeDto(Long id, String typeConge, LocalDate dateDebut, LocalDate dateFin, 
                          Integer duree, String statut, LocalDate dateDemande, String commentaire) {
        this.id = id;
        this.typeConge = typeConge;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.duree = duree;
        this.statut = statut;
        this.dateDemande = dateDemande;
        this.commentaire = commentaire;
    }
}