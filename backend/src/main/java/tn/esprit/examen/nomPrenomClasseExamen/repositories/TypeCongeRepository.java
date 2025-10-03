package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.TypeConge;

import java.util.List;
import java.util.Optional;

@Repository
public interface TypeCongeRepository extends JpaRepository<TypeConge, Long> {
    
    // Recherche par nom de type de congé
    Optional<TypeConge> findByNomTypeconge(String nomTypeconge);
    
    // Vérifier l'existence par nom
    Boolean existsByNomTypeconge(String nomTypeconge);
    
    // Recherche par nom contenant (insensible à la casse)
    List<TypeConge> findByNomTypecongeContainingIgnoreCase(String nomTypeconge);
    
    // Types de congés avec un nombre maximum de jours spécifique
    List<TypeConge> findByMaxAllowedDays(Integer maxAllowedDays);
    
    // Types de congés avec un nombre maximum de jours supérieur à
    List<TypeConge> findByMaxAllowedDaysGreaterThan(Integer days);
    
    // Types de congés avec un nombre maximum de jours inférieur à
    List<TypeConge> findByMaxAllowedDaysLessThan(Integer days);
    
    // Types de congés dans une plage de jours
    List<TypeConge> findByMaxAllowedDaysBetween(Integer minDays, Integer maxDays);
    
    // Obtenir tous les types de congés avec leurs congés
    @Query("SELECT t FROM TypeConge t LEFT JOIN FETCH t.conges")
    List<TypeConge> findAllWithConges();
    
    // Obtenir un type de congé avec ses congés
    @Query("SELECT t FROM TypeConge t LEFT JOIN FETCH t.conges WHERE t.idType = :id")
    Optional<TypeConge> findByIdWithConges(@Param("id") Long id);
    
    // Compter le nombre de congés par type
    @Query("SELECT t.nomTypeconge, COUNT(c) FROM TypeConge t LEFT JOIN t.conges c GROUP BY t.idType, t.nomTypeconge")
    List<Object[]> countCongesByType();
    
    // Types de congés les plus utilisés
    @Query("SELECT t FROM TypeConge t WHERE SIZE(t.conges) > 0 ORDER BY SIZE(t.conges) DESC")
    List<TypeConge> findMostUsedTypes();
    
    // Types de congés jamais utilisés
    @Query("SELECT t FROM TypeConge t WHERE SIZE(t.conges) = 0")
    List<TypeConge> findUnusedTypes();
}
