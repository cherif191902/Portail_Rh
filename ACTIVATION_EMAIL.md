# 📧 Activation de l'Envoi d'Email - Guide Complet

## ✅ **État Actuel**
- ✅ Inscription fonctionne
- ✅ Identifiants générés automatiquement
- ✅ Identifiants affichés dans les logs backend
- ⚠️ Email pas encore envoyé (configuration manquante)

## 🔧 **Pour Activer l'Envoi d'Email**

### **Méthode 1 : Gmail (Recommandée)**

#### **1. Préparer votre compte Gmail :**
1. Allez sur : https://myaccount.google.com/security
2. **Activez la validation en 2 étapes** (obligatoire)
3. Cliquez sur **"Mots de passe des applications"**
4. Sélectionnez **"Autre (nom personnalisé)"**
5. Tapez **"Portail RH"**
6. **Copiez** le mot de passe généré (format: `abcd efgh ijkl mnop`)

#### **2. Modifier application.properties :**
```properties
spring.mail.username=cherifbenhassine03@gmail.com
spring.mail.password=VOTRE_MOT_DE_PASSE_APPLICATION_16_CARACTERES
```

#### **3. Redémarrer le backend :**
```bash
cd Desktop/Portail_Rh/backend
./mvnw spring-boot:run
```

### **Méthode 2 : Outlook/Hotmail**

Si vous préférez Outlook :
```properties
spring.mail.host=smtp-mail.outlook.com
spring.mail.port=587
spring.mail.username=votre-email@outlook.com
spring.mail.password=votre-mot-de-passe
```

## 🧪 **Test de l'Email**

### **1. Tester l'inscription :**
1. Allez sur `http://localhost:4200/account/signup`
2. Remplissez avec une **vraie adresse email**
3. Cliquez sur "S'inscrire"

### **2. Vérifier les logs :**
```
📧 ===== EMAIL DE TEST =====
📧 Destinataire : test@example.com
📧 Nom : Dupont Marie
📧 Matricule : DUPMAR001
📧 Mot de passe : Pass1234!
📧 ==========================
✅ Email envoyé avec succès à : test@example.com
```

### **3. Vérifier votre boîte email :**
Vous devriez recevoir :
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

## 🚨 **Dépannage**

### **Erreur : "Authentication failed"**
- ✅ Utilisez un **mot de passe d'application**, pas votre mot de passe Gmail principal
- ✅ Vérifiez que la **validation en 2 étapes** est activée

### **Erreur : "Could not connect to SMTP host"**
- ✅ Vérifiez votre connexion internet
- ✅ Essayez avec un autre fournisseur email

### **Email non reçu :**
- ✅ Vérifiez les **spams/courrier indésirable**
- ✅ Testez avec une autre adresse email
- ✅ Vérifiez les logs backend pour confirmation d'envoi

## 📋 **Checklist Rapide**

- [ ] Validation en 2 étapes activée sur Gmail
- [ ] Mot de passe d'application généré
- [ ] application.properties mis à jour
- [ ] Backend redémarré
- [ ] Test avec vraie adresse email
- [ ] Vérification boîte email + spams

## 🎯 **Mode Actuel vs Mode Email**

### **Mode Actuel (Test) :**
- ✅ Inscription fonctionne
- ✅ Identifiants dans les logs
- ⚠️ Pas d'email envoyé

### **Mode Email (Après Configuration) :**
- ✅ Inscription fonctionne
- ✅ Identifiants dans les logs
- ✅ Email envoyé automatiquement
- ✅ Utilisateur reçoit ses identifiants

## 🚀 **Prochaines Étapes**

1. **Générez** votre mot de passe d'application Gmail
2. **Remplacez** dans `application.properties`
3. **Redémarrez** le backend
4. **Testez** avec votre vraie adresse email
5. **Vérifiez** votre boîte email !

**Votre système d'inscription automatique sera alors 100% opérationnel !** 📧✨
