package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 500)
    private String message;
    
    @Column(nullable = false)
    private Boolean isRead = false;
    
    @Column(nullable = false)
    private LocalDateTime createdAt;
    
    @Column(nullable = false)
    private String type; // CONGE, POINTAGE, SYSTEME, CHAT, SANCTION
    
    private String priority; // BASSE, NORMALE, HAUTE, URGENTE
    
    private String action; // URL ou action à effectuer
    
    private String icon; // Icône à afficher
    
    // Relation avec Personnel (destinataire)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "destinataire_id", nullable = false)
    private Personnel destinataire;
    
    // Relation avec Personnel (expéditeur) - optionnel
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "expediteur_id")
    private Personnel expediteur;
    
    // Constructeurs
    public Notification() {
        this.createdAt = LocalDateTime.now();
        this.isRead = false;
        this.priority = "NORMALE";
    }
    
    public Notification(String message, String type, Personnel destinataire) {
        this();
        this.message = message;
        this.type = type;
        this.destinataire = destinataire;
    }
    
    public Notification(String message, String type, Personnel destinataire, Personnel expediteur) {
        this(message, type, destinataire);
        this.expediteur = expediteur;
    }
    
    // Méthodes utilitaires
    public void markAsRead() {
        this.isRead = true;
    }
    
    public void markAsUnread() {
        this.isRead = false;
    }
    
    public boolean isUnread() {
        return !isRead;
    }
    
    public boolean isHighPriority() {
        return "HAUTE".equals(priority) || "URGENTE".equals(priority);
    }
    
    @Override
    public String toString() {
        return "Notification{" +
                "id=" + id +
                ", message='" + message + '\'' +
                ", type='" + type + '\'' +
                ", isRead=" + isRead +
                ", createdAt=" + createdAt +
                '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Notification)) return false;
        Notification that = (Notification) o;
        return id != null && id.equals(that.id);
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
