package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.dto.AffectationHierarchiqueDto;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.services.AffectationHierarchiqueService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Controller pour gérer les affectations hiérarchiques du personnel
 */
@RestController
@RequestMapping("/api/affectations")
@CrossOrigin(origins = "http://localhost:4200")
public class AffectationHierarchiqueController {

    private static final Logger logger = LoggerFactory.getLogger(AffectationHierarchiqueController.class);

    @Autowired
    private AffectationHierarchiqueService affectationService;

    /**
     * Affecter la hiérarchie à un employé
     */
    @PutMapping("/employes/{id}/hierarchie")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> affecterHierarchie(@PathVariable Integer id, 
                                               @RequestBody AffectationHierarchiqueDto affectationDto) {
        logger.info("🔄 Demande d'affectation hiérarchique pour l'employé ID: {}", id);
        
        try {
            affectationDto.setEmployeId(id);
            Personnel employe = affectationService.affecterHierarchie(id, affectationDto);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Hiérarchie affectée avec succès pour " + employe.getNom() + " " + employe.getPrenom());
            response.put("employe", Map.of(
                "id", employe.getId(),
                "nom", employe.getNom(),
                "prenom", employe.getPrenom(),
                "matricule", employe.getMatriculeP(),
                "chefA", employe.getChefA() != null ? 
                    Map.of("id", employe.getChefA().getId(), 
                          "nom", employe.getChefA().getNom(), 
                          "prenom", employe.getChefA().getPrenom()) : null,
                "chefB", employe.getChefB() != null ? 
                    Map.of("id", employe.getChefB().getId(), 
                          "nom", employe.getChefB().getNom(), 
                          "prenom", employe.getChefB().getPrenom()) : null,
                "rhResponsable", employe.getRhResponsable() != null ? 
                    Map.of("id", employe.getRhResponsable().getId(), 
                          "nom", employe.getRhResponsable().getNom(), 
                          "prenom", employe.getRhResponsable().getPrenom()) : null
            ));
            
            logger.info("✅ Affectation hiérarchique réussie pour: {} {}", 
                       employe.getNom(), employe.getPrenom());
            
            return ResponseEntity.ok(response);
            
        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Erreur d'affectation: {}", e.getMessage());
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
            
        } catch (Exception e) {
            logger.error("❌ Erreur inattendue lors de l'affectation:", e);
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "Erreur interne du serveur");
            return ResponseEntity.status(500).body(errorResponse);
        }
    }

    /**
     * Récupérer l'affectation actuelle d'un employé
     */
    @GetMapping("/employes/{id}/hierarchie")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAffectationActuelle(@PathVariable Integer id) {
        logger.info("📋 Récupération de l'affectation pour l'employé ID: {}", id);
        
        try {
            AffectationHierarchiqueDto affectation = affectationService.getAffectationActuelle(id);
            return ResponseEntity.ok(affectation);
            
        } catch (IllegalArgumentException e) {
            logger.warn("⚠️ Employé non trouvé: {}", e.getMessage());
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération de l'affectation:", e);
            return ResponseEntity.status(500).body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Récupérer tous les employés (pour la liste de sélection)
     */
    @GetMapping("/employes")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllEmployes() {
        logger.info("📋 Récupération de tous les employés");
        
        try {
            List<Personnel> employes = affectationService.getAllEmployes();
            
            List<Map<String, Object>> employesDto = employes.stream()
                .map(employe -> {
                    Map<String, Object> employeMap = new HashMap<>();
                    employeMap.put("id", employe.getId());
                    employeMap.put("nom", employe.getNom());
                    employeMap.put("prenom", employe.getPrenom());
                    employeMap.put("matricule", employe.getMatriculeP());
                    employeMap.put("email", employe.getEmail() != null ? employe.getEmail() : "");
                    employeMap.put("poste", employe.getPoste() != null ? employe.getPoste() : "");
                    return employeMap;
                })
                .toList();
            
            return ResponseEntity.ok(employesDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des employés:", e);
            return ResponseEntity.status(500).body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Récupérer les Chefs A disponibles (tous les utilisateurs avec rôle CHEF)
     */
    @GetMapping("/chefs-a")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getChefsA() {
        logger.info("📋 Récupération des Chefs A (tous les chefs disponibles)");
        
        try {
            List<Personnel> tousLesChefs = affectationService.getTousLesChefs();
            
            List<Map<String, Object>> chefsDto = tousLesChefs.stream()
                .map(chef -> {
                    Map<String, Object> chefMap = new HashMap<>();
                    chefMap.put("id", chef.getId());
                    chefMap.put("nom", chef.getNom());
                    chefMap.put("prenom", chef.getPrenom());
                    chefMap.put("matricule", chef.getMatriculeP());
                    chefMap.put("fullName", chef.getNom() + " " + chef.getPrenom() + " (" + chef.getMatriculeP() + ")");
                    return chefMap;
                })
                .toList();
            
            return ResponseEntity.ok(chefsDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des Chefs A:", e);
            return ResponseEntity.status(500).body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Récupérer les Chefs B disponibles (tous les utilisateurs avec rôle CHEF)
     */
    @GetMapping("/chefs-b")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getChefsB() {
        logger.info("📋 Récupération des Chefs B (tous les chefs disponibles)");
        
        try {
            List<Personnel> tousLesChefs = affectationService.getTousLesChefs();
            
            List<Map<String, Object>> chefsDto = tousLesChefs.stream()
                .map(chef -> {
                    Map<String, Object> chefMap = new HashMap<>();
                    chefMap.put("id", chef.getId());
                    chefMap.put("nom", chef.getNom());
                    chefMap.put("prenom", chef.getPrenom());
                    chefMap.put("matricule", chef.getMatriculeP());
                    chefMap.put("fullName", chef.getNom() + " " + chef.getPrenom() + " (" + chef.getMatriculeP() + ")");
                    return chefMap;
                })
                .toList();
            
            return ResponseEntity.ok(chefsDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des Chefs B:", e);
            return ResponseEntity.status(500).body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Récupérer les RH disponibles
     */
    @GetMapping("/rh")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getRhPersonnel() {
        logger.info("📋 Récupération du personnel RH");
        
        try {
            List<Personnel> personnelRh = affectationService.getPersonnelParRole(ERole.ROLE_RH);
            
            List<Map<String, Object>> rhDto = personnelRh.stream()
                .map(rh -> {
                    Map<String, Object> rhMap = new HashMap<>();
                    rhMap.put("id", rh.getId());
                    rhMap.put("nom", rh.getNom());
                    rhMap.put("prenom", rh.getPrenom());
                    rhMap.put("matricule", rh.getMatriculeP());
                    rhMap.put("fullName", rh.getNom() + " " + rh.getPrenom() + " (" + rh.getMatriculeP() + ")");
                    return rhMap;
                })
                .toList();
            
            return ResponseEntity.ok(rhDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération du personnel RH:", e);
            return ResponseEntity.status(500).body(Map.of("message", "Erreur interne du serveur"));
        }
    }

    /**
     * Endpoint de test pour vérifier la configuration
     */
    @GetMapping("/test")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> testAffectationEndpoint() {
        logger.info("🧪 Test de l'endpoint d'affectation hiérarchique");
        
        Map<String, Object> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "Endpoint d'affectation hiérarchique fonctionnel");
        response.put("timestamp", java.time.LocalDateTime.now().toString());
        
        return ResponseEntity.ok(response);
    }
}