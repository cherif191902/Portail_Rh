package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import java.util.Optional;

public interface PersonnelRepository extends JpaRepository<Personnel, Integer> {
    // Méthodes pour l'authentification par email (conservées pour compatibilité)
    Optional<Personnel> findByEmail(String email);
    Boolean existsByEmail(String email);

    // Nouvelles méthodes pour l'authentification par matricule
    Optional<Personnel> findByMatriculeP(String matriculeP);
    Boolean existsByMatriculeP(String matriculeP);

    // Méthode pour charger un personnel avec ses rôles (pour l'authentification)
    @Query("SELECT p FROM Personnel p LEFT JOIN FETCH p.roles WHERE p.matriculeP = :matricule")
    Optional<Personnel> findByMatriculePWithRoles(@Param("matricule") String matriculeP);

    // Find personnels by role name (ex: "ROLE_RH")
    @Query("SELECT DISTINCT p FROM Personnel p JOIN p.roles r WHERE r.nomRole = :roleName")
    java.util.List<tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel> findByRolesNomRole(@Param("roleName") ERole roleName);

    // Find personnels who do NOT have the given role
    @Query("SELECT p FROM Personnel p WHERE NOT EXISTS (SELECT r FROM p.roles r WHERE r.nomRole = :roleName)")
    java.util.List<tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel> findAllByNotRole(@Param("roleName") ERole roleName);

    // Find all personnels by service id
    @Query("SELECT p FROM Personnel p WHERE p.service.idService = :serviceId")
    java.util.List<tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel> findByServiceId(@Param("serviceId") Long serviceId);
}