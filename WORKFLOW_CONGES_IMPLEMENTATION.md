# 🔄 Implémentation du Workflow de Validation des Congés

## 📋 Vue d'ensemble

Cette documentation décrit l'implémentation complète du workflow de validation des demandes de congé selon la logique hiérarchique suivante :

1. **Soumission** → `EN_ATTENTE_CHEF_A`
2. **Chef A approuve** → `EN_ATTENTE_CHEF_B`  
3. **Chef B approuve** → `EN_ATTENTE_RH`
4. **RH approuve** → `VALIDE`
5. **Refus à tout niveau** → `REFUSE_PAR_[NIVEAU]`

## 🏗️ Architecture

### Backend

#### 1. Enum StatutConge
```java
public enum StatutConge {
    EN_ATTENTE_CHEF_A("En attente de validation Chef A"),
    EN_ATTENTE_CHEF_B("En attente de validation Chef B"),
    EN_ATTENTE_RH("En attente de validation RH"),
    VALIDE("Validé"),
    REFUSE_PAR_CHEF_A("Refusé par Chef A"),
    REFUSE_PAR_CHEF_B("Refusé par Chef B"),
    REFUSE_PAR_RH("Refusé par RH");
}
```

#### 2. Logique de Transition
Méthode `getNextStatus()` dans l'enum StatutConge qui détermine automatiquement le prochain statut selon :
- Le statut actuel
- La décision (APPROUVER/REFUSER)
- Le rôle du validateur

#### 3. Service ValidationCongeService
- Applique automatiquement les transitions de statut
- Vérifie les autorisations selon le rôle
- Sauvegarde les commentaires et horodatages

### Frontend

#### 1. CongeApiService
- Interface `ValidationCongeRequest` avec actions `APPROUVER | REFUSER`
- Méthodes utilitaires :
  - `peutValider(conge, userRole)` : Détermine si l'utilisateur peut valider
  - `getStatutLibelle(statut)` : Retourne le libellé approprié
  - `getStatutColor(statut)` : Retourne la couleur du badge

#### 2. Composants
- **chef-dashboard** : Validation Chef A/B avec affichage conditionnel
- **conge-validate-rh** : Validation RH finale
- Affichage des boutons uniquement si l'utilisateur peut valider selon le workflow

## 🔒 Sécurité et Autorisations

### Matrice des Autorisations

| Statut | CHEF_A | CHEF_B | RH | ADMIN |
|--------|--------|--------|----|----|
| EN_ATTENTE_CHEF_A | ✅ | ❌ | ❌ | ✅ |
| EN_ATTENTE_CHEF_B | ❌ | ✅ | ❌ | ✅ |
| EN_ATTENTE_RH | ❌ | ❌ | ✅ | ✅ |
| VALIDE | ❌ | ❌ | ❌ | ❌ |
| REFUSE_* | ❌ | ❌ | ❌ | ❌ |

## 🎯 Points Clés d'Implémentation

### 1. Automatisation des Transitions
- Plus besoin de gérer manuellement les transitions
- La méthode `getNextStatus()` gère toute la logique
- Cohérence garantie dans tout le système

### 2. Affichage Conditionnel
- Boutons "Valider/Refuser" affichés uniquement si autorisé
- Messages informatifs selon l'étape du workflow
- Badges de statut avec couleurs appropriées

### 3. Gestion d'Erreurs
- Vérification des autorisations côté backend
- Messages d'erreur explicites
- Rollback automatique en cas d'échec

## 🔧 API Endpoints

### Validation Universelle
```
POST /api/conge/validation/{id}/valider
Body: {
  "action": "APPROUVER" | "REFUSER",
  "commentaire": "Commentaire optionnel"
}
```

### Récupération des Demandes par Rôle
```
GET /api/conge/validation/chef-a     // Demandes pour Chef A
GET /api/conge/validation/chef-b     // Demandes pour Chef B  
GET /api/conge/validation/rh         // Demandes pour RH
```

## 🧪 Tests de Workflow

### Scénario 1 : Validation Complète
1. Employé soumet demande → `EN_ATTENTE_CHEF_A`
2. Chef A approuve → `EN_ATTENTE_CHEF_B`
3. Chef B approuve → `EN_ATTENTE_RH`
4. RH approuve → `VALIDE`

### Scénario 2 : Refus Chef A
1. Employé soumet demande → `EN_ATTENTE_CHEF_A`
2. Chef A refuse → `REFUSE_PAR_CHEF_A`

### Scénario 3 : Refus RH
1. Workflow jusqu'à RH → `EN_ATTENTE_RH`
2. RH refuse → `REFUSE_PAR_RH`

## 📊 Indicateurs de Performance

- **Traçabilité complète** : Chaque validation enregistrée avec horodatage
- **Notifications automatiques** : Informer les parties prenantes
- **Reporting** : Statistiques par statut, par validateur, par période
- **Audit** : Historique complet des transitions

## 🚀 Déploiement

1. **Backend** : Déployer les nouveaux enums et services
2. **Base de données** : Migration pour ajouter les nouveaux statuts
3. **Frontend** : Déployer les composants mis à jour
4. **Tests** : Vérifier chaque étape du workflow
5. **Formation** : Informer les utilisateurs des nouvelles fonctionnalités

## 🐛 Dépannage

### Problèmes Courants
- **Boutons invisibles** : Vérifier les rôles utilisateur et les statuts
- **Erreur 403** : Problème d'autorisation, vérifier le token JWT
- **Transitions incorrectes** : Vérifier la méthode `getNextStatus()`

### Logs de Debug
```bash
# Backend
logger.info("🔄 Transition: {} → {} par {}", ancienStatut, nouveauStatut, role);

# Frontend  
console.log('✅ Validation réussie:', response);
console.log('🎯 Utilisateur peut valider:', canValidate(demande));
```