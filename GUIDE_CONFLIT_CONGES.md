# 🚨 Guide de résolution - Erreur "Chevauchement de demandes de congé"

## 📋 **Problème**
Vous obtenez cette erreur lors de la soumission d'une demande de congé :
```
❌ Erreur HTTP 400: Chevauchement avec une autre demande de congé
```

## 🎯 **Explication**
Le système **empêche automatiquement** les demandes de congé qui se chevauchent dans le temps pour éviter :
- ✅ Les doubles réservations de congés
- ✅ Les conflits dans la planification des équipes
- ✅ Les erreurs de gestion des soldes de congés

## 🔍 **Détection des conflits**
Le système vérifie tous vos congés **non refusés** :
- ✅ Demandes **EN_ATTENTE** (en cours de validation)
- ✅ Demandes **APPROUVEES** 
- ❌ Demandes **REFUSEES** (ignorées)
- ❌ Demandes **ANNULEES** (ignorées)

## 🛠️ **Solutions**

### **1. Vérifier vos demandes existantes**
1. 👁️ Allez dans **"Mes demandes"**
2. 🔎 Identifiez les demandes qui chevauchent vos nouvelles dates
3. 📅 Notez les périodes déjà réservées

### **2. Choisir de nouvelles dates**
- 📅 Sélectionnez des dates **avant** ou **après** vos congés existants
- ⏰ Laissez au moins **1 jour d'écart** pour éviter les conflits limites

### **3. Modifier une demande existante**
Si vous voulez étendre ou décaler une demande :
1. 🗑️ **Annulez** l'ancienne demande (si possible)
2. ➕ **Créez** une nouvelle demande avec les bonnes dates

### **4. Cas particuliers**

#### **Demande en attente de validation**
- ⏳ Vous pouvez **modifier** la demande tant qu'elle n'est pas validée
- 🔄 Utilisez la fonction "Modifier" dans "Mes demandes"

#### **Demande déjà approuvée**
- ⚠️ **Contact obligatoire** avec votre chef/RH pour modification
- 📧 Expliquez votre besoin de changement de dates

## 📊 **Exemple de conflit**

### Situation problématique :
```
Demande existante (ID #31) : 15/10/2025 → 17/10/2025 [EN_ATTENTE]
Nouvelle demande           : 16/10/2025 → 18/10/2025 ❌
                             ↑
                        Chevauchement détecté !
```

### Solutions proposées :
```
✅ Option 1 : 12/10/2025 → 14/10/2025 (avant)
✅ Option 2 : 19/10/2025 → 21/10/2025 (après)  
✅ Option 3 : Modifier l'ancienne → 15/10/2025 → 18/10/2025
```

## 🎨 **Amélioration UX - Nouvelles fonctionnalités**

### **Vérification préventive** 🆕
- Le système vérifie **automatiquement** avant soumission
- Alerte **immédiate** en cas de conflit détecté
- **Détails précis** sur les demandes en conflit

### **Messages d'erreur améliorés** 🆕
- Indication des **dates exactes** en conflit
- **ID de la demande** problématique pour identification
- Suggestions d'**actions correctives**

## 🚀 **Workflow recommandé**

1. **Planification** 📋
   - Consultez "Mes demandes" avant de créer une nouvelle demande
   - Vérifiez votre calendrier de congés existant

2. **Création** ➕
   - Sélectionnez des dates libres
   - Le système vous alertera automatiquement en cas de conflit

3. **Validation** ✅
   - Vérifiez que les dates correspondent à vos besoins
   - Soumettez en toute confiance

4. **Gestion** 🔄
   - Modifiez si nécessaire avant validation
   - Contactez votre hiérarchie pour les cas complexes

---

💡 **Astuce** : Gardez un œil sur la page "Mes demandes" pour avoir une vue d'ensemble de vos congés planifiés et éviter les conflits futurs !