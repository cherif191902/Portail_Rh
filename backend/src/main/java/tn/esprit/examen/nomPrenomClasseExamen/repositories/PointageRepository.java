package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Pointage;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface PointageRepository extends JpaRepository<Pointage, Long> {
    
    // Recherche par personnel
    List<Pointage> findByPersonnel(Personnel personnel);
    
    // Recherche par matricule du personnel
    @Query("SELECT p FROM Pointage p WHERE p.personnel.matriculeP = :matricule")
    List<Pointage> findByPersonnelMatricule(@Param("matricule") String matricule);
    
    // Recherche par type de pointage
    List<Pointage> findByType(String type);
    
    // Recherche par statut
    List<Pointage> findByStatus(String status);
    
    // Pointages d'un personnel pour une date donnée
    @Query("SELECT p FROM Pointage p WHERE p.personnel.matriculeP = :matricule AND DATE(p.dataPoint) = :date ORDER BY p.dataPoint")
    List<Pointage> findByPersonnelAndDate(@Param("matricule") String matricule, @Param("date") LocalDate date);
    
    // Pointages d'un personnel pour une période
    @Query("SELECT p FROM Pointage p WHERE p.personnel.matriculeP = :matricule AND p.dataPoint BETWEEN :startDate AND :endDate ORDER BY p.dataPoint")
    List<Pointage> findByPersonnelAndPeriod(@Param("matricule") String matricule, 
                                           @Param("startDate") LocalDateTime startDate, 
                                           @Param("endDate") LocalDateTime endDate);
    
    // Dernier pointage d'un personnel
    @Query("SELECT p FROM Pointage p WHERE p.personnel.matriculeP = :matricule ORDER BY p.dataPoint DESC LIMIT 1")
    Optional<Pointage> findLastPointageByPersonnel(@Param("matricule") String matricule);
    
    // Premier pointage d'un personnel pour une date
    @Query("SELECT p FROM Pointage p WHERE p.personnel.matriculeP = :matricule AND DATE(p.dataPoint) = :date AND p.type = 'ENTREE' ORDER BY p.dataPoint ASC LIMIT 1")
    Optional<Pointage> findFirstEntreeByPersonnelAndDate(@Param("matricule") String matricule, @Param("date") LocalDate date);
    
    // Dernier pointage d'un personnel pour une date
    @Query("SELECT p FROM Pointage p WHERE p.personnel.matriculeP = :matricule AND DATE(p.dataPoint) = :date AND p.type = 'SORTIE' ORDER BY p.dataPoint DESC LIMIT 1")
    Optional<Pointage> findLastSortieByPersonnelAndDate(@Param("matricule") String matricule, @Param("date") LocalDate date);
    
    // Pointages par service
    @Query("SELECT p FROM Pointage p WHERE p.personnel.service.idService = :serviceId")
    List<Pointage> findByServiceId(@Param("serviceId") Long serviceId);
    
    // Pointages du jour
    @Query("SELECT p FROM Pointage p WHERE DATE(p.dataPoint) = :date")
    List<Pointage> findByDate(@Param("date") LocalDate date);
    
    // Pointages en retard (après 9h)
    @Query("SELECT p FROM Pointage p WHERE p.type = 'ENTREE' AND TIME(p.dataPoint) > '09:00:00' AND DATE(p.dataPoint) = :date")
    List<Pointage> findLateArrivals(@Param("date") LocalDate date);
    
    // Pointages manuels
    List<Pointage> findByIsManualTrue();
    
    // Pointages automatiques
    List<Pointage> findByIsManualFalse();
    
    // Statistiques de présence par jour
    @Query("SELECT DATE(p.dataPoint), COUNT(DISTINCT p.personnel.id) FROM Pointage p WHERE p.type = 'ENTREE' GROUP BY DATE(p.dataPoint) ORDER BY DATE(p.dataPoint)")
    List<Object[]> getPresenceStatsByDay();
    
    // Statistiques de présence par service
    @Query("SELECT p.personnel.service.nomService, COUNT(DISTINCT p.personnel.id) FROM Pointage p WHERE p.type = 'ENTREE' AND DATE(p.dataPoint) = :date GROUP BY p.personnel.service.idService, p.personnel.service.nomService")
    List<Object[]> getPresenceStatsByService(@Param("date") LocalDate date);
    
    // Heures travaillées par personnel (approximation basée sur premier/dernier pointage)
    @Query("SELECT p.personnel.matriculeP, " +
           "MIN(CASE WHEN p.type = 'ENTREE' THEN p.dataPoint END), " +
           "MAX(CASE WHEN p.type = 'SORTIE' THEN p.dataPoint END) " +
           "FROM Pointage p WHERE DATE(p.dataPoint) = :date " +
           "GROUP BY p.personnel.id, p.personnel.matriculeP")
    List<Object[]> getWorkingHoursByDate(@Param("date") LocalDate date);
}
