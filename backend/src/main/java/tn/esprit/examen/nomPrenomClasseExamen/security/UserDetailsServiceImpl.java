package tn.esprit.examen.nomPrenomClasseExamen.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final PersonnelRepository personnelRepository;

    public UserDetailsServiceImpl(PersonnelRepository personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String matricule) throws UsernameNotFoundException {
        // Utiliser la méthode qui charge les rôles avec JOIN FETCH pour éviter LazyInitializationException
        Personnel personnel = personnelRepository.findByMatriculePWithRoles(matricule)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with matricule: " + matricule));

        return personnel; // Retourne directement Personnel qui implémente UserDetails
    }
}

