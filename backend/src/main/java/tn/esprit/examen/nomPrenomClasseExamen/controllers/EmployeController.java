package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Service;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/employes")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeController {

    @Autowired
    private PersonnelRepository personnelRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/complet")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllEmployesComplet() {
        try {
            List<Personnel> personnels = personnelRepository.findAll();
            List<Service> services = serviceRepository.findAll();
            
            // Créer une map des services pour optimiser les recherches
            Map<Long, Service> serviceMap = new HashMap<>();
            for (Service service : services) {
                serviceMap.put(service.getIdService(), service);
            }
            
            List<Map<String, Object>> result = new ArrayList<>();
            
            for (Personnel personnel : personnels) {
                Map<String, Object> employeData = new HashMap<>();
                employeData.put("id", personnel.getId());
                employeData.put("nom", personnel.getNom());
                employeData.put("prenom", personnel.getPrenom());
                employeData.put("email", personnel.getEmail());
                employeData.put("matriculeP", personnel.getMatriculeP());
                employeData.put("department", personnel.getDepartment());
                employeData.put("numTel", personnel.getNumTel());
                employeData.put("poste", personnel.getPoste());
                employeData.put("niveau", personnel.getNiveau());
                
                // Mapper les rôles
                List<String> roles = new ArrayList<>();
                if (personnel.getRoles() != null) {
                    personnel.getRoles().forEach(role -> {
                        if (role.getNomRole() != null) {
                            roles.add(role.getNomRole().name());
                        }
                    });
                }
                employeData.put("roles", roles);
                
                // Ajouter les informations du service avec chefs et RH
                if (personnel.getService() != null) {
                    Service service = serviceMap.get(personnel.getService().getIdService());
                    if (service != null) {
                        Map<String, Object> serviceData = new HashMap<>();
                        serviceData.put("idService", service.getIdService());
                        serviceData.put("nomService", service.getNomService());
                        serviceData.put("libService", service.getLibService());
                        
                        // Chef A
                        if (service.getChefA() != null) {
                            Map<String, Object> chefA = new HashMap<>();
                            chefA.put("id", service.getChefA().getId());
                            chefA.put("nom", service.getChefA().getNom());
                            chefA.put("prenom", service.getChefA().getPrenom());
                            chefA.put("matriculeP", service.getChefA().getMatriculeP());
                            serviceData.put("chefA", chefA);
                        }
                        
                        // Chef B
                        if (service.getChefB() != null) {
                            Map<String, Object> chefB = new HashMap<>();
                            chefB.put("id", service.getChefB().getId());
                            chefB.put("nom", service.getChefB().getNom());
                            chefB.put("prenom", service.getChefB().getPrenom());
                            chefB.put("matriculeP", service.getChefB().getMatriculeP());
                            serviceData.put("chefB", chefB);
                        }
                        
                        // RH Responsable
                        if (service.getRhResponsable() != null) {
                            Map<String, Object> rhResponsable = new HashMap<>();
                            rhResponsable.put("id", service.getRhResponsable().getId());
                            rhResponsable.put("nom", service.getRhResponsable().getNom());
                            rhResponsable.put("prenom", service.getRhResponsable().getPrenom());
                            rhResponsable.put("matriculeP", service.getRhResponsable().getMatriculeP());
                            serviceData.put("rhResponsable", rhResponsable);
                        }
                        
                        employeData.put("service", serviceData);
                    }
                } else {
                    employeData.put("service", null);
                }
                
                result.add(employeData);
            }
            
            return ResponseEntity.ok(result);
            
        } catch (Exception ex) {
            ex.printStackTrace();
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Erreur lors du chargement des employés complets");
            error.put("details", ex.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    @GetMapping("/test-auth")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> testAuth() {
        Map<String, Object> response = new HashMap<>();
        response.put("authenticated", true);
        response.put("message", "Authentification réussie pour les employés");
        response.put("timestamp", System.currentTimeMillis());
        
        try {
            org.springframework.security.core.Authentication auth = 
                org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();
            if (auth != null) {
                response.put("user", auth.getName());
                response.put("authorities", auth.getAuthorities().toString());
            }
        } catch (Exception e) {
            response.put("auth_error", e.getMessage());
        }
        
        return ResponseEntity.ok(response);
    }
}