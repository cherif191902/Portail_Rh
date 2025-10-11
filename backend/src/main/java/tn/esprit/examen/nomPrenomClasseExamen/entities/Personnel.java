package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

@Setter
@Getter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Personnel implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String email;

    @Column(unique = true, nullable = false)
    private String matriculeP;

    private String nom;
    private String prenom;
    private String department;
    private int numTel;
    private String poste;
    private String password;
    private Integer niveau;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_id")
    private Service service;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "personnel_roles",
               joinColumns = @JoinColumn(name = "personnel_id"),
               inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "responsable_id")
    private Personnel responsable;

    // Relations hiérarchiques pour le workflow de validation des congés
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chef_a_id")
    private Personnel chefA;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chef_b_id")
    private Personnel chefB;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rh_responsable_id")
    private Personnel rhResponsable;

    @OneToMany(mappedBy = "responsable", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Personnel> subordonnes = new ArrayList<>();

    @OneToMany(mappedBy = "chefA", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Personnel> employes_chef_a = new ArrayList<>();

    @OneToMany(mappedBy = "chefB", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Personnel> employes_chef_b = new ArrayList<>();

    @OneToMany(mappedBy = "rhResponsable", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Personnel> employes_rh = new ArrayList<>();

    @OneToMany(mappedBy = "personnel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Conge> conges = new ArrayList<>();

    @OneToMany(mappedBy = "personnel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Pointage> pointages = new ArrayList<>();

    @OneToMany(mappedBy = "destinataire", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Notification> notifications = new ArrayList<>();

    @OneToMany(mappedBy = "expediteur", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Notification> notificationsEnvoyees = new ArrayList<>();

    public Personnel() {
        this.roles = new HashSet<>();
    }

    public Personnel(String matriculeP, String email, String password, String nom, String prenom) {
        this();
        this.matriculeP = matriculeP;
        this.email = email;
        this.password = password;
        this.nom = nom;
        this.prenom = prenom;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        try {
            if (roles != null && !roles.isEmpty()) {
                for (Role role : roles) {
                    authorities.add(new SimpleGrantedAuthority(role.getNomRole().name()));
                }
            }
        } catch (Exception e) {
            System.err.println("Warning: Could not load roles for user " + matriculeP + ", using default role");
        }

        if (authorities.isEmpty()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        }

        return authorities;
    }

    @Override
    public String getUsername() {
        return matriculeP;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void addRole(Role role) {
        roles.add(role);
        role.getPersonnels().add(this);
    }

    public void removeRole(Role role) {
        roles.remove(role);
        role.getPersonnels().remove(this);
    }

    public void addSubordonne(Personnel subordonné) {
        subordonnes.add(subordonné);
        subordonné.setResponsable(this);
    }

    public void removeSubordonne(Personnel subordonné) {
        subordonnes.remove(subordonné);
        subordonné.setResponsable(null);
    }

    public void addConge(Conge conge) {
        conges.add(conge);
        conge.setPersonnel(this);
    }

    public void addPointage(Pointage pointage) {
        pointages.add(pointage);
        pointage.setPersonnel(this);
    }

    public void addNotification(Notification notification) {
        notifications.add(notification);
        notification.setDestinataire(this);
    }

    // Méthodes de vérification des rôles
    public boolean hasRole(ERole roleName) {
        return roles.stream().anyMatch(role -> role.getNomRole() == roleName);
    }

    public boolean isAdmin() {
        return hasRole(ERole.ROLE_ADMIN);
    }

    public boolean isRH() {
        return hasRole(ERole.ROLE_RH);
    }

    public boolean isChefService() {
        return hasRole(ERole.ROLE_CHEF_SERVICE);
    }

    public boolean isUser() {
        return hasRole(ERole.ROLE_USER);
    }

    // Méthodes pour obtenir le nom complet
    public String getNomComplet() {
        return prenom + " " + nom;
    }

    public String getNomCompletInverse() {
        return nom + " " + prenom;
    }

    @Override
    public String toString() {
        return "Personnel{" +
                "id=" + id +
                ", matriculeP='" + matriculeP + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", email='" + email + '\'' +
                ", poste='" + poste + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Personnel)) return false;
        Personnel personnel = (Personnel) o;
        return id != null && id.equals(personnel.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

}


