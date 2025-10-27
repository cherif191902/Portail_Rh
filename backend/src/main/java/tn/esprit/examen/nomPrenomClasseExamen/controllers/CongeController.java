package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.dto.CongeRequestDto;
import tn.esprit.examen.nomPrenomClasseExamen.dto.DemandeCongeDto;
import tn.esprit.examen.nomPrenomClasseExamen.dto.DemandeCongeRHDTo;
import tn.esprit.examen.nomPrenomClasseExamen.dto.PersonnelDTO;
import tn.esprit.examen.nomPrenomClasseExamen.dto.PersonnelMapper;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.TypeConge;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CongeRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.services.CongeMapperService;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping({"/api/conge", "/conge"})
@CrossOrigin(origins = "http://localhost:4200")
public class CongeController {

    private static final Logger logger = LoggerFactory.getLogger(CongeController.class);
    
    private final CongeRepository congeRepository;
    private final PersonnelRepository personnelRepository;
    private final tn.esprit.examen.nomPrenomClasseExamen.repositories.NotificationRepository notificationRepository;
    private final tn.esprit.examen.nomPrenomClasseExamen.services.CongeService congeService;
    private final tn.esprit.examen.nomPrenomClasseExamen.repositories.TypeCongeRepository typeCongeRepository;
    private final CongeMapperService congeMapperService;
    private final tn.esprit.examen.nomPrenomClasseExamen.services.DataInitializationService dataInitializationService;

    public CongeController(CongeRepository congeRepository, PersonnelRepository personnelRepository,
                           tn.esprit.examen.nomPrenomClasseExamen.repositories.NotificationRepository notificationRepository,
                           tn.esprit.examen.nomPrenomClasseExamen.services.CongeService congeService,
                           tn.esprit.examen.nomPrenomClasseExamen.repositories.TypeCongeRepository typeCongeRepository,
                           CongeMapperService congeMapperService,
                           tn.esprit.examen.nomPrenomClasseExamen.services.DataInitializationService dataInitializationService) {
        this.congeRepository = congeRepository;
        this.personnelRepository = personnelRepository;
        this.notificationRepository = notificationRepository;
        this.congeService = congeService;
        this.typeCongeRepository = typeCongeRepository;
        this.congeMapperService = congeMapperService;
        this.dataInitializationService = dataInitializationService;
    }

    // ---------- Helpers ----------
    private String getCurrentMatricule() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null) return null;
        return auth.getName();
    }

    private Optional<Personnel> getCurrentPersonnel() {
        String matricule = getCurrentMatricule();
        if (matricule == null) return Optional.empty();
        return personnelRepository.findByMatriculeP(matricule);
    }

    // ---------- ROLE_USER : soumettre / consulter / modifier / annuler ----------
    @PostMapping("/submit")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> submitConge(@RequestBody CongeRequestDto congeRequestDto) {
        logger.info("📝 Nouvelle demande de congé reçue: {}", congeRequestDto.getTypeConge());
        logger.info("🔍 DEBUG - dateDebut reçue: {}", congeRequestDto.getDateDebut());
        logger.info("🔍 DEBUG - dateFin reçue: {}", congeRequestDto.getDateFin());
        logger.info("🔍 DEBUG - objet complet reçu: typeConge={}, dateDebut={}, dateFin={}, commentaire={}", 
                   congeRequestDto.getTypeConge(), congeRequestDto.getDateDebut(), 
                   congeRequestDto.getDateFin(), congeRequestDto.getCommentaire());
        
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) {
            logger.warn("❌ Utilisateur introuvable lors de la soumission");
            return ResponseEntity.badRequest().body("Utilisateur introuvable");
        }
        
        Personnel personnel = opt.get();
        logger.info("👤 Soumission pour le personnel: {}", personnel.getMatriculeP());
        
        try {
            // Convertir le DTO en entité
            Conge conge = congeMapperService.fromCongeRequestDto(congeRequestDto);
            
            // Trouver le type de congé
            Optional<TypeConge> typeCongeOpt = typeCongeRepository.findByNomTypeconge(congeRequestDto.getTypeConge());
            if (typeCongeOpt.isEmpty()) {
                logger.warn("⚠️ Type de congé introuvable: {}", congeRequestDto.getTypeConge());
                return ResponseEntity.badRequest().body("Type de congé introuvable: " + congeRequestDto.getTypeConge());
            }
            conge.setTypeConge(typeCongeOpt.get());
            
            // Soumettre la demande
            Conge saved = congeService.submitConge(conge, personnel);
            logger.info("✅ Demande de congé sauvegardée avec l'ID: {}", saved.getIdConge());
            
            // Retourner le DTO au frontend
            DemandeCongeDto responseDto = congeMapperService.toDemandeCongeDto(saved);
            return ResponseEntity.ok(responseDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la soumission de la demande: {}", e.getMessage(), e);
            return ResponseEntity.badRequest().body("Erreur: " + e.getMessage());
        }
    }

    @GetMapping("/my")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getMyConges() {
        logger.info("🔍 Récupération des congés pour l'utilisateur connecté");
        
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) {
            logger.warn("❌ Utilisateur introuvable lors de la récupération des congés");
            return ResponseEntity.badRequest().body("Utilisateur introuvable");
        }
        
        Personnel personnel = opt.get();
        logger.info("📋 Recherche des congés pour le personnel: {}", personnel.getMatriculeP());
        
        // Vérifier les rôles pour déterminer la portée des données
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        boolean isAdminOrRh = auth.getAuthorities().stream()
            .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN") || a.getAuthority().equals("ROLE_RH"));
            
        List<Conge> conges;
        if (isAdminOrRh) {
            // Admin/RH peut voir tous les congés
            conges = congeRepository.findAll();
            logger.info("👑 Admin/RH - Récupération de tous les congés: {}", conges.size());
        } else {
            // Utilisateur normal ne voit que ses congés
            conges = congeRepository.findByPersonnel(personnel);
            logger.info("👤 Utilisateur - Récupération des congés personnels: {}", conges.size());
        }
        
        // Convertir les entités en DTOs pour le frontend
        List<DemandeCongeDto> demandesDto = conges.stream()
                .map(congeMapperService::toDemandeCongeDto)
                .collect(Collectors.toList());
        
        logger.info("📤 Retour de {} demandes DTO au frontend", demandesDto.size());
        return ResponseEntity.ok(demandesDto);
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateConge(@PathVariable Long id, @RequestBody CongeRequestDto updateDto) {
        logger.info("🔄 Modification de la demande de congé ID: {}", id);
        
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) {
            logger.warn("❌ Utilisateur introuvable lors de la modification");
            return ResponseEntity.badRequest().body("Utilisateur introuvable");
        }

        Optional<Conge> c = congeRepository.findById(id);
        if (c.isEmpty()) {
            logger.warn("❌ Demande de congé introuvable: {}", id);
            return ResponseEntity.notFound().build();
        }
        
        Conge conge = c.get();
        
        // Vérifier que l'utilisateur ne peut modifier que ses propres congés
        if (!conge.getPersonnel().getMatriculeP().equals(opt.get().getMatriculeP())) {
            logger.warn("🚫 Tentative d'accès non autorisé à la demande {} par {}", 
                       id, opt.get().getMatriculeP());
            return ResponseEntity.status(403).body("Accès refusé - Vous ne pouvez modifier que vos propres demandes");
        }

        if (!"EN_ATTENTE".equals(conge.getRepChefsNiveau1())) {
            logger.warn("⚠️ Tentative de modification d'une demande déjà traitée: {}", id);
            return ResponseEntity.badRequest().body("Impossible de modifier une demande déjà traitée par le chef");
        }

        try {
            // Mettre à jour avec les nouvelles données
            conge.setDateDeb(updateDto.getDateDebut());
            conge.setDateFin(updateDto.getDateFin());
            conge.setNbJours(updateDto.getDuree() != null ? updateDto.getDuree().toString() : null);
            conge.setCommentaire(updateDto.getCommentaire());
            
            // Trouver le type de congé si spécifié
            if (updateDto.getTypeConge() != null) {
                Optional<TypeConge> typeCongeOpt = typeCongeRepository.findByNomTypeconge(updateDto.getTypeConge());
                if (typeCongeOpt.isPresent()) {
                    conge.setTypeConge(typeCongeOpt.get());
                }
            }

            Conge saved = congeRepository.save(conge);
            logger.info("✅ Demande de congé modifiée avec succès: {}", saved.getIdConge());
            
            DemandeCongeDto responseDto = congeMapperService.toDemandeCongeDto(saved);
            return ResponseEntity.ok(responseDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la modification: {}", e.getMessage(), e);
            return ResponseEntity.badRequest().body("Erreur: " + e.getMessage());
        }
    }

    @DeleteMapping("/cancel/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> cancelConge(@PathVariable Long id) {
        logger.info("🗑️ Annulation de la demande de congé ID: {}", id);
        
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) {
            logger.warn("❌ Utilisateur introuvable lors de l'annulation");
            return ResponseEntity.badRequest().body("Utilisateur introuvable");
        }

        Optional<Conge> c = congeRepository.findById(id);
        if (c.isEmpty()) {
            logger.warn("❌ Demande de congé introuvable: {}", id);
            return ResponseEntity.notFound().build();
        }
        
        Conge conge = c.get();
        logger.info("📋 Demande trouvée: ID={}, Personnel={}, Statuts=[Chef1={}, Chef2={}, RH={}]", 
                   id, conge.getPersonnel().getMatriculeP(), 
                   conge.getRepChefsNiveau1(), conge.getRepChefsNiveau2(), conge.getRepRh());
        
        // Vérifier que l'utilisateur ne peut annuler que ses propres congés
        if (!conge.getPersonnel().getMatriculeP().equals(opt.get().getMatriculeP())) {
            logger.warn("🚫 Tentative d'annulation non autorisée de la demande {} par {} (propriétaire: {})", 
                       id, opt.get().getMatriculeP(), conge.getPersonnel().getMatriculeP());
            return ResponseEntity.status(403).body("Accès refusé - Vous ne pouvez annuler que vos propres demandes");
        }

        // Autoriser annulation tant que la demande n'est pas encore approuvée ou refusée définitivement
        if ("APPROUVE".equals(conge.getRepChefsNiveau1()) || 
            "REFUSE".equals(conge.getRepChefsNiveau1()) || 
            "APPROUVE".equals(conge.getRepChefsNiveau2()) || 
            "REFUSE".equals(conge.getRepChefsNiveau2()) || 
            "APPROUVE".equals(conge.getRepRh()) || 
            "REFUSE".equals(conge.getRepRh())) {
            
            logger.warn("⚠️ Tentative d'annulation d'une demande déjà traitée: {} (Statuts: Chef1={}, Chef2={}, RH={})", 
                       id, conge.getRepChefsNiveau1(), conge.getRepChefsNiveau2(), conge.getRepRh());
            return ResponseEntity.badRequest().body("Impossible d'annuler une demande déjà traitée (approuvée ou refusée)");
        }

        try {
            congeRepository.delete(conge);
            logger.info("✅ Demande de congé annulée avec succès: {}", id);
            
            // Retourner une réponse JSON structurée
            Map<String, String> response = new HashMap<>();
            response.put("message", "Demande de congé annulée avec succès");
            response.put("status", "success");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("❌ Erreur lors de l'annulation: {}", e.getMessage(), e);
            return ResponseEntity.badRequest().body("Erreur: " + e.getMessage());
        }
    }

    // ---------- ENDPOINTS PUBLICS POUR LE FRONTEND ----------
    
    /**
     * Récupère la liste des types de congés disponibles
     */
    @GetMapping("/types")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getTypesConges() {
        logger.info("🔍 Récupération des types de congés");
        
        List<TypeConge> types = typeCongeRepository.findAll();
        logger.info("✅ {} types de congés trouvés", types.size());
        
        // Convertir en format simple pour le frontend
        List<Map<String, Object>> typesResponse = types.stream()
                .map(type -> {
                    Map<String, Object> typeMap = new HashMap<>();
                    typeMap.put("id", type.getIdType());
                    typeMap.put("nom", type.getNomTypeconge());
                    typeMap.put("dureeMax", type.getMaxAllowedDays());
                    return typeMap;
                })
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(typesResponse);
    }
    
    /**
     * Endpoint de test pour vérifier la connectivité
     */
    @GetMapping("/test")
    public ResponseEntity<?> testEndpoint() {
        logger.info("🧪 Test de connectivité API");
        Map<String, Object> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "API Conge fonctionne correctement");
        response.put("timestamp", java.time.LocalDateTime.now());
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint de test PUBLIC pour debugging sans authentification
     */
    @GetMapping("/debug/ping")
    public ResponseEntity<?> debugPing() {
        logger.info("🔧 Debug ping - accès public");
        Map<String, Object> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "Backend accessible - Debug OK");
        response.put("timestamp", java.time.LocalDateTime.now());
        response.put("profiles", System.getProperty("spring.profiles.active", "default"));
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint de DEBUG pour tester la réception de CongeRequestDto sans authentification
     */
    @PostMapping("/debug/test-submit")
    public ResponseEntity<?> debugTestSubmit(@RequestBody CongeRequestDto congeRequestDto) {
        logger.info("🔧 DEBUG - Test soumission sans auth");
        logger.info("🔍 DEBUG - typeConge reçu: {}", congeRequestDto.getTypeConge());
        logger.info("🔍 DEBUG - dateDebut reçue: {}", congeRequestDto.getDateDebut());
        logger.info("🔍 DEBUG - dateFin reçue: {}", congeRequestDto.getDateFin());
        logger.info("🔍 DEBUG - duree reçue: {}", congeRequestDto.getDuree());
        logger.info("🔍 DEBUG - commentaire reçu: {}", congeRequestDto.getCommentaire());
        
        Map<String, Object> response = new HashMap<>();
        response.put("status", "DEBUG_OK");
        response.put("message", "CongeRequestDto reçu et analysé");
        response.put("receivedData", Map.of(
            "typeConge", congeRequestDto.getTypeConge(),
            "dateDebut", congeRequestDto.getDateDebut(),
            "dateFin", congeRequestDto.getDateFin(),
            "duree", congeRequestDto.getDuree(),
            "commentaire", congeRequestDto.getCommentaire()
        ));
        
        // Test de validation des dates
        if (congeRequestDto.getDateDebut() == null || congeRequestDto.getDateFin() == null) {
            response.put("validation", "ERREUR - Dates nulles reçues");
        } else {
            response.put("validation", "OK - Dates reçues correctement");
        }
        
        return ResponseEntity.ok(response);
    }

    /**
     * Génère des données de test dynamiques pour l'utilisateur connecté
     */
    @PostMapping("/generate-test-data")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> generateTestData() {
        logger.info("🔄 Génération de données de test");
        
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) {
            return ResponseEntity.badRequest().body("Utilisateur introuvable");
        }
        
        Personnel personnel = opt.get();
        dataInitializationService.ensureTestDataForUser(personnel.getMatriculeP());
        
        Map<String, Object> response = new HashMap<>();
        response.put("status", "SUCCESS");
        response.put("message", "Données de test générées pour " + personnel.getMatriculeP());
        response.put("utilisateur", personnel.getMatriculeP());
        
        return ResponseEntity.ok(response);
    }

    // ---------- ROLE_CHEF_A/CHEF_B : voir demandes de son service, approuver / refuser ----------
    @GetMapping("/chef/pending")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getPendingForChefService() {
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) return ResponseEntity.badRequest().body("Utilisateur introuvable");
        Personnel chef = opt.get();
        if (chef.getService() == null) return ResponseEntity.badRequest().body("Chef sans service affecté");

        List<Conge> list = congeRepository.findPendingForChefService(chef.getService().getIdService());
        return ResponseEntity.ok(list);
    }

    @GetMapping("/chef/pending/my")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getPendingForThisChef() {
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) return ResponseEntity.badRequest().body("Utilisateur introuvable");
        Personnel chef = opt.get();

        // trouver congés où le chef est responsable direct
        List<Conge> niveau1 = congeRepository.findByRepChefsNiveau1("EN_ATTENTE");
        List<Conge> result = new ArrayList<>();
        for (Conge c : niveau1) {
            if (c.getPersonnel() != null && c.getPersonnel().getResponsable() != null && c.getPersonnel().getResponsable().getId().equals(chef.getId())) {
                result.add(c);
            }
        }

        // ajouter demandes niveau2 si chef est responsable du responsable
        List<Conge> niveau2 = congeRepository.findPendingForChef2();
        for (Conge c : niveau2) {
            if (c.getPersonnel() != null && c.getPersonnel().getResponsable() != null && c.getPersonnel().getResponsable().getResponsable() != null
                    && c.getPersonnel().getResponsable().getResponsable().getId().equals(chef.getId())) {
                result.add(c);
            }
        }

        return ResponseEntity.ok(result);
    }

    @GetMapping("/chef/employees")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getEmployeesForChef() {
        try {
            Optional<Personnel> opt = getCurrentPersonnel();
            if (opt.isEmpty()) return ResponseEntity.badRequest().body("Utilisateur introuvable");
            
            Personnel chef = opt.get();
            if (chef.getService() == null) return ResponseEntity.badRequest().body("Chef sans service affecté");
            
            java.util.List<Personnel> employees = personnelRepository.findByServiceId(chef.getService().getIdService());
            
            // Utiliser le mapper pour éviter les références circulaires
            PersonnelMapper mapper = new PersonnelMapper();
            java.util.List<PersonnelDTO> employeeDTOs = mapper.toDTOList(employees);
            
            return ResponseEntity.ok(employeeDTOs);
        } catch (Exception e) {
            logger.error("❌ Erreur récupération employés pour chef:", e);
            return ResponseEntity.internalServerError().body("Erreur lors de la récupération des employés");
        }
    }

    @PostMapping("/chef/decision/{id}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> chefDecision(@PathVariable Long id, @RequestParam String decision, @RequestParam(required = false) String commentaire) {
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) return ResponseEntity.badRequest().body("Utilisateur introuvable");
        Personnel chef = opt.get();

    Optional<Conge> res = congeService.chefDecision(id, chef, decision, commentaire);
    if (res.isEmpty()) return ResponseEntity.status(403).body("Opération non autorisée ou demande introuvable");
    return ResponseEntity.ok(res.get());
    }

    // ---------- ROLE_RH : voir demandes validées par le(s) chef(s), valider définitivement / refuser ----------
    @GetMapping("/rh/pending")
    @PreAuthorize("hasRole('RH')")
    public ResponseEntity<?> getPendingForRh() {
        List<Conge> list = congeRepository.findPendingForRh();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/rh/decision/{id}")
    @PreAuthorize("hasRole('RH')")
    public ResponseEntity<?> rhDecision(@PathVariable Long id, @RequestParam String decision, @RequestParam(required = false) String commentaire) {
    Optional<Personnel> opt = getCurrentPersonnel();
    if (opt.isEmpty()) return ResponseEntity.badRequest().body("Utilisateur introuvable");
    Optional<Conge> res = congeService.rhDecision(id, opt.get(), decision, commentaire);
    if (res.isEmpty()) return ResponseEntity.status(404).body("Demande introuvable");
    return ResponseEntity.ok(res.get());
    }

    // ---------- ROLE_RH : historique des décisions ----------
    @GetMapping("/rh/historique")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getRhHistory(@RequestParam(name = "status", required = false) String status) {
        if (status == null || status.isBlank()) {
            return ResponseEntity.ok(congeRepository.findRhHistoryAll());
        }
        String up = status.trim().toUpperCase();
        if (!up.equals("APPROUVE") && !up.equals("REFUSE")) {
            return ResponseEntity.badRequest().body("Status invalide. Utiliser APPROUVE ou REFUSE");
        }
        return ResponseEntity.ok(congeRepository.findRhHistoryByStatus(up));
    }

    // ---------- LISTE GLOBALE (RH/ADMIN) ----------
    @GetMapping("/all")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllConges() {
        return ResponseEntity.ok(congeRepository.findAll());
    }

    // ---------- Compatibilité front existant (endpoints anciens) ----------
    @GetMapping("/getCng/{matricule}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<List<Object[]>> getCngForChart(@PathVariable String matricule) {
        // Retourne une liste [count, monthLabel] compatible avec le front
        List<Object[]> result = new ArrayList<>();
        List<Object[]> stats = congeRepository.getCongeStatsByMonth();
        for (Object[] row : stats) {
            // repository: MONTH(c.dateDeb), YEAR(c.dateDeb), COUNT(c)
            Integer month = row[0] instanceof Number ? ((Number) row[0]).intValue() : null;
            Integer year = row[1] instanceof Number ? ((Number) row[1]).intValue() : null;
            Long count = row[2] instanceof Number ? ((Number) row[2]).longValue() : 0L;
            String label = (month == null ? "" : month.toString()) + "/" + (year == null ? "" : year.toString());
            result.add(new Object[]{count, label});
        }
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getAllCng")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getAllCongesCompat() {
        return ResponseEntity.ok(congeRepository.findAll());
    }

    @GetMapping("/getNbrCng/{matricule}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<List<Integer>> getNbrCngByMonth(@PathVariable String matricule) {
        // Retourne un tableau de 12 entiers (jan..dec) avec le nombre de congés de l'utilisateur
        List<Integer> months = new ArrayList<>(Collections.nCopies(12, 0));
        List<Conge> conges = congeRepository.findByPersonnelMatricule(matricule);
        for (Conge c : conges) {
            if (c.getDateDeb() != null) {
                int m = c.getDateDeb().getMonthValue();
                months.set(m - 1, months.get(m - 1) + 1);
            }
        }
        return ResponseEntity.ok(months);
    }

    @GetMapping("/getNbrCngMois")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<Map<String, Integer>> getNombreCongesParMoisCompat() {
        Map<String, Integer> stats = new LinkedHashMap<>();
        for (int i = 1; i <= 12; i++) stats.put(java.time.Month.of(i).name().toLowerCase(), 0);
        List<Object[]> raw = congeRepository.getCongeStatsByMonth();
        for (Object[] r : raw) {
            Integer month = r[0] instanceof Number ? ((Number) r[0]).intValue() : null;
            Long count = r[2] instanceof Number ? ((Number) r[2]).longValue() : 0L;
            if (month != null) {
                String key = java.time.Month.of(month).name().toLowerCase();
                stats.put(key, stats.getOrDefault(key, 0) + count.intValue());
            }
        }
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/notifications/{matricule}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getNotificationsCompat(@PathVariable String matricule) {
        List<tn.esprit.examen.nomPrenomClasseExamen.entities.Notification> notes = notificationRepository.findByDestinataireMatricule(matricule);
        return ResponseEntity.ok(notes);
    }

    @GetMapping("/get/{matricule}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getCongesByMatricule(@PathVariable String matricule) {
        List<Conge> list = congeRepository.findByPersonnelMatricule(matricule);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/getTotalCongeThisYear/{matricule}/{year}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<Map<String, Object>> getTotalCongeThisYearCompat(
            @PathVariable String matricule,
            @PathVariable int year) {
        Map<String, Object> response = new HashMap<>();
        List<Conge> list = congeRepository.findByPersonnelMatricule(matricule);
        long used = 0L;
        for (Conge c : list) {
            if (c.getDateDeb() != null && c.getDateDeb().getYear() == year) {
                try {
                    used += c.getNbJours() == null ? 0L : Long.parseLong(c.getNbJours());
                } catch (NumberFormatException ignored) {}
            }
        }
        long total = 25L;
        response.put("matricule", matricule);
        response.put("year", year);
        response.put("totalConges", total);
        response.put("congesUtilises", used);
        response.put("congesRestants", Math.max(0L, total - used));
        return ResponseEntity.ok(response);
    }

    // Compat : POST /conge/add
    @PostMapping("/add")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> addCongeCompat(@RequestBody Conge conge) {
        logger.info("📝 Demande de congé (mode compatibilité) reçue");
        
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) {
            logger.warn("❌ Utilisateur introuvable lors de la soumission (compat)");
            return ResponseEntity.badRequest().body("Utilisateur introuvable");
        }
        
        Personnel personnel = opt.get();
        logger.info("👤 Soumission (compat) pour le personnel: {}", personnel.getMatriculeP());
        
        try {
            // Assigner le personnel à la demande
            conge.setPersonnel(personnel);
            
            // Soumettre la demande
            Conge saved = congeService.submitConge(conge, personnel);
            logger.info("✅ Demande de congé (compat) sauvegardée avec l'ID: {}", saved.getIdConge());
            
            return ResponseEntity.ok(saved);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la soumission de la demande (compat): {}", e.getMessage(), e);
            return ResponseEntity.badRequest().body("Erreur: " + e.getMessage());
        }
    }

    @GetMapping("/getMaxSolde/{matricule}")
    @PreAuthorize("hasRole('USER') or hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getMaxSolde(@PathVariable String matricule) {
        List<Conge> list = congeRepository.findByPersonnelMatricule(matricule);
        long used = 0L;
        for (Conge c : list) {
            if (c.getRepRh() != null && "APPROUVE".equals(c.getRepRh())) {
                try { used += c.getNbJours() == null ? 0L : Long.parseLong(c.getNbJours()); } catch (NumberFormatException ignored) {}
            }
        }
        long total = 25L;
        Map<String, Long> resp = new HashMap<>();
        resp.put("total", total);
        resp.put("used", used);
        resp.put("remaining", Math.max(0L, total - used));
        return ResponseEntity.ok(resp);
    }

    @GetMapping("/getTypeConge")
    @PreAuthorize("hasRole('USER') or hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getTypeConge() {
        return ResponseEntity.ok(typeCongeRepository.findAll());
    }

    @PutMapping("/notifications/read/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('RH') or hasRole('ADMIN') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> markNotificationRead(@PathVariable Long id) {
        notificationRepository.markAsRead(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/notifications/mark-all-read/{matricule}")
    @PreAuthorize("hasRole('USER') or hasRole('RH') or hasRole('ADMIN') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> markAllRead(@PathVariable String matricule) {
        notificationRepository.markAllAsReadByMatricule(matricule);
        return ResponseEntity.ok().build();
    }

    // Compat: DELETE /conge/{id}
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> deleteCompat(@PathVariable Long id) {
        return cancelConge(id);
    }

    // Compat: getDemandeChef
    @GetMapping("/getDemandeChef/{serv}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getDemandeChef(@PathVariable Long serv) {
        return ResponseEntity.ok(congeRepository.findByServiceId(serv));
    }

    @GetMapping("/getDemandeChefNotNull/{serv}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getDemandeChefNotNull(@PathVariable Long serv) {
        return ResponseEntity.ok(congeRepository.findPendingForChefService(serv));
    }

    @GetMapping("/{id}/approvals")
    @PreAuthorize("hasRole('USER') or hasRole('RH') or hasRole('ADMIN') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getApprovals(@PathVariable Long id) {
        Optional<Conge> oc = congeRepository.findById(id);
        if (oc.isEmpty()) return ResponseEntity.notFound().build();
        List<tn.esprit.examen.nomPrenomClasseExamen.entities.CongeApproval> approvals = congeService.getApprovalsForConge(id);
        return ResponseEntity.ok(approvals);
    }
    @PutMapping("/updateChef")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> updateChef(@RequestBody Conge conge) {
        // simple save (assume front fills repChefsNiveau1)
        Conge saved = congeRepository.save(conge);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/approve/niveau1/{id}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> approveNiveau1(@PathVariable Long id, @RequestParam String decision) {
        Optional<Personnel> opt = getCurrentPersonnel();
        if (opt.isEmpty()) return ResponseEntity.badRequest().body("Utilisateur introuvable");
        Optional<Conge> res = congeService.chefDecision(id, opt.get(), decision, null);
        if (res.isEmpty()) return ResponseEntity.status(403).body("Opération non autorisée");
        return ResponseEntity.ok(res.get());
    }

    @PutMapping("/approve/niveau2/{id}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> approveNiveau2(@PathVariable Long id, @RequestParam String decision) {
        // reuse chefDecision for niveau2 for now
        return approveNiveau1(id, decision);
    }

    @PutMapping("/approve/niveau3/{id}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> approveNiveau3(@PathVariable Long id, @RequestParam String decision) {
        // reuse
        return approveNiveau1(id, decision);
    }

    @GetMapping("/getrepDemandeNiveau3/{serv}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getRepDemandeNiveau3(@PathVariable Long serv) {
        return ResponseEntity.ok(congeRepository.findByServiceId(serv));
    }

    @GetMapping("/getrepDemandeNiveau2/{serv}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getRepDemandeNiveau2(@PathVariable Long serv) {
        return ResponseEntity.ok(congeRepository.findByServiceId(serv));
    }

    @GetMapping("/getrepDemandeNiveau1/{serv}")
    @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<?> getRepDemandeNiveau1(@PathVariable Long serv) {
        return ResponseEntity.ok(congeRepository.findPendingForChefService(serv));
    }

    @GetMapping("/getDemandeRh")
    @PreAuthorize("hasRole('RH')")
    public ResponseEntity<?> getDemandeRh() {
        return ResponseEntity.ok(congeRepository.findPendingForRh());
    }

    @GetMapping("/getDemandeRhNotNull")
    @PreAuthorize("hasRole('RH')")
    public ResponseEntity<?> getDemandeRhNotNull() {
        return ResponseEntity.ok(congeRepository.findPendingForRh());
    }

    @PutMapping("/updateRh")
    @PreAuthorize("hasRole('RH')")
    public ResponseEntity<?> updateRh(@RequestBody Conge conge) {
        Conge saved = congeRepository.save(conge);
        return ResponseEntity.ok(saved);
    }

    /**
     * Récupère toutes les demandes de congé en attente de validation RH (nouveau workflow)
     */
    @GetMapping("/en-attente/rh")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getCongesEnAttenteRH() {
        logger.info("🔍 Récupération des demandes de congé en attente de validation RH");
        
        try {
            // Utiliser le repository pour récupérer les demandes avec statut EN_ATTENTE_RH
            List<Conge> congesEnAttente = congeRepository.findAllPendingForRh();
            
            // Convertir en DTO avec toutes les informations pour RH
            List<DemandeCongeRHDTo> demandesDto = congesEnAttente.stream()
                .map(congeMapperService::toDemandeCongeRHDTo)
                .collect(Collectors.toList());
            
            logger.info("✅ {} demandes de congé en attente de validation RH trouvées", demandesDto.size());
            
            return ResponseEntity.ok(demandesDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération des demandes RH en attente: {}", e.getMessage());
            return ResponseEntity.internalServerError()
                .body("Erreur lors de la récupération des demandes de congé");
        }
    }

    /**
     * Récupère toutes les demandes de congé pour consultation RH avec historique complet
     */
    @GetMapping("/all-for-rh")
    @PreAuthorize("hasRole('RH') or hasRole('ADMIN')")
    public ResponseEntity<?> getAllCongesForRH() {
        logger.info("🔍 Récupération de toutes les demandes de congé pour consultation RH");
        
        try {
            // Récupérer toutes les demandes triées par date de création (plus récentes d'abord)
            List<Conge> toutesLesDemandes = congeRepository.findAllByOrderByDateCreationDesc();
            
            // Convertir en DTO avec toutes les informations
            List<DemandeCongeDto> demandesDto = toutesLesDemandes.stream()
                .map(congeMapperService::toDemandeCongeDto)
                .collect(Collectors.toList());
            
            logger.info("✅ {} demandes de congé récupérées pour consultation RH", demandesDto.size());
            
            return ResponseEntity.ok(demandesDto);
            
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la récupération de toutes les demandes pour RH: {}", e.getMessage());
            return ResponseEntity.internalServerError()
                .body("Erreur lors de la récupération des demandes de congé");
        }
    }

}
