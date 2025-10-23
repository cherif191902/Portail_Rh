package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Role;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.RoleRepository;
import tn.esprit.examen.nomPrenomClasseExamen.services.AffectationChefService;

import tn.esprit.examen.nomPrenomClasseExamen.dto.AffectationChefRequest;

import java.util.*;

@RestController
@RequestMapping("/api/rh")
@CrossOrigin(origins = "http://localhost:4200")
public class AffectationController {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private PersonnelRepository personnelRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private AffectationChefService affectationChefService;

    // ===== CRUD AFFECTATIONS =====

    /**
     * Récupérer toutes les affectations (services avec leurs chefs)
     */
    @GetMapping("/affectations")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllAffectations() {
        try {
            List<Service> services = serviceRepository.findAllWithPersonnels();
            List<Map<String, Object>> result = new ArrayList<>();
            
            for (Service service : services) {
                Map<String, Object> affectation = new HashMap<>();
                affectation.put("serviceId", service.getIdService());
                affectation.put("nomService", service.getNomService());
                affectation.put("libService", service.getLibService());
                
                // Chef A
                if (service.getChefA() != null) {
                    Personnel chefA = service.getChefA();
                    Map<String, Object> chefAInfo = new HashMap<>();
                    chefAInfo.put("id", chefA.getId());
                    chefAInfo.put("nom", chefA.getNom());
                    chefAInfo.put("prenom", chefA.getPrenom());
                    chefAInfo.put("email", chefA.getEmail());
                    chefAInfo.put("matriculeP", chefA.getMatriculeP());
                    affectation.put("chefA", chefAInfo);
                    affectation.put("hasChefA", true);
                } else {
                    affectation.put("chefA", null);
                    affectation.put("hasChefA", false);
                }

                // Chef B
                if (service.getChefB() != null) {
                    Personnel chefB = service.getChefB();
                    Map<String, Object> chefBInfo = new HashMap<>();
                    chefBInfo.put("id", chefB.getId());
                    chefBInfo.put("nom", chefB.getNom());
                    chefBInfo.put("prenom", chefB.getPrenom());
                    chefBInfo.put("email", chefB.getEmail());
                    chefBInfo.put("matriculeP", chefB.getMatriculeP());
                    affectation.put("chefB", chefBInfo);
                    affectation.put("hasChefB", true);
                } else {
                    affectation.put("chefB", null);
                    affectation.put("hasChefB", false);
                }

                // Statut global du service
                affectation.put("hasChef", service.hasAnyChef());
                affectation.put("hasAnyChef", service.hasAnyChef());
                affectation.put("hasFullChefs", service.hasFullChefs());
                
                result.add(affectation);
            }
            
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la récupération des affectations: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Récupérer uniquement les chefs disponibles (avec rôles CHEF_A ou CHEF_B)
     */
    @GetMapping("/chefs-disponibles")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getChefsDisponibles() {
        try {
            List<Personnel> chefsA = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_A);
            List<Personnel> chefsB = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_B);
            List<Personnel> chefs = new ArrayList<>();
            chefs.addAll(chefsA);
            chefs.addAll(chefsB);
            List<Map<String, Object>> result = new ArrayList<>();
            
            for (Personnel chef : chefs) {
                Map<String, Object> chefInfo = new HashMap<>();
                chefInfo.put("id", chef.getId());
                chefInfo.put("nom", chef.getNom());
                chefInfo.put("prenom", chef.getPrenom());
                chefInfo.put("email", chef.getEmail());
                chefInfo.put("matriculeP", chef.getMatriculeP());
                
                // Vérifier s'il est déjà chef d'un service
                boolean dejaAffecte = serviceRepository.findAll().stream()
                    .anyMatch(service -> service.getChef() != null && 
                             service.getChef().getId().equals(chef.getId()));

                chefInfo.put("dejaAffecte", dejaAffecte);
                result.add(chefInfo);
            }
            
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de la récupération des chefs: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Récupérer uniquement les personnels d'un service spécifique (utilisateurs potentiels pour devenir chefs)
     */
    @GetMapping("/services/{serviceId}/personnels")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getPersonnelsParService(@PathVariable Long serviceId) {
        try {
            // Vérifier que le service existe
            Optional<Service> serviceOpt = serviceRepository.findById(serviceId);
            if (serviceOpt.isEmpty()) {
                Map<String, Object> error = new HashMap<>();
                error.put("error", "Service introuvable");
                return ResponseEntity.badRequest().body(error);
            }

            // Récupérer tous les personnels du service qui ont le rôle USER
            List<Personnel> personnels = personnelRepository.findByServiceId(serviceId);
            List<Map<String, Object>> result = new ArrayList<>();
            
            for (Personnel personnel : personnels) {
                // Filtrer uniquement les utilisateurs avec ROLE_USER ou déjà chefs de ce service
                boolean isUser = personnel.getRoles().stream()
                    .anyMatch(role -> role.getNomRole() == ERole.ROLE_USER);
                boolean isChefDeService = personnel.getRoles().stream()
                    .anyMatch(role -> role.getNomRole() == ERole.ROLE_CHEF_A || role.getNomRole() == ERole.ROLE_CHEF_B);
                
                if (isUser || isChefDeService) {
                    Map<String, Object> personnelInfo = new HashMap<>();
                    personnelInfo.put("id", personnel.getId());
                    personnelInfo.put("nom", personnel.getNom());
                    personnelInfo.put("prenom", personnel.getPrenom());
                    personnelInfo.put("email", personnel.getEmail());
                    personnelInfo.put("matriculeP", personnel.getMatriculeP());
                    
                    // Indiquer le statut actuel
                    if (isChefDeService) {
                        String roleChef = personnel.getRoles().stream()
                            .filter(role -> role.getNomRole() == ERole.ROLE_CHEF_A || role.getNomRole() == ERole.ROLE_CHEF_B)
                            .map(role -> role.getNomRole().name())
                            .findFirst()
                            .orElse("");
                        personnelInfo.put("statutActuel", roleChef.replace("ROLE_", ""));
                    } else {
                        personnelInfo.put("statutActuel", "USER");
                    }
                    
                    result.add(personnelInfo);
                }
            }
            
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de la récupération des personnels: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Récupérer uniquement les chefs disponibles (avec rôles CHEF_A ou CHEF_B) - ANCIEN
     */
    @GetMapping("/chefs-disponibles-old")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getChefsDisponiblesOld() {
        try {
            List<Personnel> chefsA = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_A);
            List<Personnel> chefsB = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_B);
            List<Personnel> chefs = new ArrayList<>();
            chefs.addAll(chefsA);
            chefs.addAll(chefsB);
            List<Map<String, Object>> result = new ArrayList<>();
            
            for (Personnel chef : chefs) {
                Map<String, Object> chefInfo = new HashMap<>();
                chefInfo.put("id", chef.getId());
                chefInfo.put("nom", chef.getNom());
                chefInfo.put("prenom", chef.getPrenom());
                chefInfo.put("email", chef.getEmail());
                chefInfo.put("matriculeP", chef.getMatriculeP());
                
                // Vérifier s'il est déjà chef d'un service
                boolean dejaAffecte = serviceRepository.findAll().stream()
                    .anyMatch(service -> service.getChef() != null && 
                             service.getChef().getId().equals(chef.getId()));
                chefInfo.put("dejaAffecte", dejaAffecte);
                
                // Ajouter le service s'il en a un
                if (dejaAffecte) {
                    Optional<Service> serviceOptional = serviceRepository.findAll().stream()
                        .filter(service -> service.getChef() != null && 
                                service.getChef().getId().equals(chef.getId()))
                        .findFirst();
                    if (serviceOptional.isPresent()) {
                        Service service = serviceOptional.get();
                        Map<String, Object> serviceInfo = new HashMap<>();
                        serviceInfo.put("idService", service.getIdService());
                        serviceInfo.put("nomService", service.getNomService());
                        chefInfo.put("serviceActuel", serviceInfo);
                    }
                }
                
                result.add(chefInfo);
            }
            
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la récupération des chefs: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Créer une nouvelle affectation (affecter un chef à un service)
     */
    @PostMapping("/affectations")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> creerAffectation(@RequestBody Map<String, Object> request) {
        try {
            Integer chefId = (Integer) request.get("chefId");
            Long serviceId = Long.valueOf(request.get("serviceId").toString());

            // Vérifications
            Optional<Personnel> chefOpt = personnelRepository.findById(chefId);
            Optional<Service> serviceOpt = serviceRepository.findById(serviceId);

            if (chefOpt.isEmpty()) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Chef non trouvé");
                return ResponseEntity.badRequest().body(error);
            }

            if (serviceOpt.isEmpty()) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Service non trouvé");
                return ResponseEntity.badRequest().body(error);
            }

            Personnel chef = chefOpt.get();
            Service service = serviceOpt.get();

            // Vérifier que le chef a bien le rôle CHEF_A ou CHEF_B
            boolean hasChefRole = chef.getRoles().stream()
                .anyMatch(role -> role.getNomRole() == ERole.ROLE_CHEF_A || role.getNomRole() == ERole.ROLE_CHEF_B);
            
            if (!hasChefRole) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "L'utilisateur n'a pas le rôle de chef (CHEF_A ou CHEF_B)");
                return ResponseEntity.badRequest().body(error);
            }

            // Vérifier que le chef n'est pas déjà affecté à un autre service
            boolean dejaAffecte = serviceRepository.findAll().stream()
                .anyMatch(s -> s.getChef() != null && 
                         s.getChef().getId().equals(chefId) && 
                         !s.getIdService().equals(serviceId));
            
            if (dejaAffecte) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Ce chef est déjà affecté à un autre service");
                return ResponseEntity.badRequest().body(error);
            }

            // Vérifier que le service n'a pas déjà un chef
            if (service.getChef() != null) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Ce service a déjà un chef assigné");
                return ResponseEntity.badRequest().body(error);
            }

            // Effectuer l'affectation
            service.setChef(chef);
            serviceRepository.save(service);

            // Retourner la réponse de succès
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Affectation créée avec succès");
            response.put("data", Map.of(
                "serviceId", serviceId,
                "chefId", chefId,
                "nomService", service.getNomService(),
                "nomChef", chef.getPrenom() + " " + chef.getNom()
            ));

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la création de l'affectation: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Modifier une affectation existante (changer le chef d'un service)
     */
    @PutMapping("/affectations/{serviceId}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> modifierAffectation(@PathVariable Long serviceId, @RequestBody Map<String, Object> request) {
        try {
            Integer nouveauChefId = (Integer) request.get("chefId");

            Optional<Service> serviceOpt = serviceRepository.findById(serviceId);
            Optional<Personnel> nouveauChefOpt = personnelRepository.findById(nouveauChefId);

            if (serviceOpt.isEmpty()) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Service non trouvé");
                return ResponseEntity.badRequest().body(error);
            }

            if (nouveauChefOpt.isEmpty()) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Chef non trouvé");
                return ResponseEntity.badRequest().body(error);
            }

            Service service = serviceOpt.get();
            Personnel nouveauChef = nouveauChefOpt.get();

            // Vérifier que le nouveau chef a le rôle CHEF_A ou CHEF_B
            boolean hasChefRole = nouveauChef.getRoles().stream()
                .anyMatch(role -> role.getNomRole() == ERole.ROLE_CHEF_A || role.getNomRole() == ERole.ROLE_CHEF_B);
            
            if (!hasChefRole) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "L'utilisateur n'a pas le rôle de chef (CHEF_A ou CHEF_B)");
                return ResponseEntity.badRequest().body(error);
            }

            // Vérifier que le nouveau chef n'est pas déjà affecté à un autre service
            boolean dejaAffecte = serviceRepository.findAll().stream()
                .anyMatch(s -> s.getChef() != null && 
                         s.getChef().getId().equals(nouveauChefId) && 
                         !s.getIdService().equals(serviceId));
            
            if (dejaAffecte) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Ce chef est déjà affecté à un autre service");
                return ResponseEntity.badRequest().body(error);
            }

            // Sauvegarder l'ancien chef pour la réponse
            Personnel ancienChef = service.getChef();
            
            // Effectuer le changement
            service.setChef(nouveauChef);
            serviceRepository.save(service);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Affectation modifiée avec succès");
            response.put("data", Map.of(
                "serviceId", serviceId,
                "ancienChef", ancienChef != null ? ancienChef.getPrenom() + " " + ancienChef.getNom() : "Aucun",
                "nouveauChef", nouveauChef.getPrenom() + " " + nouveauChef.getNom(),
                "nomService", service.getNomService()
            ));

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la modification de l'affectation: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Supprimer une affectation (retirer le chef d'un service)
     */
    @DeleteMapping("/affectations/{serviceId}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> supprimerAffectation(@PathVariable Long serviceId) {
        try {
            Optional<Service> serviceOpt = serviceRepository.findById(serviceId);

            if (serviceOpt.isEmpty()) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Service non trouvé");
                return ResponseEntity.badRequest().body(error);
            }

            Service service = serviceOpt.get();
            Personnel ancienChef = service.getChef();

            if (ancienChef == null) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "Ce service n'a pas de chef assigné");
                return ResponseEntity.badRequest().body(error);
            }

            // Retirer l'affectation
            service.setChef(null);
            serviceRepository.save(service);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Affectation supprimée avec succès");
            response.put("data", Map.of(
                "serviceId", serviceId,
                "nomService", service.getNomService(),
                "ancienChef", ancienChef.getPrenom() + " " + ancienChef.getNom()
            ));

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la suppression de l'affectation: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Récupérer tous les services (pour les dropdowns)
     */
    @GetMapping("/services")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllServices() {
        try {
            List<Service> services = serviceRepository.findAll();
            List<Map<String, Object>> result = new ArrayList<>();
            
            for (Service service : services) {
                Map<String, Object> serviceInfo = new HashMap<>();
                serviceInfo.put("idService", service.getIdService());
                serviceInfo.put("nomService", service.getNomService());
                serviceInfo.put("libService", service.getLibService());
                serviceInfo.put("hasChef", service.hasAnyChef());
                serviceInfo.put("hasChefA", service.getChefA() != null);
                serviceInfo.put("hasChefB", service.getChefB() != null);
                result.add(serviceInfo);
            }
            
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la récupération des services: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    // ===== NOUVEAUX ENDPOINTS CHEF A / CHEF B =====

    /**
     * Affecter un chef A ou B à un service (version améliorée avec gestion automatique des rôles)
     */
    @PostMapping("/affectations/chef")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> affecterChef(@RequestBody AffectationChefRequest request) {
        try {
            Map<String, Object> response = new HashMap<>();

            // Validations
            if (request.getServiceId() == null || request.getChefId() == null || request.getTypeChef() == null) {
                response.put("success", false);
                response.put("message", "Service, chef et type de chef sont obligatoires");
                return ResponseEntity.badRequest().body(response);
            }

            if (!"CHEF_A".equals(request.getTypeChef()) && !"CHEF_B".equals(request.getTypeChef())) {
                response.put("success", false);
                response.put("message", "Type de chef doit être CHEF_A ou CHEF_B");
                return ResponseEntity.badRequest().body(response);
            }

            // Vérifier que le service existe
            Optional<Service> serviceOpt = serviceRepository.findById(request.getServiceId());
            if (serviceOpt.isEmpty()) {
                response.put("success", false);
                response.put("message", "Service introuvable");
                return ResponseEntity.badRequest().body(response);
            }

            Service service = serviceOpt.get();

            // Vérifier que le personnel existe
            Optional<Personnel> nouvearChefOpt = personnelRepository.findById(request.getChefId());
            if (nouvearChefOpt.isEmpty()) {
                response.put("success", false);
                response.put("message", "Personnel introuvable");
                return ResponseEntity.badRequest().body(response);
            }

            Personnel nouveauChef = nouvearChefOpt.get();
            
            // Vérifier que le personnel appartient au même service
            if (nouveauChef.getService() == null || !nouveauChef.getService().getIdService().equals(request.getServiceId())) {
                response.put("success", false);
                response.put("message", "Le personnel doit appartenir au service où il va être affecté comme chef");
                return ResponseEntity.badRequest().body(response);
            }

            // 🔄 GESTION AUTOMATIQUE DES RÔLES ET AFFECTATIONS

            // 1. Gérer l'ancien chef s'il y en a un
            Personnel ancienChef = null;
            if ("CHEF_A".equals(request.getTypeChef())) {
                ancienChef = service.getChefA();
                if (ancienChef != null && !ancienChef.getId().equals(nouveauChef.getId())) {
                    // Retirer le rôle CHEF_A à l'ancien chef et lui remettre ROLE_USER
                    this.changerRolePersonnel(ancienChef, ERole.ROLE_CHEF_A, ERole.ROLE_USER);
                }
            } else { // CHEF_B
                ancienChef = service.getChefB();
                if (ancienChef != null && !ancienChef.getId().equals(nouveauChef.getId())) {
                    // Retirer le rôle CHEF_B à l'ancien chef et lui remettre ROLE_USER
                    this.changerRolePersonnel(ancienChef, ERole.ROLE_CHEF_B, ERole.ROLE_USER);
                }
            }

            // 2. Assigner le rôle approprié au nouveau chef
            ERole nouveauRole = "CHEF_A".equals(request.getTypeChef()) ? ERole.ROLE_CHEF_A : ERole.ROLE_CHEF_B;
            this.changerRolePersonnel(nouveauChef, ERole.ROLE_USER, nouveauRole);

            // 3. Mettre à jour la table service
            if ("CHEF_A".equals(request.getTypeChef())) {
                service.setChefA(nouveauChef);
            } else {
                service.setChefB(nouveauChef);
            }

            serviceRepository.save(service);

            response.put("success", true);
            response.put("message", "Chef " + request.getTypeChef().replace("_", " ") + " affecté avec succès au service " + service.getNomService());
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de l'affectation: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Supprimer l'affectation d'un chef A ou B (version améliorée avec gestion automatique des rôles)
     */
    @DeleteMapping("/affectations/chef/{serviceId}/{typeChef}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> supprimerAffectationChef(@PathVariable Long serviceId, @PathVariable String typeChef) {
        try {
            Map<String, Object> response = new HashMap<>();

            if (!"CHEF_A".equals(typeChef) && !"CHEF_B".equals(typeChef)) {
                response.put("success", false);
                response.put("message", "Type de chef doit être CHEF_A ou CHEF_B");
                return ResponseEntity.badRequest().body(response);
            }

            Optional<Service> serviceOpt = serviceRepository.findById(serviceId);
            if (serviceOpt.isEmpty()) {
                response.put("success", false);
                response.put("message", "Service introuvable");
                return ResponseEntity.badRequest().body(response);
            }

            Service service = serviceOpt.get();
            Personnel ancienChef = null;

            // 🔄 GESTION AUTOMATIQUE DES RÔLES LORS DE LA SUPPRESSION
            if ("CHEF_A".equals(typeChef)) {
                if (service.getChefA() == null) {
                    response.put("success", false);
                    response.put("message", "Aucun Chef A affecté à ce service");
                    return ResponseEntity.badRequest().body(response);
                }
                ancienChef = service.getChefA();
                service.setChefA(null);
                
                // Changer le rôle de CHEF_A vers USER
                this.changerRolePersonnel(ancienChef, ERole.ROLE_CHEF_A, ERole.ROLE_USER);
                
            } else { // CHEF_B
                if (service.getChefB() == null) {
                    response.put("success", false);
                    response.put("message", "Aucun Chef B affecté à ce service");
                    return ResponseEntity.badRequest().body(response);
                }
                ancienChef = service.getChefB();
                service.setChefB(null);
                
                // Changer le rôle de CHEF_B vers USER
                this.changerRolePersonnel(ancienChef, ERole.ROLE_CHEF_B, ERole.ROLE_USER);
            }

            serviceRepository.save(service);

            response.put("success", true);
            response.put("message", "Affectation du Chef " + typeChef.replace("_", " ") + " supprimée avec succès. " +
                                  ancienChef.getPrenom() + " " + ancienChef.getNom() + " est redevenu utilisateur standard.");
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la suppression: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    // ===== MÉTHODES UTILITAIRES =====

    /**
     * Changer le rôle d'un personnel (retire l'ancien rôle et ajoute le nouveau)
     * 🎯 Gestion automatique des rôles lors des affectations chef
     */
    private void changerRolePersonnel(Personnel personnel, ERole ancienRole, ERole nouveauRole) {
        try {
            // Récupérer les objets Role depuis la base
            Optional<Role> ancienRoleObj = roleRepository.findByNomRole(ancienRole);
            Optional<Role> nouveauRoleObj = roleRepository.findByNomRole(nouveauRole);

            // Créer les rôles s'ils n'existent pas
            Role roleAncien = ancienRoleObj.orElseGet(() -> roleRepository.save(new Role(ancienRole)));
            Role roleNouveau = nouveauRoleObj.orElseGet(() -> roleRepository.save(new Role(nouveauRole)));

            // Initialiser la collection de rôles si elle est null
            if (personnel.getRoles() == null) {
                personnel.setRoles(new HashSet<>());
            }

            // Retirer l'ancien rôle s'il existe
            personnel.getRoles().removeIf(role -> role.getNomRole() == ancienRole);

            // Ajouter le nouveau rôle s'il n'est pas déjà présent
            boolean hasNewRole = personnel.getRoles().stream()
                .anyMatch(role -> role.getNomRole() == nouveauRole);
            
            if (!hasNewRole) {
                personnel.getRoles().add(roleNouveau);
            }

            // Sauvegarder les modifications
            personnelRepository.save(personnel);

        } catch (Exception e) {
            throw new RuntimeException("Erreur lors du changement de rôle pour " + personnel.getMatriculeP() + ": " + e.getMessage());
        }
    }

    // ===== NOUVEAUX ENDPOINTS AVEC SERVICE CENTRALISÉ =====

    /**
     * Affecter un chef selon spécifications : remplacement, inversion, affectation simple
     * PUT /api/rh/affectations/chef/{serviceId}/{role}/{userId}
     * Compatible avec frontend : this.http.put(`${API_URL}/api/rh/affectations/chef/${serviceId}/${role}/${personnelId}`, {})
     */
    @PutMapping("/affectations/chef/{serviceId}/{role}/{userId}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> affecterChef(@PathVariable Long serviceId, 
                                         @PathVariable String role, 
                                         @PathVariable Long userId) {
        try {
            Map<String, Object> response = new HashMap<>();

            // Validation du rôle (frontend envoie ROLE_CHEF_A ou ROLE_CHEF_B)
            if (!"ROLE_CHEF_A".equals(role) && !"ROLE_CHEF_B".equals(role)) {
                response.put("success", false);
                response.put("message", "Le rôle doit être ROLE_CHEF_A ou ROLE_CHEF_B");
                return ResponseEntity.badRequest().body(response);
            }

            // Appel du service centralisé avec logique complète
            String message = affectationChefService.affecterChef(serviceId, userId, role);

            response.put("success", true);
            response.put("message", message);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de l'affectation: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    /**
     * Vérifier la cohérence globale du système
     * GET /api/rh/affectations/coherence
     */
    @GetMapping("/affectations/coherence")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> verifierCoherenceGlobale() {
        try {
            Map<String, Object> response = new HashMap<>();

            // Utiliser le service centralisé pour la vérification globale
            List<String> incoherences = affectationChefService.verifierCoherenceGlobale();

            if (incoherences.isEmpty()) {
                response.put("success", true);
                response.put("message", "Toutes les données sont cohérentes");
                response.put("data", new java.util.ArrayList<>());
            } else {
                response.put("success", false);
                response.put("message", "Incohérences détectées");
                response.put("data", incoherences);
            }
            
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la vérification: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

}
