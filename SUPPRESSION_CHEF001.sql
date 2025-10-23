-- ================================================================
-- SCRIPT DE SUPPRESSION DE L'UTILISATEUR CHEF001
-- ================================================================

-- Informations de l'utilisateur à supprimer :
-- ID: 11
-- Nom: Management
-- Email: chef@example.com
-- Matricule: CHEF001
-- Service ID: 2
-- Nom: Durand
-- Prénom: Pierre
-- Poste: Chef de Service

-- ================================================================
-- ÉTAPE 1: VÉRIFICATION AVANT SUPPRESSION
-- ================================================================

-- Vérifier l'existence de l'utilisateur
SELECT 'AVANT SUPPRESSION - Vérification utilisateur CHEF001:' as etape;
SELECT * FROM personnel WHERE matriculep = 'CHEF001';

-- Vérifier les rôles associés
SELECT 'AVANT SUPPRESSION - Rôles de CHEF001:' as etape;
SELECT p.matriculep, p.prenom, p.nom, r.nom_role 
FROM personnel p 
JOIN personnel_roles pr ON p.id = pr.personnel_id 
JOIN roles r ON pr.role_id = r.id 
WHERE p.matriculep = 'CHEF001';

-- Vérifier si l'utilisateur est chef d'un service
SELECT 'AVANT SUPPRESSION - Services dirigés par CHEF001:' as etape;
SELECT s.nom_service, s.lib_service, 
       CASE 
           WHEN s.chef_a_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001') THEN 'Chef A'
           WHEN s.chef_b_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001') THEN 'Chef B'
       END as type_chef
FROM services s 
WHERE s.chef_a_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001') 
   OR s.chef_b_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001');

-- ================================================================
-- ÉTAPE 2: SUPPRESSION DES AFFECTATIONS DE CHEF
-- ================================================================

-- Retirer les affectations de chef dans les services
UPDATE services 
SET chef_a_id = NULL 
WHERE chef_a_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001');

UPDATE services 
SET chef_b_id = NULL 
WHERE chef_b_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001');

SELECT 'Services mis à jour - affectations chef supprimées' as resultat;

-- ================================================================
-- ÉTAPE 3: SUPPRESSION DES RÔLES
-- ================================================================

-- Supprimer les associations de rôles
DELETE FROM personnel_roles 
WHERE personnel_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001');

SELECT 'Rôles supprimés pour CHEF001' as resultat;

-- ================================================================
-- ÉTAPE 4: SUPPRESSION DES DONNÉES LIÉES (OPTIONNEL)
-- ================================================================

-- ATTENTION: Décommentez ces lignes si vous voulez aussi supprimer :
-- - Les demandes de congé créées par cet utilisateur
-- - Les validations de congé effectuées par cet utilisateur
-- - Les pointages de cet utilisateur

-- Supprimer les demandes de congé
-- DELETE FROM demandes_conge WHERE personnel_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001');

-- Supprimer les validations de congé
-- DELETE FROM validation_conge WHERE validateur_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001');

-- Supprimer les pointages
-- DELETE FROM pointages WHERE personnel_id = (SELECT id FROM personnel WHERE matriculep = 'CHEF001');

-- ================================================================
-- ÉTAPE 5: SUPPRESSION DE L'UTILISATEUR
-- ================================================================

-- Supprimer l'utilisateur principal
DELETE FROM personnel WHERE matriculep = 'CHEF001';

SELECT 'Utilisateur CHEF001 supprimé définitivement' as resultat;

-- ================================================================
-- ÉTAPE 6: VÉRIFICATION APRÈS SUPPRESSION
-- ================================================================

-- Vérifier que l'utilisateur a bien été supprimé
SELECT 'APRÈS SUPPRESSION - Vérification:' as etape;
SELECT COUNT(*) as nombre_utilisateurs_chef001 FROM personnel WHERE matriculep = 'CHEF001';

-- Vérifier qu'aucun service n'a plus cet utilisateur comme chef
SELECT 'APRÈS SUPPRESSION - Services sans chef orphelin:' as etape;
SELECT COUNT(*) as services_avec_chef_inexistant 
FROM services s 
WHERE s.chef_a_id NOT IN (SELECT id FROM personnel) 
   OR s.chef_b_id NOT IN (SELECT id FROM personnel);

-- ================================================================
-- RÉSUMÉ
-- ================================================================
SELECT '=== SUPPRESSION TERMINÉE ===' as message;
SELECT 'Utilisateur CHEF001 (Pierre Durand) supprimé avec succès!' as confirmation;