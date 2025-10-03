package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.*;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class DataInitializationService {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializationService.class);

    private final PersonnelRepository personnelRepository;
    private final RoleRepository roleRepository;
    private final CongeRepository congeRepository;
    private final TypeCongeRepository typeCongeRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializationService(PersonnelRepository personnelRepository,
                                   RoleRepository roleRepository,
                                   CongeRepository congeRepository,
                                   TypeCongeRepository typeCongeRepository,
                                   PasswordEncoder passwordEncoder) {
        this.personnelRepository = personnelRepository;
        this.roleRepository = roleRepository;
        this.congeRepository = congeRepository;
        this.typeCongeRepository = typeCongeRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Crée un utilisateur de test si il n'existe pas déjà
     */
    public Personnel createTestUser(String matricule, String nom, String prenom, String email, String department) {
        Optional<Personnel> existingUser = personnelRepository.findByMatriculeP(matricule);
        if (existingUser.isPresent()) {
            logger.info("✅ Utilisateur {} existe déjà", matricule);
            return existingUser.get();
        }

        Personnel personnel = new Personnel();
        personnel.setMatriculeP(matricule);
        personnel.setNom(nom);
        personnel.setPrenom(prenom);
        personnel.setEmail(email);
        personnel.setPassword(passwordEncoder.encode("password123"));
        personnel.setDepartment(department);
        personnel.setNumTel(123456789);
        personnel.setPoste("Employé");
        personnel.setNiveau(1);

        Personnel saved = personnelRepository.save(personnel);

        // Assigner le rôle USER par défaut
        Optional<Role> roleUser = roleRepository.findByNomRole(ERole.ROLE_USER);
        if (roleUser.isPresent()) {
            saved.getRoles().add(roleUser.get());
            personnelRepository.save(saved);
            logger.info("✅ Utilisateur {} créé avec rôle USER", matricule);
        }

        return saved;
    }

    /**
     * Crée des demandes de congé de test pour un utilisateur
     */
    public void createTestCongesForUser(Personnel personnel) {
        // Vérifier si l'utilisateur a déjà des congés
        List<Conge> existingConges = congeRepository.findByPersonnel(personnel);
        if (!existingConges.isEmpty()) {
            logger.info("✅ L'utilisateur {} a déjà {} congés", personnel.getMatriculeP(), existingConges.size());
            return;
        }

        // Créer des congés dynamiques basés sur la date actuelle
        LocalDate today = LocalDate.now();
        
        // Congé approuvé (passé)
        createTestConge(personnel, "Congé annuel", 
                       today.minusMonths(2), today.minusMonths(2).plusDays(4), 
                       "APPROUVE", "APPROUVE", "APPROUVE", 
                       "Congé passé", "Vacances d'été");

        // Congé en cours d'approbation (futur)
        createTestConge(personnel, "Congé exceptionnel", 
                       today.plusDays(15), today.plusDays(17), 
                       "APPROUVE", "EN_ATTENTE", "EN_ATTENTE", 
                       "Congé futur", "Affaires personnelles");

        // Congé en attente (futur lointain)
        createTestConge(personnel, "Congé annuel", 
                       today.plusMonths(2), today.plusMonths(2).plusDays(9), 
                       "EN_ATTENTE", "EN_ATTENTE", "EN_ATTENTE", 
                       "Congé planifié", "Vacances de fin d'année");

        logger.info("✅ 3 congés de test créés pour l'utilisateur {}", personnel.getMatriculeP());
    }

    private void createTestConge(Personnel personnel, String typeNom, LocalDate dateDebut, LocalDate dateFin, 
                               String repNiveau1, String repNiveau2, String repRh, String motif, String commentaire) {
        Optional<TypeConge> typeConge = typeCongeRepository.findByNomTypeconge(typeNom);
        if (typeConge.isEmpty()) {
            logger.warn("⚠️ Type de congé '{}' introuvable", typeNom);
            return;
        }

        Conge conge = new Conge();
        conge.setPersonnel(personnel);
        conge.setTypeConge(typeConge.get());
        conge.setDateCong(LocalDate.now()); // Date de demande
        conge.setDateDeb(dateDebut);
        conge.setDateFin(dateFin);
        conge.setNbJours(String.valueOf(dateDebut.until(dateFin).getDays() + 1));
        conge.setMotif(motif);
        conge.setCommentaire(commentaire);
        conge.setRepChefsNiveau1(repNiveau1);
        conge.setRepChefsNiveau2(repNiveau2);
        conge.setRepRh(repRh);

        congeRepository.save(conge);
    }

    /**
     * Initialise des données de test dynamiques pour l'utilisateur connecté
     */
    public void ensureTestDataForUser(String matricule) {
        logger.info("🔄 Vérification des données de test pour l'utilisateur: {}", matricule);
        
        Optional<Personnel> personnel = personnelRepository.findByMatriculeP(matricule);
        if (personnel.isEmpty()) {
            logger.info("👤 Création d'un utilisateur de test: {}", matricule);
            Personnel newUser = createTestUser(matricule, "Utilisateur", "Test", 
                                             matricule.toLowerCase() + "@example.com", "IT");
            createTestCongesForUser(newUser);
        } else {
            logger.info("👤 Utilisateur existant: {}", matricule);
            createTestCongesForUser(personnel.get());
        }
    }

    /**
     * Nettoie toutes les données de test
     */
    public void cleanTestData() {
        logger.info("🧹 Nettoyage des données de test...");
        
        // Supprimer tous les congés
        congeRepository.deleteAll();
        
        // Supprimer tous les utilisateurs de test (optionnel)
        List<Personnel> testUsers = personnelRepository.findAll().stream()
                .filter(p -> p.getMatriculeP().startsWith("TEST") || p.getMatriculeP().startsWith("DEMO"))
                .toList();
        
        personnelRepository.deleteAll(testUsers);
        
        logger.info("✅ Données de test nettoyées");
    }
}