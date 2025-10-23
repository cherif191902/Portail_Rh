-- ========================================
-- MIGRATION : SUPPRESSION ROLE_CHEF_SERVICE
-- Date: 22 octobre 2025
-- Version: 1.0
-- Auteur: Système RH
-- ========================================

-- Cette migration fait partie de la refactorisation pour utiliser uniquement
-- ROLE_CHEF_A et ROLE_CHEF_B à la place de ROLE_CHEF_SERVICE

-- ========================================
-- ÉTAPE 1: SAUVEGARDE ET AUDIT
-- ========================================

-- Créer une table de backup pour l'audit
DROP TABLE IF EXISTS migration_backup_roles;
CREATE TABLE migration_backup_roles AS
SELECT pr.personnel_id, pr.roles_id, r.nom_role as role_name, 
       p.matricule_p, p.nom, p.prenom, CURRENT_TIMESTAMP as backup_date
FROM personnel_roles pr
INNER JOIN role r ON pr.roles_id = r.id
INNER JOIN personnel p ON pr.personnel_id = p.id
WHERE r.nom_role = 'ROLE_CHEF_SERVICE';

-- Afficher les utilisateurs qui vont être affectés
SELECT 'UTILISATEURS_AFFECTS' as info, COUNT(*) as nombre_utilisateurs
FROM migration_backup_roles;

SELECT 'DETAIL_UTILISATEURS' as info, matricule_p, nom, prenom
FROM migration_backup_roles;

-- ========================================
-- ÉTAPE 2: STRATÉGIE DE MAPPING
-- ========================================

-- Nous allons mapper les anciens CHEF_SERVICE selon cette logique:
-- - Si l'utilisateur est chef_a d'un service -> ROLE_CHEF_A
-- - Si l'utilisateur est chef_b d'un service -> ROLE_CHEF_B  
-- - Si l'utilisateur est chef_a ET chef_b -> ROLE_CHEF_A + ROLE_CHEF_B
-- - Si l'utilisateur n'est affecté nulle part -> Aucun rôle chef (à configurer manuellement)

-- Créer table temporaire pour le mapping
DROP TABLE IF EXISTS temp_chef_mapping;
CREATE TABLE temp_chef_mapping (
    personnel_id INT,
    matricule_p VARCHAR(255),
    nom VARCHAR(255),
    prenom VARCHAR(255),
    is_chef_a BOOLEAN DEFAULT FALSE,
    is_chef_b BOOLEAN DEFAULT FALSE,
    needs_role_chef_a BOOLEAN DEFAULT FALSE,
    needs_role_chef_b BOOLEAN DEFAULT FALSE
);

-- Insérer les utilisateurs CHEF_SERVICE
INSERT INTO temp_chef_mapping (personnel_id, matricule_p, nom, prenom)
SELECT DISTINCT p.id, p.matricule_p, p.nom, p.prenom
FROM personnel p
INNER JOIN personnel_roles pr ON p.id = pr.personnel_id
INNER JOIN role r ON pr.roles_id = r.id
WHERE r.nom_role = 'ROLE_CHEF_SERVICE';

-- Marquer ceux qui sont chef_a de services
UPDATE temp_chef_mapping tcm
SET is_chef_a = TRUE, needs_role_chef_a = TRUE
WHERE EXISTS (
    SELECT 1 FROM services s WHERE s.chef_a_id = tcm.personnel_id
);

-- Marquer ceux qui sont chef_b de services  
UPDATE temp_chef_mapping tcm
SET is_chef_b = TRUE, needs_role_chef_b = TRUE
WHERE EXISTS (
    SELECT 1 FROM services s WHERE s.chef_b_id = tcm.personnel_id
);

-- Afficher la stratégie de mapping
SELECT 'MAPPING_STRATEGY' as info, 
       matricule_p, nom, prenom,
       is_chef_a, is_chef_b,
       needs_role_chef_a, needs_role_chef_b,
       CASE 
           WHEN needs_role_chef_a AND needs_role_chef_b THEN 'ROLE_CHEF_A + ROLE_CHEF_B'
           WHEN needs_role_chef_a THEN 'ROLE_CHEF_A'
           WHEN needs_role_chef_b THEN 'ROLE_CHEF_B'
           ELSE 'AUCUN_ROLE (à configurer manuellement)'
       END as nouveau_role
FROM temp_chef_mapping
ORDER BY nom;

-- ========================================
-- ÉTAPE 3: VÉRIFICATIONS PRÉ-MIGRATION  
-- ========================================

-- Vérifier que les rôles CHEF_A et CHEF_B existent
SELECT 'VERIFICATION_ROLES' as info, nom_role 
FROM role 
WHERE nom_role IN ('ROLE_CHEF_A', 'ROLE_CHEF_B')
ORDER BY nom_role;

-- Compter les rôles manquants
SELECT 'ROLES_MANQUANTS' as info,
       CASE WHEN NOT EXISTS(SELECT 1 FROM role WHERE nom_role = 'ROLE_CHEF_A') 
            THEN 'ROLE_CHEF_A manquant' ELSE 'ROLE_CHEF_A présent' END as chef_a_status,
       CASE WHEN NOT EXISTS(SELECT 1 FROM role WHERE nom_role = 'ROLE_CHEF_B') 
            THEN 'ROLE_CHEF_B manquant' ELSE 'ROLE_CHEF_B présent' END as chef_b_status;

-- Créer les rôles s'ils n'existent pas
INSERT INTO role (nom_role) 
SELECT 'ROLE_CHEF_A' 
WHERE NOT EXISTS (SELECT 1 FROM role WHERE nom_role = 'ROLE_CHEF_A');

INSERT INTO role (nom_role) 
SELECT 'ROLE_CHEF_B' 
WHERE NOT EXISTS (SELECT 1 FROM role WHERE nom_role = 'ROLE_CHEF_B');

-- ========================================
-- ÉTAPE 4: MIGRATION DES RÔLES
-- ========================================

-- Assigner ROLE_CHEF_A aux utilisateurs qui en ont besoin
INSERT INTO personnel_roles (personnel_id, roles_id)
SELECT tcm.personnel_id, r.id
FROM temp_chef_mapping tcm, role r
WHERE tcm.needs_role_chef_a = TRUE 
  AND r.nom_role = 'ROLE_CHEF_A'
  AND NOT EXISTS (
      SELECT 1 FROM personnel_roles pr2 
      WHERE pr2.personnel_id = tcm.personnel_id 
        AND pr2.roles_id = r.id
  );

-- Assigner ROLE_CHEF_B aux utilisateurs qui en ont besoin  
INSERT INTO personnel_roles (personnel_id, roles_id)
SELECT tcm.personnel_id, r.id
FROM temp_chef_mapping tcm, role r
WHERE tcm.needs_role_chef_b = TRUE 
  AND r.nom_role = 'ROLE_CHEF_B'
  AND NOT EXISTS (
      SELECT 1 FROM personnel_roles pr2 
      WHERE pr2.personnel_id = tcm.personnel_id 
        AND pr2.roles_id = r.id
  );

-- ========================================
-- ÉTAPE 5: SUPPRESSION DE ROLE_CHEF_SERVICE
-- ========================================

-- Supprimer toutes les associations personnel_roles avec ROLE_CHEF_SERVICE
DELETE pr FROM personnel_roles pr
INNER JOIN role r ON pr.roles_id = r.id
WHERE r.nom_role = 'ROLE_CHEF_SERVICE';

-- Supprimer le rôle ROLE_CHEF_SERVICE de la table role
DELETE FROM role WHERE nom_role = 'ROLE_CHEF_SERVICE';

-- ========================================
-- ÉTAPE 6: VÉRIFICATIONS POST-MIGRATION
-- ========================================

-- Vérifier que ROLE_CHEF_SERVICE a été supprimé
SELECT 'POST_MIGRATION_VERIFICATION' as info,
       CASE WHEN EXISTS(SELECT 1 FROM role WHERE nom_role = 'ROLE_CHEF_SERVICE') 
            THEN 'ERREUR: ROLE_CHEF_SERVICE existe encore!' 
            ELSE 'OK: ROLE_CHEF_SERVICE supprimé' END as status;

-- Vérifier les nouveaux rôles assignés
SELECT 'NOUVEAUX_ROLES_ASSIGNES' as info,
       p.matricule_p, p.nom, p.prenom, r.nom_role
FROM personnel p
INNER JOIN personnel_roles pr ON p.id = pr.personnel_id  
INNER JOIN role r ON pr.roles_id = r.id
INNER JOIN temp_chef_mapping tcm ON p.id = tcm.personnel_id
WHERE r.nom_role IN ('ROLE_CHEF_A', 'ROLE_CHEF_B')
ORDER BY p.nom, r.nom_role;

-- Statistiques finales
SELECT 'STATS_FINALES' as info,
       (SELECT COUNT(*) FROM temp_chef_mapping WHERE needs_role_chef_a = TRUE) as utilisateurs_chef_a,
       (SELECT COUNT(*) FROM temp_chef_mapping WHERE needs_role_chef_b = TRUE) as utilisateurs_chef_b,
       (SELECT COUNT(*) FROM temp_chef_mapping WHERE needs_role_chef_a = FALSE AND needs_role_chef_b = FALSE) as utilisateurs_sans_role;

-- ========================================
-- ÉTAPE 7: NETTOYAGE
-- ========================================

-- Garder les tables de backup pour audit
-- DROP TABLE IF EXISTS temp_chef_mapping;
-- DROP TABLE IF EXISTS migration_backup_roles;

SELECT 'MIGRATION_COMPLETE' as status, 
       'Tables de backup conservées: migration_backup_roles, temp_chef_mapping' as note,
       CURRENT_TIMESTAMP as completion_date;