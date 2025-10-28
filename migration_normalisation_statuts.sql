-- ========================================
-- MIGRATION : NORMALISATION DES STATUTS DE CONGÉ
-- Date: 28 octobre 2025
-- Version: 1.0
-- ========================================

-- Étape 1: Sauvegarde des données actuelles
CREATE TABLE conges_backup_20251028 AS SELECT * FROM conges;

-- Étape 2: Mise à jour des statuts selon les règles métier

-- 2.1: Congés avec rep_chefs_niveau1 = 'EN_ATTENTE' deviennent EN_ATTENTE_CHEF_A
UPDATE conges
SET statut_conge = 'EN_ATTENTE_CHEF_A'
WHERE rep_chefs_niveau1 = 'EN_ATTENTE'
  AND (statut_conge IS NULL OR statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'APPROUVE_RH', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH'));

-- 2.2: Congés approuvés par Chef A mais en attente Chef B
UPDATE conges
SET statut_conge = 'EN_ATTENTE_CHEF_B'
WHERE rep_chefs_niveau1 = 'APPROUVE'
  AND rep_chefs_niveau2 = 'EN_ATTENTE'
  AND (statut_conge IS NULL OR statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'APPROUVE_RH', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH'));

-- 2.3: Congés approuvés par Chef A et Chef B mais en attente RH
UPDATE conges
SET statut_conge = 'EN_ATTENTE_RH'
WHERE rep_chefs_niveau1 = 'APPROUVE'
  AND rep_chefs_niveau2 = 'APPROUVE'
  AND rep_rh = 'EN_ATTENTE'
  AND (statut_conge IS NULL OR statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'APPROUVE_RH', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH'));

-- 2.4: Congés approuvés par tous les niveaux
UPDATE conges
SET statut_conge = 'APPROUVE_RH'
WHERE rep_chefs_niveau1 = 'APPROUVE'
  AND rep_chefs_niveau2 = 'APPROUVE'
  AND rep_rh = 'APPROUVE'
  AND (statut_conge IS NULL OR statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'APPROUVE_RH', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH'));

-- 2.5: Congés refusés par Chef A
UPDATE conges
SET statut_conge = 'REFUSE_PAR_CHEF_A'
WHERE rep_chefs_niveau1 = 'REFUSE'
  AND (statut_conge IS NULL OR statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'APPROUVE_RH', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH'));

-- 2.6: Congés refusés par Chef B
UPDATE conges
SET statut_conge = 'REFUSE_PAR_CHEF_B'
WHERE rep_chefs_niveau2 = 'REFUSE'
  AND (statut_conge IS NULL OR statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'APPROUVE_RH', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH'));

-- 2.7: Congés refusés par RH
UPDATE conges
SET statut_conge = 'REFUSE_PAR_RH'
WHERE rep_rh = 'REFUSE'
  AND (statut_conge IS NULL OR statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'APPROUVE_RH', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH'));

-- Étape 3: Assignation automatique des validateurs pour les congés existants
-- (Cette partie nécessite une logique métier spécifique selon vos règles d'assignation)

-- Étape 4: Vérification de la migration
SELECT
    'RESULTATS_MIGRATION' as section,
    statut_conge,
    COUNT(*) as nombre
FROM conges
GROUP BY statut_conge
ORDER BY statut_conge;

-- Étape 5: Vérification des incohérences restantes
SELECT
    'INCOHERENCES_RESTANTES' as section,
    COUNT(*) as total_conges,
    SUM(CASE WHEN statut_conge IS NULL THEN 1 ELSE 0 END) as statuts_null,
    SUM(CASE WHEN statut_conge NOT IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B', 'EN_ATTENTE_RH', 'VALIDE', 'REFUSE_PAR_CHEF_A', 'REFUSE_PAR_CHEF_B', 'REFUSE_PAR_RH') THEN 1 ELSE 0 END) as statuts_invalides
FROM conges;

-- Étape 6: Nettoyage (optionnel - à exécuter seulement après validation)
-- DROP TABLE conges_backup_20251028;