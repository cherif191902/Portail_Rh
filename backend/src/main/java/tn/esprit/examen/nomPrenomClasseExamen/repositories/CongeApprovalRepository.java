package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.CongeApproval;

import java.util.List;

@Repository
public interface CongeApprovalRepository extends JpaRepository<CongeApproval, Long> {
    // Conge PK is named `idConge`, so traverse the relation correctly
    List<CongeApproval> findByConge_IdConge(Long congeId);
}
