package tn.esprit.examen.nomPrenomClasseExamen.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import tn.esprit.examen.nomPrenomClasseExamen.entities.ERole;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Role;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.RoleRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        // Initialiser les rôles par défaut s'ils n'existent pas
        initializeRoles();
    }

    private void initializeRoles() {
        // Créer les rôles par défaut s'ils n'existent pas
        for (ERole roleEnum : ERole.values()) {
            if (!roleRepository.existsByNomRole(roleEnum)) {
                Role role = new Role(roleEnum);
                roleRepository.save(role);
                System.out.println("Created role: " + roleEnum.name());
            }
        }
    }
}
