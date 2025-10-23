-- ================================================================
-- SUPPRESSION RAPIDE DE L'UTILISATEUR CHEF001
-- ================================================================

-- Suppression directe (attention: supprime toutes les données liées)
SET FOREIGN_KEY_CHECKS = 0;

-- 1. Retirer les affectations de chef
UPDATE services SET chef_a_id = NULL WHERE chef_a_id = 11;
UPDATE services SET chef_b_id = NULL WHERE chef_b_id = 11;

-- 2. Supprimer les rôles
DELETE FROM personnel_roles WHERE personnel_id = 11;

-- 3. Supprimer les données liées (optionnel - décommentez si nécessaire)
-- DELETE FROM demandes_conge WHERE personnel_id = 11;
-- DELETE FROM validation_conge WHERE validateur_id = 11;
-- DELETE FROM pointages WHERE personnel_id = 11;

-- 4. Supprimer l'utilisateur
DELETE FROM personnel WHERE id = 11 AND matriculep = 'CHEF001';

SET FOREIGN_KEY_CHECKS = 1;

-- Vérification
SELECT 'Utilisateur supprimé!' as resultat;
SELECT COUNT(*) as verification FROM personnel WHERE matriculep = 'CHEF001';