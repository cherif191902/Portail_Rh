package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Role;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.payload.request.LoginRequest;
import tn.esprit.examen.nomPrenomClasseExamen.payload.request.SignupRequest;
import tn.esprit.examen.nomPrenomClasseExamen.payload.response.JwtResponse;
import tn.esprit.examen.nomPrenomClasseExamen.payload.response.MessageResponse;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.RoleRepository;
import tn.esprit.examen.nomPrenomClasseExamen.security.JwtUtil;
import org.springframework.security.core.GrantedAuthority;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    PersonnelRepository personnelRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtil jwtUtils;

    @Autowired
    private tn.esprit.examen.nomPrenomClasseExamen.services.EmailService emailService;

    @Autowired
    private tn.esprit.examen.nomPrenomClasseExamen.services.CredentialGeneratorService credentialGenerator;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getMatricule(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Changement ici: utilisez directement le Principal
        Personnel personnel = (Personnel) authentication.getPrincipal();

        String jwt = jwtUtils.generateToken(personnel);

        List<String> roles = personnel.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(
                jwt,
                personnel.getId(),
                personnel.getMatriculeP(),
                personnel.getEmail(),
                roles));
    }

    @Autowired
    private tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository serviceRepository;

    @GetMapping("/services")
    public ResponseEntity<?> getServicesForSignup() {
        try {
            List<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> services = serviceRepository.findAll();
            
            // Créer une liste simplifiée pour l'inscription
            List<java.util.Map<String, Object>> serviceList = new java.util.ArrayList<>();
            for (tn.esprit.examen.nomPrenomClasseExamen.entities.Service service : services) {
                java.util.Map<String, Object> serviceMap = new java.util.HashMap<>();
                serviceMap.put("idService", service.getIdService());
                serviceMap.put("nomService", service.getNomService());
                serviceMap.put("libService", service.getLibService());
                serviceList.add(serviceMap);
            }
            
            return ResponseEntity.ok(serviceList);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(new MessageResponse("Erreur lors du chargement des services: " + e.getMessage()));
        }
    }

    @PostMapping("/debug/assign-chef")
    public ResponseEntity<?> assignChefToService(
            @RequestParam Long serviceId, 
            @RequestParam Integer chefId, 
            @RequestParam String type) {
        try {
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = 
                serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service non trouvé"));
                
            tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel chef = 
                personnelRepository.findById(chefId)
                .orElseThrow(() -> new RuntimeException("Personnel non trouvé"));
            
            if ("A".equals(type)) {
                service.setChefA(chef);
            } else if ("B".equals(type)) {
                service.setChefB(chef);
            } else {
                return ResponseEntity.badRequest().body(new MessageResponse("Type doit être 'A' ou 'B'"));
            }
            
            serviceRepository.save(service);
            
            return ResponseEntity.ok(new MessageResponse(
                "Chef " + type + " assigné au service " + service.getNomService() + 
                ": " + chef.getNom() + " " + chef.getPrenom()
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Erreur: " + e.getMessage()));
        }
    }

    @PostMapping("/debug/assign-rh")
    public ResponseEntity<?> assignRhToService(
            @RequestParam Long serviceId, 
            @RequestParam Integer rhId) {
        try {
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = 
                serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service non trouvé"));
                
            tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel rh = 
                personnelRepository.findById(rhId)
                .orElseThrow(() -> new RuntimeException("Personnel RH non trouvé"));
            
            service.setRhResponsable(rh);
            serviceRepository.save(service);
            
            return ResponseEntity.ok(new MessageResponse(
                "RH responsable assigné au service " + service.getNomService() + 
                ": " + rh.getNom() + " " + rh.getPrenom()
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Erreur: " + e.getMessage()));
        }
    }

    @GetMapping("/debug/personnel")
    public ResponseEntity<?> debugAllPersonnel() {
        try {
            List<tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel> personnels = personnelRepository.findAll();
            
            List<java.util.Map<String, Object>> debugList = new java.util.ArrayList<>();
            for (tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel personnel : personnels) {
                java.util.Map<String, Object> debugMap = new java.util.HashMap<>();
                debugMap.put("id", personnel.getId());
                debugMap.put("matricule", personnel.getMatriculeP());
                debugMap.put("nom", personnel.getNom());
                debugMap.put("prenom", personnel.getPrenom());
                debugMap.put("email", personnel.getEmail());
                
                // Rôles
                List<String> roles = new ArrayList<>();
                if (personnel.getRoles() != null) {
                    for (tn.esprit.examen.nomPrenomClasseExamen.entities.Role role : personnel.getRoles()) {
                        roles.add(role.getNomRole().name());
                    }
                }
                debugMap.put("roles", roles);
                
                // Service
                debugMap.put("service", personnel.getService() != null ? 
                    personnel.getService().getNomService() : "Aucun");
                
                // Chefs assignés
                debugMap.put("chefA", personnel.getChefA() != null ? 
                    "ID:" + personnel.getChefA().getId() + " - " + personnel.getChefA().getNom() + " " + personnel.getChefA().getPrenom() : 
                    "NULL");
                    
                debugMap.put("chefB", personnel.getChefB() != null ? 
                    "ID:" + personnel.getChefB().getId() + " - " + personnel.getChefB().getNom() + " " + personnel.getChefB().getPrenom() : 
                    "NULL");
                
                // Responsable hiérarchique et RH
                debugMap.put("responsable", personnel.getResponsable() != null ? 
                    "ID:" + personnel.getResponsable().getId() + " - " + personnel.getResponsable().getNom() + " " + personnel.getResponsable().getPrenom() : 
                    "NULL");
                    
                debugMap.put("rhResponsable", personnel.getRhResponsable() != null ? 
                    "ID:" + personnel.getRhResponsable().getId() + " - " + personnel.getRhResponsable().getNom() + " " + personnel.getRhResponsable().getPrenom() : 
                    "NULL");
                
                debugList.add(debugMap);
            }
            
            return ResponseEntity.ok(debugList);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Erreur debug personnel: " + e.getMessage()));
        }
    }

    @GetMapping("/verify-personnel/{id}")
    public ResponseEntity<?> verifyPersonnelAffectations(@PathVariable Integer id) {
        try {
            tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel personnel = 
                personnelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Personnel non trouvé avec l'ID: " + id));
            
            java.util.Map<String, Object> verification = new java.util.HashMap<>();
            verification.put("personnelId", personnel.getId());
            verification.put("nom", personnel.getNom());
            verification.put("prenom", personnel.getPrenom());
            verification.put("email", personnel.getEmail());
            verification.put("matricule", personnel.getMatriculeP());
            
            // Vérification du service
            verification.put("serviceId", personnel.getService() != null ? personnel.getService().getIdService() : null);
            verification.put("serviceName", personnel.getService() != null ? personnel.getService().getNomService() : "NULL");
            
            // Vérification des affectations
            verification.put("chefAId", personnel.getChefA() != null ? personnel.getChefA().getId() : null);
            verification.put("chefAName", personnel.getChefA() != null ? 
                personnel.getChefA().getNom() + " " + personnel.getChefA().getPrenom() : "NULL");
            
            verification.put("chefBId", personnel.getChefB() != null ? personnel.getChefB().getId() : null);
            verification.put("chefBName", personnel.getChefB() != null ? 
                personnel.getChefB().getNom() + " " + personnel.getChefB().getPrenom() : "NULL");
            
            verification.put("rhResponsableId", personnel.getRhResponsable() != null ? personnel.getRhResponsable().getId() : null);
            verification.put("rhResponsableName", personnel.getRhResponsable() != null ? 
                personnel.getRhResponsable().getNom() + " " + personnel.getRhResponsable().getPrenom() : "NULL");
            
            verification.put("responsableId", personnel.getResponsable() != null ? personnel.getResponsable().getId() : null);
            verification.put("responsableName", personnel.getResponsable() != null ? 
                personnel.getResponsable().getNom() + " " + personnel.getResponsable().getPrenom() : "NULL");
            
            // Status des affectations
            boolean affectationsCompletes = personnel.getChefA() != null || personnel.getChefB() != null || personnel.getRhResponsable() != null;
            verification.put("affectationsCompletes", affectationsCompletes);
            verification.put("message", affectationsCompletes ? 
                "✅ Personnel correctement affecté avec au moins un responsable" : 
                "⚠️ Personnel sans responsables - tous les champs sont NULL");
            
            return ResponseEntity.ok(verification);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Erreur vérification: " + e.getMessage()));
        }
    }

    @PostMapping("/test-affectation")
    public ResponseEntity<?> testAffectationService(@RequestParam Long serviceId) {
        try {
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = 
                serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service non trouvé avec l'ID: " + serviceId));
            
            java.util.Map<String, Object> testResult = new java.util.HashMap<>();
            testResult.put("serviceId", service.getIdService());
            testResult.put("serviceName", service.getNomService());
            
            // Test des affectations qui seraient faites
            testResult.put("chefAWillBeAssigned", service.getChefA() != null);
            testResult.put("chefADetails", service.getChefA() != null ? 
                "ID:" + service.getChefA().getId() + " - " + service.getChefA().getNom() + " " + service.getChefA().getPrenom() : 
                "NULL - champ chef_a_id restera NULL");
                
            testResult.put("chefBWillBeAssigned", service.getChefB() != null);
            testResult.put("chefBDetails", service.getChefB() != null ? 
                "ID:" + service.getChefB().getId() + " - " + service.getChefB().getNom() + " " + service.getChefB().getPrenom() : 
                "NULL - champ chef_b_id restera NULL");
                
            testResult.put("rhWillBeAssigned", service.getRhResponsable() != null);
            testResult.put("rhDetails", service.getRhResponsable() != null ? 
                "ID:" + service.getRhResponsable().getId() + " - " + service.getRhResponsable().getNom() + " " + service.getRhResponsable().getPrenom() : 
                "NULL - champ rh_responsable_id restera NULL");
            
            // Déterminer qui sera le responsable hiérarchique principal
            String responsablePrincipal = "NULL - aucun responsable ne sera assigné";
            if (service.getChefA() != null) {
                responsablePrincipal = "Chef A sera le responsable principal: " + service.getChefA().getNom() + " " + service.getChefA().getPrenom();
            } else if (service.getChefB() != null) {
                responsablePrincipal = "Chef B sera le responsable principal: " + service.getChefB().getNom() + " " + service.getChefB().getPrenom();
            }
            testResult.put("responsablePrincipal", responsablePrincipal);
            
            return ResponseEntity.ok(testResult);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Erreur test affectation: " + e.getMessage()));
        }
    }

    @GetMapping("/debug/services")
    public ResponseEntity<?> debugAllServices() {
        try {
            List<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> services = serviceRepository.findAll();
            
            List<java.util.Map<String, Object>> debugList = new java.util.ArrayList<>();
            for (tn.esprit.examen.nomPrenomClasseExamen.entities.Service service : services) {
                java.util.Map<String, Object> debugMap = new java.util.HashMap<>();
                debugMap.put("idService", service.getIdService());
                debugMap.put("nomService", service.getNomService());
                debugMap.put("libService", service.getLibService());
                
                debugMap.put("chefA", service.getChefA() != null ? 
                    "ID:" + service.getChefA().getId() + " - " + service.getChefA().getNom() + " " + service.getChefA().getPrenom() : 
                    "NULL");
                    
                debugMap.put("chefB", service.getChefB() != null ? 
                    "ID:" + service.getChefB().getId() + " - " + service.getChefB().getNom() + " " + service.getChefB().getPrenom() : 
                    "NULL");

                debugMap.put("rhResponsable", service.getRhResponsable() != null ? 
                    "ID:" + service.getRhResponsable().getId() + " - " + service.getRhResponsable().getNom() + " " + service.getRhResponsable().getPrenom() : 
                    "NULL");
                    
                debugMap.put("nombrePersonnels", service.getPersonnels().size());
                
                debugList.add(debugMap);
            }
            
            return ResponseEntity.ok(debugList);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(new MessageResponse("Erreur debug: " + e.getMessage()));
        }
    }

    @GetMapping("/service/{id}")
    public ResponseEntity<?> getServiceDetailsForSignup(@PathVariable Long id) {
        try {
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service non trouvé avec l'ID: " + id));
            
            // Créer un objet avec tous les détails nécessaires pour l'inscription
            java.util.Map<String, Object> serviceDetails = new java.util.HashMap<>();
            serviceDetails.put("idService", service.getIdService());
            serviceDetails.put("nomService", service.getNomService());
            serviceDetails.put("libService", service.getLibService());
            
            // Ajouter les IDs des chefs et RH directement depuis la table service
            if (service.getChefA() != null) {
                serviceDetails.put("chefAId", service.getChefA().getId());
                serviceDetails.put("chefANom", service.getChefA().getNom() + " " + service.getChefA().getPrenom());
                serviceDetails.put("hasChefA", true);
            } else {
                serviceDetails.put("chefAId", null);
                serviceDetails.put("chefANom", "⚠️ Aucun chef A assigné à ce service");
                serviceDetails.put("hasChefA", false);
            }
            
            if (service.getChefB() != null) {
                serviceDetails.put("chefBId", service.getChefB().getId());
                serviceDetails.put("chefBNom", service.getChefB().getNom() + " " + service.getChefB().getPrenom());
                serviceDetails.put("hasChefB", true);
            } else {
                serviceDetails.put("chefBId", null);
                serviceDetails.put("chefBNom", "⚠️ Aucun chef B assigné à ce service");
                serviceDetails.put("hasChefB", false);
            }
            
            // Récupérer le RH responsable directement depuis la table service
            if (service.getRhResponsable() != null) {
                serviceDetails.put("rhId", service.getRhResponsable().getId());
                serviceDetails.put("rhNom", service.getRhResponsable().getNom() + " " + service.getRhResponsable().getPrenom());
                serviceDetails.put("hasRh", true);
            } else {
                serviceDetails.put("rhId", null);
                serviceDetails.put("rhNom", "⚠️ Aucun RH responsable assigné à ce service");
                serviceDetails.put("hasRh", false);
            }
            
            return ResponseEntity.ok(serviceDetails);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(new MessageResponse("Erreur lors du chargement des détails du service: " + e.getMessage()));
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        // Vérifier si l'email existe déjà
        if (personnelRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already taken!"));
        }

        try {
            // Générer automatiquement le matricule et le mot de passe
            String matricule = credentialGenerator.generateMatricule(
                signUpRequest.getNom(),
                signUpRequest.getPrenom()
            );
            String password = credentialGenerator.generateSimplePassword();

            // Créer le nouveau compte utilisateur
            Personnel personnel = new Personnel(
                    matricule,
                    signUpRequest.getEmail(),
                    encoder.encode(password),
                    signUpRequest.getNom(),
                    signUpRequest.getPrenom());

            // 🔍 ÉTAPE 1: Vérifier et récupérer le service
            System.out.println("🔍 Début du processus d'affectation automatique pour: " + signUpRequest.getEmail());
            
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = 
                serviceRepository.findById(signUpRequest.getServiceId().longValue())
                .orElseThrow(() -> new RuntimeException("❌ Service non trouvé avec l'ID: " + signUpRequest.getServiceId()));
            
            System.out.println("✅ Service trouvé: " + service.getNomService() + " (ID: " + service.getIdService() + ")");

            // 🔍 ÉTAPE 2: Assigner le service à l'utilisateur
            personnel.setService(service);

            // 🔍 ÉTAPE 3: Récupération et affectation automatique des responsables depuis le service
            java.util.Map<String, String> affectations = new java.util.HashMap<>();
            
            // Chef A
            if (service.getChefA() != null) {
                personnel.setChefA(service.getChefA());
                personnel.setResponsable(service.getChefA()); // Chef A = responsable principal
                affectations.put("chefA", service.getChefA().getNom() + " " + service.getChefA().getPrenom() + " (ID: " + service.getChefA().getId() + ")");
                System.out.println("✅ Chef A assigné: " + affectations.get("chefA"));
            } else {
                personnel.setChefA(null);
                affectations.put("chefA", "NULL - Aucun Chef A dans le service");
                System.out.println("⚠️ Champ chef_a_id restera NULL - Aucun Chef A dans le service " + service.getNomService());
            }

            // Chef B
            if (service.getChefB() != null) {
                personnel.setChefB(service.getChefB());
                // Si pas de Chef A, Chef B devient responsable principal
                if (service.getChefA() == null) {
                    personnel.setResponsable(service.getChefB());
                }
                affectations.put("chefB", service.getChefB().getNom() + " " + service.getChefB().getPrenom() + " (ID: " + service.getChefB().getId() + ")");
                System.out.println("✅ Chef B assigné: " + affectations.get("chefB"));
            } else {
                personnel.setChefB(null);
                affectations.put("chefB", "NULL - Aucun Chef B dans le service");
                System.out.println("⚠️ Champ chef_b_id restera NULL - Aucun Chef B dans le service " + service.getNomService());
            }

            // RH Responsable
            if (service.getRhResponsable() != null) {
                personnel.setRhResponsable(service.getRhResponsable());
                affectations.put("rh", service.getRhResponsable().getNom() + " " + service.getRhResponsable().getPrenom() + " (ID: " + service.getRhResponsable().getId() + ")");
                System.out.println("✅ RH Responsable assigné: " + affectations.get("rh"));
            } else {
                personnel.setRhResponsable(null);
                affectations.put("rh", "NULL - Aucun RH dans le service");
                System.out.println("⚠️ Champ rh_responsable_id restera NULL - Aucun RH dans le service " + service.getNomService());
            }

            // Responsable principal (pour responsable_id)
            String responsablePrincipal = "NULL - Aucun responsable";
            if (personnel.getResponsable() != null) {
                responsablePrincipal = personnel.getResponsable().getNom() + " " + personnel.getResponsable().getPrenom() + " (ID: " + personnel.getResponsable().getId() + ")";
            }
            affectations.put("responsable", responsablePrincipal);

            System.out.println("📋 === RÉSUMÉ DES AFFECTATIONS AUTOMATIQUES ===");
            System.out.println("👤 Utilisateur: " + personnel.getNom() + " " + personnel.getPrenom());
            System.out.println("🏢 Service: " + service.getNomService() + " (service_id: " + service.getIdService() + ")");
            System.out.println("👔 Chef A (chef_a_id): " + affectations.get("chefA"));
            System.out.println("👔 Chef B (chef_b_id): " + affectations.get("chefB"));
            System.out.println("🏛️ RH (rh_responsable_id): " + affectations.get("rh"));
            System.out.println("⭐ Responsable Principal (responsable_id): " + affectations.get("responsable"));
            System.out.println("===============================================");

            // Assigner le rôle USER par défaut
            Role userRole = roleRepository.findByNomRole(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            personnel.addRole(userRole);

            // Sauvegarder l'utilisateur
            personnelRepository.save(personnel);

            // Tentative d'envoi des identifiants par email
            try {
                emailService.sendCredentials(
                    signUpRequest.getEmail(),
                    signUpRequest.getNom(),
                    signUpRequest.getPrenom(),
                    matricule,
                    password
                );

                // Message de succès avec détails des affectations automatiques
                StringBuilder messageBuilder = new StringBuilder();
                messageBuilder.append("✅ Inscription réussie ! Identifiants envoyés à ").append(signUpRequest.getEmail()).append(".\n\n");
                messageBuilder.append("📋 Affectations automatiques effectuées :\n");
                messageBuilder.append("• Service: ").append(service.getNomService()).append("\n");
                
                if (personnel.getChefA() != null) {
                    messageBuilder.append("• Chef A: ").append(personnel.getChefA().getNom()).append(" ").append(personnel.getChefA().getPrenom()).append(" ✅\n");
                } else {
                    messageBuilder.append("• Chef A: Non assigné (champ chef_a_id = NULL) ⚠️\n");
                }
                
                if (personnel.getChefB() != null) {
                    messageBuilder.append("• Chef B: ").append(personnel.getChefB().getNom()).append(" ").append(personnel.getChefB().getPrenom()).append(" ✅\n");
                } else {
                    messageBuilder.append("• Chef B: Non assigné (champ chef_b_id = NULL) ⚠️\n");
                }
                
                if (personnel.getRhResponsable() != null) {
                    messageBuilder.append("• RH: ").append(personnel.getRhResponsable().getNom()).append(" ").append(personnel.getRhResponsable().getPrenom()).append(" ✅\n");
                } else {
                    messageBuilder.append("• RH: Non assigné (champ rh_responsable_id = NULL) ⚠️\n");
                }
                
                if (personnel.getResponsable() != null) {
                    messageBuilder.append("• Responsable principal: ").append(personnel.getResponsable().getNom()).append(" ").append(personnel.getResponsable().getPrenom()).append(" ✅");
                } else {
                    messageBuilder.append("• Responsable principal: Non assigné (champ responsable_id = NULL) ⚠️");
                }
                
                return ResponseEntity.ok(new MessageResponse(messageBuilder.toString()));

            } catch (Exception emailError) {
                // Si l'email échoue, on retourne quand même un succès avec les identifiants
                System.err.println("⚠️ Email non envoyé, mais utilisateur créé : " + emailError.getMessage());

                // Message de succès avec identifiants (email indisponible)  
                StringBuilder messageBuilder = new StringBuilder();
                messageBuilder.append("✅ Inscription réussie ! Service email indisponible.\n\n");
                messageBuilder.append("🔑 Identifiants générés :\n");
                messageBuilder.append("• Matricule: ").append(matricule).append("\n");
                messageBuilder.append("• Mot de passe: ").append(password).append("\n\n");
                messageBuilder.append("📋 Affectations automatiques effectuées :\n");
                messageBuilder.append("• Service: ").append(service.getNomService()).append("\n");
                
                if (personnel.getChefA() != null) {
                    messageBuilder.append("• Chef A: ").append(personnel.getChefA().getNom()).append(" ").append(personnel.getChefA().getPrenom()).append(" ✅\n");
                } else {
                    messageBuilder.append("• Chef A: Non assigné (champ chef_a_id = NULL) ⚠️\n");
                }
                
                if (personnel.getChefB() != null) {
                    messageBuilder.append("• Chef B: ").append(personnel.getChefB().getNom()).append(" ").append(personnel.getChefB().getPrenom()).append(" ✅\n");
                } else {
                    messageBuilder.append("• Chef B: Non assigné (champ chef_b_id = NULL) ⚠️\n");
                }
                
                if (personnel.getRhResponsable() != null) {
                    messageBuilder.append("• RH: ").append(personnel.getRhResponsable().getNom()).append(" ").append(personnel.getRhResponsable().getPrenom()).append(" ✅\n");
                } else {
                    messageBuilder.append("• RH: Non assigné (champ rh_responsable_id = NULL) ⚠️\n");
                }
                
                if (personnel.getResponsable() != null) {
                    messageBuilder.append("• Responsable principal: ").append(personnel.getResponsable().getNom()).append(" ").append(personnel.getResponsable().getPrenom()).append(" ✅");
                } else {
                    messageBuilder.append("• Responsable principal: Non assigné (champ responsable_id = NULL) ⚠️");
                }
                
                return ResponseEntity.ok(new MessageResponse(messageBuilder.toString()));
            }

        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: " + e.getMessage()));
        }
    }
}