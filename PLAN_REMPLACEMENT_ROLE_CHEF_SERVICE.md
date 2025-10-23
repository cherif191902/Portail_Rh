# 🔧 SCRIPT DE REMPLACEMENT AUTOMATIQUE - ROLE_CHEF_SERVICE

## Backend Java Files

### ValidationCongeController.java
Lignes à modifier :
- ✅ ligne 59: @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_SERVICE') or hasRole('ADMIN')")
- ✅ ligne 114: @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_SERVICE') or hasRole('ADMIN')")  
- ✅ ligne 142: @PreAuthorize("hasRole('CHEF_B') or hasRole('CHEF_SERVICE') or hasRole('ADMIN')")
- ✅ ligne 165: @PreAuthorize("hasRole('CHEF_B') or hasRole('CHEF_SERVICE') or hasRole('ADMIN')")
- ✅ ligne 245: @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('CHEF_SERVICE') or hasRole('RH') or hasRole('ADMIN')")
- ✅ ligne 285: @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('CHEF_SERVICE') or hasRole('RH') or hasRole('ADMIN')")
- ❌ ligne 308: @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('CHEF_SERVICE') or hasRole('RH') or hasRole('ADMIN')")
- ❌ ligne 357: @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_SERVICE') or hasRole('ADMIN')")
- ❌ ligne 412: @PreAuthorize("hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('CHEF_SERVICE') or hasRole('RH') or hasRole('ADMIN')")
- ✅ ligne 265: Code logique ROLE_CHEF_SERVICE

### CongeController.java
20+ occurrences à traiter

### ServiceController.java  
6 occurrences à traiter

### Personnel.java
1 occurence à traiter

### AffectationController.java
4 occurrences à traiter

### UserController.java
2 occurrences à traiter

## Frontend TypeScript Files

### conge-api.service.ts
- 2 occurrences dans peutValider()

### menu.ts
- 1 occurence dans requiredRoles

### service.models.ts
- 1 occurence dans ERole enum

### tokenservice.service.ts
- 1 occurence dans la table de mapping

### employes-info.component.ts
- 1 occurence case 'CHEF_SERVICE'

## Stratégie de remplacement

### Règles @PreAuthorize:
1. `hasRole('CHEF_SERVICE')` seul → `hasRole('CHEF_A') or hasRole('CHEF_B')`
2. `hasRole('CHEF_A') or hasRole('CHEF_SERVICE')` → `hasRole('CHEF_A')`  
3. `hasRole('CHEF_B') or hasRole('CHEF_SERVICE')` → `hasRole('CHEF_B')`
4. `hasRole('CHEF_A') or hasRole('CHEF_B') or hasRole('CHEF_SERVICE')` → `hasRole('CHEF_A') or hasRole('CHEF_B')`

### Règles logique Java:
1. Tests `== ERole.ROLE_CHEF_SERVICE` → Supprimer ou adapter selon contexte
2. `findByRolesNomRole(ROLE_CHEF_SERVICE)` → `findByRolesNomRole(ROLE_CHEF_A)` + `findByRolesNomRole(ROLE_CHEF_B)`

### Règles Frontend:
1. `'ROLE_CHEF_SERVICE'` → `'ROLE_CHEF_A', 'ROLE_CHEF_B'`
2. `includes('ROLE_CHEF_SERVICE')` → `includes('ROLE_CHEF_A') || includes('ROLE_CHEF_B')`