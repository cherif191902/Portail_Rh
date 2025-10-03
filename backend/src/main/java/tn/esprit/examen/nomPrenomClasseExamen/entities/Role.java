package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false, unique = true)
    private ERole nomRole;
    
    // Relations
    @ManyToMany(mappedBy = "roles", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Personnel> personnels = new HashSet<>();
    
    // Constructeurs
    public Role() {}
    
    public Role(ERole nomRole) {
        this.nomRole = nomRole;
    }
    
    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", nomRole=" + nomRole +
                '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Role)) return false;
        Role role = (Role) o;
        return id != null && id.equals(role.id);
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
