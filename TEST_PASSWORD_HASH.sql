-- Test avec différents hash BCrypt pour password123

-- Option 1 : Hash utilisé actuellement
-- $2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi

-- Option 2 : Nouveau hash BCrypt pour password123
-- $2a$10$N9qo8uLOickgx2ZMRZoMye7VfPiYxlGXvQGVmMwjGF.bqZbeXjdfu

-- Option 3 : Hash simple pour test (à éviter en production)
-- $2a$10$e0MYzXyjpJS7Pd0RVvHqHOgCS/LWUB0pE5f4Mv.FYlnOjTrWy6BG.

-- Test : Mettre à jour le mot de passe de TEST001
UPDATE personnel 
SET password = '$2a$10$e0MYzXyjpJS7Pd0RVvHqHOgCS/LWUB0pE5f4Mv.FYlnOjTrWy6BG.' 
WHERE matriculep = 'TEST001';

-- Vérification
SELECT matriculep, nom, password FROM personnel WHERE matriculep = 'TEST001';
