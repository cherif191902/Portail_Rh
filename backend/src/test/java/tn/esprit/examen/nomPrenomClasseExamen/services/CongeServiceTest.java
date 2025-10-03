package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Conge;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Personnel;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CongeRepository;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.NotificationRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CongeServiceTest {

    @Mock
    private CongeRepository congeRepository;

    @Mock
    private NotificationRepository notificationRepository;

    @InjectMocks
    private CongeService congeService;

    private Personnel perso;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        perso = new Personnel();
        perso.setMatriculeP("TST001");
        perso.setNom("TestNom");
        perso.setPrenom("TestPrenom");
    }

    @Test
    void submitConge_shouldThrow_whenDateInvalid() {
        Conge c = new Conge();
        c.setDateDeb(LocalDate.of(2025, 5, 10));
        c.setDateFin(LocalDate.of(2025, 5, 1));

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class, () -> congeService.submitConge(c, perso));
        assertTrue(ex.getMessage().contains("début"));
    }

    @Test
    void submitConge_shouldThrow_whenOverlap() {
        Conge existing = new Conge();
        existing.setIdConge(1L);
        existing.setDateDeb(LocalDate.of(2025, 6, 1));
        existing.setDateFin(LocalDate.of(2025, 6, 10));
        existing.setRepChefsNiveau1("EN_ATTENTE");

        when(congeRepository.findByPersonnel(any())).thenReturn(List.of(existing));

        Conge c = new Conge();
        c.setDateDeb(LocalDate.of(2025, 6, 5));
        c.setDateFin(LocalDate.of(2025, 6, 7));

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class, () -> congeService.submitConge(c, perso));
        assertTrue(ex.getMessage().contains("Chevauchement"));
    }

    @Test
    void rhDecision_shouldThrow_whenSoldeInsuffisant() {
        Conge c = new Conge();
        c.setIdConge(2L);
        c.setNbJours("10");
        c.setSoldeConge(5L);
        c.setRepRh("EN_ATTENTE");
        c.setPersonnel(perso);

        when(congeRepository.findById(2L)).thenReturn(Optional.of(c));
        when(congeRepository.findByPersonnel(any())).thenReturn(new ArrayList<>());

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class, () -> congeService.rhDecision(2L, perso, "APPROUVE", null));
        assertTrue(ex.getMessage().contains("Solde"));
    }
}
