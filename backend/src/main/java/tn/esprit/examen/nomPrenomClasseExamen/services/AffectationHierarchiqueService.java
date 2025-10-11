package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.examen.nomPrenomClasseExamen.dto.AffectationHierarchiqueDto;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Service pour gérer les affectations hiérarchiques du personnel
 */
@Service
@Transactional
public class AffectationHierarchiqueService {

    private static final Logger logger = LoggerFactory.getLogger(AffectationHierarchiqueService.class);

    @Autowired
    private PersonnelRepository personnelRepository;

    /**
     * Affecter la hiérarchie à un employé
     */
    public Personnel affecterHierarchie(Integer employeId, AffectationHierarchiqueDto affectationDto) {
        logger.info("🔄 Affectation hiérarchique pour l'employé ID: {}", employeId);

        // Vérifier que l'employé existe
        Optional<Personnel> employeOpt = personnelRepository.findById(employeId);
        if (employeOpt.isEmpty()) {
            throw new IllegalArgumentException("Employé introuvable avec l'ID: " + employeId);
        }

        Personnel employe = employeOpt.get();

        // Affecter le Chef A
        if (affectationDto.getChefAId() != null) {
            Optional<Personnel> chefAOpt = personnelRepository.findById(affectationDto.getChefAId());
            if (chefAOpt.isEmpty()) {
                throw new IllegalArgumentException("Chef A introuvable avec l'ID: " + affectationDto.getChefAId());
            }
            Personnel chefA = chefAOpt.get();
            
            // Vérifier que c'est bien un Chef
            if (!isChef(chefA)) {
                throw new IllegalArgumentException("L'utilisateur sélectionné n'a pas le rôle de Chef");
            }
            
            employe.setChefA(chefA);
            logger.info("✅ Chef A assigné: {} {}", chefA.getNom(), chefA.getPrenom());
        }

        // Affecter le Chef B
        if (affectationDto.getChefBId() != null) {
            Optional<Personnel> chefBOpt = personnelRepository.findById(affectationDto.getChefBId());
            if (chefBOpt.isEmpty()) {
                throw new IllegalArgumentException("Chef B introuvable avec l'ID: " + affectationDto.getChefBId());
            }
            Personnel chefB = chefBOpt.get();
            
            // Vérifier que c'est bien un Chef
            if (!isChef(chefB)) {
                throw new IllegalArgumentException("L'utilisateur sélectionné n'a pas le rôle de Chef");
            }
            
            employe.setChefB(chefB);
            logger.info("✅ Chef B assigné: {} {}", chefB.getNom(), chefB.getPrenom());
        }

        // Affecter le RH Responsable
        if (affectationDto.getRhResponsableId() != null) {
            Optional<Personnel> rhOpt = personnelRepository.findById(affectationDto.getRhResponsableId());
            if (rhOpt.isEmpty()) {
                throw new IllegalArgumentException("RH responsable introuvable avec l'ID: " + affectationDto.getRhResponsableId());
            }
            Personnel rh = rhOpt.get();
            
            // Vérifier que c'est bien un RH
            if (!hasRole(rh, ERole.ROLE_RH) && !hasRole(rh, ERole.ROLE_ADMIN)) {
                throw new IllegalArgumentException("L'utilisateur sélectionné n'a pas le rôle RH");
            }
            
            employe.setRhResponsable(rh);
            logger.info("✅ RH responsable assigné: {} {}", rh.getNom(), rh.getPrenom());
        }

        // Sauvegarder l'employé avec les nouvelles affectations
        Personnel employeSauvegarde = personnelRepository.save(employe);
        
        logger.info("🎉 Affectation hiérarchique terminée pour: {} {}", 
                   employe.getNom(), employe.getPrenom());
        
        return employeSauvegarde;
    }

    /**
     * Récupérer les utilisateurs par rôle pour les listes déroulantes
     */
    public List<Personnel> getPersonnelParRole(ERole role) {
        return personnelRepository.findByRolesNomRole(role);
    }

    /**
     * Récupérer tous les chefs (CHEF_A, CHEF_B, CHEF_SERVICE) pour les sélecteurs Chef A et Chef B
     */
    public List<Personnel> getTousLesChefs() {
        List<Personnel> tousLesChefs = new ArrayList<>();
        
        // Récupérer les différents types de chefs
        List<Personnel> chefsA = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_A);
        List<Personnel> chefsB = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_B);
        List<Personnel> chefsService = personnelRepository.findByRolesNomRole(ERole.ROLE_CHEF_SERVICE);
        List<Personnel> admins = personnelRepository.findByRolesNomRole(ERole.ROLE_ADMIN); // Les admins peuvent aussi être chefs
        
        // Ajouter tous les chefs en évitant les doublons
        Set<Personnel> chefsUniques = new HashSet<>();
        chefsUniques.addAll(chefsA);
        chefsUniques.addAll(chefsB);
        chefsUniques.addAll(chefsService);
        chefsUniques.addAll(admins);
        
        tousLesChefs.addAll(chefsUniques);
        
        // Trier par nom et prénom
        tousLesChefs.sort((p1, p2) -> {
            int cmp = p1.getNom().compareTo(p2.getNom());
            if (cmp == 0) {
                cmp = p1.getPrenom().compareTo(p2.getPrenom());
            }
            return cmp;
        });
        
        logger.info("📋 {} chefs trouvés (CHEF_A: {}, CHEF_B: {}, CHEF_SERVICE: {}, ADMIN: {})", 
                   tousLesChefs.size(), chefsA.size(), chefsB.size(), chefsService.size(), admins.size());
        
        return tousLesChefs;
    }

    /**
     * Vérifier si un personnel a un rôle spécifique
     */
    private boolean hasRole(Personnel personnel, ERole role) {
        return personnel.getRoles().stream()
                .anyMatch(r -> r.getNomRole() == role);
    }

    /**
     * Vérifier si un personnel est un chef (CHEF_A, CHEF_B, CHEF_SERVICE, ou ADMIN)
     */
    private boolean isChef(Personnel personnel) {
        return hasRole(personnel, ERole.ROLE_CHEF_A) ||
               hasRole(personnel, ERole.ROLE_CHEF_B) ||
               hasRole(personnel, ERole.ROLE_CHEF_SERVICE) ||
               hasRole(personnel, ERole.ROLE_ADMIN);
    }

    /**
     * Récupérer tous les employés (pour la liste des employés à affecter)
     */
    public List<Personnel> getAllEmployes() {
        return personnelRepository.findByRolesNomRole(ERole.ROLE_USER);
    }

    /**
     * Récupérer l'affectation actuelle d'un employé
     */
    public AffectationHierarchiqueDto getAffectationActuelle(Integer employeId) {
        Optional<Personnel> employeOpt = personnelRepository.findById(employeId);
        if (employeOpt.isEmpty()) {
            throw new IllegalArgumentException("Employé introuvable avec l'ID: " + employeId);
        }

        Personnel employe = employeOpt.get();
        AffectationHierarchiqueDto affectation = new AffectationHierarchiqueDto();
        affectation.setEmployeId(employeId);
        
        if (employe.getChefA() != null) {
            affectation.setChefAId(employe.getChefA().getId());
        }
        
        if (employe.getChefB() != null) {
            affectation.setChefBId(employe.getChefB().getId());
        }
        
        if (employe.getRhResponsable() != null) {
            affectation.setRhResponsableId(employe.getRhResponsable().getId());
        }

        return affectation;
    }
}