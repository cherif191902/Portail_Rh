-- ================================================================
-- DONNÉES DE BASE POUR LE SYSTÈME PORTAIL RH
-- Aucune donnée utilisateur statique - Tout est généré dynamiquement
-- ================================================================

-- Initialisation des rôles par défaut
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_USER');
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_CHEF_SERVICE');
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_RH');
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_ADMIN');

-- Initialisation des types de congés par défaut
INSERT IGNORE INTO type_conges (nom_typeconge, max_allowed_days) VALUES ('Congé annuel', 30);
INSERT IGNORE INTO type_conges (nom_typeconge, max_allowed_days) VALUES ('Congé maladie', 90);
INSERT IGNORE INTO type_conges (nom_typeconge, max_allowed_days) VALUES ('Congé maternité', 98);
INSERT IGNORE INTO type_conges (nom_typeconge, max_allowed_days) VALUES ('Congé paternité', 3);
INSERT IGNORE INTO type_conges (nom_typeconge, max_allowed_days) VALUES ('Congé exceptionnel', 5);

-- Initialisation des services par défaut  
INSERT IGNORE INTO services (nom_service, lib_service) VALUES ('Ressources Humaines', 'Gestion du personnel et des ressources humaines');
INSERT IGNORE INTO services (nom_service, lib_service) VALUES ('Informatique', 'Développement et maintenance des systèmes informatiques');
INSERT IGNORE INTO services (nom_service, lib_service) VALUES ('Comptabilité', 'Gestion financière et comptable');
INSERT IGNORE INTO services (nom_service, lib_service) VALUES ('Commercial', 'Ventes et relations clients');
INSERT IGNORE INTO services (nom_service, lib_service) VALUES ('Production', 'Fabrication et contrôle qualité');

-- ================================================================
-- NOTE: Les utilisateurs et congés sont générés dynamiquement
-- par le DataInitializationService au premier accès
-- ================================================================