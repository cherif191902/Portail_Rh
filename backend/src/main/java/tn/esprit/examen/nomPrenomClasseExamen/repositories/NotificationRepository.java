package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Notification;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    
    // Notifications d'un destinataire
    List<Notification> findByDestinataire(Personnel destinataire);
    
    // Notifications par matricule du destinataire
    @Query("SELECT n FROM Notification n WHERE n.destinataire.matriculeP = :matricule ORDER BY n.createdAt DESC")
    List<Notification> findByDestinataireMatricule(@Param("matricule") String matricule);
    
    // Notifications non lues d'un destinataire
    @Query("SELECT n FROM Notification n WHERE n.destinataire.matriculeP = :matricule AND n.isRead = false ORDER BY n.createdAt DESC")
    List<Notification> findUnreadByDestinataireMatricule(@Param("matricule") String matricule);
    
    // Notifications lues d'un destinataire
    @Query("SELECT n FROM Notification n WHERE n.destinataire.matriculeP = :matricule AND n.isRead = true ORDER BY n.createdAt DESC")
    List<Notification> findReadByDestinataireMatricule(@Param("matricule") String matricule);
    
    // Compter les notifications non lues
    @Query("SELECT COUNT(n) FROM Notification n WHERE n.destinataire.matriculeP = :matricule AND n.isRead = false")
    Long countUnreadByDestinataireMatricule(@Param("matricule") String matricule);
    
    // Notifications par type
    List<Notification> findByType(String type);
    
    // Notifications par priorité
    List<Notification> findByPriority(String priority);
    
    // Notifications récentes (dernières 24h)
    @Query("SELECT n FROM Notification n WHERE n.createdAt >= :since ORDER BY n.createdAt DESC")
    List<Notification> findRecentNotifications(@Param("since") LocalDateTime since);
    
    // Notifications d'un expéditeur
    List<Notification> findByExpediteur(Personnel expediteur);
    
    // Notifications par matricule de l'expéditeur
    @Query("SELECT n FROM Notification n WHERE n.expediteur.matriculeP = :matricule ORDER BY n.createdAt DESC")
    List<Notification> findByExpediteurMatricule(@Param("matricule") String matricule);
    
    // Marquer comme lue
    @Modifying
    @Query("UPDATE Notification n SET n.isRead = true WHERE n.id = :id")
    void markAsRead(@Param("id") Long id);
    
    // Marquer toutes les notifications d'un utilisateur comme lues
    @Modifying
    @Query("UPDATE Notification n SET n.isRead = true WHERE n.destinataire.matriculeP = :matricule")
    void markAllAsReadByMatricule(@Param("matricule") String matricule);
    
    // Supprimer les anciennes notifications (plus de X jours)
    @Modifying
    @Query("DELETE FROM Notification n WHERE n.createdAt < :cutoffDate")
    void deleteOldNotifications(@Param("cutoffDate") LocalDateTime cutoffDate);
    
    // Notifications par période
    @Query("SELECT n FROM Notification n WHERE n.createdAt BETWEEN :startDate AND :endDate ORDER BY n.createdAt DESC")
    List<Notification> findByPeriod(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
    
    // Notifications haute priorité non lues
    @Query("SELECT n FROM Notification n WHERE n.destinataire.matriculeP = :matricule AND n.isRead = false AND n.priority IN ('HAUTE', 'URGENTE') ORDER BY n.createdAt DESC")
    List<Notification> findHighPriorityUnreadByMatricule(@Param("matricule") String matricule);
    
    // Statistiques par type
    @Query("SELECT n.type, COUNT(n) FROM Notification n GROUP BY n.type")
    List<Object[]> getNotificationStatsByType();
    
    // Statistiques par jour
    @Query("SELECT DATE(n.createdAt), COUNT(n) FROM Notification n GROUP BY DATE(n.createdAt) ORDER BY DATE(n.createdAt)")
    List<Object[]> getNotificationStatsByDay();
}
