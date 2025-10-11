package tn.esprit.examen.nomPrenomClasseExamen.entities;

/**
 * Énumération pour les rôles du système
 */
public enum ERole {
    ROLE_USER,          // Utilisateur standard (Employé)
    ROLE_CHEF_A,        // Chef de niveau A (premier niveau de validation)
    ROLE_CHEF_B,        // Chef de niveau B (second niveau de validation)
    ROLE_CHEF_SERVICE,  // Chef de service (compatible avec ancien système)
    ROLE_RH,            // Ressources Humaines (validation finale)
    ROLE_ADMIN          // Administrateur système
}
