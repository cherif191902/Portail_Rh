package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.examen.nomPrenomClasseExamen.entities.*;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

/**
 * Service centralisé pour la gestion des affectations de chefs
 * Implémente la logique complète selon spécifications :
 * - Remplacement de chef
 * - Inversion Chef A ↔ Chef B  
 * - Suppression avec réinitialisation
 * - RH unique pour tous les services
 * - Mise à jour automatique des congés
 */
@Service
@Transactional
public class AffectationChefService {

    private static final Logger logger = LoggerFactory.getLogger(AffectationChefService.class);

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private PersonnelRepository personnelRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private CongeRepository congeRepository;

    /**
     * Méthode principale : affecterChef(Long serviceId, Long personnelId, String role)
     * Gère automatiquement tous les cas spéciaux selon spécifications
     */
    public String affecterChef(Long serviceId, Long personnelId, String role) {
        logger.info("🔄 Début affectation - Service: {}, Personnel: {}, Role: {}", serviceId, personnelId, role);
        
        try {
            // 1. Validations
            if (!"ROLE_CHEF_A".equals(role) && !"ROLE_CHEF_B".equals(role)) {
                throw new IllegalArgumentException("Le rôle doit être ROLE_CHEF_A ou ROLE_CHEF_B");
            }

            // 2. Récupérer les entités
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = getServiceById(serviceId);
            Personnel nouveauChef = getPersonnelById(personnelId.intValue());

            // 3. Vérifier appartenance au service
            if (!nouveauChef.getService().getIdService().equals(serviceId)) {
                throw new RuntimeException("Le personnel doit appartenir au même service pour être promu chef");
            }

            // 4. Analyser la situation et exécuter l'action appropriée
            return analyserEtExecuterAffectation(service, nouveauChef, role);

        } catch (Exception e) {
            logger.error("❌ Erreur affectation: {}", e.getMessage());
            throw new RuntimeException("Erreur lors de l'affectation du chef: " + e.getMessage(), e);
        }
    }

    /**
     * Suppression d'un chef : NULL dans service + ROLE_USER + mise à jour congés
     */
    public String supprimerChef(Long serviceId, String role) {
        logger.info("🗑️ Début suppression - Service: {}, Role: {}", serviceId, role);
        
        try {
            // 1. Validation
            if (!"ROLE_CHEF_A".equals(role) && !"ROLE_CHEF_B".equals(role)) {
                throw new IllegalArgumentException("Le rôle doit être ROLE_CHEF_A ou ROLE_CHEF_B");
            }

            // 2. Récupérer le service
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = getServiceById(serviceId);

            // 3. Identifier le chef à supprimer
            Personnel chefASupprimer = null;
            if ("ROLE_CHEF_A".equals(role)) {
                chefASupprimer = service.getChefA();
                if (chefASupprimer == null) {
                    return "Aucun Chef A n'est affecté à ce service.";
                }
            } else {
                chefASupprimer = service.getChefB();
                if (chefASupprimer == null) {
                    return "Aucun Chef B n'est affecté à ce service.";
                }
            }

            // 4. Exécuter la suppression complète
            return executerSuppressionChef(service, chefASupprimer, role);

        } catch (Exception e) {
            logger.error("❌ Erreur suppression: {}", e.getMessage());
            throw new RuntimeException("Erreur lors de la suppression du chef: " + e.getMessage(), e);
        }
    }

    /**
     * Inscription d'un nouveau personnel avec RH unique automatique
     */
    public void inscrireNouveauPersonnel(Personnel nouveauPersonnel, Long serviceId) {
        logger.info("👤 Inscription nouveau personnel - Service: {}", serviceId);
        
        try {
            // 1. Affecter au service
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = getServiceById(serviceId);
            nouveauPersonnel.setService(service);

            // 2. Assigner le RH unique global à tous les services
            assignerRhUniqueGlobal();

            // 3. Sauvegarder
            personnelRepository.save(nouveauPersonnel);
            
            logger.info("✅ Personnel inscrit avec RH unique assigné");

        } catch (Exception e) {
            logger.error("❌ Erreur inscription: {}", e.getMessage());
            throw new RuntimeException("Erreur lors de l'inscription: " + e.getMessage(), e);
        }
    }

    // ========== MÉTHODES PRIVÉES - LOGIQUE MÉTIER ==========

    /**
     * Analyser la situation et choisir l'action : remplacement, inversion, affectation simple
     */
    private String analyserEtExecuterAffectation(tn.esprit.examen.nomPrenomClasseExamen.entities.Service service, 
                                               Personnel nouveauChef, String role) {
        
        Personnel chefA = service.getChefA();
        Personnel chefB = service.getChefB();
        String nomNouveauChef = nouveauChef.getPrenom() + " " + nouveauChef.getNom();

        // CAS 1: Inversion Chef A ↔ Chef B
        if (("ROLE_CHEF_A".equals(role) && chefB != null && chefB.getId().equals(nouveauChef.getId())) ||
            ("ROLE_CHEF_B".equals(role) && chefA != null && chefA.getId().equals(nouveauChef.getId()))) {
            
            return executerInversionChefs(service, chefA, chefB);
        }

        // CAS 2: Remplacement du chef existant
        if ("ROLE_CHEF_A".equals(role) && chefA != null && !chefA.getId().equals(nouveauChef.getId())) {
            return executerRemplacementChef(service, chefA, nouveauChef, "ROLE_CHEF_A");
        }
        
        if ("ROLE_CHEF_B".equals(role) && chefB != null && !chefB.getId().equals(nouveauChef.getId())) {
            return executerRemplacementChef(service, chefB, nouveauChef, "ROLE_CHEF_B");
        }

        // CAS 3: Affectation simple (poste vacant)
        return executerAffectationSimple(service, nouveauChef, role);
    }

    /**
     * CAS SPÉCIAL: Inversion Chef A ↔ Chef B avec échange des rôles
     */
    private String executerInversionChefs(tn.esprit.examen.nomPrenomClasseExamen.entities.Service service, 
                                        Personnel chefA, Personnel chefB) {
        logger.info("🔄 Inversion des chefs A ↔ B");

        // 1. Échanger les rôles
        changerRolePersonnel(chefA, ERole.ROLE_CHEF_A, ERole.ROLE_CHEF_B);
        changerRolePersonnel(chefB, ERole.ROLE_CHEF_B, ERole.ROLE_CHEF_A);

        // 2. Échanger dans le service
        service.setChefA(chefB);
        service.setChefB(chefA);
        serviceRepository.save(service);

        // 3. Mettre à jour les congés
        mettreAJourCongesApresInversion(chefA.getId(), chefB.getId());

        String nomChefA = chefA.getPrenom() + " " + chefA.getNom();
        String nomChefB = chefB.getPrenom() + " " + chefB.getNom();
        
        return String.format("Les rôles Chef A et Chef B ont été inversés avec succès. %s est maintenant Chef A et %s est Chef B dans le service %s.", 
                           nomChefB, nomChefA, service.getNomService());
    }

    /**
     * Remplacement d'un chef existant
     */
    private String executerRemplacementChef(tn.esprit.examen.nomPrenomClasseExamen.entities.Service service, 
                                          Personnel ancienChef, Personnel nouveauChef, String role) {
        logger.info("🔀 Remplacement chef {} par {}", ancienChef.getId(), nouveauChef.getId());

        String nomAncienChef = ancienChef.getPrenom() + " " + ancienChef.getNom();
        String nomNouveauChef = nouveauChef.getPrenom() + " " + nouveauChef.getNom();
        String roleLibelle = role.replace("ROLE_", "").replace("_", " ");

        // 1. Réinitialiser l'ancien chef → ROLE_USER
        ERole ancienRole = "ROLE_CHEF_A".equals(role) ? ERole.ROLE_CHEF_A : ERole.ROLE_CHEF_B;
        changerRolePersonnel(ancienChef, ancienRole, ERole.ROLE_USER);

        // 2. Promouvoir le nouveau chef
        changerRolePersonnel(nouveauChef, ERole.ROLE_USER, ancienRole);

        // 3. Mettre à jour le service
        if ("ROLE_CHEF_A".equals(role)) {
            service.setChefA(nouveauChef);
        } else {
            service.setChefB(nouveauChef);
        }
        serviceRepository.save(service);

        // 4. Mettre à jour les congés
        mettreAJourCongesApresRemplacement(ancienChef.getId(), nouveauChef.getId(), role);

        return String.format("%s remplacé avec succès par %s dans le service %s.", 
                           roleLibelle + " " + nomAncienChef, nomNouveauChef, service.getNomService());
    }

    /**
     * Affectation simple sur poste vacant
     */
    private String executerAffectationSimple(tn.esprit.examen.nomPrenomClasseExamen.entities.Service service, 
                                           Personnel nouveauChef, String role) {
        logger.info("➕ Affectation simple sur poste vacant");

        String nomNouveauChef = nouveauChef.getPrenom() + " " + nouveauChef.getNom();
        String roleLibelle = role.replace("ROLE_", "").replace("_", " ");

        // 1. Promouvoir le personnel
        ERole nouveauRole = "ROLE_CHEF_A".equals(role) ? ERole.ROLE_CHEF_A : ERole.ROLE_CHEF_B;
        changerRolePersonnel(nouveauChef, ERole.ROLE_USER, nouveauRole);

        // 2. Mettre à jour le service
        if ("ROLE_CHEF_A".equals(role)) {
            service.setChefA(nouveauChef);
        } else {
            service.setChefB(nouveauChef);
        }
        serviceRepository.save(service);

        // 3. Mettre à jour les congés du service
        mettreAJourCongesServicePourNouveauChef(service.getIdService(), nouveauChef.getId(), role);

        return String.format("%s %s affecté avec succès comme %s du service %s.", 
                           nomNouveauChef, "a été", roleLibelle, service.getNomService());
    }

    /**
     * Suppression complète d'un chef
     */
    private String executerSuppressionChef(tn.esprit.examen.nomPrenomClasseExamen.entities.Service service, 
                                         Personnel chef, String role) {
        String nomChef = chef.getPrenom() + " " + chef.getNom();
        String roleLibelle = role.replace("ROLE_", "").replace("_", " ");

        // 1. Réinitialiser le rôle → ROLE_USER
        ERole ancienRole = "ROLE_CHEF_A".equals(role) ? ERole.ROLE_CHEF_A : ERole.ROLE_CHEF_B;
        changerRolePersonnel(chef, ancienRole, ERole.ROLE_USER);

        // 2. Mettre à NULL dans le service
        if ("ROLE_CHEF_A".equals(role)) {
            service.setChefA(null);
        } else {
            service.setChefB(null);
        }
        serviceRepository.save(service);

        // 3. Mettre à jour les congés (validateur → NULL)
        mettreAJourCongesApresSuppressionChef(chef.getId(), role);

        return String.format("Le %s %s a été supprimé et réinitialisé comme utilisateur standard.", 
                           roleLibelle, nomChef);
    }

    // ========== MÉTHODES UTILITAIRES ==========

    /**
     * Récupérer un service par ID avec gestion d'erreur
     */
    private tn.esprit.examen.nomPrenomClasseExamen.entities.Service getServiceById(Long serviceId) {
        Optional<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> serviceOpt = serviceRepository.findById(serviceId);
        if (serviceOpt.isEmpty()) {
            throw new RuntimeException("Service non trouvé avec l'ID: " + serviceId);
        }
        return serviceOpt.get();
    }

    /**
     * Récupérer un personnel par ID avec gestion d'erreur
     */
    private Personnel getPersonnelById(Integer personnelId) {
        Optional<Personnel> personnelOpt = personnelRepository.findById(personnelId);
        if (personnelOpt.isEmpty()) {
            throw new RuntimeException("Personnel non trouvé avec l'ID: " + personnelId);
        }
        return personnelOpt.get();
    }

    /**
     * Changer le rôle d'un personnel
     */
    private void changerRolePersonnel(Personnel personnel, ERole ancienRole, ERole nouveauRole) {
        // Récupérer/créer les rôles
        Role roleAncien = obtenirOuCreerRole(ancienRole);
        Role roleNouveau = obtenirOuCreerRole(nouveauRole);

        // Mettre à jour les rôles
        if (personnel.getRoles() == null) {
            personnel.setRoles(new java.util.HashSet<>());
        }

        personnel.getRoles().removeIf(role -> role.getNomRole() == ancienRole);
        personnel.getRoles().add(roleNouveau);
        
        personnelRepository.save(personnel);
        logger.info("✅ Rôle changé: {} → {} pour personnel {}", ancienRole, nouveauRole, personnel.getId());
    }

    /**
     * Obtenir ou créer un rôle
     */
    private Role obtenirOuCreerRole(ERole eRole) {
        Optional<Role> roleOpt = roleRepository.findByNomRole(eRole);
        return roleOpt.orElseGet(() -> roleRepository.save(new Role(eRole)));
    }

    /**
     * Assigner un RH unique global à tous les services
     */
    private void assignerRhUniqueGlobal() {
        try {
            // Rechercher le RH principal (première occurrence avec ROLE_RH dans les rôles)
            List<Personnel> tousPersonnels = personnelRepository.findAll();
            Personnel rhUnique = null;
            
            for (Personnel personnel : tousPersonnels) {
                if (personnel.getRoles() != null && 
                    personnel.getRoles().stream().anyMatch(role -> role.getNomRole() == ERole.ROLE_RH)) {
                    rhUnique = personnel;
                    break;
                }
            }
            
            if (rhUnique != null) {
                // Assigner ce RH à tous les services
                List<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> tousServices = serviceRepository.findAll();
                for (tn.esprit.examen.nomPrenomClasseExamen.entities.Service service : tousServices) {
                    if (service.getRhResponsable() == null) {
                        service.setRhResponsable(rhUnique);
                        serviceRepository.save(service);
                    }
                }
                
                logger.info("✅ RH unique {} assigné à tous les services", rhUnique.getId());
            }
        } catch (Exception e) {
            logger.error("⚠️ Erreur assignation RH unique: {}", e.getMessage());
        }
    }

    // ========== GESTION DES CONGÉS ==========

    /**
     * Mise à jour des congés après inversion des chefs
     */
    private void mettreAJourCongesApresInversion(Integer ancienChefAId, Integer ancienChefBId) {
        try {
            // Congés validés par ancien Chef A → nouveau Chef B
            List<Conge> congesChefA = congeRepository.findByValidateurChefAId(ancienChefAId);
            for (Conge conge : congesChefA) {
                conge.setValidateurChefB(personnelRepository.findById(ancienChefAId).orElse(null));
                conge.setValidateurChefA(personnelRepository.findById(ancienChefBId).orElse(null));
                congeRepository.save(conge);
            }

            // Congés validés par ancien Chef B → nouveau Chef A
            List<Conge> congesChefB = congeRepository.findByValidateurChefBId(ancienChefBId);
            for (Conge conge : congesChefB) {
                conge.setValidateurChefA(personnelRepository.findById(ancienChefBId).orElse(null));
                conge.setValidateurChefB(personnelRepository.findById(ancienChefAId).orElse(null));
                congeRepository.save(conge);
            }
            
            logger.info("✅ Congés mis à jour après inversion");
        } catch (Exception e) {
            logger.error("⚠️ Erreur mise à jour congés inversion: {}", e.getMessage());
        }
    }

    /**
     * Mise à jour des congés après remplacement
     */
    private void mettreAJourCongesApresRemplacement(Integer ancienChefId, Integer nouveauChefId, String role) {
        try {
            if ("ROLE_CHEF_A".equals(role)) {
                List<Conge> conges = congeRepository.findByValidateurChefAId(ancienChefId);
                for (Conge conge : conges) {
                    conge.setValidateurChefA(personnelRepository.findById(nouveauChefId).orElse(null));
                    congeRepository.save(conge);
                }
            } else {
                List<Conge> conges = congeRepository.findByValidateurChefBId(ancienChefId);
                for (Conge conge : conges) {
                    conge.setValidateurChefB(personnelRepository.findById(nouveauChefId).orElse(null));
                    congeRepository.save(conge);
                }
            }
            
            logger.info("✅ Congés mis à jour après remplacement");
        } catch (Exception e) {
            logger.error("⚠️ Erreur mise à jour congés remplacement: {}", e.getMessage());
        }
    }

    /**
     * Mise à jour des congés après suppression (→ NULL)
     */
    private void mettreAJourCongesApresSuppressionChef(Integer chefId, String role) {
        try {
            if ("ROLE_CHEF_A".equals(role)) {
                List<Conge> conges = congeRepository.findByValidateurChefAId(chefId);
                for (Conge conge : conges) {
                    conge.setValidateurChefA(null);
                    congeRepository.save(conge);
                }
            } else {
                List<Conge> conges = congeRepository.findByValidateurChefBId(chefId);
                for (Conge conge : conges) {
                    conge.setValidateurChefB(null);
                    congeRepository.save(conge);
                }
            }
            
            logger.info("✅ Congés mis à jour après suppression (NULL)");
        } catch (Exception e) {
            logger.error("⚠️ Erreur mise à jour congés suppression: {}", e.getMessage());
        }
    }

    /**
     * Mise à jour des congés pour nouveau chef sur poste vacant
     */
    private void mettreAJourCongesServicePourNouveauChef(Long serviceId, Integer nouveauChefId, String role) {
        try {
            // Récupérer tous les congés du service en attente
            List<StatutConge> statutsEnCours = List.of(
                StatutConge.EN_ATTENTE_CHEF_A, 
                StatutConge.EN_ATTENTE_CHEF_B, 
                StatutConge.EN_ATTENTE_RH
            );
            
            List<Conge> congesService = congeRepository.findByServiceAndStatutIn(serviceId, statutsEnCours);
            
            for (Conge conge : congesService) {
                if ("ROLE_CHEF_A".equals(role)) {
                    conge.setValidateurChefA(personnelRepository.findById(nouveauChefId).orElse(null));
                } else {
                    conge.setValidateurChefB(personnelRepository.findById(nouveauChefId).orElse(null));
                }
                congeRepository.save(conge);
            }
            
            logger.info("✅ Congés du service mis à jour pour nouveau chef");
        } catch (Exception e) {
            logger.error("⚠️ Erreur mise à jour congés nouveau chef: {}", e.getMessage());
        }
    }

    /**
     * Vérifier la cohérence globale du système
     */
    public List<String> verifierCoherenceGlobale() {
        List<String> incoherences = new java.util.ArrayList<>();
        
        try {
            // Vérifier que tous les services ont le même RH
            List<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> services = serviceRepository.findAll();
            Personnel rhReference = null;
            
            for (tn.esprit.examen.nomPrenomClasseExamen.entities.Service service : services) {
                if (rhReference == null && service.getRhResponsable() != null) {
                    rhReference = service.getRhResponsable();
                } else if (service.getRhResponsable() != null && 
                          !service.getRhResponsable().getId().equals(rhReference.getId())) {
                    incoherences.add("Service " + service.getNomService() + " n'a pas le même RH que les autres");
                }
                
                // Vérifier que les chefs appartiennent au service
                if (service.getChefA() != null && 
                    !service.getChefA().getService().getIdService().equals(service.getIdService())) {
                    incoherences.add("Chef A du service " + service.getNomService() + " n'appartient pas au service");
                }
                
                if (service.getChefB() != null && 
                    !service.getChefB().getService().getIdService().equals(service.getIdService())) {
                    incoherences.add("Chef B du service " + service.getNomService() + " n'appartient pas au service");
                }
            }
            
        } catch (Exception e) {
            incoherences.add("Erreur lors de la vérification: " + e.getMessage());
        }
        
        return incoherences;
    }
}