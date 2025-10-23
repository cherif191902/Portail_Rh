# 📋 Page "Mes demandes de congé" - Documentation

## 🎯 Objectif
Création d'une nouvelle page permettant aux employés de consulter toutes leurs demandes de congé avec possibilité de supprimer les demandes en attente.

## 📁 Fichiers créés/modifiés

### ✅ Nouveaux fichiers créés :
- `Front/src/app/pages/conges/mes-demandes/mes-demandes.component.ts`
- `Front/src/app/pages/conges/mes-demandes/mes-demandes.component.html` 
- `Front/src/app/pages/conges/mes-demandes/mes-demandes.component.scss`

### 📝 Fichiers modifiés :
- `Front/src/app/pages/conges/conges.module.ts` - Ajout du composant MesDemandesComponent
- `Front/src/app/pages/conges/conges-routing.module.ts` - Ajout de la route `/mes-demandes`
- `Front/src/app/layouts/sidebar/menu.ts` - Ajout du menu "Espace Employé" avec sous-menus
- `Front/src/assets/i18n/fr.json` - Ajout de la traduction "EMPLOYEE_SECTION"

## 🔗 Routes ajoutées
- `/conges/mes-demandes` → MesDemandesComponent

## 🎨 Menu ajouté dans la sidebar
```
📊 Espace Employé
  └── 📅 Mes congés
      ├── ➕ Nouvelle demande
      └── 📋 Mes demandes  ← NOUVEAU
```

## 🔧 Fonctionnalités implémentées

### 1. **Affichage des demandes**
- Récupération via l'API `GET /api/conge/my`
- Tableau avec colonnes :
  - Date de demande
  - Type de congé
  - Date de début
  - Date de fin
  - Durée (en jours)
  - Statut avec badges colorés
  - Validateur actuel
  - Actions

### 2. **Gestion des statuts**
- ✅ **Approuvé** - Badge vert
- ⚠️ **En attente** - Badge jaune
- ❌ **Refusé** - Badge rouge
- 🔄 **Annulé** - Badge gris

### 3. **Suppression de demandes**
- Bouton "Supprimer" uniquement pour les demandes en attente
- Confirmation avant suppression
- Appel à l'API `DELETE /api/conge/cancel/{id}`
- Rechargement automatique après suppression

### 4. **Pagination**
- 10 demandes par page
- Navigation avec NgBootstrap pagination
- Indicateurs "Affichage X à Y sur Z demandes"

### 5. **États de l'interface**
- 🔄 Loader pendant le chargement
- ❌ Gestion des erreurs
- 📭 Message si aucune demande
- 🔄 Bouton "Actualiser"

### 6. **Design responsive**
- Adaptation mobile
- Styles Bootstrap personnalisés
- Animations et transitions

## 🛠️ APIs utilisées

### Backend endpoints (déjà existants) :
- `GET /api/conge/my` - Récupère les demandes de l'utilisateur connecté
- `DELETE /api/conge/cancel/{id}` - Annule une demande en attente

### Service frontend :
- `CongeApiService.getMesDemandesConges()` - Récupère les demandes
- `CongeApiService.annulerDemande(id)` - Supprime une demande

## 🔐 Sécurité
- ✅ Token JWT automatiquement ajouté dans les en-têtes
- ✅ Vérification côté backend que l'utilisateur ne peut supprimer que ses propres demandes
- ✅ Restriction de suppression aux demandes en attente uniquement

## 🎭 Traductions
Utilise le système de traduction existant avec les clés :
- `MENUITEMS.EMPLOYEE_SECTION.TEXT` = "Espace Employé"
- `MENUITEMS.CONGES_GROUP.TEXT` = "Mes congés"  
- `MENUITEMS.MES_CONGES.TEXT` = "Mes demandes"
- `MENUITEMS.NOUVELLE_DEMANDE_CONGE.TEXT` = "Nouvelle demande"

## 🚀 Comment tester

1. **Démarrer le backend** (port 8089)
2. **Démarrer le frontend** (port 4200)
3. **Se connecter** avec un compte employé
4. **Naviguer** vers le menu "Espace Employé" → "Mes congés" → "Mes demandes"
5. **Vérifier** l'affichage des demandes existantes
6. **Tester** la suppression d'une demande en attente

## 🐛 Points d'attention
- ⚠️ Vérifier que CORS est configuré pour `http://localhost:4200`
- ⚠️ S'assurer que les endpoints backend sont accessibles
- ⚠️ Contrôler que les tokens JWT sont valides

## 🔄 Améliorations futures possibles
- Filtrage par statut/type de congé
- Tri par colonnes
- Export PDF/Excel
- Notifications en temps réel
- Modification des demandes en attente