package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.examen.nomPrenomClasseExamen.dto.ValidationCongeDto;
import tn.esprit.examen.nomPrenomClasseExamen.entities.*;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CongeRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;

import java.time.LocalDateTime;
import java.util.Optional;

/**
 * Service gérant la validation des congés selon le workflow multi-niveaux
 */
@Service
@Transactional
public class ValidationCongeService {
    
    private static final Logger logger = LoggerFactory.getLogger(ValidationCongeService.class);
    
    @Autowired
    private CongeRepository congeRepository;
    
    @Autowired
    private PersonnelRepository personnelRepository;
    
    // Note: Le service de notification sera optionnel pour l'instant
    
    /**
     * Valide une demande de congé selon le rôle de l'utilisateur connecté
     */
    public Conge validerConge(Long congeId, String matriculeValidateur, ValidationCongeDto validationDto) {
        logger.info("🔍 Validation de congé ID: {} par matricule: {}", congeId, matriculeValidateur);
        
        // Vérifier que la demande existe
        Optional<Conge> congeOpt = congeRepository.findById(congeId);
        if (congeOpt.isEmpty()) {
            throw new IllegalArgumentException("Demande de congé introuvable avec l'ID: " + congeId);
        }
        
        Conge conge = congeOpt.get();
        
        // Vérifier que le validateur existe
        Optional<Personnel> validateurOpt = personnelRepository.findByMatriculeP(matriculeValidateur);
        if (validateurOpt.isEmpty()) {
            throw new IllegalArgumentException("Validateur introuvable avec le matricule: " + matriculeValidateur);
        }
        
        Personnel validateur = validateurOpt.get();
        ERole roleValidateur = determinerRoleValidateur(validateur);
        
        logger.info("👤 Rôle du validateur: {} - Statut actuel: {}", roleValidateur, conge.getStatutConge());
        
        // Vérifier que le validateur peut traiter cette demande
        if (!conge.peutEtreValideePar(roleValidateur)) {
            throw new IllegalArgumentException("Vous n'êtes pas autorisé à valider cette demande dans son état actuel");
        }
        
        // Effectuer la validation ou le refus
        if (validationDto.isValidation()) {
            return effectuerValidation(conge, validateur, roleValidateur, validationDto.getCommentaire());
        } else if (validationDto.isRefus()) {
            return effectuerRefus(conge, validateur, roleValidateur, validationDto.getCommentaire());
        } else {
            throw new IllegalArgumentException("Action non reconnue: " + validationDto.getAction());
        }
    }
    
    /**
     * Effectue la validation et fait passer au niveau suivant
     */
    private Conge effectuerValidation(Conge conge, Personnel validateur, ERole roleValidateur, String commentaire) {
        LocalDateTime maintenant = LocalDateTime.now();
        
        switch (conge.getStatutConge()) {
            case EN_ATTENTE_CHEF_A:
                if (roleValidateur == ERole.ROLE_CHEF_A || roleValidateur == ERole.ROLE_CHEF_SERVICE || roleValidateur == ERole.ROLE_ADMIN) {
                    conge.setStatutConge(StatutConge.EN_ATTENTE_CHEF_B);
                    conge.setValidateurChefA(validateur);
                    conge.setDateValidationChefA(maintenant);
                    logger.info("✅ Validation Chef A effectuée, passage au niveau Chef B");
                } else {
                    throw new IllegalArgumentException("Seuls les Chef A peuvent valider à ce niveau");
                }
                break;
                
            case EN_ATTENTE_CHEF_B:
                if (roleValidateur == ERole.ROLE_CHEF_B || roleValidateur == ERole.ROLE_CHEF_SERVICE || roleValidateur == ERole.ROLE_ADMIN) {
                    conge.setStatutConge(StatutConge.EN_ATTENTE_RH);
                    conge.setValidateurChefB(validateur);
                    conge.setDateValidationChefB(maintenant);
                    logger.info("✅ Validation Chef B effectuée, passage au niveau RH");
                } else {
                    throw new IllegalArgumentException("Seuls les Chef B peuvent valider à ce niveau");
                }
                break;
                
            case EN_ATTENTE_RH:
                if (roleValidateur == ERole.ROLE_RH || roleValidateur == ERole.ROLE_ADMIN) {
                    conge.setStatutConge(StatutConge.APPROUVE);
                    conge.setValidateurRH(validateur);
                    conge.setDateValidationRH(maintenant);
                    logger.info("✅ Validation RH effectuée, congé approuvé définitivement");
                } else {
                    throw new IllegalArgumentException("Seuls les RH peuvent valider à ce niveau");
                }
                break;
                
            default:
                throw new IllegalArgumentException("Cette demande ne peut plus être validée (statut: " + conge.getStatutConge().getLibelle() + ")");
        }
        
        // Ajouter le commentaire s'il y en a un
        if (commentaire != null && !commentaire.trim().isEmpty()) {
            String ancienCommentaire = conge.getCommentaire() != null ? conge.getCommentaire() : "";
            String nouveauCommentaire = ancienCommentaire + 
                (ancienCommentaire.isEmpty() ? "" : "\n") + 
                "[" + validateur.getNom() + " " + validateur.getPrenom() + " - " + maintenant.toString() + "] " + commentaire;
            conge.setCommentaire(nouveauCommentaire);
        }
        
        // Sauvegarder
        Conge congeSauvegarde = congeRepository.save(conge);
        
        // TODO: Ajouter notification de validation
        
        return congeSauvegarde;
    }
    
    /**
     * Effectue le refus de la demande
     */
    private Conge effectuerRefus(Conge conge, Personnel validateur, ERole roleValidateur, String commentaire) {
        LocalDateTime maintenant = LocalDateTime.now();
        
        switch (conge.getStatutConge()) {
            case EN_ATTENTE_CHEF_A:
                if (roleValidateur == ERole.ROLE_CHEF_A || roleValidateur == ERole.ROLE_CHEF_SERVICE || roleValidateur == ERole.ROLE_ADMIN) {
                    conge.setStatutConge(StatutConge.REFUSE_PAR_CHEF_A);
                    conge.setValidateurChefA(validateur);
                    conge.setDateValidationChefA(maintenant);
                    logger.info("❌ Refus par Chef A");
                } else {
                    throw new IllegalArgumentException("Seuls les Chef A peuvent refuser à ce niveau");
                }
                break;
                
            case EN_ATTENTE_CHEF_B:
                if (roleValidateur == ERole.ROLE_CHEF_B || roleValidateur == ERole.ROLE_CHEF_SERVICE || roleValidateur == ERole.ROLE_ADMIN) {
                    conge.setStatutConge(StatutConge.REFUSE_PAR_CHEF_B);
                    conge.setValidateurChefB(validateur);
                    conge.setDateValidationChefB(maintenant);
                    logger.info("❌ Refus par Chef B");
                } else {
                    throw new IllegalArgumentException("Seuls les Chef B peuvent refuser à ce niveau");
                }
                break;
                
            case EN_ATTENTE_RH:
                if (roleValidateur == ERole.ROLE_RH || roleValidateur == ERole.ROLE_ADMIN) {
                    conge.setStatutConge(StatutConge.REFUSE_PAR_RH);
                    conge.setValidateurRH(validateur);
                    conge.setDateValidationRH(maintenant);
                    logger.info("❌ Refus par RH");
                } else {
                    throw new IllegalArgumentException("Seuls les RH peuvent refuser à ce niveau");
                }
                break;
                
            default:
                throw new IllegalArgumentException("Cette demande ne peut plus être refusée (statut: " + conge.getStatutConge().getLibelle() + ")");
        }
        
        // Ajouter le commentaire de refus
        String motifRefus = commentaire != null && !commentaire.trim().isEmpty() 
            ? commentaire : "Aucun motif spécifié";
        String ancienCommentaire = conge.getCommentaire() != null ? conge.getCommentaire() : "";
        String nouveauCommentaire = ancienCommentaire + 
            (ancienCommentaire.isEmpty() ? "" : "\n") + 
            "[REFUS - " + validateur.getNom() + " " + validateur.getPrenom() + " - " + maintenant.toString() + "] " + motifRefus;
        conge.setCommentaire(nouveauCommentaire);
        
        // Sauvegarder
        Conge congeSauvegarde = congeRepository.save(conge);
        
        // TODO: Ajouter notification de refus
        
        return congeSauvegarde;
    }
    
    /**
     * Détermine le rôle du validateur selon ses rôles
     */
    private ERole determinerRoleValidateur(Personnel personnel) {
        // Logique pour déterminer le rôle principal du personnel
        // Cette méthode pourrait être améliorée selon la structure exacte de vos rôles
        
        if (personnel.getRoles() != null && !personnel.getRoles().isEmpty()) {
            // Prendre le premier rôle ou implémenter une logique plus complexe
            Role premierRole = personnel.getRoles().iterator().next();
            return premierRole.getNomRole();
        }
        
        // Rôle par défaut
        return ERole.ROLE_USER;
    }
}