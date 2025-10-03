package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Service;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    
    // Recherche par nom de service
    Optional<Service> findByNomService(String nomService);
    
    // Vérifier l'existence par nom
    Boolean existsByNomService(String nomService);
    
    // Recherche par libellé
    List<Service> findByLibServiceContainingIgnoreCase(String libService);
    
    // Obtenir tous les services avec leurs personnels
    @Query("SELECT s FROM Service s LEFT JOIN FETCH s.personnels")
    List<Service> findAllWithPersonnels();
    
    // Obtenir un service avec ses personnels
    @Query("SELECT s FROM Service s LEFT JOIN FETCH s.personnels WHERE s.idService = :id")
    Optional<Service> findByIdWithPersonnels(@Param("id") Long id);
    
    // Compter le nombre de personnels par service
    @Query("SELECT s.nomService, COUNT(p) FROM Service s LEFT JOIN s.personnels p GROUP BY s.idService, s.nomService")
    List<Object[]> countPersonnelsByService();
    
    // Services ayant des personnels
    @Query("SELECT DISTINCT s FROM Service s WHERE SIZE(s.personnels) > 0")
    List<Service> findServicesWithPersonnels();
    
    // Services sans personnel
    @Query("SELECT s FROM Service s WHERE SIZE(s.personnels) = 0")
    List<Service> findServicesWithoutPersonnels();
}
