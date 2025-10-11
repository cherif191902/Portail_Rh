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
    
    // Nouveau statut unifié du workflow
    @Enumerated(EnumType.STRING)
    @Column(name = "statut_conge")
    private StatutConge statutConge = StatutConge.EN_ATTENTE_CHEF_A; // Statut initial
    
    // Informations de validation
    private LocalDateTime dateValidationChefA;
    private LocalDateTime dateValidationChefB;
    private LocalDateTime dateValidationRH;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "validateur_chef_a_id")
    private Personnel validateurChefA;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "validateur_chef_b_id")
    private Personnel validateurChefB;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "validateur_rh_id")
    private Personnel validateurRH;
    
    // Anciens champs (conservés pour compatibilité temporaire)
    @Deprecated
    private String repChefsNiveau1; // APPROUVE, REFUSE, EN_ATTENTE
    @Deprecated
    private String repChefsNiveau2; // APPROUVE, REFUSE, EN_ATTENTE
    @Deprecated
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
        this.statutConge = StatutConge.EN_ATTENTE_CHEF_A; // Statut initial
        // Anciens champs pour compatibilité
        this.repChefsNiveau1 = "EN_ATTENTE";
        this.repChefsNiveau2 = "EN_ATTENTE";
        this.repRh = "EN_ATTENTE";
    }
    
    // Méthodes utilitaires pour le nouveau workflow
    public boolean isEnAttenteValidation() {
        return statutConge != null && statutConge.isEnAttente();
    }
    
    public boolean isApprouve() {
        return statutConge != null && statutConge.isApprouve();
    }
    
    public boolean isRefuse() {
        return statutConge != null && statutConge.isRefuse();
    }
    
    public boolean isTermine() {
        return statutConge != null && statutConge.isTermine();
    }
    
    /**
     * Détermine si l'utilisateur connecté peut valider cette demande selon son rôle
     */
    public boolean peutEtreValideePar(ERole role) {
        if (statutConge == null) return false;
        
        switch (role) {
            case ROLE_CHEF_A:
                return statutConge == StatutConge.EN_ATTENTE_CHEF_A;
            case ROLE_CHEF_B:
                return statutConge == StatutConge.EN_ATTENTE_CHEF_B;
            case ROLE_CHEF_SERVICE:
                // Chef Service peut valider aux niveaux A et B (compatibilité)
                return statutConge == StatutConge.EN_ATTENTE_CHEF_A || statutConge == StatutConge.EN_ATTENTE_CHEF_B;
            case ROLE_RH:
                return statutConge == StatutConge.EN_ATTENTE_RH;
            case ROLE_ADMIN:
                return statutConge.isEnAttente(); // L'admin peut valider à n'importe quel niveau
            default:
                return false;
        }
    }
    
    // Méthodes utilitaires (anciennes - conservées pour compatibilité)
    @Deprecated
    public boolean isApprovedByChef1() {
        return "APPROUVE".equals(repChefsNiveau1);
    }
    
    @Deprecated
    public boolean isApprovedByChef2() {
        return "APPROUVE".equals(repChefsNiveau2);
    }
    
    @Deprecated
    public boolean isApprovedByRh() {
        return "APPROUVE".equals(repRh);
    }
    
    @Deprecated
    public boolean isFullyApproved() {
        return isApprovedByChef1() && isApprovedByChef2() && isApprovedByRh();
    }
    
    @Deprecated
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
