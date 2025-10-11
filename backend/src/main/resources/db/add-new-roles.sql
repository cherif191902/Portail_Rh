-- Script pour ajouter les nouveaux rôles Chef A et Chef B

-- Ajouter le rôle CHEF_A s'il n'existe pas
INSERT INTO roles (nom_role) 
SELECT 'ROLE_CHEF_A' 
WHERE NOT EXISTS (SELECT 1 FROM roles WHERE nom_role = 'ROLE_CHEF_A');

-- Ajouter le rôle CHEF_B s'il n'existe pas  
INSERT INTO roles (nom_role)
SELECT 'ROLE_CHEF_B'
WHERE NOT EXISTS (SELECT 1 FROM roles WHERE nom_role = 'ROLE_CHEF_B');

-- Vérifier que tous les rôles sont créés
SELECT * FROM roles ORDER BY id;