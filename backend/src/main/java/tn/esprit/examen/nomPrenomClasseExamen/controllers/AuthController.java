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
    
    @Autowired
    private tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository serviceRepository;

    @GetMapping("/services")
    public ResponseEntity<?> getAllServicesPublic() {
        try {
            List<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> services = serviceRepository.findAll();
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
                    .body(new MessageResponse("Error: " + e.getMessage()));
        }
    }

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

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        // Vérifier si l'email existe déjà
        if (personnelRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already taken!"));
        }

        try {
            // Vérifier que le service existe
            tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = serviceRepository.findById(signUpRequest.getServiceId())
                    .orElseThrow(() -> new RuntimeException("Error: Service not found!"));

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

            // Assigner le service et la hiérarchie automatiquement
            personnel.setService(service);
            personnel.setChefA(service.getChefA());
            personnel.setChefB(service.getChefB());
            personnel.setRhResponsable(service.getRhResponsable());

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

                // Créer la réponse avec les informations du service
                java.util.Map<String, Object> response = new java.util.HashMap<>();
                response.put("message", "User registered successfully! Credentials sent to " + signUpRequest.getEmail());
                response.put("serviceId", service.getIdService());
                response.put("nomService", service.getNomService());
                response.put("chefAId", service.getChefA() != null ? service.getChefA().getId() : null);
                response.put("chefBId", service.getChefB() != null ? service.getChefB().getId() : null);
                response.put("rhId", service.getRhResponsable() != null ? service.getRhResponsable().getId() : null);
                
                return ResponseEntity.ok(response);

            } catch (Exception emailError) {
                // Si l'email échoue, on retourne quand même un succès avec les identifiants
                System.err.println("⚠️ Email non envoyé, mais utilisateur créé : " + emailError.getMessage());

                // Créer la réponse avec les informations du service (même si email échoue)
                java.util.Map<String, Object> response = new java.util.HashMap<>();
                response.put("message", "User registered successfully! Email service unavailable. Credentials: Matricule=" + matricule + ", Password=" + password);
                response.put("serviceId", service.getIdService());
                response.put("nomService", service.getNomService());
                response.put("chefAId", service.getChefA() != null ? service.getChefA().getId() : null);
                response.put("chefBId", service.getChefB() != null ? service.getChefB().getId() : null);
                response.put("rhId", service.getRhResponsable() != null ? service.getRhResponsable().getId() : null);
                
                return ResponseEntity.ok(response);
            }

        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: " + e.getMessage()));
        }
    }
}