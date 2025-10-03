import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RhService } from '../rh.service';

interface ConfigurationData {
  id: number;
  cle: string;
  valeur: string;
  description: string;
  categorie: string;
  type: string;
  modifiable: boolean;
}

@Component({
  selector: 'app-configuration-rh',
  templateUrl: './configuration-rh.component.html',
  styleUrls: ['./configuration-rh.component.scss']
})
export class ConfigurationRhComponent implements OnInit {
  configurations: ConfigurationData[] = [];
  filteredConfigurations: ConfigurationData[] = [];
  loading = false;
  message = '';
  errorMsg = '';
  
  // Formulaire de modification
  configForm: FormGroup;
  editingConfig: ConfigurationData | null = null;
  
  // Filtres
  searchTerm = '';
  categorieFilter = '';
  typeFilter = '';

  constructor(
    private rhService: RhService,
    private fb: FormBuilder
  ) {
    this.configForm = this.fb.group({
      cle: ['', Validators.required],
      valeur: ['', Validators.required],
      description: [''],
      categorie: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadConfigurations();
  }

  loadConfigurations(): void {
    this.loading = true;
    this.errorMsg = '';
    
    // Simulation de données - remplacer par l'appel API réel
    this.configurations = [
      {
        id: 1,
        cle: 'MAX_CONGES_ANNUELS',
        valeur: '25',
        description: 'Nombre maximum de jours de congés annuels autorisés',
        categorie: 'Congés',
        type: 'Nombre',
        modifiable: true
      },
      {
        id: 2,
        cle: 'DELAI_VALIDATION_CHEF',
        valeur: '48',
        description: 'Délai en heures pour la validation par le chef',
        categorie: 'Validation',
        type: 'Nombre',
        modifiable: true
      },
      {
        id: 3,
        cle: 'NOTIFICATION_EMAIL',
        valeur: 'true',
        description: 'Activer les notifications par email',
        categorie: 'Notifications',
        type: 'Booléen',
        modifiable: true
      },
      {
        id: 4,
        cle: 'SYSTEM_VERSION',
        valeur: '2.1.0',
        description: 'Version actuelle du système',
        categorie: 'Système',
        type: 'Texte',
        modifiable: false
      },
      {
        id: 5,
        cle: 'BACKUP_FREQUENCY',
        valeur: 'daily',
        description: 'Fréquence des sauvegardes',
        categorie: 'Système',
        type: 'Liste',
        modifiable: true
      }
    ];
    
    this.filteredConfigurations = [...this.configurations];
    this.loading = false;
  }

  applyFilters(): void {
    let filtered = [...this.configurations];
    
    if (this.searchTerm) {
      filtered = filtered.filter(config => 
        config.cle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        config.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    if (this.categorieFilter) {
      filtered = filtered.filter(config => config.categorie === this.categorieFilter);
    }
    
    if (this.typeFilter) {
      filtered = filtered.filter(config => config.type === this.typeFilter);
    }
    
    this.filteredConfigurations = filtered;
  }

  onEditConfig(config: ConfigurationData): void {
    this.editingConfig = config;
    this.configForm.patchValue({
      cle: config.cle,
      valeur: config.valeur,
      description: config.description,
      categorie: config.categorie,
      type: config.type
    });
  }

  onSaveConfig(): void {
    if (this.configForm.valid && this.editingConfig) {
      const updatedConfig = {
        ...this.editingConfig,
        ...this.configForm.value
      };
      
      const index = this.configurations.findIndex(c => c.id === updatedConfig.id);
      if (index !== -1) {
        this.configurations[index] = updatedConfig;
        this.applyFilters();
        this.editingConfig = null;
        this.configForm.reset();
        this.message = 'Configuration mise à jour avec succès';
        setTimeout(() => this.message = '', 3000);
      }
    }
  }

  onCancelEdit(): void {
    this.editingConfig = null;
    this.configForm.reset();
  }

  onResetConfig(config: ConfigurationData): void {
    if (confirm(`Êtes-vous sûr de vouloir réinitialiser la configuration "${config.cle}" ?`)) {
      // Logique de réinitialisation
      this.message = `Configuration "${config.cle}" réinitialisée`;
      setTimeout(() => this.message = '', 3000);
    }
  }

  getTypeIcon(type: string): string {
    switch(type) {
      case 'Nombre': return 'mdi-numeric';
      case 'Texte': return 'mdi-text';
      case 'Booléen': return 'mdi-toggle-switch';
      case 'Liste': return 'mdi-format-list-bulleted';
      default: return 'mdi-cog';
    }
  }

  getCategorieColor(categorie: string): string {
    switch(categorie) {
      case 'Congés': return 'primary';
      case 'Validation': return 'success';
      case 'Notifications': return 'info';
      case 'Système': return 'secondary';
      default: return 'light';
    }
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.categorieFilter = '';
    this.typeFilter = '';
    this.applyFilters();
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.configurations.map(c => c.categorie))];
  }

  getUniqueTypes(): string[] {
    return [...new Set(this.configurations.map(c => c.type))];
  }

  getModifiableCount(): number {
    return this.configurations.filter(c => c.modifiable).length;
  }

  getLockedCount(): number {
    return this.configurations.filter(c => !c.modifiable).length;
  }

  getCategoriesCount(): number {
    return this.getUniqueCategories().length;
  }
}
