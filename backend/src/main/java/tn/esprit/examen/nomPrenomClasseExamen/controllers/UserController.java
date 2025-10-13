package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;

import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    private PersonnelRepository personnelRepository;
    
    @Autowired
    private ServiceRepository serviceRepository;

    /**
     * Récupère la liste des chefs disponibles avec le rôle CHEF_SERVICE
     * Exclut les chefs déjà affectés à d'autres services si nécessaire
     */
    @GetMapping("/chefs")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllChefs() {
        try {
            // Récupérer tous les personnels avec le rôle CHEF_SERVICE
            List<Personnel> chefs = personnelRepository.findAll().stream()
                .filter(p -> p.getRoles() != null && 
                           p.getRoles().stream().anyMatch(r -> r.getNomRole() == ERole.ROLE_CHEF_SERVICE))
                .collect(Collectors.toList());

            // Transformer en format simple pour l'API
            List<Map<String, Object>> chefsData = chefs.stream().map(chef -> {
                Map<String, Object> chefMap = new HashMap<>();
                chefMap.put("id", chef.getId());
                chefMap.put("nom", chef.getNom());
                chefMap.put("prenom", chef.getPrenom());
                chefMap.put("matriculeP", chef.getMatriculeP());
                chefMap.put("email", chef.getEmail());
                
                // Vérifier s'il est déjà affecté comme Chef A ou Chef B
                boolean isChefA = serviceRepository.findAll().stream()
                    .anyMatch(s -> s.getChefA() != null && s.getChefA().getId().equals(chef.getId()));
                boolean isChefB = serviceRepository.findAll().stream()
                    .anyMatch(s -> s.getChefB() != null && s.getChefB().getId().equals(chef.getId()));
                
                chefMap.put("isAffectedAsChefA", isChefA);
                chefMap.put("isAffectedAsChefB", isChefB);
                chefMap.put("isAvailable", !isChefA && !isChefB);
                
                return chefMap;
            }).collect(Collectors.toList());

            return ResponseEntity.ok(chefsData);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de la récupération des chefs");
            error.put("message", e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }

    /**
     * Récupère les chefs disponibles (non affectés) pour une affectation spécifique
     */
    @GetMapping("/chefs/available")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAvailableChefs(@RequestParam(required = false) Long excludeServiceId) {
        try {
            List<Personnel> allChefs = personnelRepository.findAll().stream()
                .filter(p -> p.getRoles() != null && 
                           p.getRoles().stream().anyMatch(r -> r.getNomRole() == ERole.ROLE_CHEF_SERVICE))
                .collect(Collectors.toList());

            List<Map<String, Object>> availableChefs = allChefs.stream()
                .filter(chef -> {
                    // Vérifier si le chef n'est pas déjà affecté (sauf au service exclu)
                    boolean isAffected = serviceRepository.findAll().stream()
                        .filter(s -> excludeServiceId == null || !s.getIdService().equals(excludeServiceId))
                        .anyMatch(s -> (s.getChefA() != null && s.getChefA().getId().equals(chef.getId())) ||
                                     (s.getChefB() != null && s.getChefB().getId().equals(chef.getId())));
                    return !isAffected;
                })
                .map(chef -> {
                    Map<String, Object> chefMap = new HashMap<>();
                    chefMap.put("id", chef.getId());
                    chefMap.put("nom", chef.getNom());
                    chefMap.put("prenom", chef.getPrenom());
                    chefMap.put("matriculeP", chef.getMatriculeP());
                    chefMap.put("email", chef.getEmail());
                    return chefMap;
                })
                .collect(Collectors.toList());

            return ResponseEntity.ok(availableChefs);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de la récupération des chefs disponibles");
            error.put("message", e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }

    /**
     * Récupère tous les personnels avec leurs rôles
     */
    @GetMapping("/all")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllUsers() {
        try {
            List<Personnel> personnels = personnelRepository.findAll();
            
            List<Map<String, Object>> usersData = personnels.stream().map(p -> {
                Map<String, Object> userMap = new HashMap<>();
                userMap.put("id", p.getId());
                userMap.put("nom", p.getNom());
                userMap.put("prenom", p.getPrenom());
                userMap.put("matriculeP", p.getMatriculeP());
                userMap.put("email", p.getEmail());
                
                // Ajouter les rôles
                List<String> roles = p.getRoles() != null ? 
                    p.getRoles().stream().map(r -> r.getNomRole().name()).collect(Collectors.toList()) :
                    new ArrayList<>();
                userMap.put("roles", roles);
                
                return userMap;
            }).collect(Collectors.toList());

            return ResponseEntity.ok(usersData);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors de la récupération des utilisateurs");
            error.put("message", e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }
}