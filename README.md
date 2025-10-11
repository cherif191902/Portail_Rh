# 🏢 Portail RH - Système de Gestion des Ressources Humaines

Application complète de gestion RH avec workflow de validation de congés multi-niveaux.

## 🚀 Fonctionnalités Principales

### 👥 Gestion des Utilisateurs
- Inscription automatique avec affectation hiérarchique
- Authentification JWT par matricule
- Gestion des rôles : Employé, Chef A, Chef B, RH, Admin

### 📅 Gestion des Congés
- **Workflow de validation à 4 niveaux** :
  - Employé → Demande de congé
  - Chef A → Première validation
  - Chef B → Seconde validation  
  - RH → Validation finale
- Suivi en temps réel des demandes
- Historique complet des validations

### 🏗️ Affectations Hiérarchiques
- Affectation automatique des responsables lors de l'inscription
- Gestion des chefs par service
- Interface d'administration pour les affectations

### 📊 Tableaux de Bord
- Dashboard employé : Suivi des congés personnels
- Dashboard chef : Validation des demandes d'équipe
- Dashboard RH : Vue globale des congés

### ⏰ Pointage et Présence
- Système de pointage entrée/sortie
- Calcul automatique des heures
- Statistiques de présence

### 💬 Communication
- Messagerie interne
- Notifications en temps réel
- Chat entre utilisateurs

## 🛠️ Technologies

| Composant | Technologie |
|-----------|-------------|
| Frontend | Angular 13+ |
| Backend | Spring Boot |
| Base de données | MySQL |
| Authentification | JWT |
| UI Framework | Bootstrap |

## ⚡ Installation Rapide

### 1. Backend
```bash
cd backend
./mvnw spring-boot:run
```

### 2. Frontend
```bash
cd Front
npm install
npm start
```

### 3. Accès
- **Frontend** : http://localhost:4200
- **Backend API** : http://localhost:8089

## 👤 Comptes de Test

| Rôle | Matricule | Mot de passe |
|------|-----------|--------------|
| Employé | EMP001 | password |
| Chef Service | CHEF001 | password |
| RH | RH001 | password |
| Admin | ADMIN001 | password |

## 📋 Workflow de Congés

```
Employé → Chef A → Chef B → RH → ✅ Approuvé
   ↓         ↓         ↓       ↓
   ❌ Refus possible à chaque niveau
```

## 🔧 Configuration

### Base de Données
1. Créer une base MySQL `portail_rh`
2. Configurer les identifiants dans `application.properties`
3. Les tables sont créées automatiquement

### Variables d'Environnement
```properties
# Base de données
DB_HOST=localhost
DB_PORT=3306
DB_NAME=portail_rh
DB_USER=root
DB_PASSWORD=

# JWT
JWT_SECRET=monSecretJWT
JWT_EXPIRATION=86400
```

## 📱 Utilisation

1. **Inscription** : Choisir son service, affectation automatique
2. **Connexion** : Utiliser matricule + mot de passe
3. **Demande de congé** : Saisir dates et motif
4. **Validation** : Chefs et RH valident selon leur niveau
5. **Suivi** : Consulter l'état des demandes en temps réel

## 📁 Structure du Projet

```
Portail_Rh/
├── backend/           # Spring Boot API
├── Front/            # Angular Frontend
├── README.md         # Ce fichier
└── migration-*.sql   # Scripts de migration DB
```

---

**Version** : 1.0.0  
**Développé avec** : Spring Boot + Angular