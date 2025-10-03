package tn.esprit.examen.nomPrenomClasseExamen.payload.response;

import java.util.List;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Integer id;
    private String matricule;
    private String email;
    private List<String> roles;

    public JwtResponse(String token, Integer id, String matricule, String email, List<String> roles) {
        this.token = token;
        this.id = id;
        this.matricule = matricule;
        this.email = email;
        this.roles = roles;
    }

    // Getters and Setters
    public String getToken() {
        return token;
    }

    public String getType() {
        return type;
    }

    public Integer getId() {
        return id;
    }

    public String getMatricule() {
        return matricule;
    }

    public String getEmail() {
        return email;
    }

    public List<String> getRoles() {
        return roles;
    }
}