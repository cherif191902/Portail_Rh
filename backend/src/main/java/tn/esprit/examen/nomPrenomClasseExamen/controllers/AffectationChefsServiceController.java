package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.dto.AffectationChefsServiceDto;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Service;
import tn.esprit.examen.nomPrenomClasseExamen.services.AffectationChefsServiceService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Contrôleur REST pour la gestion de l'affectation des chefs aux services
 */
@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AffectationChefsServiceController {

    private static final Logger logger = LoggerFactory.getLogger(AffectationChefsServiceController.class);

    @Autowired
    private AffectationChefsServiceService affectationChefsService;

    /**
     * Affecter Chef A et Chef B à un service
     * Endpoint: PUT /api/services/{id}/affecter-chefs
     * Accès: RH et ADMIN uniquement
     */
    @PutMapping("/{serviceId}/affecter-chefs")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> affecterChefs(
            @PathVariable Long serviceId,
            @RequestBody AffectationChefsServiceDto affectationDto) {
        
        logger.info("🔧 Demande d'affectation chefs - Service ID: {}, DTO: {}", serviceId, affectationDto);
        
        try {
            // Valider le DTO côté serveur
            if (!affectationDto.isValid()) {
                logger.warn("❌ Validation échouée: Chef A et Chef B ne peuvent pas être identiques");
                return ResponseEntity.badRequest()
                    .body(Map.of("message", "Chef A et Chef B ne peuvent pas être la même personne"));
            }

            // Effectuer l'affectation
            Service updatedService = affectationChefsService.affecterChefs(serviceId, affectationDto);
            
            // Préparer la réponse
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Chefs affectés avec succès");
            response.put("service", prepareServiceResponse(updatedService));
            
            logger.info("✅ Affectation réussie pour le service: {}", updatedService.getNomService());
            return ResponseEntity.ok(response);
            
        } catch (IllegalArgumentException e) {
            logger.error("❌ Erreur de validation: {}", e.getMessage());
            return ResponseEntity.badRequest()
                .body(Map.of("message", e.getMessage()));
                
        } catch (Exception e) {
            logger.error("❌ Erreur lors de l'affectation des chefs:", e);
            return ResponseEntity.status(500)
                .body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Récupérer tous les services avec leurs chefs
     * Endpoint: GET /api/services
     * Accès: RH et ADMIN uniquement
     */
    @GetMapping
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllServices() {
        logger.info("📋 Récupération de tous les services");
        
        try {
            List<Service> services = affectationChefsService.getTousLesServices();
            
            List<Map<String, Object>> servicesResponse = services.stream()
                .map(this::prepareServiceResponse)
                .toList();
            
            logger.info("📊 {} services récupérés", services.size());
            return ResponseEntity.ok(servicesResponse);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des services:", e);
            return ResponseEntity.status(500)
                .body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Récupérer tous les chefs disponibles
     * Endpoint: GET /api/services/chefs-disponibles  
     * Accès: RH et ADMIN uniquement
     */
    @GetMapping("/chefs-disponibles")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getChefsDisponibles() {
        logger.info("👥 Récupération des chefs disponibles");
        
        try {
            List<Personnel> chefs = affectationChefsService.getTousLesChefs();
            
            List<Map<String, Object>> chefsResponse = chefs.stream()
                .map(this::preparePersonnelResponse)
                .toList();
            
            logger.info("📊 {} chefs disponibles", chefs.size());
            return ResponseEntity.ok(chefsResponse);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des chefs:", e);
            return ResponseEntity.status(500)
                .body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Préparer la réponse pour un service (éviter les problèmes de sérialisation)
     */
    private Map<String, Object> prepareServiceResponse(Service service) {
        Map<String, Object> serviceMap = new HashMap<>();
        serviceMap.put("idService", service.getIdService());
        serviceMap.put("nomService", service.getNomService());
        serviceMap.put("libService", service.getLibService());
        
        // Ajouter Chef A s'il existe
        if (service.getChefA() != null) {
            serviceMap.put("chefA", preparePersonnelResponse(service.getChefA()));
        }
        
        // Ajouter Chef B s'il existe  
        if (service.getChefB() != null) {
            serviceMap.put("chefB", preparePersonnelResponse(service.getChefB()));
        }
        
        // Ajouter le chef principal s'il existe (pour compatibilité)
        if (service.getChef() != null) {
            serviceMap.put("chef", preparePersonnelResponse(service.getChef()));
        }
        
        return serviceMap;
    }

    /**
     * Préparer la réponse pour un personnel (éviter les problèmes de sérialisation)
     */
    private Map<String, Object> preparePersonnelResponse(Personnel personnel) {
        Map<String, Object> personnelMap = new HashMap<>();
        personnelMap.put("id", personnel.getId());
        personnelMap.put("nom", personnel.getNom());
        personnelMap.put("prenom", personnel.getPrenom());
        personnelMap.put("matriculeP", personnel.getMatriculeP());
        personnelMap.put("email", personnel.getEmail());
        personnelMap.put("fullName", personnel.getPrenom() + " " + personnel.getNom() + " (" + personnel.getMatriculeP() + ")");
        
        return personnelMap;
    }
}