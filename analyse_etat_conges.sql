-- ========================================
-- ANALYSE DE L'ÉTAT ACTUEL DES CONGÉS
-- Date: 28 octobre 2025
-- ========================================

-- 1. ANALYSE DES STATUTS ACTUELS
SELECT
    'ANALYSE_STATUTS' as section,
    statut_conge,
    COUNT(*) as nombre,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as pourcentage
FROM conges
GROUP BY statut_conge
ORDER BY nombre DESC;

-- 2. ANALYSE DES CHAMPS DE VALIDATION
SELECT
    'ANALYSE_VALIDATION' as section,
    COUNT(*) as total_conges,
    SUM(CASE WHEN rep_chefs_niveau1 IS NULL THEN 1 ELSE 0 END) as rep_chefs_niveau1_null,
    SUM(CASE WHEN rep_chefs_niveau2 IS NULL THEN 1 ELSE 0 END) as rep_chefs_niveau2_null,
    SUM(CASE WHEN rep_rh IS NULL THEN 1 ELSE 0 END) as rep_rh_null,
    SUM(CASE WHEN validateur_chef_a_id IS NULL THEN 1 ELSE 0 END) as validateur_chef_a_null,
    SUM(CASE WHEN validateur_chef_b_id IS NULL THEN 1 ELSE 0 END) as validateur_chef_b_null,
    SUM(CASE WHEN validateur_rh_id IS NULL THEN 1 ELSE 0 END) as validateur_rh_null
FROM conges;

-- 3. INCOHÉRENCES DÉTECTÉES
SELECT
    'INCOHERENCES' as section,
    id_conge,
    statut_conge,
    rep_chefs_niveau1,
    rep_chefs_niveau2,
    rep_rh,
    validateur_chef_a_id,
    validateur_chef_b_id,
    validateur_rh_id,
    CASE
        WHEN statut_conge = 'EN_ATTENTE_CHEF_A' AND (rep_chefs_niveau1 != 'EN_ATTENTE' OR validateur_chef_a_id IS NULL) THEN 'INCOHERENT_CHEF_A'
        WHEN statut_conge = 'EN_ATTENTE_CHEF_B' AND (rep_chefs_niveau2 != 'EN_ATTENTE' OR validateur_chef_b_id IS NULL) THEN 'INCOHERENT_CHEF_B'
        WHEN statut_conge = 'EN_ATTENTE_RH' AND (rep_rh != 'EN_ATTENTE' OR validateur_rh_id IS NULL) THEN 'INCOHERENT_RH'
        WHEN statut_conge = 'VALIDE' AND rep_rh != 'APPROUVE' THEN 'INCOHERENT_VALIDE'
        WHEN statut_conge LIKE 'REFUSE%' AND (rep_chefs_niveau1 != 'REFUSE' AND rep_chefs_niveau2 != 'REFUSE' AND rep_rh != 'REFUSE') THEN 'INCOHERENT_REFUS'
        ELSE 'OK'
    END as diagnostic
FROM conges
WHERE statut_conge IS NOT NULL
ORDER BY id_conge;

-- 4. CONGÉS SANS VALIDATEURS ASSIGNÉS
SELECT
    'SANS_VALIDATEURS' as section,
    c.id_conge,
    c.statut_conge,
    p.nom,
    p.prenom,
    s.nom_service,
    c.date_cong
FROM conges c
JOIN personnel p ON c.personnel_id = p.id
LEFT JOIN services s ON p.service_id = s.id_service
WHERE (c.validateur_chef_a_id IS NULL OR c.validateur_chef_b_id IS NULL)
  AND c.statut_conge IN ('EN_ATTENTE_CHEF_A', 'EN_ATTENTE_CHEF_B')
ORDER BY c.date_cong DESC;

-- 5. VALIDATEURS DISPONIBLES PAR SERVICE
SELECT
    'VALIDATEURS_DISPONIBLES' as section,
    s.nom_service,
    COUNT(DISTINCT s.chef_a_id) as nb_chef_a,
    COUNT(DISTINCT s.chef_b_id) as nb_chef_b,
    COUNT(DISTINCT s.rh_responsable_id) as nb_rh
FROM services s
GROUP BY s.id_service, s.nom_service
ORDER BY s.nom_service;