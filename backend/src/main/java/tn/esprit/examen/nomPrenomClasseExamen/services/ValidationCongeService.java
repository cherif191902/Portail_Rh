package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tn.esprit.examen.nomPrenomClasseExamen.dto.ValidationCongeDto;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CongeRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;

import java.time.LocalDateTime;
import java.util.Optional;

/**
 * Service pour la gestion de la validation hiérarchique des congés
 * Workflow : chef_a → chef_b → RH
 */
@Service
@Transactional
public class ValidationCongeService {

    private static final Logger logger = LoggerFactory.getLogger(ValidationCongeService.class);

    @Autowired
    private CongeRepository congeRepository;

    @Autowired
    private PersonnelRepository personnelRepository;

    /**
     * Valide ou refuse une demande de congé selon le workflow hiérarchique
     * 
     * @param congeId ID de la demande de congé
     * @param matriculeValidateur Matricule du validateur
     * @param validationDto Données de validation (action + commentaire)
     * @return La demande de congé mise à jour
     * @throws IllegalArgumentException Si la validation n'est pas possible
     */
    public Conge validerConge(Long congeId, String matriculeValidateur, ValidationCongeDto validationDto) {
        logger.info("🔍 Début validation congé ID: {} par validateur: {}", congeId, matriculeValidateur);
        
        // 1. Récupérer la demande de congé
        Optional<Conge> congeOpt = congeRepository.findById(congeId);
        if (congeOpt.isEmpty()) {
            throw new IllegalArgumentException("Demande de congé non trouvée avec ID: " + congeId);
        }
        
        Conge conge = congeOpt.get();
        logger.info("📋 Demande trouvée - Employé: {}, Statut actuel: {}", 
                   conge.getPersonnelNomComplet(), conge.getStatutConge());
        
        // 2. Récupérer le validateur
        Optional<Personnel> validateurOpt = personnelRepository.findByMatriculeP(matriculeValidateur);
        if (validateurOpt.isEmpty()) {
            throw new IllegalArgumentException("Validateur non trouvé avec matricule: " + matriculeValidateur);
        }
        
        Personnel validateur = validateurOpt.get();
        logger.info("👤 Validateur: {} {} (ID: {})", validateur.getNom(), validateur.getPrenom(), validateur.getId());
        
        // 3. Déterminer le niveau de validation et traiter
        StatutConge statutActuel = conge.getStatutConge();
        
        switch (statutActuel) {
            case EN_ATTENTE_CHEF_A:
                return traiterValidationChefA(conge, validateur, validationDto);
            
            case EN_ATTENTE_CHEF_B:
                return traiterValidationChefB(conge, validateur, validationDto);
            
            case EN_ATTENTE_RH:
                return traiterValidationRH(conge, validateur, validationDto);
            
            default:
                throw new IllegalArgumentException("Demande déjà traitée ou dans un état non valide: " + statutActuel);
        }
    }

    /**
     * Traite la validation par Chef A
     */
    private Conge traiterValidationChefA(Conge conge, Personnel validateur, ValidationCongeDto validationDto) {
        logger.info("🔍 Traitement validation Chef A");
        
        // Vérifier que le validateur est bien le Chef A assigné
        if (conge.getValidateurChefA() == null || !conge.getValidateurChefA().getId().equals(validateur.getId())) {
            throw new IllegalArgumentException("Vous n'êtes pas autorisé à valider cette demande en tant que Chef A");
        }
        
        // Appliquer la transition automatique de statut
        StatutConge nouveauStatut = StatutConge.getNextStatus(conge.getStatutConge(), validationDto.getAction(), "CHEF_A");
        conge.setStatutConge(nouveauStatut);
        
        if (validationDto.estApprobation()) {
            logger.info("✅ Chef A approuve la demande - Nouveau statut: {}", nouveauStatut.getLibelle());
            conge.setRepChefsNiveau1("APPROUVE");
        } else if (validationDto.estRefus()) {
            logger.info("❌ Chef A refuse la demande - Nouveau statut: {}", nouveauStatut.getLibelle());
            conge.setRepChefsNiveau1("REFUSE");
        }
        
        // Ajouter le commentaire
        if (validationDto.getCommentaire() != null && !validationDto.getCommentaire().trim().isEmpty()) {
            conge.setCommentaire(validationDto.getCommentaire());
        }
        
        conge.setDateValidationChefA(LocalDateTime.now());
        return congeRepository.save(conge);
    }

    /**
     * Traite la validation par Chef B
     */
    private Conge traiterValidationChefB(Conge conge, Personnel validateur, ValidationCongeDto validationDto) {
        logger.info("🔍 Traitement validation Chef B");
        
        // Vérifier que le validateur est bien le Chef B assigné
        if (conge.getValidateurChefB() == null || !conge.getValidateurChefB().getId().equals(validateur.getId())) {
            throw new IllegalArgumentException("Vous n'êtes pas autorisé à valider cette demande en tant que Chef B");
        }
        
        // Appliquer la transition automatique de statut
        StatutConge nouveauStatut = StatutConge.getNextStatus(conge.getStatutConge(), validationDto.getAction(), "CHEF_B");
        conge.setStatutConge(nouveauStatut);
        
        if (validationDto.estApprobation()) {
            logger.info("✅ Chef B approuve la demande - Nouveau statut: {}", nouveauStatut.getLibelle());
            conge.setRepChefsNiveau2("APPROUVE");
        } else if (validationDto.estRefus()) {
            logger.info("❌ Chef B refuse la demande - Nouveau statut: {}", nouveauStatut.getLibelle());
            conge.setRepChefsNiveau2("REFUSE");
        }
        
        // Ajouter le commentaire
        if (validationDto.getCommentaire() != null && !validationDto.getCommentaire().trim().isEmpty()) {
            conge.setCommentaire(validationDto.getCommentaire());
        }
        
        conge.setDateValidationChefB(LocalDateTime.now());
        return congeRepository.save(conge);
    }

    /**
     * Traite la validation par RH
     */
    private Conge traiterValidationRH(Conge conge, Personnel validateur, ValidationCongeDto validationDto) {
        logger.info("🔍 Traitement validation RH");
        
        // Vérifier que le validateur a le rôle RH
        boolean estRH = validateur.getRoles().stream()
            .anyMatch(role -> role.getNomRole().name().equals("ROLE_RH") || role.getNomRole().name().equals("ROLE_ADMIN"));
        
        if (!estRH) {
            throw new IllegalArgumentException("Vous n'êtes pas autorisé à effectuer une validation RH");
        }
        
        // Appliquer la transition automatique de statut
        StatutConge nouveauStatut = StatutConge.getNextStatus(conge.getStatutConge(), validationDto.getAction(), "RH");
        conge.setStatutConge(nouveauStatut);
        
        if (validationDto.estApprobation()) {
            logger.info("✅ RH approuve la demande - Nouveau statut: {}", nouveauStatut.getLibelle());
            conge.setRepRh("APPROUVE");
            conge.setValidateurRh(validateur);
        } else if (validationDto.estRefus()) {
            logger.info("❌ RH refuse la demande - Nouveau statut: {}", nouveauStatut.getLibelle());
            conge.setRepRh("REFUSE");
            conge.setValidateurRh(validateur);
        }
        
        // Ajouter le commentaire
        if (validationDto.getCommentaire() != null && !validationDto.getCommentaire().trim().isEmpty()) {
            conge.setCommentaire(validationDto.getCommentaire());
        }
        
        conge.setDateValidationRh(LocalDateTime.now());
        return congeRepository.save(conge);
    }

    /**
     * Vérifie si une demande peut être validée par un utilisateur donné
     */
    public boolean peutValider(Long congeId, String matriculeValidateur) {
        try {
            Optional<Conge> congeOpt = congeRepository.findById(congeId);
            Optional<Personnel> validateurOpt = personnelRepository.findByMatriculeP(matriculeValidateur);
            
            if (congeOpt.isEmpty() || validateurOpt.isEmpty()) {
                return false;
            }
            
            Conge conge = congeOpt.get();
            Personnel validateur = validateurOpt.get();
            StatutConge statut = conge.getStatutConge();
            
            switch (statut) {
                case EN_ATTENTE_CHEF_A:
                    return conge.getValidateurChefA() != null && 
                           conge.getValidateurChefA().getId().equals(validateur.getId());
                
                case EN_ATTENTE_CHEF_B:
                    return conge.getValidateurChefB() != null && 
                           conge.getValidateurChefB().getId().equals(validateur.getId());
                
                case EN_ATTENTE_RH:
                    return validateur.getRoles().stream()
                        .anyMatch(role -> role.getNomRole().name().equals("ROLE_RH") || 
                                         role.getNomRole().name().equals("ROLE_ADMIN"));
                
                default:
                    return false;
            }
        } catch (Exception e) {
            logger.error("❌ Erreur lors de la vérification des droits de validation: {}", e.getMessage());
            return false;
        }
    }
}