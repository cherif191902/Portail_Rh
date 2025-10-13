# 🔄 Migration Chef A & Chef B - Portail RH

## ✅ Modifications Complètes

### 🗄️ Base de Données
- **Nouvelles colonnes** : `chef_a_id` et `chef_b_id` dans la table `services`
- **Migration** : Script SQL disponible dans `migration_chef_a_chef_b.sql`
- **Contraintes** : Clés étrangères vers la table `personnel`

### 🔧 Backend (Java Spring Boot)

#### 1. Entité Service.java
- ✅ **Nouvelles propriétés** : `chefA` et `chefB`
- ✅ **Méthodes utilitaires** : 
  - `hasAnyChef()` - Vérifie si au moins un chef est affecté
  - `hasFullChefs()` - Vérifie si les deux chefs sont affectés
- ✅ **Compatibilité** : Méthodes dépréciées `getChef()` et `setChef()` maintenues

#### 2. AffectationController.java
- ✅ **Nouveaux endpoints** :
  - `POST /api/rh/affectations/chef` - Affecter Chef A ou Chef B
  - `DELETE /api/rh/affectations/chef/{serviceId}/{typeChef}` - Supprimer affectation
- ✅ **DTO** : `AffectationChefRequest` avec type de chef (CHEF_A/CHEF_B)
- ✅ **Validation** : Contrôles métier pour éviter les doublons

### 🌐 Frontend (Angular)

#### 1. Interfaces TypeScript (affectation-simple.service.ts)
- ✅ **Interface Affectation** : Support `chefA`, `chefB`, `hasChefA`, `hasChefB`
- ✅ **Interface ChefInfo** : Informations détaillées des chefs
- ✅ **AffectationChefRequest** : Requête avec type de chef

#### 2. Service Angular (affectation-simple.service.ts)
- ✅ **Nouvelles méthodes** :
  - `affecterChef(request: AffectationChefRequest)` 
  - `supprimerAffectationChef(serviceId, typeChef)`
- ✅ **Compatibilité** : Méthodes existantes adaptées

#### 3. Composant (affectation-chefs.component.ts)
- ✅ **Nouveau formulaire** : `AffectationChefForm` pour Chef A et B
- ✅ **Nouvelles méthodes** :
  - `affecterChefA()` et `affecterChefB()`
  - `supprimerChefA()` et `supprimerChefB()`
- ✅ **Gestion d'état** : Formulaire dédié avec reset

#### 4. Template HTML (affectation-chefs.component.html)
- ✅ **Nouveau formulaire** : Interface dédiée Chef A & Chef B
- ✅ **Tableau adapté** : Colonnes séparées pour Chef A et Chef B
- ✅ **Actions individuelles** : Boutons pour affecter/supprimer chaque chef
- ✅ **Statuts visuels** : Badges pour différents états (équipe complète, partiellement affectée, etc.)

## 🚀 Guide d'utilisation

### 1. Migration de la base de données
```sql
-- Exécuter le script de migration
mysql -u root -p rh_portail < migration_chef_a_chef_b.sql
```

### 2. Démarrage de l'application
```bash
# Backend
cd backend
./start-backend-8089.ps1

# Frontend  
cd Front
npm start
```

### 3. Interface utilisateur

#### Formulaire d'affectation Chef A & Chef B :
- **Sélectionner un service**
- **Choisir Chef A** et cliquer "Affecter Chef A"
- **Choisir Chef B** et cliquer "Affecter Chef B"
- Les chefs sont affectés individuellement

#### Tableau des affectations :
- **Colonnes séparées** pour Chef A et Chef B
- **Statuts visuels** :
  - 🟢 Équipe complète (Chef A + Chef B)
  - 🔵 Chef A assigné seulement
  - 🟡 Chef B assigné seulement
  - ⚪ Sans chef
- **Actions individuelles** pour supprimer Chef A ou Chef B

## 🔍 Endpoints API

### Nouveaux endpoints
```
POST /api/rh/affectations/chef
Body: {
  "serviceId": 1,
  "chefId": 5,
  "typeChef": "CHEF_A" | "CHEF_B"
}

DELETE /api/rh/affectations/chef/{serviceId}/{typeChef}
```

### Response format (GET /api/rh/affectations)
```json
{
  "serviceId": 1,
  "nomService": "Informatique",
  "hasChefA": true,
  "hasChefB": false,
  "chefA": {
    "id": 5,
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@company.com"
  },
  "chefB": null,
  "hasAnyChef": true,
  "hasFullChefs": false
}
```

## 🔒 Sécurité

- ✅ **Authentication JWT** : Tous les endpoints protégés
- ✅ **Autorisation** : Accès restreint aux rôles RH/ADMIN
- ✅ **Validation** : Contrôles métier (un chef par poste, pas de doublons)
- ✅ **CORS** : Configuration complète pour localhost:4200

## ✨ Fonctionnalités

### Nouvelles capacités :
- ✅ **Deux chefs par service** : Chef A et Chef B
- ✅ **Affectation individuelle** : Chaque chef peut être affecté/supprimé indépendamment
- ✅ **Validation métier** : Impossible d'affecter le même chef à plusieurs postes
- ✅ **Interface intuitive** : Formulaires séparés et tableau détaillé
- ✅ **Compatibilité** : Ancien système maintenu pour la transition

### Règles métier :
1. **Un chef maximum par poste** (Chef A OU Chef B par service)
2. **Un chef par service maximum** (un chef ne peut pas être affecté à plusieurs services)
3. **Rôle requis** : Seuls les utilisateurs avec ROLE_CHEF_SERVICE peuvent être affectés
4. **Autorisation** : Seuls les RH/ADMIN peuvent gérer les affectations

Le système est maintenant prêt pour la gestion complète des affectations Chef A et Chef B ! 🎉