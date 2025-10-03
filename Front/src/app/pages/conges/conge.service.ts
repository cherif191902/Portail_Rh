import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CongeApiService } from './conge-api.service';
import { environment } from '../../../environments/environment';

export interface TypeConge {
  id: number;
  nom: string;
  dureeMax: number;
  couleur?: string;
}

export interface DemandeConge {
  id: number;
  typeConge: string;
  dateDebut: Date;
  dateFin: Date;
  duree: number;
  statut: 'EN_ATTENTE' | 'APPROUVE' | 'REFUSE' | 'ANNULE';
  dateDemande: Date;
  commentaire?: string;
  motifRefus?: string;
  fichierJustificatif?: File;
}

// Interface pour l'envoi des données au backend (dates en format ISO string)
export interface CongeRequest {
  typeConge: string;
  dateDebut: string; // Format ISO: yyyy-MM-dd
  dateFin: string;   // Format ISO: yyyy-MM-dd
  duree: number;
  commentaire?: string;
  fichierJustificatif?: File;
}

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private readonly USE_MOCK_DATA = false; // Désactivé pour tester l'API backend réelle
  
  // Système de notification pour les mises à jour en temps réel
  private demandesUpdated$ = new BehaviorSubject<boolean>(false);
  public demandesUpdatedNotification$ = this.demandesUpdated$.asObservable();
  
  // Stockage en mémoire des demandes créées (pour le mode mock)
  private demandesMemoire: DemandeConge[] = [];
  private nextId = 4; // ID pour les nouvelles demandes
  
  private typesConges: TypeConge[] = [
    { id: 1, nom: 'Congé payé', dureeMax: 30, couleur: '#28a745' },
    { id: 2, nom: 'Congé maladie', dureeMax: 365, couleur: '#dc3545' },
    { id: 3, nom: 'Congé maternité', dureeMax: 98, couleur: '#e83e8c' },
    { id: 4, nom: 'Congé paternité', dureeMax: 11, couleur: '#20c997' },
    { id: 5, nom: 'Congé sans solde', dureeMax: 365, couleur: '#6f42c1' },
    { id: 6, nom: 'Congé formation', dureeMax: 30, couleur: '#fd7e14' }
  ];

  constructor(private congeApiService: CongeApiService) {
    // Initialiser les données mock au démarrage
    this.initializeMockData();
  }

  /**
   * Initialise les données mock par défaut
   */
  private initializeMockData() {
    this.demandesMemoire = [
      {
        id: 1,
        typeConge: 'Congé payé',
        dateDebut: new Date('2024-12-20'),
        dateFin: new Date('2024-12-31'),
        duree: 12,
        statut: 'APPROUVE',
        dateDemande: new Date('2024-11-15'),
        commentaire: 'Vacances de fin d\'année en famille'
      },
      {
        id: 2,
        typeConge: 'Congé maladie',
        dateDebut: new Date('2024-11-10'),
        dateFin: new Date('2024-11-12'),
        duree: 3,
        statut: 'EN_ATTENTE',
        dateDemande: new Date('2024-11-09'),
        commentaire: 'Grippe saisonnière - certificat médical fourni'
      },
      {
        id: 3,
        typeConge: 'Congé formation',
        dateDebut: new Date('2024-10-15'),
        dateFin: new Date('2024-10-17'),
        duree: 3,
        statut: 'REFUSE',
        dateDemande: new Date('2024-10-01'),
        commentaire: 'Formation Angular avancé',
        motifRefus: 'Planning trop chargé en octobre, reporter en novembre'
      }
    ];
  }

  /**
   * Récupère la liste des types de congés disponibles
   */
  getTypesConges(): Observable<TypeConge[]> {
    if (this.USE_MOCK_DATA) {
      return of(this.typesConges);
    }
    
    // Mode production avec API réelle
    return this.congeApiService.getTypesConges().pipe(
      map(response => {
        if (Array.isArray(response)) {
          // Si la réponse est directement un tableau
          return response.map(type => ({
            id: type.id,
            nom: type.nom,
            dureeMax: type.dureeMax,
            couleur: this.getColorForType(type.nom)
          }));
        } else if (response.data) {
          // Si la réponse a une structure ApiResponse
          return response.data.map(type => ({
            id: type.id,
            nom: type.nom,
            dureeMax: type.dureeMax,
            couleur: this.getColorForType(type.nom)
          }));
        }
        return [];
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des types de congés:', error);
        return of(this.typesConges); // Fallback vers les données mock
      })
    );
  }

  private getColorForType(nom: string): string {
    const colorMap: { [key: string]: string } = {
      'Congé annuel': '#28a745',
      'Congé payé': '#28a745', 
      'Congé maladie': '#dc3545',
      'Congé maternité': '#e83e8c',
      'Congé paternité': '#20c997',
      'Congé exceptionnel': '#fd7e14',
      'Congé sans solde': '#6f42c1',
      'Congé formation': '#fd7e14'
    };
    return colorMap[nom] || '#6c757d';
  }

  /**
   * Soumet une nouvelle demande de congé
   */
  creerDemande(demande: CongeRequest): Observable<DemandeConge> {
    if (this.USE_MOCK_DATA) {
      // Mode développement avec données de test - ajout à la mémoire
      const nouvelleDemande: DemandeConge = {
        id: this.nextId++, // ID incrémental pour éviter les doublons
        typeConge: demande.typeConge || '',
        dateDebut: demande.dateDebut ? new Date(demande.dateDebut) : new Date(),
        dateFin: demande.dateFin ? new Date(demande.dateFin) : new Date(),
        duree: demande.duree || 1,
        statut: 'EN_ATTENTE',
        dateDemande: new Date(),
        commentaire: demande.commentaire,
        fichierJustificatif: demande.fichierJustificatif
      };
      
      // Ajouter à la mémoire
      this.demandesMemoire.push(nouvelleDemande);
      
      // Notifier les composants de la mise à jour
      this.demandesUpdated$.next(true);
      
      console.log('✅ Demande de congé créée et ajoutée à la mémoire:', nouvelleDemande);
      console.log('📊 Total demandes en mémoire:', this.demandesMemoire.length);
      return of(nouvelleDemande);
    }

    // Mode production avec API réelle - les dates sont déjà au format ISO string
    const apiRequest = {
      typeConge: demande.typeConge || '',
      dateDebut: demande.dateDebut || '',
      dateFin: demande.dateFin || '',
      duree: demande.duree,
      commentaire: demande.commentaire
    };

    return this.congeApiService.creerDemandeConge(apiRequest).pipe(
      map(response => this.mapApiResponseToDemandeConge(response)),
      catchError(error => {
        console.error('Erreur API lors de la création de demande:', error);
        throw error;
      })
    );
  }

  /**
   * Récupère toutes les demandes de congé de l'utilisateur connecté
   */
  getMesDemandesConges(): Observable<DemandeConge[]> {
    if (this.USE_MOCK_DATA) {
      // Retourner les données en mémoire (incluant les nouvelles créées)
      console.log('📋 Récupération des demandes depuis la mémoire:', this.demandesMemoire.length);
      return of([...this.demandesMemoire]);
    }

    // Mode production avec API réelle
    return this.congeApiService.getMesDemandesConges().pipe(
      map(response => response.map(item => this.mapApiResponseToDemandeConge(item))),
      catchError(error => {
        console.error('Erreur API lors de la récupération des demandes:', error);
        return of([]); // Retourner un tableau vide en cas d'erreur
      })
    );
  }

  /**
   * Annule une demande en attente
   */
  annulerDemande(demandeId: number): Observable<boolean> {
    console.log('Annulation de la demande:', demandeId);
    
    if (this.USE_MOCK_DATA) {
      // Mettre à jour le statut dans la mémoire
      const demande = this.demandesMemoire.find(d => d.id === demandeId);
      if (demande) {
        demande.statut = 'ANNULE';
        this.demandesUpdated$.next(true); // Notifier la mise à jour
        console.log('✅ Demande annulée en mémoire:', demande);
        return of(true);
      }
      return of(false);
    }
    
    // Mode API réelle
    return of(true);
  }

  /**
   * Calcule les statistiques des congés
   */
  getStatistiquesConges(): Observable<any> {
    return new Observable(observer => {
      this.getMesDemandesConges().subscribe(demandes => {
        const stats = {
          total: demandes.length,
          enAttente: demandes.filter(d => d.statut === 'EN_ATTENTE').length,
          approuvees: demandes.filter(d => d.statut === 'APPROUVE').length,
          refusees: demandes.filter(d => d.statut === 'REFUSE').length,
          joursUtilises: demandes
            .filter(d => d.statut === 'APPROUVE')
            .reduce((total, d) => total + d.duree, 0),
          joursRestants: 30 // À calculer selon les règles métier
        };
        observer.next(stats);
        observer.complete();
      });
    });
  }

  // Méthodes utilitaires privées

  private dateToISOString(date: Date): string {
    return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
  }

  private mapApiResponseToDemandeConge(apiResponse: any): DemandeConge {
    return {
      id: apiResponse.id,
      typeConge: apiResponse.typeConge || 'Non spécifié',
      dateDebut: new Date(apiResponse.dateDeb || apiResponse.dateDebut),
      dateFin: new Date(apiResponse.dateFin),
      duree: apiResponse.nbJours || apiResponse.duree || 0,
      statut: this.mapApiStatutToLocal(apiResponse.repChefsNiveau1 || apiResponse.statut || 'EN_ATTENTE'),
      dateDemande: new Date(apiResponse.dateCreation || apiResponse.dateDemande || new Date()),
      commentaire: apiResponse.motif || apiResponse.commentaire || '',
      motifRefus: apiResponse.motifRefus
    };
  }

  private mapApiStatutToLocal(apiStatut: string): 'EN_ATTENTE' | 'APPROUVE' | 'REFUSE' | 'ANNULE' {
    const statutMap: { [key: string]: 'EN_ATTENTE' | 'APPROUVE' | 'REFUSE' | 'ANNULE' } = {
      'PENDING': 'EN_ATTENTE',
      'EN_ATTENTE': 'EN_ATTENTE',
      'APPROVED': 'APPROUVE',
      'APPROUVE': 'APPROUVE', 
      'REJECTED': 'REFUSE',
      'REFUSE': 'REFUSE',
      'CANCELLED': 'ANNULE',
      'ANNULE': 'ANNULE'
    };

    return statutMap[apiStatut.toUpperCase()] || 'EN_ATTENTE';
  }
}