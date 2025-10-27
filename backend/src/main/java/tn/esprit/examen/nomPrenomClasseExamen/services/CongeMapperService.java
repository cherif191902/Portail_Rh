package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.dto.DemandeCongeDto;
import tn.esprit.examen.nomPrenomClasseExamen.dto.DemandeCongeRHDTo;
import tn.esprit.examen.nomPrenomClasseExamen.dto.CongeRequestDto;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;

import java.time.temporal.ChronoUnit;

@Service
public class CongeMapperService {

    /**
     * Convertit une entité Conge vers un DTO DemandeCongeDto
     */
    public DemandeCongeDto toDemandeCongeDto(Conge conge) {
        if (conge == null) return null;
        
        DemandeCongeDto dto = new DemandeCongeDto();
        dto.setId(conge.getIdConge());
        dto.setTypeConge(conge.getTypeConge() != null ? conge.getTypeConge().getNomTypeconge() : "Non spécifié");
        dto.setDateDebut(conge.getDateDeb());
        dto.setDateFin(conge.getDateFin());
        
        // Calculer la durée en jours
        if (conge.getDateDeb() != null && conge.getDateFin() != null) {
            long jours = ChronoUnit.DAYS.between(conge.getDateDeb(), conge.getDateFin()) + 1;
            dto.setDuree((int) jours);
        } else if (conge.getNbJours() != null) {
            try {
                dto.setDuree(Integer.parseInt(conge.getNbJours()));
            } catch (NumberFormatException e) {
                dto.setDuree(1);
            }
        }
        
        dto.setStatut(determinerStatutFinal(conge));
        dto.setDateDemande(conge.getDateCong());
        dto.setCommentaire(conge.getCommentaire());
        
        // Déterminer le motif de refus s'il y en a un
        dto.setMotifRefus(determinerMotifRefus(conge));
        
        return dto;
    }

    /**
     * Détermine le statut final d'une demande de congé
     */
    private String determinerStatutFinal(Conge conge) {
        // Si refusé à n'importe quel niveau
        if ("REFUSE".equals(conge.getRepChefsNiveau1()) || 
            "REFUSE".equals(conge.getRepChefsNiveau2()) || 
            "REFUSE".equals(conge.getRepRh())) {
            return "REFUSE";
        }
        
        // Si approuvé à tous les niveaux
        if ("APPROUVE".equals(conge.getRepChefsNiveau1()) && 
            "APPROUVE".equals(conge.getRepChefsNiveau2()) && 
            "APPROUVE".equals(conge.getRepRh())) {
            return "APPROUVE";
        }
        
        // Sinon, en attente
        return "EN_ATTENTE";
    }

    /**
     * Détermine le motif de refus s'il y en a un
     */
    private String determinerMotifRefus(Conge conge) {
        if ("REFUSE".equals(conge.getRepChefsNiveau1())) {
            return "Refusé par le chef de service (niveau 1)";
        }
        if ("REFUSE".equals(conge.getRepChefsNiveau2())) {
            return "Refusé par le chef de service (niveau 2)";
        }
        if ("REFUSE".equals(conge.getRepRh())) {
            return "Refusé par les ressources humaines";
        }
        return null;
    }

    /**
     * Convertit un DTO CongeRequestDto vers une entité Conge partiellement remplie
     */
    public Conge fromCongeRequestDto(CongeRequestDto dto) {
        if (dto == null) return null;
        
        Conge conge = new Conge();
        conge.setDateDeb(dto.getDateDebut());
        conge.setDateFin(dto.getDateFin());
        conge.setCommentaire(dto.getCommentaire());
        conge.setMotif(dto.getCommentaire()); // Utiliser le commentaire comme motif
        
        // Calculer le nombre de jours
        if (dto.getDateDebut() != null && dto.getDateFin() != null) {
            long jours = ChronoUnit.DAYS.between(dto.getDateDebut(), dto.getDateFin()) + 1;
            conge.setNbJours(String.valueOf(jours));
        } else if (dto.getDuree() != null) {
            conge.setNbJours(String.valueOf(dto.getDuree()));
        }
        
        return conge;
    }

    /**
     * Convertit une entité Conge vers un DTO DemandeCongeRHDTo pour la validation RH
     */
    public DemandeCongeRHDTo toDemandeCongeRHDTo(Conge conge) {
        if (conge == null) return null;

        DemandeCongeRHDTo dto = new DemandeCongeRHDTo();
        dto.setId(conge.getIdConge());

        // Informations de l'employé
        if (conge.getPersonnel() != null) {
            dto.setMatricule(conge.getPersonnel().getMatriculeP());
            dto.setNomComplet(conge.getPersonnel().getNom() + " " + conge.getPersonnel().getPrenom());
            dto.setService(conge.getPersonnel().getService() != null ?
                          conge.getPersonnel().getService().getNomService() : "Non assigné");
        }

        dto.setDateDebut(conge.getDateDeb());
        dto.setDateFin(conge.getDateFin());
        dto.setMotif(conge.getMotif());

        // Calculer le nombre de jours
        if (conge.getDateDeb() != null && conge.getDateFin() != null) {
            long jours = ChronoUnit.DAYS.between(conge.getDateDeb(), conge.getDateFin()) + 1;
            dto.setNbJours((int) jours);
        } else if (conge.getNbJours() != null) {
            try {
                dto.setNbJours(Integer.parseInt(conge.getNbJours()));
            } catch (NumberFormatException e) {
                dto.setNbJours(1);
            }
        }

        dto.setStatutActuel(conge.getStatutConge() != null ? conge.getStatutConge().getLibelle() : "Inconnu");
        dto.setTypeConge(conge.getTypeConge() != null ? conge.getTypeConge().getNomTypeconge() : "Non spécifié");

        return dto;
    }
}