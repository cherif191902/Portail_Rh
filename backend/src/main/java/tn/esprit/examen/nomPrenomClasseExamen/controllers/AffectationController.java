package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository;

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
     * Récupérer uniquement les chefs disponibles (avec rôle CHEF_SERVICE)
     */
    @GetMapping("/chefs-disponibles")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getChefsDisponibles() {
        try {
            List<Personnel> chefs = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_SERVICE);
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

            // Vérifier que le chef a bien le rôle CHEF_SERVICE
            boolean hasChefRole = chef.getRoles().stream()
                .anyMatch(role -> role.getNomRole() == ERole.ROLE_CHEF_SERVICE);
            
            if (!hasChefRole) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "L'utilisateur n'a pas le rôle de chef de service");
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

            // Vérifier que le nouveau chef a le rôle CHEF_SERVICE
            boolean hasChefRole = nouveauChef.getRoles().stream()
                .anyMatch(role -> role.getNomRole() == ERole.ROLE_CHEF_SERVICE);
            
            if (!hasChefRole) {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("message", "L'utilisateur n'a pas le rôle de chef de service");
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
     * Affecter un chef A ou B à un service
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

            // Vérifier que le chef existe et a le bon rôle
            Optional<Personnel> chefOpt = personnelRepository.findById(request.getChefId());
            if (chefOpt.isEmpty()) {
                response.put("success", false);
                response.put("message", "Chef introuvable");
                return ResponseEntity.badRequest().body(response);
            }

            Personnel chef = chefOpt.get();
            boolean hasChefRole = chef.getRoles().stream()
                    .anyMatch(role -> role.getNomRole() == ERole.ROLE_CHEF_SERVICE);

            if (!hasChefRole) {
                response.put("success", false);
                response.put("message", "L'utilisateur sélectionné n'a pas le rôle CHEF_SERVICE");
                return ResponseEntity.badRequest().body(response);
            }

            // Vérifier que le chef n'est pas déjà affecté ailleurs
            List<Service> services = serviceRepository.findAll();
            boolean dejaAffecte = services.stream()
                    .anyMatch(s -> (s.getChefA() != null && s.getChefA().getId().equals(chef.getId())) ||
                                  (s.getChefB() != null && s.getChefB().getId().equals(chef.getId())));

            if (dejaAffecte) {
                response.put("success", false);
                response.put("message", "Ce chef est déjà affecté à un autre service");
                return ResponseEntity.badRequest().body(response);
            }

            // Vérifier que le poste n'est pas déjà occupé
            if ("CHEF_A".equals(request.getTypeChef()) && service.getChefA() != null) {
                response.put("success", false);
                response.put("message", "Ce service a déjà un Chef A");
                return ResponseEntity.badRequest().body(response);
            }

            if ("CHEF_B".equals(request.getTypeChef()) && service.getChefB() != null) {
                response.put("success", false);
                response.put("message", "Ce service a déjà un Chef B");
                return ResponseEntity.badRequest().body(response);
            }

            // Effectuer l'affectation
            if ("CHEF_A".equals(request.getTypeChef())) {
                service.setChefA(chef);
            } else {
                service.setChefB(chef);
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
     * Supprimer l'affectation d'un chef A ou B
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

            if ("CHEF_A".equals(typeChef)) {
                if (service.getChefA() == null) {
                    response.put("success", false);
                    response.put("message", "Aucun Chef A affecté à ce service");
                    return ResponseEntity.badRequest().body(response);
                }
                service.setChefA(null);
            } else {
                if (service.getChefB() == null) {
                    response.put("success", false);
                    response.put("message", "Aucun Chef B affecté à ce service");
                    return ResponseEntity.badRequest().body(response);
                }
                service.setChefB(null);
            }

            serviceRepository.save(service);

            response.put("success", true);
            response.put("message", "Affectation du Chef " + typeChef.replace("_", " ") + " supprimée avec succès");
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Erreur lors de la suppression: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

}
