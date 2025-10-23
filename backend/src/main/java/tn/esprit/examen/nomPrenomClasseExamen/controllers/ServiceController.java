package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Service;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.RoleRepository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Role;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rh")
@CrossOrigin(origins = "http://localhost:4200")
public class ServiceController {

    private final ServiceRepository serviceRepository;
    private final PersonnelRepository personnelRepository;
    private final RoleRepository roleRepository;

    public ServiceController(ServiceRepository serviceRepository, PersonnelRepository personnelRepository, RoleRepository roleRepository) {
        this.serviceRepository = serviceRepository;
        this.personnelRepository = personnelRepository;
        this.roleRepository = roleRepository;
    }

    @GetMapping("/debug")
    public ResponseEntity<?> debug() {
        java.util.Map<String,Object> m = new java.util.HashMap<>();
        m.put("ok", true);
        m.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(m);
    }

    @GetMapping("/auth-test")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> testAuthentication() {
        java.util.Map<String,Object> m = new java.util.HashMap<>();
        m.put("authenticated", true);
        m.put("timestamp", System.currentTimeMillis());
        
        // Récupérer les détails de l'utilisateur connecté
        try {
            org.springframework.security.core.Authentication auth = 
                org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();
            if (auth != null) {
                m.put("principal", auth.getName());
                m.put("authorities", auth.getAuthorities().toString());
            }
        } catch (Exception e) {
            m.put("auth_error", e.getMessage());
        }
        
        return ResponseEntity.ok(m);
    }

    @GetMapping("/services")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllServicesWithPersonnels() {
        List<Service> list = serviceRepository.findAllWithPersonnels();
        // transform services to safe DTOs to avoid lazy loading / serialization issues
        List<java.util.Map<String, Object>> out = new java.util.ArrayList<>();
        for (Service s : list) {
            java.util.Map<String,Object> m = new java.util.HashMap<>();
            m.put("idService", s.getIdService());
            m.put("nomService", s.getNomService());
            m.put("libService", s.getLibService());
            // Chef A
            if (s.getChefA() != null) {
                java.util.Map<String,Object> chefA = new java.util.HashMap<>();
                chefA.put("id", s.getChefA().getId());
                chefA.put("nom", s.getChefA().getNom());
                chefA.put("prenom", s.getChefA().getPrenom());
                chefA.put("matriculeP", s.getChefA().getMatriculeP());
                m.put("chefA", chefA);
            } else {
                m.put("chefA", null);
            }
            
            // Chef B
            if (s.getChefB() != null) {
                java.util.Map<String,Object> chefB = new java.util.HashMap<>();
                chefB.put("id", s.getChefB().getId());
                chefB.put("nom", s.getChefB().getNom());
                chefB.put("prenom", s.getChefB().getPrenom());
                chefB.put("matriculeP", s.getChefB().getMatriculeP());
                m.put("chefB", chefB);
            } else {
                m.put("chefB", null);
            }
            
            // Compatibilité - prendre chef A comme chef principal
            if (s.getChefA() != null) {
                java.util.Map<String,Object> chef = new java.util.HashMap<>();
                chef.put("id", s.getChefA().getId());
                chef.put("nom", s.getChefA().getNom());
                chef.put("prenom", s.getChefA().getPrenom());
                chef.put("matriculeP", s.getChefA().getMatriculeP());
                m.put("chef", chef);
            } else {
                m.put("chef", null);
            }
            // don't include full personnels to avoid recursion; include simple list
            java.util.List<java.util.Map<String,Object>> ps = new java.util.ArrayList<>();
            if (s.getPersonnels() != null) {
                for (tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel p : s.getPersonnels()) {
                    java.util.Map<String,Object> pm = new java.util.HashMap<>();
                    pm.put("id", p.getId());
                    pm.put("nom", p.getNom());
                    pm.put("prenom", p.getPrenom());
                    pm.put("matriculeP", p.getMatriculeP());
                    ps.add(pm);
                }
            }
            m.put("personnels", ps);
            out.add(m);
        }
        return ResponseEntity.ok(out);
    }

    @PutMapping("/service/{serviceId}/assign-chef/{personnelId}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> assignChefToService(@PathVariable Long serviceId, @PathVariable Integer personnelId) {
        Optional<Service> os = serviceRepository.findById(serviceId);
        Optional<Personnel> op = personnelRepository.findById(personnelId);
        if (os.isEmpty() || op.isEmpty()) return ResponseEntity.notFound().build();
        Service s = os.get();
        Personnel newChef = op.get();

        // Charger le rôle chef A
        Role chefARole = roleRepository.findByNomRole(ERole.ROLE_CHEF_A)
                .orElseGet(() -> roleRepository.save(new Role(ERole.ROLE_CHEF_A)));

        // Ancien Chef A : retirer le rôle si plus chef d'aucun service ensuite
        Personnel oldChefA = s.getChefA();
        if (oldChefA != null && !oldChefA.getId().equals(newChef.getId())) {
            s.setChefA(null); // détacher pour l'instant
            // Vérifier si l'ancien chef est encore chef d'autres services (A ou B)
            boolean stillChefElsewhere = serviceRepository.findAll().stream()
                    .anyMatch(serv -> (serv.getChefA() != null && serv.getChefA().getId().equals(oldChefA.getId())) ||
                                     (serv.getChefB() != null && serv.getChefB().getId().equals(oldChefA.getId())));
            if (!stillChefElsewhere) {
                if (oldChefA.getRoles() != null) {
                    oldChefA.getRoles().removeIf(r -> r.getNomRole() == ERole.ROLE_CHEF_A);
                    personnelRepository.save(oldChefA);
                }
            }
        }

        // Ajouter le rôle chef au nouveau chef si pas déjà présent
        if (newChef.getRoles() == null) {
            newChef.setRoles(new java.util.HashSet<>());
        }
        boolean hasChefARole = newChef.getRoles().stream().anyMatch(r -> r.getNomRole() == ERole.ROLE_CHEF_A);
        if (!hasChefARole) {
            newChef.getRoles().add(chefARole);
            personnelRepository.save(newChef);
        }

        s.setChefA(newChef); // Affecter comme Chef A par défaut
        serviceRepository.save(s);

        java.util.Map<String,Object> res = new java.util.HashMap<>();
        res.put("idService", s.getIdService());
        res.put("chefAId", s.getChefA() != null ? s.getChefA().getId() : null);
        res.put("chefBId", s.getChefB() != null ? s.getChefB().getId() : null);
        res.put("chefRoles", newChef.getRoles().stream().map(r -> r.getNomRole().name()).toList());
        return ResponseEntity.ok(res);
    }

    @PutMapping("/service/{serviceId}/assign-employee/{personnelId}")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> assignEmployeeToService(@PathVariable Long serviceId, @PathVariable Integer personnelId) {
        Optional<Service> os = serviceRepository.findById(serviceId);
        Optional<Personnel> op = personnelRepository.findById(personnelId);
        if (os.isEmpty() || op.isEmpty()) return ResponseEntity.notFound().build();
        Service s = os.get();
        Personnel p = op.get();
        p.setService(s);
    personnelRepository.save(p);
    java.util.Map<String,Object> res = new java.util.HashMap<>();
    res.put("id", p.getId());
    res.put("serviceId", s.getIdService());
    return ResponseEntity.ok(res);
    }

    @GetMapping("/personnels")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllPersonnels() {
        try {
            List<Personnel> list = personnelRepository.findAll();
            return ResponseEntity.ok(mapPersonnels(list));
        } catch (Exception ex) {
            ex.printStackTrace();
            java.util.Map<String,Object> err = new java.util.HashMap<>();
            err.put("error", "Failed to load personnels");
            err.put("details", ex.getMessage());
            return ResponseEntity.status(500).body(err);
        }
    }

    @GetMapping("/personnels/complet")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllPersonnelsComplet() {
        try {
            List<Personnel> list = personnelRepository.findAll();
            return ResponseEntity.ok(mapPersonnelsComplet(list));
        } catch (Exception ex) {
            ex.printStackTrace();
            java.util.Map<String,Object> err = new java.util.HashMap<>();
            err.put("error", "Failed to load personnels complet");
            err.put("details", ex.getMessage());
            return ResponseEntity.status(500).body(err);
        }
    }

    @GetMapping("/chefs")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllChefs() {
        // role name stored as enum name, e.g. ROLE_CHEF_A, ROLE_CHEF_B
        try {
            List<Personnel> chefA = personnelRepository.findByRolesNomRole(tn.esprit.examen.nomPrenomClasseExamen.entities.ERole.ROLE_CHEF_A);
            List<Personnel> chefB = personnelRepository.findByRolesNomRole(tn.esprit.examen.nomPrenomClasseExamen.entities.ERole.ROLE_CHEF_B);
            List<Personnel> allChefs = new java.util.ArrayList<>();
            allChefs.addAll(chefA);
            allChefs.addAll(chefB);
            return ResponseEntity.ok(mapPersonnels(allChefs));
        } catch (Exception ex) {
            ex.printStackTrace();
            java.util.Map<String,Object> err = new java.util.HashMap<>();
            err.put("error", "Failed to load chefs");
            err.put("details", ex.getMessage());
            return ResponseEntity.status(500).body(err);
        }
    }

    @GetMapping("/employees")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllNonChefs() {
        try {
            // Récupérer tous les personnels qui ne sont ni CHEF_A ni CHEF_B
            List<Personnel> allPersonnels = personnelRepository.findAll();
            List<Personnel> list = allPersonnels.stream()
                .filter(p -> p.getRoles() == null || p.getRoles().stream()
                    .noneMatch(r -> r.getNomRole() == tn.esprit.examen.nomPrenomClasseExamen.entities.ERole.ROLE_CHEF_A || 
                                  r.getNomRole() == tn.esprit.examen.nomPrenomClasseExamen.entities.ERole.ROLE_CHEF_B))
                .collect(java.util.stream.Collectors.toList());
            return ResponseEntity.ok(mapPersonnels(list));
        } catch (Exception ex) {
            ex.printStackTrace();
            java.util.Map<String,Object> err = new java.util.HashMap<>();
            err.put("error", "Failed to load employees");
            err.put("details", ex.getMessage());
            return ResponseEntity.status(500).body(err);
        }
    }

    // helper to map personnel entities to lightweight DTO maps
    private java.util.List<java.util.Map<String,Object>> mapPersonnels(List<Personnel> list) {
        java.util.List<java.util.Map<String,Object>> out = new java.util.ArrayList<>();
        for (Personnel p : list) {
            java.util.Map<String,Object> m = new java.util.HashMap<>();
            m.put("id", p.getId());
            m.put("nom", p.getNom());
            m.put("prenom", p.getPrenom());
            m.put("matriculeP", p.getMatriculeP());
            // map roles to strings
            java.util.List<String> roles = new java.util.ArrayList<>();
            if (p.getRoles() != null) {
                for (tn.esprit.examen.nomPrenomClasseExamen.entities.Role r : p.getRoles()) {
                    if (r != null && r.getNomRole() != null) roles.add(r.getNomRole().name());
                }
            }
            m.put("roles", roles);
            out.add(m);
        }
        return out;
    }

    // helper to map personnel entities with complete service and chef information
    private java.util.List<java.util.Map<String,Object>> mapPersonnelsComplet(List<Personnel> list) {
        java.util.List<java.util.Map<String,Object>> out = new java.util.ArrayList<>();
        for (Personnel p : list) {
            java.util.Map<String,Object> m = new java.util.HashMap<>();
            m.put("id", p.getId());
            m.put("nom", p.getNom());
            m.put("prenom", p.getPrenom());
            m.put("matriculeP", p.getMatriculeP());
            m.put("email", p.getEmail());
            m.put("department", p.getDepartment());
            m.put("numTel", p.getNumTel());
            m.put("poste", p.getPoste());
            m.put("niveau", p.getNiveau());

            // map roles to strings
            java.util.List<String> roles = new java.util.ArrayList<>();
            if (p.getRoles() != null) {
                for (tn.esprit.examen.nomPrenomClasseExamen.entities.Role r : p.getRoles()) {
                    if (r != null && r.getNomRole() != null) roles.add(r.getNomRole().name());
                }
            }
            m.put("roles", roles);

            // map service information with chef details
            if (p.getService() != null) {
                Service service = p.getService();
                java.util.Map<String,Object> serviceInfo = new java.util.HashMap<>();
                serviceInfo.put("idService", service.getIdService());
                serviceInfo.put("nomService", service.getNomService());
                serviceInfo.put("libService", service.getLibService());

                // Add chef information
                if (service.getChefA() != null) {
                    java.util.Map<String,Object> chefAInfo = new java.util.HashMap<>();
                    chefAInfo.put("id", service.getChefA().getId());
                    chefAInfo.put("nom", service.getChefA().getNom());
                    chefAInfo.put("prenom", service.getChefA().getPrenom());
                    chefAInfo.put("matriculeP", service.getChefA().getMatriculeP());
                    serviceInfo.put("chefA", chefAInfo);
                }

                if (service.getChefB() != null) {
                    java.util.Map<String,Object> chefBInfo = new java.util.HashMap<>();
                    chefBInfo.put("id", service.getChefB().getId());
                    chefBInfo.put("nom", service.getChefB().getNom());
                    chefBInfo.put("prenom", service.getChefB().getPrenom());
                    chefBInfo.put("matriculeP", service.getChefB().getMatriculeP());
                    serviceInfo.put("chefB", chefBInfo);
                }

                // Add RH information
                if (service.getRhResponsable() != null) {
                    java.util.Map<String,Object> rhInfo = new java.util.HashMap<>();
                    rhInfo.put("id", service.getRhResponsable().getId());
                    rhInfo.put("nom", service.getRhResponsable().getNom());
                    rhInfo.put("prenom", service.getRhResponsable().getPrenom());
                    rhInfo.put("matriculeP", service.getRhResponsable().getMatriculeP());
                    serviceInfo.put("rhResponsable", rhInfo);
                }

                m.put("service", serviceInfo);
            } else {
                m.put("service", null);
            }

            out.add(m);
        }
        return out;
    }

}
