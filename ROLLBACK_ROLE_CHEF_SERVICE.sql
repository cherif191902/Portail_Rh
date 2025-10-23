-- ========================================
-- SCRIPT DE ROLLBACK - RESTAURATION ROLE_CHEF_SERVICE
-- Date: 22 octobre 2025
-- Version: 1.0
-- ========================================

-- ATTENTION: Ce script permet de restaurer l'état antérieur
-- Il doit être exécuté UNIQUEMENT si la migration a échoué
-- ou si un rollback est nécessaire

-- ========================================
-- ÉTAPE 1: VÉRIFICATIONS PRÉ-ROLLBACK
-- ========================================

-- Vérifier que les tables de backup existent
SELECT 'VERIFICATION_BACKUP' as info,
       CASE WHEN EXISTS(SELECT 1 FROM information_schema.tables WHERE table_name = 'migration_backup_roles') 
            THEN 'migration_backup_roles existe' 
            ELSE 'ERREUR: migration_backup_roles manquante!' END as backup_status;

-- Vérifier le contenu du backup
SELECT 'CONTENU_BACKUP' as info, COUNT(*) as nb_records_backup
FROM migration_backup_roles;

SELECT 'DETAIL_BACKUP' as info, matricule_p, nom, prenom, role_name
FROM migration_backup_roles
ORDER BY nom;

-- ========================================  
-- ÉTAPE 2: RECRÉER ROLE_CHEF_SERVICE
-- ========================================

-- Recréer le rôle ROLE_CHEF_SERVICE
INSERT INTO role (nom_role) 
SELECT 'ROLE_CHEF_SERVICE' 
WHERE NOT EXISTS (SELECT 1 FROM role WHERE nom_role = 'ROLE_CHEF_SERVICE');

-- Vérifier la création
SELECT 'ROLE_RECREE' as info, id, nom_role 
FROM role 
WHERE nom_role = 'ROLE_CHEF_SERVICE';

-- ========================================
-- ÉTAPE 3: RESTAURER LES ASSOCIATIONS
-- ========================================

-- Restaurer les associations personnel_roles depuis le backup
INSERT INTO personnel_roles (personnel_id, roles_id)
SELECT mbr.personnel_id, r.id
FROM migration_backup_roles mbr
INNER JOIN role r ON r.nom_role = 'ROLE_CHEF_SERVICE'
WHERE NOT EXISTS (
    SELECT 1 FROM personnel_roles pr 
    WHERE pr.personnel_id = mbr.personnel_id 
      AND pr.roles_id = r.id
);

-- ========================================
-- ÉTAPE 4: SUPPRESSION DES NOUVEAUX RÔLES (OPTIONNEL)
-- ========================================

-- ATTENTION: Cette section supprime les rôles CHEF_A et CHEF_B
-- Décommenter uniquement si vous voulez revenir complètement à l'ancien système

/*
-- Supprimer les associations ROLE_CHEF_A et ROLE_CHEF_B pour les utilisateurs du backup
DELETE pr FROM personnel_roles pr
INNER JOIN role r ON pr.roles_id = r.id
INNER JOIN migration_backup_roles mbr ON pr.personnel_id = mbr.personnel_id
WHERE r.nom_role IN ('ROLE_CHEF_A', 'ROLE_CHEF_B');

-- Optionnel: Supprimer complètement les rôles CHEF_A et CHEF_B
-- (Attention: cela affectera tous les utilisateurs, pas seulement ceux du backup)
-- DELETE FROM personnel_roles WHERE roles_id IN (SELECT id FROM role WHERE nom_role IN ('ROLE_CHEF_A', 'ROLE_CHEF_B'));
-- DELETE FROM role WHERE nom_role IN ('ROLE_CHEF_A', 'ROLE_CHEF_B');
*/

-- ========================================
-- ÉTAPE 5: VÉRIFICATIONS POST-ROLLBACK
-- ========================================

-- Vérifier que ROLE_CHEF_SERVICE existe
SELECT 'POST_ROLLBACK_VERIFICATION' as info,
       CASE WHEN EXISTS(SELECT 1 FROM role WHERE nom_role = 'ROLE_CHEF_SERVICE') 
            THEN 'OK: ROLE_CHEF_SERVICE restauré' 
            ELSE 'ERREUR: ROLE_CHEF_SERVICE manquant!' END as status;

-- Vérifier que tous les utilisateurs du backup ont récupéré leur rôle
SELECT 'UTILISATEURS_RESTAURES' as info,
       p.matricule_p, p.nom, p.prenom, r.nom_role
FROM personnel p
INNER JOIN personnel_roles pr ON p.id = pr.personnel_id
INNER JOIN role r ON pr.roles_id = r.id
INNER JOIN migration_backup_roles mbr ON p.id = mbr.personnel_id
WHERE r.nom_role = 'ROLE_CHEF_SERVICE'
ORDER BY p.nom;

-- Compter les utilisateurs restaurés vs backup
SELECT 'COMPARAISON_COUNTS' as info,
       (SELECT COUNT(*) FROM migration_backup_roles) as nb_backup,
       (SELECT COUNT(*) FROM personnel_roles pr 
        INNER JOIN role r ON pr.roles_id = r.id 
        WHERE r.nom_role = 'ROLE_CHEF_SERVICE') as nb_restaures;

-- ========================================
-- ÉTAPE 6: STATISTIQUES FINALES
-- ========================================

SELECT 'ROLLBACK_COMPLETE' as status,
       'ROLE_CHEF_SERVICE restauré avec succès' as message,
       CURRENT_TIMESTAMP as completion_date;

-- Statistiques des rôles après rollback
SELECT 'STATS_ROLES_APRES_ROLLBACK' as info, 
       r.nom_role, COUNT(pr.personnel_id) as nb_users
FROM role r
LEFT JOIN personnel_roles pr ON r.id = pr.roles_id
WHERE r.nom_role IN ('ROLE_CHEF_SERVICE', 'ROLE_CHEF_A', 'ROLE_CHEF_B')
GROUP BY r.id, r.nom_role
ORDER BY r.nom_role;