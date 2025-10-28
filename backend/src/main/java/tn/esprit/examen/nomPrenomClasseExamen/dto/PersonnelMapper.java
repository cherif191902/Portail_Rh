package tn.esprit.examen.nomPrenomClasseExamen.dto;

import org.springframework.stereotype.Component;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class PersonnelMapper {

    public PersonnelDTO toDTO(Personnel personnel) {
        if (personnel == null) return null;
        
        PersonnelDTO dto = new PersonnelDTO();
        dto.setId(personnel.getId());
        dto.setEmail(personnel.getEmail());
        dto.setMatriculeP(personnel.getMatriculeP());
        dto.setNom(personnel.getNom());
        dto.setPrenom(personnel.getPrenom());
        dto.setDepartment(personnel.getDepartment());
        dto.setNumTel(personnel.getNumTel());
        dto.setPoste(personnel.getPoste());
        dto.setNiveau(personnel.getNiveau());
        
        // Service (simplified)
        if (personnel.getService() != null) {
            PersonnelDTO.ServiceSimpleDTO serviceDTO = new PersonnelDTO.ServiceSimpleDTO();
            serviceDTO.setIdService(personnel.getService().getIdService());
            serviceDTO.setNomService(personnel.getService().getNomService());
            serviceDTO.setLibService(personnel.getService().getLibService());
            dto.setService(serviceDTO);
        }
        
        // Roles (simplified)
        if (personnel.getRoles() != null) {
            Set<String> roleNames = personnel.getRoles().stream()
                    .map(role -> role.getNomRole().name())
                    .collect(Collectors.toSet());
            dto.setRoles(roleNames);
        }
        
        // Chefs (simplified)
        dto.setChefA(toSimpleDTO(personnel.getChefA()));
        dto.setChefB(toSimpleDTO(personnel.getChefB()));
        dto.setResponsable(toSimpleDTO(personnel.getResponsable()));
        dto.setRhResponsable(toSimpleDTO(personnel.getRhResponsable()));
        
        return dto;
    }

    public PersonnelDTO.PersonnelSimpleDTO toSimpleDTO(Personnel personnel) {
        if (personnel == null) return null;
        
        PersonnelDTO.PersonnelSimpleDTO dto = new PersonnelDTO.PersonnelSimpleDTO();
        dto.setId(personnel.getId());
        dto.setNom(personnel.getNom());
        dto.setPrenom(personnel.getPrenom());
        dto.setMatriculeP(personnel.getMatriculeP());
        dto.setPoste(personnel.getPoste());
        
        return dto;
    }

    public List<PersonnelDTO> toDTOList(List<Personnel> personnels) {
        return personnels.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
    
    public CongeDTO toCongeDTO(Conge conge) {
        if (conge == null) return null;
        
        CongeDTO dto = new CongeDTO();
        dto.setIdConge(conge.getIdConge());
        dto.setDateCong(conge.getDateCong());
        dto.setDateDeb(conge.getDateDeb());
        dto.setDateFin(conge.getDateFin());
        dto.setMotif(conge.getMotif());
        dto.setCommentaire(conge.getCommentaire());
        // Convert String nbJours to int
        try {
            dto.setNbJours(Integer.parseInt(conge.getNbJours()));
        } catch (NumberFormatException e) {
            dto.setNbJours(0);
        }
        dto.setStatutConge(conge.getStatutConge());
        dto.setStatut(conge.getStatutConge() != null ? conge.getStatutConge().name() : "EN_ATTENTE");
        // Convert LocalDateTime to LocalDate
        dto.setDateValidationChefA(conge.getDateValidationChefA() != null ? conge.getDateValidationChefA().toLocalDate() : null);
        dto.setDateValidationChefB(conge.getDateValidationChefB() != null ? conge.getDateValidationChefB().toLocalDate() : null);
        dto.setDateValidationRh(conge.getDateValidationRh() != null ? conge.getDateValidationRh().toLocalDate() : null);
        
        // Personnel (simplified)
        if (conge.getPersonnel() != null) {
            dto.setPersonnel(toCongePersonnelDTO(conge.getPersonnel()));
        }
        
        // Validateurs (simplified)
        dto.setValidateurChefA(toCongePersonnelDTO(conge.getValidateurChefA()));
        dto.setValidateurChefB(toCongePersonnelDTO(conge.getValidateurChefB()));
        dto.setValidateurRh(toCongePersonnelDTO(conge.getValidateurRh()));
        
        // Type de congé (simplified)
        if (conge.getTypeConge() != null) {
            CongeDTO.TypeCongeSimpleDTO typeDTO = new CongeDTO.TypeCongeSimpleDTO();
            typeDTO.setIdTypeConge(conge.getTypeConge().getIdType());
            typeDTO.setNomTypeConge(conge.getTypeConge().getNomTypeconge());
            typeDTO.setDescription(""); // Description n'existe pas dans l'entité
            typeDTO.setDureeMax(conge.getTypeConge().getMaxAllowedDays());
            dto.setTypeConge(typeDTO);
        }
        
        return dto;
    }
    
    private CongeDTO.PersonnelSimpleDTO toCongePersonnelDTO(Personnel personnel) {
        if (personnel == null) return null;
        
        CongeDTO.PersonnelSimpleDTO dto = new CongeDTO.PersonnelSimpleDTO();
        dto.setId(personnel.getId());
        dto.setNom(personnel.getNom());
        dto.setPrenom(personnel.getPrenom());
        dto.setMatriculeP(personnel.getMatriculeP());
        dto.setPoste(personnel.getPoste());
        dto.setEmail(personnel.getEmail());
        
        // Service (simplified)
        if (personnel.getService() != null) {
            CongeDTO.PersonnelSimpleDTO.ServiceSimpleDTO serviceDTO = new CongeDTO.PersonnelSimpleDTO.ServiceSimpleDTO();
            serviceDTO.setIdService(personnel.getService().getIdService());
            serviceDTO.setNomService(personnel.getService().getNomService());
            dto.setService(serviceDTO);
        }
        
        return dto;
    }
    
    public List<CongeDTO> toCongeDTOList(List<Conge> conges) {
        return conges.stream()
                .map(this::toCongeDTO)
                .collect(Collectors.toList());
    }
}