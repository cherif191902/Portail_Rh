-- Script rapide pour créer les utilisateurs de test
-- À exécuter dans MySQL Workbench ou phpMyAdmin

-- 1. Diagnostic - Vérifier l'état actuel
SELECT 'Utilisateurs existants:' as info;
SELECT matriculep, nom, prenom, email FROM personnel;

SELECT 'Rôles existants:' as info;
SELECT * FROM roles;

SELECT 'Attributions de rôles:' as info;
SELECT p.matriculep, p.nom, r.nom_role
FROM personnel p
LEFT JOIN personnel_roles pr ON p.id = pr.personnel_id
LEFT JOIN roles r ON pr.role_id = r.id;

-- 2. Nettoyer et recréer TEST001
DELETE FROM personnel_roles WHERE personnel_id IN (SELECT id FROM personnel WHERE matriculep = 'TEST001');
DELETE FROM personnel WHERE matriculep = 'TEST001';

-- 3. Créer les rôles s'ils n'existent pas
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_USER');
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_ADMIN');
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_RH');
INSERT IGNORE INTO roles (nom_role) VALUES ('ROLE_CHEF_SERVICE');

-- 4. Créer les utilisateurs de test avec le bon hash BCrypt
-- Mot de passe : password123
-- Hash BCrypt correct : $2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi

INSERT INTO personnel (matriculep, nom, prenom, email, password, department, num_tel, poste, niveau)
VALUES
('TEST001', 'Dupont', 'Jean', 'test1@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'IT', 123456789, 'Développeur', 1),
('ADMIN001', 'Martin', 'Sophie', 'admin@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administration', 123456790, 'Administrateur', 3),
('CHEF001', 'Durand', 'Pierre', 'chef@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Management', 123456791, 'Chef de Service', 2),
('RH001', 'Moreau', 'Marie', 'rh@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RH', 123456792, 'Responsable RH', 2);

-- 5. Attribuer les rôles (IMPORTANT!)
INSERT INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'TEST001' AND r.nom_role = 'ROLE_USER';

INSERT INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'ADMIN001' AND r.nom_role = 'ROLE_ADMIN';

INSERT INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'CHEF001' AND r.nom_role = 'ROLE_CHEF_SERVICE';

INSERT INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'RH001' AND r.nom_role = 'ROLE_RH';

-- 6. Vérification finale
SELECT 'Vérification finale:' as info;
SELECT p.matriculep, p.nom, p.prenom, r.nom_role
FROM personnel p
LEFT JOIN personnel_roles pr ON p.id = pr.personnel_id
LEFT JOIN roles r ON pr.role_id = r.id
ORDER BY p.matriculep;

-- 7. Test spécifique pour TEST001
SELECT 'Test spécifique TEST001:' as info;
SELECT p.id, p.matriculep, p.nom, p.password, r.nom_role
FROM personnel p
LEFT JOIN personnel_roles pr ON p.id = pr.personnel_id
LEFT JOIN roles r ON pr.role_id = r.id
WHERE p.matriculep = 'TEST001';
