package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;

import java.security.SecureRandom;
import java.util.Random;

@Service
public class CredentialGeneratorService {

    @Autowired
    private PersonnelRepository personnelRepository;

    private static final String UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    private static final String DIGITS = "0123456789";
    private static final String SPECIAL_CHARS = "!@#$%^&*";
    
    private final Random random = new SecureRandom();

    /**
     * Génère un matricule unique basé sur le nom et prénom
     */
    public String generateMatricule(String nom, String prenom) {
        // Format: 3 premières lettres du nom + 3 premières lettres du prénom + 3 chiffres
        String baseMatricule = (nom.substring(0, Math.min(3, nom.length())) + 
                               prenom.substring(0, Math.min(3, prenom.length()))).toUpperCase();
        
        String matricule;
        int counter = 1;
        
        do {
            String suffix = String.format("%03d", counter);
            matricule = baseMatricule + suffix;
            counter++;
        } while (personnelRepository.existsByMatriculeP(matricule) && counter <= 999);
        
        if (counter > 999) {
            // Si on dépasse 999, utiliser un format différent
            matricule = baseMatricule + System.currentTimeMillis() % 10000;
        }
        
        return matricule;
    }

    /**
     * Génère un mot de passe sécurisé
     */
    public String generatePassword() {
        int length = 12; // Longueur du mot de passe
        String allChars = UPPERCASE + LOWERCASE + DIGITS + SPECIAL_CHARS;
        
        StringBuilder password = new StringBuilder();
        
        // Assurer qu'il y a au moins un caractère de chaque type
        password.append(UPPERCASE.charAt(random.nextInt(UPPERCASE.length())));
        password.append(LOWERCASE.charAt(random.nextInt(LOWERCASE.length())));
        password.append(DIGITS.charAt(random.nextInt(DIGITS.length())));
        password.append(SPECIAL_CHARS.charAt(random.nextInt(SPECIAL_CHARS.length())));
        
        // Remplir le reste avec des caractères aléatoires
        for (int i = 4; i < length; i++) {
            password.append(allChars.charAt(random.nextInt(allChars.length())));
        }
        
        // Mélanger les caractères
        return shuffleString(password.toString());
    }

    /**
     * Génère un mot de passe simple pour les tests
     */
    public String generateSimplePassword() {
        return "Pass" + (1000 + random.nextInt(9000)) + "!";
    }

    /**
     * Mélange les caractères d'une chaîne
     */
    private String shuffleString(String string) {
        char[] chars = string.toCharArray();
        for (int i = chars.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            char temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
        }
        return new String(chars);
    }

    /**
     * Génère un matricule pour un service spécifique
     */
    public String generateMatriculeForService(String nom, String prenom, String serviceCode) {
        String baseMatricule = serviceCode.toUpperCase() + 
                              nom.substring(0, Math.min(2, nom.length())).toUpperCase() + 
                              prenom.substring(0, Math.min(2, prenom.length())).toUpperCase();
        
        String matricule;
        int counter = 1;
        
        do {
            String suffix = String.format("%02d", counter);
            matricule = baseMatricule + suffix;
            counter++;
        } while (personnelRepository.existsByMatriculeP(matricule) && counter <= 99);
        
        return matricule;
    }
}
