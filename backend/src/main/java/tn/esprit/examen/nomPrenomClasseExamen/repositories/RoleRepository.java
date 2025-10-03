package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Role;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    
    // Recherche par nom de rôle
    Optional<Role> findByNomRole(ERole nomRole);
    
    // Vérifier l'existence par nom de rôle
    Boolean existsByNomRole(ERole nomRole);
    
    // Obtenir tous les rôles avec leurs personnels
    @Query("SELECT r FROM Role r LEFT JOIN FETCH r.personnels")
    List<Role> findAllWithPersonnels();
    
    // Obtenir un rôle avec ses personnels
    @Query("SELECT r FROM Role r LEFT JOIN FETCH r.personnels WHERE r.id = :id")
    Optional<Role> findByIdWithPersonnels(Integer id);
    
    // Compter le nombre de personnels par rôle
    @Query("SELECT r.nomRole, COUNT(p) FROM Role r LEFT JOIN r.personnels p GROUP BY r.id, r.nomRole")
    List<Object[]> countPersonnelsByRole();
    
    // Rôles ayant des personnels
    @Query("SELECT DISTINCT r FROM Role r WHERE SIZE(r.personnels) > 0")
    List<Role> findRolesWithPersonnels();
    
    // Rôles sans personnel
    @Query("SELECT r FROM Role r WHERE SIZE(r.personnels) = 0")
    List<Role> findRolesWithoutPersonnels();
}
