 📧 Configuration Email - Envoi Automatique des Identifiants

## 🎯 **Fonctionnalité Implémentée**

Le système génère maintenant automatiquement :
- **Matricule unique** basé sur nom + prénom + numéro
- **Mot de passe sécurisé** (format: Pass1234!)
- **Envoi par email** des identifiants

## ⚙️ **Configuration Email Requise**

### **1. Configuration Gmail (Recommandée)**

Dans `application.properties`, remplacez :
```properties
spring.mail.username=your-email@gmail.com
spring.mail.password=your-app-password
```

Par vos vraies informations :
```properties
spring.mail.username=votre-email@gmail.com
spring.mail.password=votre-mot-de-passe-application
```

### **2. Génération du Mot de Passe d'Application Gmail**

1. **Allez sur** : https://myaccount.google.com/security
2. **Activez** la validation en 2 étapes
3. **Générez** un mot de passe d'application :
   - Sélectionnez "Autre (nom personnalisé)"
   - Tapez "Portail RH"
   - **Copiez** le mot de passe généré (16 caractères)
4. **Utilisez** ce mot de passe dans `application.properties`

### **3. Configuration Alternative (Outlook/Hotmail)**

```properties
spring.mail.host=smtp-mail.outlook.com
spring.mail.port=587
spring.mail.username=votre-email@outlook.com
spring.mail.password=votre-mot-de-passe
```

## 🧪 **Test de la Fonctionnalité**

### **1. Redémarrer le Backend**
```bash
cd Desktop/Portail_Rh/backend
./mvnw spring-boot:run
```

### **2. Tester l'Inscription**

#### **Via l'Interface Web :**
1. Allez sur `http://localhost:4200/account/signup`
2. Remplissez seulement : **Nom**, **Prénom**, **Email**
3. Cliquez sur "S'inscrire"
4. **Vérifiez votre email** pour recevoir les identifiants

#### **Via API (Test Direct) :**
```javascript
// Dans la console DevTools
fetch('http://localhost:8089/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nom: 'Dupont',
    prenom: 'Marie',
    email: 'marie.dupont@example.com'
  })
})
.then(response => response.json())
.then(data => console.log('Résultat:', data))
.catch(error => console.error('Erreur:', error));
```

## 📧 **Format de l'Email Envoyé**

```
Objet: Vos identifiants de connexion - Portail RH

Bonjour Marie Dupont,

Votre compte a été créé avec succès sur le Portail RH.

Vos identifiants de connexion sont :
• Matricule : DUPMAR001
• Mot de passe : Pass1234!

Veuillez vous connecter à l'adresse : http://localhost:4200

Pour des raisons de sécurité, nous vous recommandons de changer 
votre mot de passe lors de votre première connexion.

Cordialement,
L'équipe RH
```

## 🔧 **Génération des Identifiants**

### **Matricule :**
- Format : `[3 lettres nom][3 lettres prénom][3 chiffres]`
- Exemple : `DUPMAR001`, `DUPMAR002`, etc.
- **Unique** automatiquement

### **Mot de Passe :**
- Format : `Pass[4 chiffres]!`
- Exemple : `Pass1234!`, `Pass5678!`
- **Sécurisé** et facile à retenir

## 🚨 **Dépannage**

### **Erreur : "Could not connect to SMTP host"**
- Vérifiez la configuration email
- Testez avec un autre fournisseur email
- Vérifiez les paramètres de sécurité Gmail

### **Erreur : "Authentication failed"**
- Utilisez un mot de passe d'application (pas le mot de passe principal)
- Vérifiez que la validation en 2 étapes est activée

### **Email non reçu :**
- Vérifiez les spams
- Testez avec une autre adresse email
- Vérifiez les logs backend pour les erreurs

## 📋 **Logs Backend**

Surveillez ces messages dans la console backend :
```
✅ Email envoyé avec succès à : marie.dupont@example.com
❌ Erreur lors de l'envoi de l'email : [détails]
```

## 🎯 **Avantages**

### **Sécurité :**
- Pas de saisie manuelle des mots de passe
- Mots de passe générés aléatoirement
- Matricules uniques garantis

### **Simplicité :**
- Formulaire d'inscription simplifié
- Envoi automatique par email
- Processus transparent pour l'utilisateur

### **Traçabilité :**
- Logs d'envoi d'emails
- Historique des créations de comptes
- Gestion centralisée des identifiants

## 🚀 **Prochaines Étapes**

1. **Configurez votre email** dans `application.properties`
2. **Redémarrez le backend**
3. **Testez l'inscription** avec une vraie adresse email
4. **Vérifiez la réception** des identifiants

**La fonctionnalité est prête à être utilisée !** 📧✨
