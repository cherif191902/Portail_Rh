# 📋 Guide d'Utilisation - Module Congés

## 🎯 Vue d'ensemble

Le nouveau module **Congés** permet aux employés de gérer leurs demandes de congé de manière intuitive et efficace, intégré parfaitement dans le système RH existant.

---

## 🗺️ Navigation

### Accès au Module
- **Sidebar** → Section "**Congés**" (icône calendrier)
- **Deux sous-sections disponibles :**
  - 📝 **Demande de congé** (`/conges/demande`)
  - 📊 **Suivi des demandes** (`/conges/suivi`)

---

## 📝 Demande de Congé

### Fonctionnalités
- ✅ **Formulaire intuitif** avec validation en temps réel
- ✅ **Types de congés disponibles** :
  - Congé payé (max 30 jours)
  - Congé maladie (max 365 jours) 
  - Congé maternité (max 98 jours)
  - Congé paternité (max 11 jours)
  - Congé sans solde (max 365 jours)
  - Congé formation (max 30 jours)

### Champs du Formulaire
1. **Type de congé*** - Sélection obligatoire
2. **Date de début*** - Calendrier interactif
3. **Date de fin*** - Calcul automatique de la durée
4. **Commentaire** - Motif ou détails (optionnel, max 500 caractères)
5. **Justificatif** - Upload de fichier (PDF, images, documents)

### Actions Disponibles
- 📤 **Soumettre** - Envoie la demande (avec indicateur de progression)
- 🔄 **Réinitialiser** - Efface le formulaire
- 📊 **Calcul automatique** - Durée en jours entre les dates

---

## 📊 Suivi des Demandes

### Dashboard de Suivi
- 📈 **Statistiques en temps réel** :
  - Total des demandes
  - Demandes en attente
  - Demandes approuvées  
  - Demandes refusées

### Tableau Interactif
- 🔍 **Filtres multiples** :
  - Par statut (Tous, En attente, Approuvé, Refusé, Annulé)
  - Par type de congé
  - Recherche textuelle dans les commentaires

### Fonctionnalités du Tableau
- 📄 **Pagination** intelligente
- 📱 **Design responsive** (mobile-friendly)
- 🎨 **Badges colorés** pour les statuts :
  - 🟡 En attente
  - 🟢 Approuvé
  - 🔴 Refusé  
  - ⚫ Annulé

### Actions sur les Demandes
- 👁️ **Voir détails** - Information complète
- ❌ **Annuler** - Pour les demandes en attente uniquement
- 📥 **Export** - Excel ou PDF (fonctionnalité future)

---

## 🔧 Fonctionnalités Techniques

### Intégration Backend
- 🔗 **API REST** intégrée avec Spring Boot
- 🔒 **Authentification** par matricule employé  
- 🛡️ **Validation** côté serveur et client
- 📡 **Mode hybride** : données de test ou API réelle

### Performance
- ⚡ **Lazy Loading** - Module chargé à la demande
- 🔄 **Reactive Forms** - Validation en temps réel
- 📊 **Pagination** - Performance optimisée pour grandes listes

### UX/UI
- 🎨 **Design System Skote** - Cohérence visuelle
- ✨ **Animations fluides** - Transitions et micro-interactions
- 📱 **Responsive Design** - Compatible mobile/tablet/desktop
- 🌐 **Internationalisation** - Support français

---

## 🚀 Roadmap Fonctionnalités

### Prochaines Améliorations
- 📧 **Notifications email** automatiques
- 📅 **Intégration calendrier** (Google Calendar, Outlook)
- 📊 **Reporting avancé** avec graphiques
- 🔔 **Notifications push** en temps réel
- 📎 **Gestionnaire de documents** amélioré
- 👥 **Workflow d'approbation** hiérarchique
- 📈 **Analytics de congés** par service/équipe

### Intégrations Futures
- 🏢 **Module Pointage** - Calcul automatique des soldes
- 👨‍💼 **Espace Chef** - Approbation des demandes d'équipe
- 📋 **Module RH** - Gestion centralisée et reporting

---

## 🆘 Support & Aide

### En cas de Problème
1. **Vérifier la connexion** internet
2. **Actualiser la page** (F5)
3. **Vider le cache** navigateur si nécessaire
4. **Contacter le support IT** pour les erreurs persistantes

### Contacts
- 📞 **Support IT** : Extension 1234
- 📧 **Email RH** : rh@company.com
- 💬 **Chat interne** : Canal #support-rh

---

## 📋 Checklist Utilisateur

### Avant de Faire une Demande
- [ ] Vérifier le solde de congés disponible
- [ ] Confirmer les dates avec l'équipe/manager
- [ ] Préparer les justificatifs si nécessaire
- [ ] Respecter le délai de préavis (48h minimum)

### Après Soumission
- [ ] Noter le numéro de demande
- [ ] Suivre le statut dans l'onglet "Suivi"
- [ ] Vérifier les notifications email
- [ ] Contacter RH si pas de réponse dans les délais

---

*Module développé avec ❤️ pour améliorer l'expérience employé*