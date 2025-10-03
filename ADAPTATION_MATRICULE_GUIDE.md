# 🔄 Guide d'Adaptation : Authentification par Matricule

## 📋 Résumé des Modifications

Ce guide documente l'adaptation du système d'authentification pour utiliser le **matricule** au lieu de l'**email** comme identifiant de connexion.

## 🔧 Modifications Backend (Spring Boot)

### 1. **LoginRequest.java** ✅
- Remplacé `email` par `matricule`
- Ajouté validation pour matricule (3-20 caractères)
- Supprimé validation `@Email`

### 2. **SignupRequest.java** ✅
- Ajouté champ `matricule` (obligatoire)
- Conservé `email` pour les données utilisateur
- Validation matricule (3-20 caractères)

### 3. **JwtResponse.java** ✅
- Ajouté champ `matricule` dans la réponse
- Conservé `email` pour compatibilité
- Constructeur mis à jour

### 4. **PersonnelRepository.java** ✅
- Ajouté `findByMatriculeP(String matriculeP)`
- Ajouté `existsByMatriculeP(String matriculeP)`
- Conservé méthodes email pour compatibilité

### 5. **Personnel.java** ✅
- Ajouté `@Column(unique = true, nullable = false)` sur `matriculeP`
- Modifié `getUsername()` pour retourner `matriculeP`
- Mis à jour constructeur pour inclure matricule

### 6. **UserDetailsServiceImpl.java** ✅
- Modifié `loadUserByUsername()` pour chercher par matricule
- Utilise `findByMatriculeP()` au lieu de `findByEmail()`

### 7. **AuthController.java** ✅
- **signin** : Utilise `loginRequest.getMatricule()`
- **signup** : Vérifie unicité matricule ET email
- Réponse JWT inclut matricule et email

## 🎨 Modifications Frontend (Angular)

### 1. **auth.models.ts** ✅
- `LoginRequest` : `email` → `matricule`
- `SignupRequest` : Ajouté `matricule`
- `JwtResponse` : Ajouté `matricule`

### 2. **login.component.ts** ✅
- FormGroup : `email` → `matricule`
- Validation : `Validators.email` → `Validators.minLength(3)`
- Messages d'erreur adaptés

### 3. **login.component.html** ✅
- Input `email` → `matricule`
- Label et placeholder mis à jour

### 4. **signup.component.ts** ✅
- Ajouté champ `matricule` dans FormGroup
- Ajouté getter `matricule`
- Payload inclut matricule

### 5. **signup.component.html** ✅
- Ajouté input matricule en premier
- Validation et messages d'erreur

### 6. **tokenservice.service.ts** ✅
- `getUser()` utilise `userData.matricule` pour `matriculeP`
- Fallback sur email si matricule absent

## 🧪 Test de l'Authentification

### Prérequis
1. ✅ Frontend démarré sur `http://localhost:4200`
2. ⏳ Backend à démarrer sur `http://localhost:8089`

### Étapes de Test

#### 1. **Test d'Inscription**
```
URL: http://localhost:4200/account/signup
Données:
- Matricule: MAT001
- Prénom: Test
- Nom: User
- Email: test@example.com
- Mot de passe: password123
```

#### 2. **Test de Connexion**
```
URL: http://localhost:4200/account/login
Données:
- Matricule: MAT001
- Mot de passe: password123
```

#### 3. **Vérifications**
- ✅ Token JWT généré
- ✅ Redirection vers dashboard
- ✅ Données utilisateur correctes
- ✅ Matricule affiché dans l'interface

## 🔍 Points de Vérification

### Backend
- [ ] Démarrage sans erreur
- [ ] Endpoint `/api/auth/signin` accepte matricule
- [ ] Endpoint `/api/auth/signup` valide matricule unique
- [ ] JWT contient matricule et email

### Frontend
- [x] Compilation sans erreur
- [ ] Formulaires utilisent matricule
- [ ] Validation appropriée
- [ ] Affichage correct des données

## 🚨 Points d'Attention

1. **Base de Données** : S'assurer que la colonne `matriculeP` est unique
2. **Migration** : Prévoir migration des données existantes
3. **Compatibilité** : Méthodes email conservées pour transition
4. **Validation** : Matricule doit être unique et non vide

## 🔄 Prochaines Étapes

1. Démarrer le backend
2. Tester l'inscription avec matricule
3. Tester la connexion avec matricule
4. Vérifier l'affichage des données utilisateur
5. Tester la navigation et les permissions

## 📝 Notes Techniques

- **Authentification** : Spring Security utilise maintenant matricule comme username
- **JWT** : Contient à la fois matricule et email
- **Compatibilité** : Ancien système email conservé pour transition douce
- **Validation** : Matricule 3-20 caractères, email format standard
