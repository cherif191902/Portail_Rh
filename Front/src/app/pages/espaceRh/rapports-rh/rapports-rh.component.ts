import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RhService } from '../rh.service';

interface RapportData {
  id: number;
  nom: string;
  description: string;
  type: string;
  dateCreation: string;
  createur: string;
  statut: string;
}

@Component({
  selector: 'app-rapports-rh',
  templateUrl: './rapports-rh.component.html',
  styleUrls: ['./rapports-rh.component.scss']
})
export class RapportsRhComponent implements OnInit {
  rapports: RapportData[] = [];
  filteredRapports: RapportData[] = [];
  loading = false;
  message = '';
  errorMsg = '';
  
  // Formulaire de création de rapport
  rapportForm: FormGroup;
  showCreateForm = false;
  
  // Filtres
  searchTerm = '';
  typeFilter = '';
  statutFilter = '';

  constructor(
    private rhService: RhService,
    private fb: FormBuilder
  ) {
    this.rapportForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      dateDebut: [''],
      dateFin: [''],
      services: [[]],
      utilisateurs: [[]]
    });
  }

  ngOnInit(): void {
    this.loadRapports();
  }

  loadRapports(): void {
    this.loading = true;
    this.errorMsg = '';
    
    // Simulation de données - remplacer par l'appel API réel
    this.rapports = [
      {
        id: 1,
        nom: 'Rapport Congés Mensuel',
        description: 'Rapport des congés du mois de décembre 2024',
        type: 'Congés',
        dateCreation: '2024-12-01',
        createur: 'Admin RH',
        statut: 'Terminé'
      },
      {
        id: 2,
        nom: 'Statistiques Utilisateurs',
        description: 'Analyse des utilisateurs par service',
        type: 'Utilisateurs',
        dateCreation: '2024-11-28',
        createur: 'Admin RH',
        statut: 'En cours'
      },
      {
        id: 3,
        nom: 'Rapport Services',
        description: 'Évolution des services et affectations',
        type: 'Services',
        dateCreation: '2024-11-25',
        createur: 'Admin RH',
        statut: 'Terminé'
      }
    ];
    
    this.filteredRapports = [...this.rapports];
    this.loading = false;
  }

  applyFilters(): void {
    let filtered = [...this.rapports];
    
    if (this.searchTerm) {
      filtered = filtered.filter(rapport => 
        rapport.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        rapport.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    if (this.typeFilter) {
      filtered = filtered.filter(rapport => rapport.type === this.typeFilter);
    }
    
    if (this.statutFilter) {
      filtered = filtered.filter(rapport => rapport.statut === this.statutFilter);
    }
    
    this.filteredRapports = filtered;
  }

  onCreateRapport(): void {
    if (this.rapportForm.valid) {
      const newRapport: RapportData = {
        id: this.rapports.length + 1,
        nom: this.rapportForm.value.nom,
        description: this.rapportForm.value.description,
        type: this.rapportForm.value.type,
        dateCreation: new Date().toISOString().split('T')[0],
        createur: 'Admin RH',
        statut: 'En cours'
      };
      
      this.rapports.unshift(newRapport);
      this.applyFilters();
      this.rapportForm.reset();
      this.showCreateForm = false;
      this.message = 'Rapport créé avec succès';
      setTimeout(() => this.message = '', 3000);
    }
  }

  onGenerateRapport(rapport: RapportData): void {
    this.loading = true;
    // Simulation de génération de rapport
    setTimeout(() => {
      rapport.statut = 'Terminé';
      this.loading = false;
      this.message = `Rapport "${rapport.nom}" généré avec succès`;
      setTimeout(() => this.message = '', 3000);
    }, 2000);
  }

  onDownloadRapport(rapport: RapportData): void {
    // Simulation de téléchargement
    this.message = `Téléchargement du rapport "${rapport.nom}" en cours...`;
    setTimeout(() => this.message = '', 3000);
  }

  onDeleteRapport(rapport: RapportData): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le rapport "${rapport.nom}" ?`)) {
      this.rapports = this.rapports.filter(r => r.id !== rapport.id);
      this.applyFilters();
      this.message = 'Rapport supprimé avec succès';
      setTimeout(() => this.message = '', 3000);
    }
  }

  getBadgeClass(statut: string): string {
    switch(statut) {
      case 'Terminé': return 'success';
      case 'En cours': return 'warning';
      case 'Erreur': return 'danger';
      default: return 'secondary';
    }
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.typeFilter = '';
    this.statutFilter = '';
    this.applyFilters();
  }
}

