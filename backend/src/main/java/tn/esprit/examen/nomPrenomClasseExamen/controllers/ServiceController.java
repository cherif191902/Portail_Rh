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
            if (s.getChef() != null) {
                java.util.Map<String,Object> chef = new java.util.HashMap<>();
                chef.put("id", s.getChef().getId());
                chef.put("nom", s.getChef().getNom());
                chef.put("prenom", s.getChef().getPrenom());
                chef.put("matriculeP", s.getChef().getMatriculeP());
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

        // Charger le rôle chef service
        Role chefRole = roleRepository.findByNomRole(ERole.ROLE_CHEF_SERVICE)
                .orElseGet(() -> roleRepository.save(new Role(ERole.ROLE_CHEF_SERVICE)));

        // Ancien chef : retirer le rôle si plus chef d'aucun service ensuite
        Personnel oldChef = s.getChef();
        if (oldChef != null && !oldChef.getId().equals(newChef.getId())) {
            s.setChef(null); // détacher pour l'instant
            // Vérifier si l'ancien chef est chef d'autres services
            boolean stillChefElsewhere = serviceRepository.findAll().stream()
                    .anyMatch(serv -> serv.getChef() != null && serv.getChef().getId().equals(oldChef.getId()));
            if (!stillChefElsewhere) {
                if (oldChef.getRoles() != null) {
                    oldChef.getRoles().removeIf(r -> r.getNomRole() == ERole.ROLE_CHEF_SERVICE);
                    personnelRepository.save(oldChef);
                }
            }
        }

        // Ajouter le rôle chef au nouveau chef si pas déjà présent
        if (newChef.getRoles() == null) {
            newChef.setRoles(new java.util.HashSet<>());
        }
        boolean hasChefRole = newChef.getRoles().stream().anyMatch(r -> r.getNomRole() == ERole.ROLE_CHEF_SERVICE);
        if (!hasChefRole) {
            newChef.getRoles().add(chefRole);
            personnelRepository.save(newChef);
        }

        s.setChef(newChef);
        serviceRepository.save(s);

        java.util.Map<String,Object> res = new java.util.HashMap<>();
        res.put("idService", s.getIdService());
        res.put("chefId", s.getChef() != null ? s.getChef().getId() : null);
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

    @GetMapping("/chefs")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllChefs() {
        // role name stored as enum name, e.g. ROLE_CHEF_SERVICE
        try {
            List<Personnel> list = personnelRepository.findByRolesNomRole(tn.esprit.examen.nomPrenomClasseExamen.entities.ERole.ROLE_CHEF_SERVICE);
            return ResponseEntity.ok(mapPersonnels(list));
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
            List<Personnel> list = personnelRepository.findAllByNotRole(tn.esprit.examen.nomPrenomClasseExamen.entities.ERole.ROLE_CHEF_SERVICE);
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

}
