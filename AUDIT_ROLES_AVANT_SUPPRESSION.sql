-- ========================================
-- AUDIT COMPLET - AVANT SUPPRESSION ROLE_CHEF_SERVICE
-- Date: 22 octobre 2025
-- ========================================

-- 1. STRUCTURE ACTUELLE DES RÔLES
SELECT 'STRUCTURE ROLES' as type, id, nom_role as role_name 
FROM role 
ORDER BY id;

-- 2. NOMBRE D'UTILISATEURS PAR RÔLE
SELECT 'STATS_ROLES' as type, r.nom_role, COUNT(pr.personnel_id) as nb_users
FROM role r
LEFT JOIN personnel_roles pr ON r.id = pr.roles_id
GROUP BY r.id, r.nom_role
ORDER BY r.nom_role;

-- 3. UTILISATEURS AVEC ROLE_CHEF_SERVICE (DONNÉES DÉTAILLÉES)
SELECT 'CHEF_SERVICE_USERS' as type, 
       p.id, p.matricule_p, p.nom, p.prenom, p.email,
       s.nom_service as service_name, s.id_service
FROM personnel p
INNER JOIN personnel_roles pr ON p.id = pr.personnel_id
INNER JOIN role r ON pr.roles_id = r.id
LEFT JOIN services s ON p.service_id = s.id_service
WHERE r.nom_role = 'ROLE_CHEF_SERVICE'
ORDER BY p.nom;

-- 4. TOUS LES UTILISATEURS AVEC LEURS RÔLES
SELECT 'ALL_USER_ROLES' as type,
       p.id as personnel_id, p.matricule_p, p.nom, p.prenom,
       r.nom_role, s.nom_service
FROM personnel p
INNER JOIN personnel_roles pr ON p.id = pr.personnel_id
INNER JOIN role r ON pr.roles_id = r.id
LEFT JOIN services s ON p.service_id = s.id_service
ORDER BY p.nom, r.nom_role;

-- 5. SERVICES ET LEURS CHEFS (ACTUEL)
SELECT 'SERVICES_CHEFS' as type,
       s.id_service, s.nom_service,
       chef_a.matricule_p as chef_a_matricule, chef_a.nom as chef_a_nom,
       chef_b.matricule_p as chef_b_matricule, chef_b.nom as chef_b_nom,
       rh.matricule_p as rh_matricule, rh.nom as rh_nom
FROM services s
LEFT JOIN personnel chef_a ON s.chef_a_id = chef_a.id
LEFT JOIN personnel chef_b ON s.chef_b_id = chef_b.id
LEFT JOIN personnel rh ON s.rh_responsable_id = rh.id
ORDER BY s.nom_service;

-- 6. VÉRIFICATION CONTRAINTES
SELECT 'CONSTRAINTS_CHECK' as type,
       'personnel_roles' as table_name,
       COUNT(*) as records_with_chef_service
FROM personnel_roles pr
INNER JOIN role r ON pr.roles_id = r.id
WHERE r.nom_role = 'ROLE_CHEF_SERVICE';

-- 7. DEMANDES DE CONGÉS LIÉES AUX CHEFS SERVICE (VALIDATION)
SELECT 'CONGES_VALIDATION' as type,
       c.id_conge, c.statut_conge,
       p.matricule_p as demandeur,
       chef_a.matricule_p as validateur_chef_a,
       chef_b.matricule_p as validateur_chef_b
FROM conge c
INNER JOIN personnel p ON c.personnel_id = p.id
LEFT JOIN personnel chef_a ON c.validateur_chef_a_id = chef_a.id
LEFT JOIN personnel chef_b ON c.validateur_chef_b_id = chef_b.id
WHERE c.statut_conge IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'APPROUVE_PAR_CHEF_A', 'APPROUVE_PAR_CHEF_B')
ORDER BY c.id_conge DESC
LIMIT 20;