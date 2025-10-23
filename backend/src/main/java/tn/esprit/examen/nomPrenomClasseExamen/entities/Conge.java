package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "roles", "conges", "notifications", "service", "password", "email"})
    private Personnel personnel;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "type_conge_id", nullable = false)
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private TypeConge typeConge;
    
    // Validateurs (relations avec Personnel)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "validateur_chef_a_id")
    @JsonIgnore
    private Personnel validateurChefA;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "validateur_chef_b_id")
    @JsonIgnore
    private Personnel validateurChefB;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "validateur_rh_id")
    @JsonIgnore
    private Personnel validateurRh;
    
    // Dates de validation
    private LocalDateTime dateValidationChefA;
    private LocalDateTime dateValidationChefB;
    private LocalDateTime dateValidationRh;
    
    // Statut global de la demande (pour faciliter les requêtes)
    @Enumerated(EnumType.STRING)
    private StatutConge statutConge;
    
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
        this.statutConge = StatutConge.EN_ATTENTE_CHEF_A;
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
    
    // Méthodes utilitaires pour le nouveau workflow
    public boolean isEnAttenteChefA() {
        return StatutConge.EN_ATTENTE_CHEF_A.equals(statutConge);
    }
    
    public boolean isEnAttenteChefB() {
        return StatutConge.EN_ATTENTE_CHEF_B.equals(statutConge);
    }
    
    public boolean isEnAttenteRH() {
        return StatutConge.EN_ATTENTE_RH.equals(statutConge);
    }
    
    public boolean isFullyApprovedNew() {
        return StatutConge.APPROUVE_PAR_RH.equals(statutConge);
    }
    
    public boolean isRejectedNew() {
        return statutConge == StatutConge.REFUSE_PAR_CHEF_A || 
               statutConge == StatutConge.REFUSE_PAR_CHEF_B || 
               statutConge == StatutConge.REFUSE_PAR_RH;
    }
    
    public String getStatutLibelle() {
        return statutConge != null ? statutConge.getLibelle() : "Inconnu";
    }
    
    // Méthodes d'aide pour l'API (éviter d'exposer tout l'objet Personnel)
    @com.fasterxml.jackson.annotation.JsonProperty("personnelMatricule")
    public String getPersonnelMatricule() {
        return personnel != null ? personnel.getMatriculeP() : null;
    }
    
    @com.fasterxml.jackson.annotation.JsonProperty("personnelNomComplet")
    public String getPersonnelNomComplet() {
        return personnel != null ? personnel.getNom() + " " + personnel.getPrenom() : null;
    }
    
    @com.fasterxml.jackson.annotation.JsonProperty("typeCongeLibelle")
    public String getTypeCongeLibelle() {
        return typeConge != null ? typeConge.getNomTypeconge() : null;
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
