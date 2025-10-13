-- Script de migration pour ajouter les colonnes Chef A et Chef B
-- Exécuter ce script avant de démarrer l'application

-- 1. Ajouter les nouvelles colonnes
ALTER TABLE services 
ADD COLUMN chef_a_id INTEGER,
ADD COLUMN chef_b_id INTEGER;

-- 2. Copier les données existantes de chef_id vers chef_a_id
UPDATE services 
SET chef_a_id = chef_id 
WHERE chef_id IS NOT NULL;

-- 3. Ajouter les contraintes de clés étrangères
ALTER TABLE services 
ADD CONSTRAINT fk_services_chef_a 
FOREIGN KEY (chef_a_id) REFERENCES personnel(id);

ALTER TABLE services 
ADD CONSTRAINT fk_services_chef_b 
FOREIGN KEY (chef_b_id) REFERENCES personnel(id);

-- 4. Optionnel: Supprimer l'ancienne colonne chef_id (décommentez si nécessaire)
-- ALTER TABLE services DROP COLUMN chef_id;

-- 5. Vérifier la migration
SELECT 
    s.id_service,
    s.nom_service,
    pa.nom AS chef_a_nom,
    pa.prenom AS chef_a_prenom,
    pb.nom AS chef_b_nom,
    pb.prenom AS chef_b_prenom
FROM services s
LEFT JOIN personnel pa ON s.chef_a_id = pa.id
LEFT JOIN personnel pb ON s.chef_b_id = pb.id
ORDER BY s.nom_service;