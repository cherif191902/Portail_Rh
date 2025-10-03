package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "pointages")
public class Pointage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String type; // ENTREE, SORTIE, PAUSE_DEBUT, PAUSE_FIN
    
    @Column(nullable = false)
    private LocalDateTime dataPoint; // Date et heure du pointage
    
    private String status; // VALIDE, INVALIDE, EN_ATTENTE
    
    private String commentaire; // Commentaire éventuel
    
    private String localisation; // Lieu du pointage
    
    private Boolean isManual; // Pointage manuel ou automatique
    
    // Relation avec Personnel
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "personnel_id", nullable = false)
    private Personnel personnel;
    
    // Constructeurs
    public Pointage() {}
    
    public Pointage(String type, LocalDateTime dataPoint, Personnel personnel) {
        this.type = type;
        this.dataPoint = dataPoint;
        this.personnel = personnel;
        this.status = "VALIDE";
        this.isManual = false;
    }
    
    public Pointage(String type, LocalDateTime dataPoint, String status, Personnel personnel) {
        this.type = type;
        this.dataPoint = dataPoint;
        this.status = status;
        this.personnel = personnel;
        this.isManual = false;
    }
    
    // Méthodes utilitaires
    public boolean isEntree() {
        return "ENTREE".equals(type);
    }
    
    public boolean isSortie() {
        return "SORTIE".equals(type);
    }
    
    public boolean isPause() {
        return "PAUSE_DEBUT".equals(type) || "PAUSE_FIN".equals(type);
    }
    
    public boolean isValide() {
        return "VALIDE".equals(status);
    }
    
    @Override
    public String toString() {
        return "Pointage{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", dataPoint=" + dataPoint +
                ", status='" + status + '\'' +
                '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Pointage)) return false;
        Pointage pointage = (Pointage) o;
        return id != null && id.equals(pointage.id);
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
