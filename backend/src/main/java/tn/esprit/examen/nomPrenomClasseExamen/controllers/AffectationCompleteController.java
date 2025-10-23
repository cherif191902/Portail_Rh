package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository;

import java.util.*;

@RestController
@RequestMapping("/api/affectations")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AffectationCompleteController {

    @Autowired
    private ServiceRepository serviceRepository;
    
    @Autowired
    private PersonnelRepository personnelRepository;

    /**
     * DTO pour les données d'affectation complète
     */
    public static class AffectationCompleteRequest {
        private Long serviceId;
        private Integer chefAId;
        private Integer chefBId;
        private Integer rhId;
        
        // Constructeurs
        public AffectationCompleteRequest() {}
        
        public AffectationCompleteRequest(Long serviceId, Integer chefAId, Integer chefBId, Integer rhId) {
            this.serviceId = serviceId;
            this.chefAId = chefAId;
            this.chefBId = chefBId;
            this.rhId = rhId;
        }

        // Getters et Setters
        public Long getServiceId() { return serviceId; }
        public void setServiceId(Long serviceId) { this.serviceId = serviceId; }
        
        public Integer getChefAId() { return chefAId; }
        public void setChefAId(Integer chefAId) { this.chefAId = chefAId; }
        
        public Integer getChefBId() { return chefBId; }
        public void setChefBId(Integer chefBId) { this.chefBId = chefBId; }
        
        public Integer getRhId() { return rhId; }
        public void setRhId(Integer rhId) { this.rhId = rhId; }
    }

    /**
     * Récupère toutes les affectations avec leurs informations complètes
     */
    @GetMapping
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllAffectations() {
        try {
            List<Service> services = serviceRepository.findAll();
            
            List<Map<String, Object>> affectations = new ArrayList<>();
            
            for (Service service : services) {
                Map<String, Object> affectation = new HashMap<>();
                affectation.put("id", service.getIdService());
                affectation.put("serviceId", service.getIdService());
                affectation.put("nomService", service.getNomService());
                affectation.put("libService", service.getLibService());
                
                // Chef A
                if (service.getChefA() != null) {
                    Map<String, Object> chefA = new HashMap<>();
                    chefA.put("id", service.getChefA().getId());
                    chefA.put("nom", service.getChefA().getNom());
                    chefA.put("prenom", service.getChefA().getPrenom());
                    chefA.put("matriculeP", service.getChefA().getMatriculeP());
                    affectation.put("chefA", chefA);
                } else {
                    affectation.put("chefA", null);
                }
                
                // Chef B
                if (service.getChefB() != null) {
                    Map<String, Object> chefB = new HashMap<>();
                    chefB.put("id", service.getChefB().getId());
                    chefB.put("nom", service.getChefB().getNom());
                    chefB.put("prenom", service.getChefB().getPrenom());
                    chefB.put("matriculeP", service.getChefB().getMatriculeP());
                    affectation.put("chefB", chefB);
                } else {
                    affectation.put("chefB", null);
                }
                
                // Pour le RH, on prend celui connecté ou le premier RH trouvé
                Personnel rh = personnelRepository.findAll().stream()
                    .filter(p -> p.getRoles() != null && 
                               p.getRoles().stream().anyMatch(r -> r.getNomRole() == ERole.ROLE_RH))
                    .findFirst()
                    .orElse(null);
                
                if (rh != null) {
                    Map<String, Object> rhMap = new HashMap<>();
                    rhMap.put("id", rh.getId());
                    rhMap.put("nom", rh.getNom());
                    rhMap.put("prenom", rh.getPrenom());
                    rhMap.put("matriculeP", rh.getMatriculeP());
                    affectation.put("rh", rhMap);
                } else {
                    affectation.put("rh", null);
                }
                
                affectations.add(affectation);
            }
            
            return ResponseEntity.ok(affectations);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de la récupération des affectations");
            error.put("message", e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }

    /**
     * Crée ou met à jour une affectation complète
     */
    @PostMapping
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> createOrUpdateAffectation(@RequestBody AffectationCompleteRequest request, 
                                                       Authentication auth) {
        try {
            // Validation
            if (request.getServiceId() == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "ID du service requis"));
            }
            
            Optional<Service> serviceOpt = serviceRepository.findById(request.getServiceId());
            if (serviceOpt.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Service non trouvé"));
            }
            
            Service service = serviceOpt.get();
            
            // Vérification et affectation Chef A
            if (request.getChefAId() != null) {
                Optional<Personnel> chefAOpt = personnelRepository.findById(request.getChefAId());
                if (chefAOpt.isEmpty()) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Chef A non trouvé"));
                }
                
                Personnel chefA = chefAOpt.get();
                
                // Vérifier si le chef A a le bon rôle
                boolean hasChefARole = chefA.getRoles() != null && 
                    chefA.getRoles().stream().anyMatch(r -> r.getNomRole() == ERole.ROLE_CHEF_A);
                
                if (!hasChefARole) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Le Chef A n'a pas le rôle CHEF_A"));
                }
                
                // Vérifier l'unicité (pas affecté ailleurs)
                boolean isAlreadyAffected = serviceRepository.findAll().stream()
                    .filter(s -> !s.getIdService().equals(service.getIdService()))
                    .anyMatch(s -> (s.getChefA() != null && s.getChefA().getId().equals(chefA.getId())) ||
                                 (s.getChefB() != null && s.getChefB().getId().equals(chefA.getId())));
                
                if (isAlreadyAffected) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Ce chef est déjà affecté à un autre service"));
                }
                
                service.setChefA(chefA);
            } else {
                service.setChefA(null);
            }
            
            // Vérification et affectation Chef B
            if (request.getChefBId() != null) {
                Optional<Personnel> chefBOpt = personnelRepository.findById(request.getChefBId());
                if (chefBOpt.isEmpty()) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Chef B non trouvé"));
                }
                
                Personnel chefB = chefBOpt.get();
                
                // Vérifier si c'est le même que Chef A
                if (request.getChefAId() != null && request.getChefAId().equals(request.getChefBId())) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Chef A et Chef B ne peuvent pas être la même personne"));
                }
                
                // Vérifier si le chef B a le bon rôle
                boolean hasChefBRole = chefB.getRoles() != null && 
                    chefB.getRoles().stream().anyMatch(r -> r.getNomRole() == ERole.ROLE_CHEF_B);
                
                if (!hasChefBRole) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Le Chef B n'a pas le rôle CHEF_B"));
                }
                
                // Vérifier l'unicité (pas affecté ailleurs)
                boolean isAlreadyAffected = serviceRepository.findAll().stream()
                    .filter(s -> !s.getIdService().equals(service.getIdService()))
                    .anyMatch(s -> (s.getChefA() != null && s.getChefA().getId().equals(chefB.getId())) ||
                                 (s.getChefB() != null && s.getChefB().getId().equals(chefB.getId())));
                
                if (isAlreadyAffected) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Ce chef est déjà affecté à un autre service"));
                }
                
                service.setChefB(chefB);
            } else {
                service.setChefB(null);
            }
            
            // Sauvegarder
            serviceRepository.save(service);
            
            // Préparer la réponse
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Affectation enregistrée avec succès");
            response.put("serviceId", service.getIdService());
            response.put("nomService", service.getNomService());
            response.put("chefAId", service.getChefA() != null ? service.getChefA().getId() : null);
            response.put("chefBId", service.getChefB() != null ? service.getChefB().getId() : null);
            response.put("rhId", auth.getName()); // Matricule du RH connecté
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de l'enregistrement de l'affectation");
            error.put("message", e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }

    /**
     * Met à jour une affectation existante
     */
    @PutMapping("/{serviceId}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> updateAffectation(@PathVariable Long serviceId, 
                                             @RequestBody AffectationCompleteRequest request,
                                             Authentication auth) {
        request.setServiceId(serviceId);
        return createOrUpdateAffectation(request, auth);
    }

    /**
     * Supprime une affectation (remet les chefs à null)
     */
    @DeleteMapping("/{serviceId}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> deleteAffectation(@PathVariable Long serviceId) {
        try {
            Optional<Service> serviceOpt = serviceRepository.findById(serviceId);
            if (serviceOpt.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            
            Service service = serviceOpt.get();
            service.setChefA(null);
            service.setChefB(null);
            serviceRepository.save(service);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Affectation supprimée avec succès");
            response.put("serviceId", serviceId);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de la suppression de l'affectation");
            error.put("message", e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }
}