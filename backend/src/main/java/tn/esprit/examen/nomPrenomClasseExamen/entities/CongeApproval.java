package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class CongeApproval {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conge_id")
    private Conge conge;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "approver_id")
    private Personnel approver;

    private Integer level; // 1,2,3 (RH)

    private String decision; // APPROUVE, REFUSE

    private String commentaire;

    private LocalDateTime decidedAt = LocalDateTime.now();
}
