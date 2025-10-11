package tn.esprit.examen.nomPrenomClasseExamen.entities;

/**
 * Énumération pour les différents statuts d'une demande de congé
 * dans le workflow de validation à plusieurs niveaux
 */
public enum StatutConge {
    EN_ATTENTE_CHEF_A("En attente de validation Chef A"),
    EN_ATTENTE_CHEF_B("En attente de validation Chef B"), 
    EN_ATTENTE_RH("En attente de validation RH"),
    APPROUVE("Approuvé"),
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

    /**
     * Détermine si le statut correspond à un état d'attente
     */
    public boolean isEnAttente() {
        return this == EN_ATTENTE_CHEF_A || this == EN_ATTENTE_CHEF_B || this == EN_ATTENTE_RH;
    }

    /**
     * Détermine si le statut correspond à un refus
     */
    public boolean isRefuse() {
        return this == REFUSE_PAR_CHEF_A || this == REFUSE_PAR_CHEF_B || this == REFUSE_PAR_RH;
    }

    /**
     * Détermine si le statut correspond à une approbation finale
     */
    public boolean isApprouve() {
        return this == APPROUVE;
    }

    /**
     * Détermine si la demande est terminée (approuvée ou refusée)
     */
    public boolean isTermine() {
        return isApprouve() || isRefuse();
    }
}