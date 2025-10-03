package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public void sendCredentials(String toEmail, String nom, String prenom, String matricule, String password) {
        try {
            // Mode test : afficher les identifiants dans les logs
            System.out.println("📧 ===== EMAIL DE TEST =====");
            System.out.println("📧 Destinataire : " + toEmail);
            System.out.println("📧 Nom : " + nom + " " + prenom);
            System.out.println("📧 Matricule : " + matricule);
            System.out.println("📧 Mot de passe : " + password);
            System.out.println("📧 ==========================");

            // Tentative d'envoi réel (peut échouer)
            try {
                // Diagnostic: afficher la configuration effective du JavaMailSender
                if (mailSender instanceof JavaMailSenderImpl) {
                    JavaMailSenderImpl impl = (JavaMailSenderImpl) mailSender;
                    System.out.println("[MAIL] Host=" + impl.getHost() + " Port=" + impl.getPort() + " Username=" + impl.getUsername());
                } else {
                    System.out.println("[MAIL] JavaMailSender is not an instance of JavaMailSenderImpl");
                }

                SimpleMailMessage message = new SimpleMailMessage();
                if (fromEmail == null || fromEmail.trim().isEmpty()) {
                    System.err.println("⚠️ fromEmail (spring.mail.username) is not configured or empty");
                }
                message.setFrom(fromEmail);
                message.setTo(toEmail);
                message.setSubject("Vos identifiants de connexion - Portail RH");

                String emailBody = String.format(
                    "Bonjour %s %s,\n\n" +
                    "Votre compte a été créé avec succès sur le Portail RH.\n\n" +
                    "Vos identifiants de connexion sont :\n" +
                    "• Matricule : %s\n" +
                    "• Mot de passe : %s\n\n" +
                    "Veuillez vous connecter à l'adresse : http://localhost:4200\n\n" +
                    "Pour des raisons de sécurité, nous vous recommandons de changer votre mot de passe lors de votre première connexion.\n\n" +
                    "Cordialement,\n" +
                    "L'équipe RH",
                    prenom, nom, matricule, password
                );

                message.setText(emailBody);
                mailSender.send(message);

                System.out.println("✅ Email envoyé avec succès à : " + toEmail);

            } catch (Exception emailException) {
                System.err.println("⚠️ Email non envoyé (configuration manquante) : " + emailException.getMessage());
                emailException.printStackTrace();
                // Ne pas lancer d'exception, juste logger pour ne pas casser l'inscription
            }

        } catch (Exception e) {
            System.err.println("❌ Erreur générale : " + e.getMessage());
            // En mode test, on n'échoue pas
            System.out.println("📧 Mode test : Identifiants pour " + toEmail + " - " + matricule + " / " + password);
        }
    }

    public void sendPasswordReset(String toEmail, String nom, String prenom, String newPassword) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(toEmail);
            message.setSubject("Réinitialisation de votre mot de passe - Portail RH");
            
            String emailBody = String.format(
                "Bonjour %s %s,\n\n" +
                "Votre mot de passe a été réinitialisé.\n\n" +
                "Votre nouveau mot de passe est : %s\n\n" +
                "Veuillez vous connecter et changer ce mot de passe dès que possible.\n\n" +
                "Cordialement,\n" +
                "L'équipe RH",
                prenom, nom, newPassword
            );
            
            message.setText(emailBody);
            mailSender.send(message);
            
            System.out.println("✅ Email de réinitialisation envoyé à : " + toEmail);
            
        } catch (Exception e) {
            System.err.println("❌ Erreur lors de l'envoi de l'email de réinitialisation : " + e.getMessage());
            throw new RuntimeException("Erreur lors de l'envoi de l'email", e);
        }
    }
}
