package tn.esprit.examen.nomPrenomClasseExamen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ChatMessage;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    
    // Messages entre deux utilisateurs
    @Query("SELECT c FROM ChatMessage c WHERE (c.sender = :user1 AND c.receiver = :user2) OR (c.sender = :user2 AND c.receiver = :user1) ORDER BY c.timestamp ASC")
    List<ChatMessage> findConversationBetweenUsers(@Param("user1") String user1, @Param("user2") String user2);
    
    // Messages envoyés par un utilisateur
    List<ChatMessage> findBySender(String sender);
    
    // Messages reçus par un utilisateur
    List<ChatMessage> findByReceiver(String receiver);
    
    // Messages non lus d'un utilisateur
    @Query("SELECT c FROM ChatMessage c WHERE c.receiver = :receiver AND c.isRead = false ORDER BY c.timestamp DESC")
    List<ChatMessage> findUnreadByReceiver(@Param("receiver") String receiver);
    
    // Compter les messages non lus
    @Query("SELECT COUNT(c) FROM ChatMessage c WHERE c.receiver = :receiver AND c.isRead = false")
    Long countUnreadByReceiver(@Param("receiver") String receiver);
    
    // Messages par type
    List<ChatMessage> findByMessageType(String messageType);
    
    // Messages récents (dernières 24h)
    @Query("SELECT c FROM ChatMessage c WHERE c.timestamp >= :since ORDER BY c.timestamp DESC")
    List<ChatMessage> findRecentMessages(@Param("since") LocalDateTime since);
    
    // Derniers messages d'une conversation
    @Query("SELECT c FROM ChatMessage c WHERE (c.sender = :user1 AND c.receiver = :user2) OR (c.sender = :user2 AND c.receiver = :user1) ORDER BY c.timestamp DESC LIMIT :limit")
    List<ChatMessage> findLastMessagesInConversation(@Param("user1") String user1, @Param("user2") String user2, @Param("limit") int limit);
    
    // Marquer comme lu
    @Modifying
    @Query("UPDATE ChatMessage c SET c.isRead = true WHERE c.id = :id")
    void markAsRead(@Param("id") Long id);
    
    // Marquer tous les messages d'une conversation comme lus
    @Modifying
    @Query("UPDATE ChatMessage c SET c.isRead = true WHERE c.sender = :sender AND c.receiver = :receiver")
    void markConversationAsRead(@Param("sender") String sender, @Param("receiver") String receiver);
    
    // Supprimer les anciens messages (plus de X jours)
    @Modifying
    @Query("DELETE FROM ChatMessage c WHERE c.timestamp < :cutoffDate")
    void deleteOldMessages(@Param("cutoffDate") LocalDateTime cutoffDate);
    
    // Messages par période
    @Query("SELECT c FROM ChatMessage c WHERE c.timestamp BETWEEN :startDate AND :endDate ORDER BY c.timestamp DESC")
    List<ChatMessage> findByPeriod(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
    
    // Contacts d'un utilisateur (personnes avec qui il a échangé)
    @Query("SELECT DISTINCT CASE WHEN c.sender = :user THEN c.receiver ELSE c.sender END FROM ChatMessage c WHERE c.sender = :user OR c.receiver = :user")
    List<String> findContactsByUser(@Param("user") String user);
    
    // Dernier message avec chaque contact
    @Query("SELECT c FROM ChatMessage c WHERE c.id IN (" +
           "SELECT MAX(c2.id) FROM ChatMessage c2 WHERE " +
           "(c2.sender = :user OR c2.receiver = :user) " +
           "GROUP BY CASE WHEN c2.sender = :user THEN c2.receiver ELSE c2.sender END" +
           ") ORDER BY c.timestamp DESC")
    List<ChatMessage> findLastMessageWithEachContact(@Param("user") String user);
    
    // Messages avec pièces jointes
    @Query("SELECT c FROM ChatMessage c WHERE c.attachmentUrl IS NOT NULL AND c.attachmentUrl != ''")
    List<ChatMessage> findMessagesWithAttachments();
    
    // Statistiques par jour
    @Query("SELECT DATE(c.timestamp), COUNT(c) FROM ChatMessage c GROUP BY DATE(c.timestamp) ORDER BY DATE(c.timestamp)")
    List<Object[]> getMessageStatsByDay();
    
    // Utilisateurs les plus actifs
    @Query("SELECT c.sender, COUNT(c) FROM ChatMessage c GROUP BY c.sender ORDER BY COUNT(c) DESC")
    List<Object[]> getMostActiveUsers();
}
