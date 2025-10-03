package tn.esprit.examen.nomPrenomClasseExamen.payload.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class LoginRequest {
    @NotBlank
    @Size(min = 3, max = 20, message = "Le matricule doit contenir entre 3 et 20 caractères")
    private String matricule;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    // Getters and Setters
    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}