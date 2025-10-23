package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/pointage")
@CrossOrigin(origins = "http://localhost:4200")
public class PointageController {

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<Map<String, Object>> getMyPointages() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String matricule = auth.getName(); // Le matricule est utilisé comme username
        
        Map<String, Object> response = new HashMap<>();
        response.put("matricule", matricule);
        response.put("nom", "Utilisateur"); // Valeur temporaire
        response.put("prenom", "Test"); // Valeur temporaire
        
        // Pointages du jour (données temporaires)
        List<Map<String, Object>> pointagesJour = new ArrayList<>();
        
        Map<String, Object> entree = new HashMap<>();
        entree.put("type", "ENTREE");
        entree.put("heure", "08:30:00");
        entree.put("statut", "VALIDE");
        pointagesJour.add(entree);
        
        Map<String, Object> sortie = new HashMap<>();
        sortie.put("type", "SORTIE");
        sortie.put("heure", "17:00:00");
        sortie.put("statut", "VALIDE");
        pointagesJour.add(sortie);
        
        response.put("pointagesJour", pointagesJour);
        response.put("heuresTravaillees", "8h30");
        response.put("statut", "PRESENT");
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/pointer")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<Map<String, Object>> pointer(@RequestBody Map<String, String> request) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String matricule = auth.getName();
        
        String type = request.get("type"); // ENTREE ou SORTIE
        LocalDateTime now = LocalDateTime.now();
        
        Map<String, Object> response = new HashMap<>();
        response.put("matricule", matricule);
        response.put("type", type);
        response.put("dateHeure", now.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        response.put("statut", "VALIDE");
        response.put("message", "Pointage " + type.toLowerCase() + " enregistré avec succès");
        
        return ResponseEntity.ok(response);
    }

    @GetMapping("/historique")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<List<Map<String, Object>>> getHistorique(
            @RequestParam(required = false) String dateDebut,
            @RequestParam(required = false) String dateFin) {
        
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String matricule = auth.getName();
        
        List<Map<String, Object>> historique = new ArrayList<>();
        
        // Données temporaires pour l'historique
        for (int i = 1; i <= 7; i++) {
            Map<String, Object> jour = new HashMap<>();
            jour.put("date", "2025-01-" + String.format("%02d", i));
            jour.put("entree", "08:" + (25 + i) + ":00");
            jour.put("sortie", "17:" + (i % 2 == 0 ? "00" : "15") + ":00");
            jour.put("heuresTravaillees", "8h" + (35 - i) + "m");
            jour.put("statut", i % 3 == 0 ? "RETARD" : "PRESENT");
            historique.add(jour);
        }
        
        return ResponseEntity.ok(historique);
    }

    @GetMapping("/stats")
    @PreAuthorize("hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<Map<String, Object>> getStatistiques() {
        Map<String, Object> stats = new HashMap<>();
        
        stats.put("totalEmployes", 50);
        stats.put("presentsAujourdhui", 45);
        stats.put("absentsAujourdhui", 5);
        stats.put("retardsAujourdhui", 3);
        stats.put("tauxPresence", 90.0);
        stats.put("heureMoyenneArrivee", "08:35");
        stats.put("heureMoyenneDepart", "17:10");
        
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/presence-temps-reel")
    @PreAuthorize("hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_A') or hasRole('CHEF_B')")
    public ResponseEntity<List<Map<String, Object>>> getPresenceTempsReel() {
        List<Map<String, Object>> presence = new ArrayList<>();
        
        // Données temporaires
        for (int i = 1; i <= 10; i++) {
            Map<String, Object> employe = new HashMap<>();
            employe.put("matricule", "EMP00" + i);
            employe.put("nom", "Employé " + i);
            employe.put("service", "Service " + (i % 3 + 1));
            employe.put("statut", i % 4 == 0 ? "ABSENT" : "PRESENT");
            employe.put("heureArrivee", i % 4 == 0 ? null : "08:" + (20 + i) + ":00");
            employe.put("heureDepart", i % 2 == 0 && i % 4 != 0 ? "17:00:00" : null);
            presence.add(employe);
        }
        
        return ResponseEntity.ok(presence);
    }
}
