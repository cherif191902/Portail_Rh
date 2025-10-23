package tn.esprit.examen.nomPrenomClasseExamen.entities;

/**
 * Énumération pour les rôles du système
 * Note: ROLE_CHEF_SERVICE supprimé - utiliser ROLE_CHEF_A ou ROLE_CHEF_B
 */
public enum ERole {
    ROLE_USER,          // Utilisateur standard
    ROLE_CHEF_A,        // Chef de niveau A (premier niveau)
    ROLE_CHEF_B,        // Chef de niveau B (deuxième niveau) 
    ROLE_RH,            // Ressources Humaines
    ROLE_ADMIN          // Administrateur système
}
