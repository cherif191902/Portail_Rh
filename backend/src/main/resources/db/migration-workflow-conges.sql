-- Migration pour ajouter le nouveau système de statuts de congés
-- À exécuter sur la base de données existante

-- Ajouter la nouvelle colonne statut_conge
ALTER TABLE conges ADD COLUMN statut_conge VARCHAR(255);

-- Ajouter les colonnes pour les dates de validation
ALTER TABLE conges ADD COLUMN date_validation_chef_a DATETIME;
ALTER TABLE conges ADD COLUMN date_validation_chef_b DATETIME;
ALTER TABLE conges ADD COLUMN date_validation_rh DATETIME;

-- Ajouter les colonnes pour les validateurs
ALTER TABLE conges ADD COLUMN validateur_chef_a_id INT;
ALTER TABLE conges ADD COLUMN validateur_chef_b_id INT;  
ALTER TABLE conges ADD COLUMN validateur_rh_id INT;

-- Ajouter les contraintes de clés étrangères pour les validateurs
ALTER TABLE conges ADD CONSTRAINT FK_validateur_chef_a 
    FOREIGN KEY (validateur_chef_a_id) REFERENCES personnel(id);
    
ALTER TABLE conges ADD CONSTRAINT FK_validateur_chef_b 
    FOREIGN KEY (validateur_chef_b_id) REFERENCES personnel(id);
    
ALTER TABLE conges ADD CONSTRAINT FK_validateur_rh 
    FOREIGN KEY (validateur_rh_id) REFERENCES personnel(id);

-- Migrer les données existantes vers le nouveau système
UPDATE conges SET statut_conge = CASE
    -- Si refusé à n'importe quel niveau
    WHEN rep_chefs_niveau1 = 'REFUSE' THEN 'REFUSE_PAR_CHEF_A'
    WHEN rep_chefs_niveau2 = 'REFUSE' THEN 'REFUSE_PAR_CHEF_B'  
    WHEN rep_rh = 'REFUSE' THEN 'REFUSE_PAR_RH'
    
    -- Si approuvé à tous les niveaux
    WHEN rep_chefs_niveau1 = 'APPROUVE' AND rep_chefs_niveau2 = 'APPROUVE' AND rep_rh = 'APPROUVE' 
        THEN 'APPROUVE'
    
    -- En attente selon le niveau
    WHEN rep_chefs_niveau1 = 'EN_ATTENTE' THEN 'EN_ATTENTE_CHEF_A'
    WHEN rep_chefs_niveau1 = 'APPROUVE' AND rep_chefs_niveau2 = 'EN_ATTENTE' THEN 'EN_ATTENTE_CHEF_B'
    WHEN rep_chefs_niveau1 = 'APPROUVE' AND rep_chefs_niveau2 = 'APPROUVE' AND rep_rh = 'EN_ATTENTE' 
        THEN 'EN_ATTENTE_RH'
    
    -- Par défaut
    ELSE 'EN_ATTENTE_CHEF_A'
END
WHERE statut_conge IS NULL;

-- Définir la valeur par défaut pour les nouvelles demandes
ALTER TABLE conges ALTER COLUMN statut_conge SET DEFAULT 'EN_ATTENTE_CHEF_A';

-- Ajouter des index pour améliorer les performances des requêtes
CREATE INDEX idx_conges_statut_conge ON conges(statut_conge);
CREATE INDEX idx_conges_date_validation_chef_a ON conges(date_validation_chef_a);
CREATE INDEX idx_conges_date_validation_chef_b ON conges(date_validation_chef_b);
CREATE INDEX idx_conges_date_validation_rh ON conges(date_validation_rh);

-- Commentaires sur les nouvelles colonnes
COMMENT ON COLUMN conges.statut_conge IS 'Statut dans le workflow de validation: EN_ATTENTE_CHEF_A, EN_ATTENTE_CHEF_B, EN_ATTENTE_RH, APPROUVE, REFUSE_PAR_CHEF_A, REFUSE_PAR_CHEF_B, REFUSE_PAR_RH';
COMMENT ON COLUMN conges.date_validation_chef_a IS 'Date et heure de validation/refus par le Chef A';
COMMENT ON COLUMN conges.date_validation_chef_b IS 'Date et heure de validation/refus par le Chef B';
COMMENT ON COLUMN conges.date_validation_rh IS 'Date et heure de validation/refus par les RH';
COMMENT ON COLUMN conges.validateur_chef_a_id IS 'ID du personnel qui a validé/refusé au niveau Chef A';
COMMENT ON COLUMN conges.validateur_chef_b_id IS 'ID du personnel qui a validé/refusé au niveau Chef B';
COMMENT ON COLUMN conges.validateur_rh_id IS 'ID du personnel qui a validé/refusé au niveau RH';