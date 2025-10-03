package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "type_conges")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TypeConge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idType;
    
    @Column(nullable = false, unique = true)
    private String nomTypeconge;
    
    @Column(nullable = false)
    private Integer maxAllowedDays;
    
    // Relations
    @OneToMany(mappedBy = "typeConge", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Conge> conges = new ArrayList<>();
    
    // Constructeurs
    public TypeConge() {}
    
    public TypeConge(String nomTypeconge, Integer maxAllowedDays) {
        this.nomTypeconge = nomTypeconge;
        this.maxAllowedDays = maxAllowedDays;
    }
    
    // Méthodes utilitaires
    public void addConge(Conge conge) {
        conges.add(conge);
        conge.setTypeConge(this);
    }
    
    public void removeConge(Conge conge) {
        conges.remove(conge);
        conge.setTypeConge(null);
    }
    
    @Override
    public String toString() {
        return "TypeConge{" +
                "idType=" + idType +
                ", nomTypeconge='" + nomTypeconge + '\'' +
                ", maxAllowedDays=" + maxAllowedDays +
                '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TypeConge)) return false;
        TypeConge typeConge = (TypeConge) o;
        return idType != null && idType.equals(typeConge.idType);
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
