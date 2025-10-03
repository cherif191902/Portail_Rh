-- Dev-only seed users (password: password123)

INSERT IGNORE INTO personnel (matriculep, nom, prenom, email, password, department, num_tel, poste, niveau)
VALUES
('TEST001', 'Dupont', 'Jean', 'test1@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'IT', 123456789, 'Développeur', 1),
('ADMIN001', 'Martin', 'Sophie', 'admin@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administration', 123456790, 'Administrateur', 3),
('CHEF001', 'Durand', 'Pierre', 'chef@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Management', 123456791, 'Chef de Service', 2),
('RH001', 'Moreau', 'Marie', 'rh@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RH', 123456792, 'Responsable RH', 2);

INSERT IGNORE INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'TEST001' AND r.nom_role = 'ROLE_USER';

INSERT IGNORE INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'ADMIN001' AND r.nom_role = 'ROLE_ADMIN';

INSERT IGNORE INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'CHEF001' AND r.nom_role = 'ROLE_CHEF_SERVICE';

INSERT IGNORE INTO personnel_roles (personnel_id, role_id)
SELECT p.id, r.id FROM personnel p, roles r WHERE p.matriculep = 'RH001' AND r.nom_role = 'ROLE_RH';
