package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.TypeConge;
import tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CongeRepository extends JpaRepository<Conge, Long> {
    
    // Recherche par personnel
    List<Conge> findByPersonnel(Personnel personnel);
    
    // Recherche par matricule du personnel
    @Query("SELECT c FROM Conge c WHERE c.personnel.matriculeP = :matricule")
    List<Conge> findByPersonnelMatricule(@Param("matricule") String matricule);
    
    // Recherche par type de congé
    List<Conge> findByTypeConge(TypeConge typeConge);
    
    // Recherche par statut chef niveau 1
    List<Conge> findByRepChefsNiveau1(String status);
    
    // Recherche par statut chef niveau 2
    List<Conge> findByRepChefsNiveau2(String status);
    
    // Recherche par statut RH
    List<Conge> findByRepRh(String status);
    
    // Congés en attente pour chef niveau 1
    @Query("SELECT c FROM Conge c WHERE c.repChefsNiveau1 = 'EN_ATTENTE'")
    List<Conge> findPendingForChef1();
    
    // Congés en attente pour chef niveau 2
    @Query("SELECT c FROM Conge c WHERE c.repChefsNiveau1 = 'APPROUVE' AND c.repChefsNiveau2 = 'EN_ATTENTE'")
    List<Conge> findPendingForChef2();
    
    // Congés en attente pour RH
    @Query("SELECT c FROM Conge c WHERE c.repChefsNiveau1 = 'APPROUVE' AND c.repChefsNiveau2 = 'APPROUVE' AND c.repRh = 'EN_ATTENTE'")
    List<Conge> findPendingForRh();
    
    // Congés approuvés
    @Query("SELECT c FROM Conge c WHERE c.repChefsNiveau1 = 'APPROUVE' AND c.repChefsNiveau2 = 'APPROUVE' AND c.repRh = 'APPROUVE'")
    List<Conge> findApprovedConges();
    
    // Congés refusés
    @Query("SELECT c FROM Conge c WHERE c.repChefsNiveau1 = 'REFUSE' OR c.repChefsNiveau2 = 'REFUSE' OR c.repRh = 'REFUSE'")
    List<Conge> findRejectedConges();
    
    // Congés par période
    List<Conge> findByDateDebBetween(LocalDate startDate, LocalDate endDate);
    
    // Congés par service
    @Query("SELECT c FROM Conge c WHERE c.personnel.service.idService = :serviceId")
    List<Conge> findByServiceId(@Param("serviceId") Long serviceId);
    
    // Congés pour un chef de service
    @Query("SELECT c FROM Conge c WHERE c.personnel.service.idService = :serviceId AND c.repChefsNiveau1 = 'EN_ATTENTE'")
    List<Conge> findPendingForChefService(@Param("serviceId") Long serviceId);
    
    // Congés récents (derniers 30 jours)
    @Query("SELECT c FROM Conge c WHERE c.dateCong >= :date ORDER BY c.dateCong DESC")
    List<Conge> findRecentConges(@Param("date") LocalDate date);
    
    // Statistiques par type de congé
    @Query("SELECT c.typeConge.nomTypeconge, COUNT(c) FROM Conge c GROUP BY c.typeConge.idType, c.typeConge.nomTypeconge")
    List<Object[]> getCongeStatsByType();
    
    // Statistiques par mois
    @Query("SELECT MONTH(c.dateDeb), YEAR(c.dateDeb), COUNT(c) FROM Conge c GROUP BY YEAR(c.dateDeb), MONTH(c.dateDeb) ORDER BY YEAR(c.dateDeb), MONTH(c.dateDeb)")
    List<Object[]> getCongeStatsByMonth();

    // Congés en cours (date actuelle entre début et fin)
    @Query("SELECT c FROM Conge c WHERE :currentDate BETWEEN c.dateDeb AND c.dateFin AND c.repRh = 'APPROUVE'")
    List<Conge> findCurrentConges(@Param("currentDate") LocalDate currentDate);

    // Historique RH: toutes les demandes traitées (approuvées ou refusées au niveau RH)
    @Query("SELECT c FROM Conge c WHERE c.repRh IN ('APPROUVE','REFUSE') ORDER BY c.dateCong DESC")
    List<Conge> findRhHistoryAll();

    // Historique filtré par statut RH
    @Query("SELECT c FROM Conge c WHERE c.repRh = :status ORDER BY c.dateCong DESC")
    List<Conge> findRhHistoryByStatus(@Param("status") String status);
    
    // ===== NOUVELLES REQUÊTES POUR LE WORKFLOW HIÉRARCHIQUE =====
    
    // Demandes en attente de validation par Chef A
    @Query("SELECT c FROM Conge c WHERE c.statutConge = tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge.EN_ATTENTE_CHEF_A AND c.validateurChefA.id = :chefId")
    List<Conge> findPendingForChefA(@Param("chefId") Integer chefId);
    
    // Demandes en attente de validation par Chef A avec détails
    @Query("SELECT c FROM Conge c " +
           "LEFT JOIN FETCH c.personnel p " +
           "LEFT JOIN FETCH p.service s " +
           "LEFT JOIN FETCH c.typeConge tc " +
           "WHERE c.statutConge = tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge.EN_ATTENTE_CHEF_A " +
           "AND c.validateurChefA.id = :chefId " +
           "ORDER BY c.dateCong DESC")
    List<Conge> findPendingForChefAWithDetails(@Param("chefId") Integer chefId);
    
    // Demandes en attente de validation par Chef B
    @Query("SELECT c FROM Conge c WHERE c.statutConge = tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge.EN_ATTENTE_CHEF_B AND c.validateurChefB.id = :chefId")
    List<Conge> findPendingForChefB(@Param("chefId") Integer chefId);
    
    // Demandes en attente de validation par RH
    @Query("SELECT c FROM Conge c WHERE c.statutConge = tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge.EN_ATTENTE_RH AND c.validateurRh.id = :rhId")
    List<Conge> findPendingForRhUser(@Param("rhId") Integer rhId);
    
    // Toutes les demandes en attente de validation RH (pour tous les RH)
    @Query("SELECT c FROM Conge c WHERE c.statutConge = tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge.EN_ATTENTE_RH")
    List<Conge> findAllPendingForRh();
    
    // Demandes par statut du nouveau système
    @Query("SELECT c FROM Conge c WHERE c.statutConge = :statut")
    List<Conge> findByStatutConge(@Param("statut") tn.esprit.examen.nomPrenomClasseExamen.entities.StatutConge statut);
    
    // Historique des demandes traitées par un validateur spécifique
    @Query("SELECT c FROM Conge c WHERE " +
           "(c.validateurChefA.id = :validatorId AND c.dateValidationChefA IS NOT NULL) OR " +
           "(c.validateurChefB.id = :validatorId AND c.dateValidationChefB IS NOT NULL) OR " +
           "(c.validateurRh.id = :validatorId AND c.dateValidationRh IS NOT NULL) " +
           "ORDER BY COALESCE(c.dateValidationRh, c.dateValidationChefB, c.dateValidationChefA) DESC")
    List<Conge> findHistoriqueByValidator(@Param("validatorId") Integer validatorId);
    
    // Toutes les demandes assignées à un Chef A (pour diagnostic)
    @Query("SELECT c FROM Conge c WHERE c.validateurChefA.id = :chefId ORDER BY c.dateCong DESC")
    List<Conge> findByValidateurChefA(@Param("chefId") Integer chefId);
    
    // ===== NOUVELLES MÉTHODES POUR LA GESTION AUTOMATIQUE DES CHEFS =====
    
    // Trouver les congés validés par un Chef A spécifique (par Integer ID)
    @Query("SELECT c FROM Conge c WHERE c.validateurChefA.id = :chefId")
    List<Conge> findByValidateurChefAId(@Param("chefId") Integer chefId);
    
    // Trouver les congés validés par un Chef B spécifique (par Integer ID)  
    @Query("SELECT c FROM Conge c WHERE c.validateurChefB.id = :chefId")
    List<Conge> findByValidateurChefBId(@Param("chefId") Integer chefId);
    
    // Trouver les congés par personnel et statut
    @Query("SELECT c FROM Conge c WHERE c.personnel.id = :personnelId AND c.statutConge IN :statuts")
    List<Conge> findByPersonnelIdAndStatutIn(@Param("personnelId") Long personnelId, @Param("statuts") java.util.List<StatutConge> statuts);
    
    // Trouver tous les congés d'un service avec certains statuts
    @Query("SELECT c FROM Conge c WHERE c.personnel.service.idService = :serviceId AND c.statutConge IN :statuts")
    List<Conge> findByServiceAndStatutIn(@Param("serviceId") Long serviceId, @Param("statuts") java.util.List<StatutConge> statuts);
    
    // Récupérer toutes les demandes triées par date de création (plus récentes d'abord)
    @Query("SELECT c FROM Conge c ORDER BY c.dateCong DESC")
    List<Conge> findAllByOrderByDateCreationDesc();
}
