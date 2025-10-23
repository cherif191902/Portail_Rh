package tn.esprit.examen.nomPrenomClasseExamen.entities;

/**
 * Énumération représentant les différents statuts d'une demande de congé
 * dans le workflow de validation hiérarchique
 */
public enum StatutConge {
    EN_ATTENTE_CHEF_A("En attente de validation Chef A"),
    APPROUVE_PAR_CHEF_A("Approuvé par Chef A"),
    EN_ATTENTE_CHEF_B("En attente de validation Chef B"),
    APPROUVE_PAR_CHEF_B("Approuvé par Chef B"),
    EN_ATTENTE_RH("En attente de validation RH"),
    APPROUVE_PAR_RH("Approuvé par RH"),
    REFUSE_PAR_CHEF_A("Refusé par Chef A"),
    REFUSE_PAR_CHEF_B("Refusé par Chef B"),
    REFUSE_PAR_RH("Refusé par RH");

    private final String libelle;

    StatutConge(String libelle) {
        this.libelle = libelle;
    }

    public String getLibelle() {
        return libelle;
    }

    @Override
    public String toString() {
        return libelle;
    }
}