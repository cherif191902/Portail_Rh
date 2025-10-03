package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "chat_messages")
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String sender;
    
    @Column(nullable = false)
    private String receiver;
    
    @Column(nullable = false, length = 1000)
    private String content;
    
    @Column(nullable = false)
    private LocalDateTime timestamp;
    
    private Boolean isRead = false;
    
    private String messageType;
    
    private String attachmentUrl;
    
    private String attachmentName;
    
    // Relations avec Personnel
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_personnel_id")
    private Personnel senderPersonnel;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_personnel_id")
    private Personnel receiverPersonnel;
    
    // Constructeurs
    public ChatMessage() {
        this.timestamp = LocalDateTime.now();
        this.isRead = false;
        this.messageType = "TEXT";
    }
    
    public ChatMessage(String sender, String receiver, String content) {
        this();
        this.sender = sender;
        this.receiver = receiver;
        this.content = content;
    }
    
    public ChatMessage(String sender, String receiver, String content, String messageType) {
        this(sender, receiver, content);
        this.messageType = messageType;
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
    
    public boolean hasAttachment() {
        return attachmentUrl != null && !attachmentUrl.isEmpty();
    }
    
    public boolean isTextMessage() {
        return "TEXT".equals(messageType);
    }
    
    public boolean isImageMessage() {
        return "IMAGE".equals(messageType);
    }
    
    public boolean isFileMessage() {
        return "FILE".equals(messageType);
    }
    
    @Override
    public String toString() {
        return "ChatMessage{" +
                "id=" + id +
                ", sender='" + sender + '\'' +
                ", receiver='" + receiver + '\'' +
                ", content='" + content + '\'' +
                ", timestamp=" + timestamp +
                ", messageType='" + messageType + '\'' +
                '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ChatMessage)) return false;
        ChatMessage that = (ChatMessage) o;
        return id != null && id.equals(that.id);
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
