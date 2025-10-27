package tn.esprit.examen.nomPrenomClasseExamen.entities;

/**
 * Énumération représentant les différents statuts d'une demande de congé
 * dans le workflow de validation hiérarchique
 */
public enum StatutConge {
    EN_ATTENTE_CHEF_A("En attente de validation Chef A"),
    EN_ATTENTE_CHEF_B("En attente de validation Chef B"),
    EN_ATTENTE_RH("En attente de validation RH"),
    VALIDE("Validé"),
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
     * Détermine si le statut correspond à une validation finale
     */
    public boolean isValide() {
        return this == VALIDE;
    }

    /**
     * Détermine si la demande est terminée (validée ou refusée)
     */
    public boolean isTermine() {
        return isValide() || isRefuse();
    }

    /**
     * Détermine le prochain statut selon le rôle et la décision
     */
    public static StatutConge getNextStatus(StatutConge currentStatus, String decision, String role) {
        if ("REFUSER".equalsIgnoreCase(decision)) {
            switch (currentStatus) {
                case EN_ATTENTE_CHEF_A:
                    return REFUSE_PAR_CHEF_A;
                case EN_ATTENTE_CHEF_B:
                    return REFUSE_PAR_CHEF_B;
                case EN_ATTENTE_RH:
                    return REFUSE_PAR_RH;
                default:
                    throw new IllegalArgumentException("Impossible de refuser à partir du statut: " + currentStatus);
            }
        } else if ("APPROUVER".equalsIgnoreCase(decision)) {
            switch (currentStatus) {
                case EN_ATTENTE_CHEF_A:
                    return EN_ATTENTE_CHEF_B;
                case EN_ATTENTE_CHEF_B:
                    return EN_ATTENTE_RH;
                case EN_ATTENTE_RH:
                    return VALIDE;
                default:
                    throw new IllegalArgumentException("Impossible d'approuver à partir du statut: " + currentStatus);
            }
        } else {
            throw new IllegalArgumentException("Décision invalide: " + decision);
        }
    }
}