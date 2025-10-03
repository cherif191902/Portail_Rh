package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "conges")
public class Conge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idConge;
    
    @Column(nullable = false)
    private LocalDate dateCong; // Date de la demande
    
    @Column(nullable = false)
    private LocalDate dateDeb; // Date de début du congé
    
    @Column(nullable = false)
    private LocalDate dateFin; // Date de fin du congé
    
    private String nbJours; // Nombre de jours demandés
    
    private Long soldeConge; // Solde de congés restant
    
    // Réponses des différents niveaux
    private String repChefsNiveau1; // APPROUVE, REFUSE, EN_ATTENTE
    private String repChefsNiveau2; // APPROUVE, REFUSE, EN_ATTENTE
    private String repRh; // APPROUVE, REFUSE, EN_ATTENTE
    
    // Informations du demandeur (dénormalisées pour faciliter les requêtes)
    private String nom;
    private String prenom;
    
    private String motif; // Motif de la demande
    private String commentaire; // Commentaire éventuel
    
    // Relations
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "personnel_id", nullable = false)
    @JsonIgnore
    private Personnel personnel;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "type_conge_id", nullable = false)
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private TypeConge typeConge;
    
    // Constructeurs
    public Conge() {}
    
    public Conge(LocalDate dateCong, LocalDate dateDeb, LocalDate dateFin, String nbJours, String motif) {
        this.dateCong = dateCong;
        this.dateDeb = dateDeb;
        this.dateFin = dateFin;
        this.nbJours = nbJours;
        this.motif = motif;
        this.repChefsNiveau1 = "EN_ATTENTE";
        this.repChefsNiveau2 = "EN_ATTENTE";
        this.repRh = "EN_ATTENTE";
    }
    
    // Méthodes utilitaires
    public boolean isApprovedByChef1() {
        return "APPROUVE".equals(repChefsNiveau1);
    }
    
    public boolean isApprovedByChef2() {
        return "APPROUVE".equals(repChefsNiveau2);
    }
    
    public boolean isApprovedByRh() {
        return "APPROUVE".equals(repRh);
    }
    
    public boolean isFullyApproved() {
        return isApprovedByChef1() && isApprovedByChef2() && isApprovedByRh();
    }
    
    public boolean isRejected() {
        return "REFUSE".equals(repChefsNiveau1) || 
               "REFUSE".equals(repChefsNiveau2) || 
               "REFUSE".equals(repRh);
    }
    
    @Override
    public String toString() {
        return "Conge{" +
                "idConge=" + idConge +
                ", dateDeb=" + dateDeb +
                ", dateFin=" + dateFin +
                ", nbJours='" + nbJours + '\'' +
                ", motif='" + motif + '\'' +
                '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Conge)) return false;
        Conge conge = (Conge) o;
        return idConge != null && idConge.equals(conge.idConge);
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
