package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.examen.nomPrenomClasseExamen.dto.AffectationChefsServiceDto;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.ServiceRepository;

import java.util.List;
import java.util.Optional;

/**
 * Service pour gérer l'affectation des chefs aux services
 */
@Service
@Transactional
public class AffectationChefsServiceService {

    private static final Logger logger = LoggerFactory.getLogger(AffectationChefsServiceService.class);

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private PersonnelRepository personnelRepository;

    /**
     * Affecter Chef A et Chef B à un service
     */
    public tn.esprit.examen.nomPrenomClasseExamen.entities.Service affecterChefs(Long serviceId, AffectationChefsServiceDto affectationDto) {
        logger.info("🔧 Affectation chefs au service ID: {}, ChefA: {}, ChefB: {}", 
                   serviceId, affectationDto.getChefAId(), affectationDto.getChefBId());

        // Validation du DTO
        if (!affectationDto.isValid()) {
            throw new IllegalArgumentException("Chef A et Chef B ne peuvent pas être la même personne");
        }

        // Récupérer le service
        Optional<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> serviceOpt = serviceRepository.findById(serviceId);
        if (serviceOpt.isEmpty()) {
            throw new IllegalArgumentException("Service introuvable avec l'ID: " + serviceId);
        }

        tn.esprit.examen.nomPrenomClasseExamen.entities.Service service = serviceOpt.get();

        // Affecter Chef A
        if (affectationDto.getChefAId() != null) {
            Personnel chefA = validerEtRecupererChef(affectationDto.getChefAId(), "Chef A");
            service.setChefA(chefA);
            logger.info("✅ Chef A affecté: {} {}", chefA.getNom(), chefA.getPrenom());
        } else {
            service.setChefA(null);
            logger.info("➖ Chef A désaffecté");
        }

        // Affecter Chef B
        if (affectationDto.getChefBId() != null) {
            Personnel chefB = validerEtRecupererChef(affectationDto.getChefBId(), "Chef B");
            service.setChefB(chefB);
            logger.info("✅ Chef B affecté: {} {}", chefB.getNom(), chefB.getPrenom());
        } else {
            service.setChefB(null);
            logger.info("➖ Chef B désaffecté");
        }

        // Sauvegarder et retourner
        tn.esprit.examen.nomPrenomClasseExamen.entities.Service updatedService = serviceRepository.save(service);
        logger.info("💾 Service {} mis à jour avec succès", service.getNomService());
        
        return updatedService;
    }

    /**
     * Valider qu'un personnel existe et a le rôle de chef
     */
    private Personnel validerEtRecupererChef(Integer personnelId, String typeChef) {
        Optional<Personnel> personnelOpt = personnelRepository.findById(personnelId);
        if (personnelOpt.isEmpty()) {
            throw new IllegalArgumentException(typeChef + " introuvable avec l'ID: " + personnelId);
        }

        Personnel personnel = personnelOpt.get();
        
        // Vérifier que la personne a un rôle de chef
        boolean estChef = personnel.getRoles().stream()
                .anyMatch(role -> role.getNomRole() == ERole.ROLE_CHEF_A || 
                                 role.getNomRole() == ERole.ROLE_CHEF_B || 
                                 role.getNomRole() == ERole.ROLE_CHEF_SERVICE ||
                                 role.getNomRole() == ERole.ROLE_ADMIN);

        if (!estChef) {
            throw new IllegalArgumentException("L'utilisateur " + personnel.getNom() + " " + personnel.getPrenom() + 
                                             " n'a pas le rôle requis pour être " + typeChef);
        }

        return personnel;
    }

    /**
     * Récupérer tous les chefs disponibles pour l'affectation
     */
    public List<Personnel> getTousLesChefs() {
        logger.info("📋 Récupération de tous les chefs disponibles");
        
        List<Personnel> chefs = personnelRepository.findByRolesNomRoleIn(
            List.of(ERole.ROLE_CHEF_A, ERole.ROLE_CHEF_B, ERole.ROLE_CHEF_SERVICE, ERole.ROLE_ADMIN)
        );
        
        logger.info("📊 {} chefs trouvés", chefs.size());
        return chefs;
    }

    /**
     * Récupérer tous les services avec leurs chefs
     */
    public List<tn.esprit.examen.nomPrenomClasseExamen.entities.Service> getTousLesServices() {
        logger.info("📋 Récupération de tous les services");
        return serviceRepository.findAll();
    }
}