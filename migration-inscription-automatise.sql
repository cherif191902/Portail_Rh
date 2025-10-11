-- Migration SQL pour le processus d'inscription automatisé
-- Ce script s'assure que la table services a toutes les colonnes nécessaires

-- Vérifier et ajouter la colonne rh_responsable_id si elle n'existe pas
-- (Les colonnes chef_a_id et chef_b_id semblent déjà exister d'après l'entité Java)

-- Pour MySQL/MariaDB
-- ALTER TABLE services ADD COLUMN IF NOT EXISTS rh_responsable_id INT;
-- ALTER TABLE services ADD CONSTRAINT fk_service_rh FOREIGN KEY (rh_responsable_id) REFERENCES personnel(id);

-- Pour PostgreSQL
-- ALTER TABLE services ADD COLUMN rh_responsable_id INT;
-- ALTER TABLE services ADD CONSTRAINT fk_service_rh FOREIGN KEY (rh_responsable_id) REFERENCES personnel(id);

-- Pour H2 (base de données de test)
ALTER TABLE services ADD COLUMN rh_responsable_id INT IF NOT EXISTS;

-- Données d'exemple pour tester le processus d'inscription
-- (Assurez-vous d'avoir au moins un service avec des responsables assignés)

-- Exemple : Créer des services de test avec hiérarchie complète
INSERT INTO services (nom_service, lib_service) VALUES 
('Ressources Humaines', 'Gestion du personnel et des carrières'),
('Informatique', 'Développement et maintenance des systèmes'),
('Marketing', 'Communication et promotion des produits')
ON DUPLICATE KEY UPDATE nom_service=nom_service;

-- Note: Dans un vrai environnement, vous devrez :
-- 1. Créer des utilisateurs avec les bons rôles (CHEF_SERVICE, RH)
-- 2. Assigner ces utilisateurs aux services comme chef_a, chef_b et rh_responsable
-- 
-- Exemple (à adapter selon vos données) :
-- UPDATE services SET 
--   chef_a_id = (SELECT id FROM personnel WHERE matricule_p = 'CHEF001'),
--   chef_b_id = (SELECT id FROM personnel WHERE matricule_p = 'CHEF002'), 
--   rh_responsable_id = (SELECT id FROM personnel WHERE matricule_p = 'RH001')
-- WHERE nom_service = 'Ressources Humaines';

-- Vérification : Afficher les services avec leur hiérarchie
SELECT 
    s.id_service,
    s.nom_service,
    s.lib_service,
    CONCAT(chef_a.prenom, ' ', chef_a.nom) as chef_a,
    CONCAT(chef_b.prenom, ' ', chef_b.nom) as chef_b,
    CONCAT(rh.prenom, ' ', rh.nom) as responsable_rh
FROM services s
LEFT JOIN personnel chef_a ON s.chef_a_id = chef_a.id
LEFT JOIN personnel chef_b ON s.chef_b_id = chef_b.id  
LEFT JOIN personnel rh ON s.rh_responsable_id = rh.id
ORDER BY s.id_service;