package tn.esprit.examen.nomPrenomClasseExamen.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CongeRequestDto {
    private String typeConge;
    
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateDebut;
    
    @JsonFormat(pattern = "yyyy-MM-dd")  
    private LocalDate dateFin;
    
    private Integer duree;
    private String commentaire;
    
    // Constructeur par défaut
    public CongeRequestDto() {}
}