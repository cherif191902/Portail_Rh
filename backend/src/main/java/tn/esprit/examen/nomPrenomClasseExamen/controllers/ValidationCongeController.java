package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import tn.esprit.examen.nomPrenomClasseExamen.dto.ValidationCongeDto;
import tn.esprit.examen.nomPrenomClasseExamen.dto.CongeDTO;
import tn.esprit.examen.nomPrenomClasseExamen.dto.PersonnelMapper;

import java.util.Map;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CongeRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.services.ValidationCongeService;

import java.util.List;
import java.util.Optional;

/**
 * Contrôleur pour la gestion de la validation hiérarchique des congés
 * selon le workflow : chef_a → chef_b → RH
 */
@RestController
@RequestMapping("/api/conge/validation")
@CrossOrigin(origins = "http://localhost:4200")
public class ValidationCongeController {

    private static final Logger logger = LoggerFactory.getLogger(ValidationCongeController.class);

    @Autowired
    private ValidationCongeService validationCongeService;

    @Autowired
    private CongeRepository congeRepository;

    @Autowired
    private PersonnelRepository personnelRepository;

    /**
     * Récupère l'utilisateur connecté
     */
    private Optional<Personnel> getCurrentPersonnel() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null) return Optional.empty();
        
        String matricule = auth.getName();
        return personnelRepository.findByMatriculeP(matricule);
    }

    // ========== ENDPOINTS POUR CHEF A ==========

    /**
     * Récupère les demandes en attente de validation par Chef A
     */
    @GetMapping("/chef-a/pending")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('ADMIN')")
    public ResponseEntity<?> getPendingForChefA() {
        logger.info("📋 Récupération des demandes en attente pour Chef A");
        
        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            logger.warn("⚠️ Utilisateur connecté non trouvé");
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        Personnel chefA = currentUser.get();
        logger.info("🔍 Chef A connecté: ID={}, Matricule={}, Nom={} {}", 
                   chefA.getId(), chefA.getMatriculeP(), chefA.getNom(), chefA.getPrenom());

        try {
            // Log avant la requête pour debug
            logger.info("🔍 Exécution requête: findPendingForChefAWithDetails avec chefId = {}", chefA.getId());
            
            // Debug: vérifier d'abord toutes les demandes EN_ATTENTE_CHEF_A
            List<Conge> toutesDemandesEnAttente = congeRepository.findByStatutConge(tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge.EN_ATTENTE_CHEF_A);
            logger.info("📊 Total demandes EN_ATTENTE_CHEF_A dans la DB: {}", toutesDemandesEnAttente.size());
            
            for (Conge c : toutesDemandesEnAttente) {
                logger.info("🔸 Demande ID: {}, ValidateurChefA: {}, Statut: {}, Employé: {}", 
                    c.getIdConge(), 
                    c.getValidateurChefA() != null ? c.getValidateurChefA().getId() + " (" + c.getValidateurChefA().getNom() + ")" : "NULL",
                    c.getStatutConge(),
                    c.getPersonnelNomComplet());
            }
            
            // Filtrer sur validateur_chef_a_id = utilisateur connecté ET statut = EN_ATTENTE_CHEF_A
            List<Conge> demandes = congeRepository.findPendingForChefAWithDetails(chefA.getId());
            
            logger.info("✅ {} demandes trouvées pour Chef A (ID: {}) après filtrage", demandes.size(), chefA.getId());
            
            // Log détaillé des demandes filtrées
            for (Conge c : demandes) {
                logger.info("✅ Demande retournée - ID: {}, Employé: {}, Période: {} -> {}, Statut: {}, ValidateurChefA: {}", 
                    c.getIdConge(),
                    c.getPersonnelNomComplet(), 
                    c.getDateDeb(), c.getDateFin(), c.getStatutConge(),
                    c.getValidateurChefA() != null ? c.getValidateurChefA().getId() + " (" + c.getValidateurChefA().getNom() + ")" : "NULL");
            }
            
            return ResponseEntity.ok(demandes);
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des demandes Chef A: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body("Erreur lors de la récupération des demandes: " + e.getMessage());
        }
    }

    /**
     * Valide ou refuse une demande en tant que Chef A
     */
    @PostMapping("/{congeId}/chef-a")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('ADMIN')")
    public ResponseEntity<?> validationChefA(@PathVariable Long congeId, @RequestBody ValidationCongeDto validationDto) {
        logger.info("🔍 Validation Chef A pour congé ID: {} - Action: {}", congeId, validationDto.getAction());

        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            Conge congeValide = validationCongeService.validerConge(congeId, currentUser.get().getMatriculeP(), validationDto);
            logger.info("✅ Validation Chef A réussie pour congé ID: {}", congeId);
            return ResponseEntity.ok(congeValide);
        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Erreur de validation Chef A: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            logger.error("❌ Erreur inattendue lors de la validation Chef A: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la validation");
        }
    }

    // ========== ENDPOINTS POUR CHEF B ==========

    /**
     * Récupère les demandes en attente de validation par Chef B
     */
    @GetMapping("/chef-b/pending")
    @PreAuthorize("hasRole('CHEF_B') or hasRole('ADMIN')")
    public ResponseEntity<?> getPendingForChefB() {
        logger.info("📋 Récupération des demandes en attente pour Chef B");
        
        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            List<Conge> demandes = congeRepository.findPendingForChefB(currentUser.get().getId());
            logger.info("✅ {} demandes trouvées pour Chef B", demandes.size());
            return ResponseEntity.ok(demandes);
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des demandes Chef B: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la récupération des demandes");
        }
    }

    /**
     * Valide ou refuse une demande en tant que Chef B
     */
    @PostMapping("/{congeId}/chef-b")
    @PreAuthorize("hasRole('CHEF_B') or hasRole('ADMIN')")
    public ResponseEntity<?> validationChefB(@PathVariable Long congeId, @RequestBody ValidationCongeDto validationDto) {
        logger.info("🔍 Validation Chef B pour congé ID: {} - Action: {}", congeId, validationDto.getAction());

        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            Conge congeValide = validationCongeService.validerConge(congeId, currentUser.get().getMatriculeP(), validationDto);
            logger.info("✅ Validation Chef B réussie pour congé ID: {}", congeId);
            return ResponseEntity.ok(congeValide);
        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Erreur de validation Chef B: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            logger.error("❌ Erreur inattendue lors de la validation Chef B: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la validation");
        }
    }

    // ========== ENDPOINTS POUR RH ==========

    /**
     * Récupère les demandes en attente de validation par RH
     */
    @GetMapping("/rh/pending")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getPendingForRh() {
        logger.info("📋 Récupération des demandes en attente pour RH");
        
        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            // Les RH peuvent voir toutes les demandes en attente de validation RH
            List<Conge> demandes = congeRepository.findAllPendingForRh();
            logger.info("✅ {} demandes trouvées pour RH", demandes.size());
            return ResponseEntity.ok(demandes);
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des demandes RH: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la récupération des demandes");
        }
    }

    /**
     * Valide ou refuse une demande en tant que RH
     */
    @PostMapping("/{congeId}/rh")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> validationRh(@PathVariable Long congeId, @RequestBody ValidationCongeDto validationDto) {
        logger.info("🔍 Validation RH pour congé ID: {} - Action: {}", congeId, validationDto.getAction());

        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            Conge congeValide = validationCongeService.validerConge(congeId, currentUser.get().getMatriculeP(), validationDto);
            logger.info("✅ Validation RH réussie pour congé ID: {}", congeId);
            return ResponseEntity.ok(congeValide);
        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Erreur de validation RH: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            logger.error("❌ Erreur inattendue lors de la validation RH: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la validation");
        }
    }

    // ========== ENDPOINTS GÉNÉRIQUES ==========

    /**
     * Récupère les demandes selon le rôle de l'utilisateur connecté
     */
    @GetMapping("/my-pending")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getMyPendingDemandes() {
        logger.info("📋 Récupération des demandes en attente pour l'utilisateur connecté");
        
        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            List<Conge> demandes = List.of();
            Personnel user = currentUser.get();
            
            // Déterminer le type de demandes selon le rôle
            if (user.getRoles().stream().anyMatch(r -> r.getNomRole().name().equals("ROLE_RH"))) {
                demandes = congeRepository.findAllPendingForRh();
            } else if (user.getRoles().stream().anyMatch(r -> r.getNomRole().name().equals("ROLE_CHEF_B"))) {
                demandes = congeRepository.findPendingForChefB(user.getId());
            } else if (user.getRoles().stream().anyMatch(r -> r.getNomRole().name().equals("ROLE_CHEF_A"))) {
                demandes = congeRepository.findPendingForChefA(user.getId());
            }
            
            logger.info("✅ {} demandes trouvées pour l'utilisateur", demandes.size());
            
            // Utiliser le mapper pour éviter les références circulaires
            PersonnelMapper mapper = new PersonnelMapper();
            List<CongeDTO> demandesDTOs = mapper.toCongeDTOList(demandes);
            
            return ResponseEntity.ok(demandesDTOs);
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des demandes: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la récupération des demandes");
        }
    }

    /**
     * Récupère l'historique des validations effectuées par l'utilisateur connecté
     */
    @GetMapping("/my-history")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getMyHistory() {
        logger.info("📋 Récupération de l'historique des validations");
        
        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            List<Conge> historique = congeRepository.findHistoriqueByValidator(currentUser.get().getId());
            logger.info("✅ {} demandes dans l'historique", historique.size());
            return ResponseEntity.ok(historique);
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération de l'historique: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la récupération de l'historique");
        }
    }

    /**
     * Endpoint de test pour vérifier les services et leurs responsables
     */
    @GetMapping("/diagnostic/services")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> diagnosticServices() {
        logger.info("🔍 Diagnostic des services et responsables");
        
        try {
            // Récupérer tous les services avec leurs responsables
            List<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> services = 
                personnelRepository.findAll().stream()
                    .map(Personnel::getService)
                    .filter(java.util.Objects::nonNull)
                    .distinct()
                    .toList();
            
            java.util.Map<String, Object> diagnostic = new java.util.HashMap<>();
            diagnostic.put("total_services", services.size());
            
            List<java.util.Map<String, Object>> servicesInfo = services.stream().map(service -> {
                java.util.Map<String, Object> info = new java.util.HashMap<>();
                info.put("id", service.getIdService());
                info.put("nom", service.getNomService());
                info.put("chef_a", service.getChefA() != null ? 
                    java.util.Map.of("id", service.getChefA().getId(), "nom", service.getChefA().getNom() + " " + service.getChefA().getPrenom()) : null);
                info.put("chef_b", service.getChefB() != null ? 
                    java.util.Map.of("id", service.getChefB().getId(), "nom", service.getChefB().getNom() + " " + service.getChefB().getPrenom()) : null);
                info.put("rh", service.getRhResponsable() != null ? 
                    java.util.Map.of("id", service.getRhResponsable().getId(), "nom", service.getRhResponsable().getNom() + " " + service.getRhResponsable().getPrenom()) : null);
                
                // Compter les employés dans ce service
                long nbEmployes = personnelRepository.findAll().stream()
                    .filter(p -> p.getService() != null && p.getService().getIdService().equals(service.getIdService()))
                    .count();
                info.put("nb_employes", nbEmployes);
                
                return info;
            }).toList();
            
            diagnostic.put("services", servicesInfo);
            
            return ResponseEntity.ok(diagnostic);
        } catch (Exception e) {
            logger.error("❌ Erreur diagnostic services: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body("Erreur diagnostic services: " + e.getMessage());
        }
    }

    /**
     * Endpoint de diagnostic pour vérifier la configuration des validateurs
     */
    @GetMapping("/diagnostic/chef-a")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('ADMIN')")
    public ResponseEntity<?> diagnosticChefA() {
        logger.info("🔍 Diagnostic Chef A - Configuration des validateurs");
        
        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        Personnel chefA = currentUser.get();
        
        try {
            // Vérifier toutes les demandes où ce chef A est validateur
            List<Conge> toutesLesDemandes = congeRepository.findByValidateurChefA(chefA.getId());
            
            // Créer un rapport de diagnostic
            java.util.Map<String, Object> diagnostic = new java.util.HashMap<>();
            diagnostic.put("chefA_id", chefA.getId());
            diagnostic.put("chefA_matricule", chefA.getMatriculeP());
            diagnostic.put("chefA_nom", chefA.getNom() + " " + chefA.getPrenom());
            diagnostic.put("total_demandes_assignees", toutesLesDemandes.size());
            
            // Grouper par statut
            java.util.Map<String, Long> parStatut = toutesLesDemandes.stream()
                .collect(java.util.stream.Collectors.groupingBy(
                    c -> c.getStatutConge() != null ? c.getStatutConge().toString() : "NULL", 
                    java.util.stream.Collectors.counting()
                ));
            diagnostic.put("demandes_par_statut", parStatut);
            
            // Détails des demandes EN_ATTENTE_CHEF_A
            List<Conge> enAttente = toutesLesDemandes.stream()
                .filter(c -> c.getStatutConge() == tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge.EN_ATTENTE_CHEF_A)
                .toList();
            
            diagnostic.put("en_attente_chef_a", enAttente.stream().map(c -> {
                java.util.Map<String, Object> info = new java.util.HashMap<>();
                info.put("id", c.getIdConge());
                info.put("employe", c.getNom() + " " + c.getPrenom());
                info.put("periode", c.getDateDeb() + " -> " + c.getDateFin());
                info.put("rep_chefs_niveau1", c.getRepChefsNiveau1());
                return info;
            }).toList());
            
            return ResponseEntity.ok(diagnostic);
        } catch (Exception e) {
            logger.error("❌ Erreur diagnostic Chef A: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body("Erreur diagnostic: " + e.getMessage());
        }
    }

    /**
     * Endpoint universel pour valider/refuser selon le rôle
     */
    @PostMapping("/{congeId}/valider")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> validerConge(@PathVariable Long congeId, @RequestBody ValidationCongeDto validationDto) {
        logger.info("🔍 Validation générique pour congé ID: {} - Action: {} - Commentaire: {}", 
                   congeId, validationDto.getAction(), validationDto.getCommentaire());
        logger.info("📋 DTO reçu: {}", validationDto);

        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé");
        }

        try {
            Conge congeValide = validationCongeService.validerConge(congeId, currentUser.get().getMatriculeP(), validationDto);
            logger.info("✅ Validation réussie pour congé ID: {}", congeId);
            
            // Utiliser le mapper pour éviter les références circulaires
            PersonnelMapper mapper = new PersonnelMapper();
            CongeDTO congeDTO = mapper.toCongeDTO(congeValide);
            
            return ResponseEntity.ok(congeDTO);
        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Erreur de validation: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            logger.error("❌ Erreur inattendue lors de la validation: {}", e.getMessage());
            return ResponseEntity.internalServerError().body("Erreur lors de la validation");
        }
    }
    
    /**
     * Endpoint de diagnostic pour vérifier l'utilisateur connecté
     */
    @GetMapping("/debug/current-user")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getCurrentUserDebug() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        logger.info("🔍 Debug auth - Name: {}, Authorities: {}", auth.getName(), auth.getAuthorities());
        
        Optional<Personnel> currentUser = getCurrentPersonnel();
        if (currentUser.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé pour: " + auth.getName());
        }
        
        Personnel user = currentUser.get();
        logger.info("👤 User trouvé: {} {} - Matricule: {}", user.getNom(), user.getPrenom(), user.getMatriculeP());
        logger.info("🎭 Rôles: {}", user.getRoles().stream().map(r -> r.getNomRole().name()).toList());
        
        return ResponseEntity.ok(Map.of(
            "matricule", user.getMatriculeP(),
            "nom", user.getNom(),
            "prenom", user.getPrenom(),
            "roles", user.getRoles().stream().map(r -> r.getNomRole().name()).toList(),
            "service", user.getService() != null ? user.getService().getNomService() : "Aucun"
        ));
    }

    /**
     * Approuve une demande de congé en attente de validation RH
     */
    @PostMapping("/{id}/approuver")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> approuverConge(@PathVariable Long id) {
        logger.info("✅ Tentative d'approbation de la demande de congé ID: {}", id);

        try {
            Optional<Personnel> currentUser = getCurrentPersonnel();
            if (currentUser.isEmpty()) {
                return ResponseEntity.badRequest().body("Utilisateur non authentifié");
            }

            ValidationCongeDto validationDto = new ValidationCongeDto("APPROUVER", "Approuvé par RH");
            Conge conge = validationCongeService.validerConge(id, currentUser.get().getMatriculeP(), validationDto);

            logger.info("✅ Demande de congé ID: {} approuvée par RH", id);
            return ResponseEntity.ok(Map.of(
                "message", "Demande de congé approuvée avec succès",
                "statut", conge.getStatutConge().getLibelle(),
                "id", conge.getIdConge()
            ));

        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Erreur de validation pour l'approbation ID: {} - {}", id, e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            logger.error("❌ Erreur lors de l'approbation de la demande ID: {}", id, e);
            return ResponseEntity.internalServerError().body("Erreur lors de l'approbation de la demande");
        }
    }

    /**
     * Refuse une demande de congé en attente de validation RH
     */
    @PostMapping("/{id}/refuser")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> refuserConge(@PathVariable Long id) {
        logger.info("❌ Tentative de refus de la demande de congé ID: {}", id);

        try {
            Optional<Personnel> currentUser = getCurrentPersonnel();
            if (currentUser.isEmpty()) {
                return ResponseEntity.badRequest().body("Utilisateur non authentifié");
            }

            ValidationCongeDto validationDto = new ValidationCongeDto("REFUSER", "Refusé par RH");
            Conge conge = validationCongeService.validerConge(id, currentUser.get().getMatriculeP(), validationDto);

            logger.info("❌ Demande de congé ID: {} refusée par RH", id);
            return ResponseEntity.ok(Map.of(
                "message", "Demande de congé refusée",
                "statut", conge.getStatutConge().getLibelle(),
                "id", conge.getIdConge()
            ));

        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Erreur de validation pour le refus ID: {} - {}", id, e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            logger.error("❌ Erreur lors du refus de la demande ID: {}", id, e);
            return ResponseEntity.internalServerError().body("Erreur lors du refus de la demande");
        }
    }
}