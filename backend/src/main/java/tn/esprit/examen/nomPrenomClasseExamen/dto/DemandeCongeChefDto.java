package tn.esprit.examen.nomPrenomClasseExamen.dto;

import java.time.LocalDate;

/**
 * DTO pour les demandes de congé affichées au chef
 */
public class DemandeCongeChefDto {
    
    private Integer idConge;
    private String nom;
    private String prenom;
    private String matricule;
    private LocalDate dateDeb;
    private LocalDate dateFin;
    private String motif;
    private Integer nbJours;
    private String statutConge;
    private String repChefsNiveau1;
    private Integer soldeConge;
    private String typeCongeLibelle;
    private LocalDate dateCreation;
    
    // Constructeurs
    public DemandeCongeChefDto() {}
    
    // Getters et Setters
    public Integer getIdConge() {
        return idConge;
    }
    
    public void setIdConge(Integer idConge) {
        this.idConge = idConge;
    }
    
    public String getNom() {
        return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public String getPrenom() {
        return prenom;
    }
    
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
    
    public String getMatricule() {
        return matricule;
    }
    
    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }
    
    public LocalDate getDateDeb() {
        return dateDeb;
    }
    
    public void setDateDeb(LocalDate dateDeb) {
        this.dateDeb = dateDeb;
    }
    
    public LocalDate getDateFin() {
        return dateFin;
    }
    
    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }
    
    public String getMotif() {
        return motif;
    }
    
    public void setMotif(String motif) {
        this.motif = motif;
    }
    
    public Integer getNbJours() {
        return nbJours;
    }
    
    public void setNbJours(Integer nbJours) {
        this.nbJours = nbJours;
    }
    
    public String getStatutConge() {
        return statutConge;
    }
    
    public void setStatutConge(String statutConge) {
        this.statutConge = statutConge;
    }
    
    public String getRepChefsNiveau1() {
        return repChefsNiveau1;
    }
    
    public void setRepChefsNiveau1(String repChefsNiveau1) {
        this.repChefsNiveau1 = repChefsNiveau1;
    }
    
    public Integer getSoldeConge() {
        return soldeConge;
    }
    
    public void setSoldeConge(Integer soldeConge) {
        this.soldeConge = soldeConge;
    }
    
    public String getTypeCongeLibelle() {
        return typeCongeLibelle;
    }
    
    public void setTypeCongeLibelle(String typeCongeLibelle) {
        this.typeCongeLibelle = typeCongeLibelle;
    }
    
    public LocalDate getDateCreation() {
        return dateCreation;
    }
    
    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }
    
    @Override
    public String toString() {
        return "DemandeCongeChefDto{" +
                "idConge=" + idConge +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", matricule='" + matricule + '\'' +
                ", dateDeb=" + dateDeb +
                ", dateFin=" + dateFin +
                ", motif='" + motif + '\'' +
                ", nbJours=" + nbJours +
                ", statutConge='" + statutConge + '\'' +
                ", repChefsNiveau1='" + repChefsNiveau1 + '\'' +
                '}';
    }
}