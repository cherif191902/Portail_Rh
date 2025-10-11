package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idService;
    
    @Column(nullable = false, unique = true)
    private String nomService;
    
    private String libService;
    
    // Relations
    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Personnel> personnels = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chef_id")
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer","handler","roles","conges","subordonnes","notifications","notificationsEnvoyees","pointages","service"})
    private Personnel chef;

    // Nouveaux champs pour la hiérarchie
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chef_a_id")
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer","handler","roles","conges","subordonnes","notifications","notificationsEnvoyees","pointages","service"})
    private Personnel chefA;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chef_b_id")
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer","handler","roles","conges","subordonnes","notifications","notificationsEnvoyees","pointages","service"})
    private Personnel chefB;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rh_responsable_id")
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer","handler","roles","conges","subordonnes","notifications","notificationsEnvoyees","pointages","service"})
    private Personnel rhResponsable;
    
    // Constructeurs
    public Service() {}
    
    public Service(String nomService, String libService) {
        this.nomService = nomService;
        this.libService = libService;
    }
    
    // Méthodes utilitaires
    public void addPersonnel(Personnel personnel) {
        personnels.add(personnel);
        personnel.setService(this);
    }
    
    public void removePersonnel(Personnel personnel) {
        personnels.remove(personnel);
        personnel.setService(null);
    }
    
    @Override
    public String toString() {
        return "Service{" +
                "idService=" + idService +
                ", nomService='" + nomService + '\'' +
                ", libService='" + libService + '\'' +
                '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Service)) return false;
        Service service = (Service) o;
        return idService != null && idService.equals(service.idService);
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
