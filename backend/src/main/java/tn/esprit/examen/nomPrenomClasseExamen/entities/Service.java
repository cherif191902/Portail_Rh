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
    @JoinColumn(name = "chef_a_id")
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer","handler","roles","conges","subordonnes","notifications","notificationsEnvoyees","pointages","service"})
    private Personnel chefA;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chef_b_id")
    @com.fasterxml.jackson.annotation.JsonIgnoreProperties({"hibernateLazyInitializer","handler","roles","conges","subordonnes","notifications","notificationsEnvoyees","pointages","service"})
    private Personnel chefB;

    @OneToOne(fetch = FetchType.LAZY)
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

    /**
     * Vérifier si le service a au moins un chef
     */
    public boolean hasAnyChef() {
        return chefA != null || chefB != null;
    }

    /**
     * Vérifier si le service a les deux chefs
     */
    public boolean hasFullChefs() {
        return chefA != null && chefB != null;
    }

    /**
     * Vérifier si le service a un RH responsable
     */
    public boolean hasRhResponsable() {
        return rhResponsable != null;
    }

    /**
     * Obtenir le chef responsable principal (Chef A prioritaire)
     */
    public Personnel getChefPrincipal() {
        return chefA != null ? chefA : chefB;
    }

    /**
     * Obtenir le chef (pour compatibilité avec l'ancien système)
     * @deprecated Utiliser chefA ou chefB
     */
    @Deprecated
    public Personnel getChef() {
        return chefA != null ? chefA : chefB;
    }

    /**
     * Définir un chef (pour compatibilité avec l'ancien système) 
     * @deprecated Utiliser setChefA ou setChefB
     */
    @Deprecated
    public void setChef(Personnel chef) {
        if (this.chefA == null) {
            this.chefA = chef;
        } else if (this.chefB == null) {
            this.chefB = chef;
        }
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
