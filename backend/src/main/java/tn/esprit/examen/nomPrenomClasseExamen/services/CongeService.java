package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Notification;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CongeRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.NotificationRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CongeApprovalRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PersonnelRepository;
import tn.esprit.examen.nomPrenomClasseExamen.entities.CongeApproval;

import java.util.List;
import java.util.Optional;

@Service
public class CongeService {

    private final CongeRepository congeRepository;
    private final NotificationRepository notificationRepository;
    private final CongeApprovalRepository approvalRepository;
    private final PersonnelRepository personnelRepository;

    public CongeService(CongeRepository congeRepository, NotificationRepository notificationRepository, CongeApprovalRepository approvalRepository, PersonnelRepository personnelRepository) {
        this.congeRepository = congeRepository;
        this.notificationRepository = notificationRepository;
        this.approvalRepository = approvalRepository;
        this.personnelRepository = personnelRepository;
    }

    @Transactional
    public Conge submitConge(Conge conge, Personnel auteur) {
        // Validation: dates
        if (conge.getDateDeb() == null || conge.getDateFin() == null) {
            throw new IllegalArgumentException("Date de début et de fin obligatoires");
        }
        if (conge.getDateDeb().isAfter(conge.getDateFin())) {
            throw new IllegalArgumentException("La date de début doit être antérieure ou égale à la date de fin");
        }

        // Validation: chevauchement avec autres congés (non refusés)
        List<Conge> existing = congeRepository.findByPersonnel(auteur);
        for (Conge ex : existing) {
            if (ex.getIdConge() == null) continue;
            if ("REFUSE".equals(ex.getRepChefsNiveau1()) || "REFUSE".equals(ex.getRepChefsNiveau2()) || "REFUSE".equals(ex.getRepRh())) continue;
            // check overlap
            if (!(conge.getDateFin().isBefore(ex.getDateDeb()) || conge.getDateDeb().isAfter(ex.getDateFin()))) {
                throw new IllegalArgumentException("Chevauchement avec une autre demande de congé (id=" + ex.getIdConge() + ")");
            }
        }

        conge.setPersonnel(auteur);
        if (conge.getDateCong() == null) conge.setDateCong(java.time.LocalDate.now());
        conge.setRepChefsNiveau1("EN_ATTENTE");
        conge.setRepChefsNiveau2("EN_ATTENTE");
        conge.setRepRh("EN_ATTENTE");
        Conge saved = congeRepository.save(conge);

        // notifier le chef du service si présent (niveau1)
        Personnel chef = auteur.getResponsable() != null ? auteur.getResponsable() : (auteur.getService() == null ? null : auteur.getService().getPersonnels().stream().filter(Personnel::isChefService).findFirst().orElse(null));
        if (chef != null) {
            Notification n = new Notification("Nouvelle demande de congé de " + auteur.getNomComplet(), "CONGE", chef, auteur);
            notificationRepository.save(n);
        }

        return saved;
    }

    @Transactional
    public Optional<Conge> chefDecision(Long congeId, Personnel chef, String decision, String commentaire) {
        Optional<Conge> oc = congeRepository.findById(congeId);
        if (oc.isEmpty()) return Optional.empty();
        Conge c = oc.get();
        // Vérifier que le chef est responsable direct (responsable) du demandeur ou fait partie du même service
        boolean authorized = false;
        if (c.getPersonnel().getResponsable() != null && c.getPersonnel().getResponsable().getId().equals(chef.getId())) authorized = true;
        if (!authorized && c.getPersonnel().getService() != null && chef.getService() != null && c.getPersonnel().getService().getIdService().equals(chef.getService().getIdService())) authorized = true;
        if (!authorized) return Optional.empty();

        // Si niveau1
        if ("EN_ATTENTE".equals(c.getRepChefsNiveau1())) {
            if ("APPROUVE".equalsIgnoreCase(decision)) {
                c.setRepChefsNiveau1("APPROUVE");
                // enregistrer approval
                CongeApproval a = new CongeApproval();
                a.setConge(c);
                a.setApprover(chef);
                a.setLevel(1);
                a.setDecision("APPROUVE");
                a.setCommentaire(commentaire);
                approvalRepository.save(a);
                // notifier le niveau2 (manager du manager) si existe
                Personnel niveau2 = c.getPersonnel().getResponsable() != null ? c.getPersonnel().getResponsable().getResponsable() : null;
                if (niveau2 != null) {
                    Notification n = new Notification("Demande validée au niveau 1: merci de valider (niveau2)", "CONGE", niveau2, chef);
                    notificationRepository.save(n);
                }
            } else if ("REFUSE".equalsIgnoreCase(decision)) {
                c.setRepChefsNiveau1("REFUSE");
                c.setCommentaire(commentaire);
                CongeApproval a = new CongeApproval();
                a.setConge(c);
                a.setApprover(chef);
                a.setLevel(1);
                a.setDecision("REFUSE");
                a.setCommentaire(commentaire);
                approvalRepository.save(a);
            }
        } else if ("APPROUVE".equals(c.getRepChefsNiveau1()) && "EN_ATTENTE".equals(c.getRepChefsNiveau2())) {
            // niveau2 approval (manager du manager)
            if ("APPROUVE".equalsIgnoreCase(decision)) {
                c.setRepChefsNiveau2("APPROUVE");
                CongeApproval a = new CongeApproval();
                a.setConge(c);
                a.setApprover(chef);
                a.setLevel(2);
                a.setDecision("APPROUVE");
                a.setCommentaire(commentaire);
                approvalRepository.save(a);
                // notifier RH
                // notifier premier RH trouvé
                List<Personnel> rhs = personnelRepository.findByRolesNomRole(tn.esprit.examen.nomPrenomClasseExamen.entities.ERole.ROLE_RH);
                if (rhs != null && !rhs.isEmpty()) {
                    Notification n = new Notification("Demande validée par niveaux chefs: veuillez valider (RH)", "CONGE", rhs.get(0), chef);
                    notificationRepository.save(n);
                }
            } else if ("REFUSE".equalsIgnoreCase(decision)) {
                c.setRepChefsNiveau2("REFUSE");
                c.setCommentaire(commentaire);
                CongeApproval a = new CongeApproval();
                a.setConge(c);
                a.setApprover(chef);
                a.setLevel(2);
                a.setDecision("REFUSE");
                a.setCommentaire(commentaire);
                approvalRepository.save(a);
            }
        }

        Conge saved = congeRepository.save(c);

        // notifier demandeur
        Notification n = new Notification("Votre demande de congé a été " + (c.getRepChefsNiveau2() != null && c.getRepChefsNiveau2().equals("APPROUVE") ? "approuvée au niveau 2" : c.getRepChefsNiveau1()), "CONGE", c.getPersonnel(), chef);
        notificationRepository.save(n);

        return Optional.of(saved);
    }

    @Transactional
    public Optional<Conge> rhDecision(Long congeId, Personnel rh, String decision, String commentaire) {
        Optional<Conge> oc = congeRepository.findById(congeId);
        if (oc.isEmpty()) return Optional.empty();
        Conge c = oc.get();
        if (!"EN_ATTENTE".equals(c.getRepRh())) {
            // allow only if pending
        }

        if ("APPROUVE".equalsIgnoreCase(decision)) {
            // Vérifier solde suffisant
            long nb = 0L;
            try { nb = c.getNbJours() == null ? 0L : Long.parseLong(c.getNbJours()); } catch (NumberFormatException e) { throw new IllegalArgumentException("Nombre de jours invalide"); }

            Long currentSolde = c.getSoldeConge();
            if (currentSolde == null) {
                // calculer à partir des congés approuvés précédents (hypothèse total annuel = 25)
                long used = 0L;
                List<Conge> all = congeRepository.findByPersonnel(c.getPersonnel());
                for (Conge ex : all) {
                    if (ex.getRepRh() != null && "APPROUVE".equals(ex.getRepRh())) {
                        try { used += ex.getNbJours() == null ? 0L : Long.parseLong(ex.getNbJours()); } catch (NumberFormatException ignored) {}
                    }
                }
                long total = 25L;
                currentSolde = Math.max(0L, total - used);
            }

            if (currentSolde < nb) {
                throw new IllegalArgumentException("Solde de congés insuffisant: solde=" + currentSolde + ", demandé=" + nb);
            }

            c.setRepRh("APPROUVE");
            c.setSoldeConge(Math.max(0L, currentSolde - nb));
        } else if ("REFUSE".equalsIgnoreCase(decision)) {
            c.setRepRh("REFUSE");
            c.setCommentaire(commentaire);
        }

        Conge saved = congeRepository.save(c);

        Notification n = new Notification("Votre demande de congé a été " + c.getRepRh(), "CONGE", c.getPersonnel(), rh);
        notificationRepository.save(n);

        return Optional.of(saved);
    }

    @Transactional(readOnly = true)
    public java.util.List<tn.esprit.examen.nomPrenomClasseExamen.entities.CongeApproval> getApprovalsForConge(Long congeId) {
    return approvalRepository.findByConge_IdConge(congeId);
    }

}
