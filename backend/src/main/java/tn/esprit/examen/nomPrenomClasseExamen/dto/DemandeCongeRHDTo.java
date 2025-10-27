package tn.esprit.examen.nomPrenomClasseExamen.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class DemandeCongeRHDTo {
    private Long id;
    private String matricule;
    private String nomComplet;
    private String service;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateDebut;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateFin;

    private String motif;
    private Integer nbJours;
    private String statutActuel;
    private String typeConge;

    // Constructeur par défaut
    public DemandeCongeRHDTo() {}

    // Constructeur complet
    public DemandeCongeRHDTo(Long id, String matricule, String nomComplet, String service,
                            LocalDate dateDebut, LocalDate dateFin, String motif,
                            Integer nbJours, String statutActuel, String typeConge) {
        this.id = id;
        this.matricule = matricule;
        this.nomComplet = nomComplet;
        this.service = service;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.motif = motif;
        this.nbJours = nbJours;
        this.statutActuel = statutActuel;
        this.typeConge = typeConge;
    }
}