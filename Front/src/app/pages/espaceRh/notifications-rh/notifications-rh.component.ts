import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RhService } from '../rh.service';

interface NotificationData {
  id: number;
  titre: string;
  message: string;
  type: string;
  destinataire: string;
  dateCreation: string;
  statut: string;
  priorite: string;
  lu: boolean;
}

@Component({
  selector: 'app-notifications-rh',
  templateUrl: './notifications-rh.component.html',
  styleUrls: ['./notifications-rh.component.scss']
})
export class NotificationsRhComponent implements OnInit {
  notifications: NotificationData[] = [];
  filteredNotifications: NotificationData[] = [];
  loading = false;
  message = '';
  errorMsg = '';
  
  // Formulaire de création
  notificationForm: FormGroup;
  showCreateForm = false;
  
  // Filtres
  searchTerm = '';
  typeFilter = '';
  statutFilter = '';
  prioriteFilter = '';

  constructor(
    private rhService: RhService,
    private fb: FormBuilder
  ) {
    this.notificationForm = this.fb.group({
      titre: ['', Validators.required],
      message: ['', Validators.required],
      type: ['', Validators.required],
      destinataire: ['', Validators.required],
      priorite: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.loading = true;
    this.errorMsg = '';
    
    // Simulation de données - remplacer par l'appel API réel
    this.notifications = [
      {
        id: 1,
        titre: 'Nouvelle demande de congé',
        message: 'John Doe a soumis une demande de congé du 15 au 20 décembre',
        type: 'Congé',
        destinataire: 'Chef de service',
        dateCreation: '2024-12-01T10:30:00',
        statut: 'Non lu',
        priorite: 'Normale',
        lu: false
      },
      {
        id: 2,
        titre: 'Demande approuvée',
        message: 'La demande de congé de Marie Dupont a été approuvée',
        type: 'Validation',
        destinataire: 'Marie Dupont',
        dateCreation: '2024-12-01T09:15:00',
        statut: 'Lu',
        priorite: 'Faible',
        lu: true
      },
      {
        id: 3,
        titre: 'Rapport mensuel disponible',
        message: 'Le rapport des congés du mois de novembre est maintenant disponible',
        type: 'Rapport',
        destinataire: 'Tous les RH',
        dateCreation: '2024-12-01T08:00:00',
        statut: 'Lu',
        priorite: 'Normale',
        lu: true
      },
      {
        id: 4,
        titre: 'Système en maintenance',
        message: 'Le système sera en maintenance le 5 décembre de 2h à 4h',
        type: 'Système',
        destinataire: 'Tous les utilisateurs',
        dateCreation: '2024-11-30T16:45:00',
        statut: 'Non lu',
        priorite: 'Élevée',
        lu: false
      },
      {
        id: 5,
        titre: 'Nouvel utilisateur créé',
        message: 'Un nouvel utilisateur a été ajouté au service IT',
        type: 'Utilisateur',
        destinataire: 'Admin RH',
        dateCreation: '2024-11-30T14:20:00',
        statut: 'Lu',
        priorite: 'Faible',
        lu: true
      }
    ];
    
    this.filteredNotifications = [...this.notifications];
    this.loading = false;
  }

  applyFilters(): void {
    let filtered = [...this.notifications];
    
    if (this.searchTerm) {
      filtered = filtered.filter(notification => 
        notification.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        notification.destinataire.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    if (this.typeFilter) {
      filtered = filtered.filter(notification => notification.type === this.typeFilter);
    }
    
    if (this.statutFilter) {
      filtered = filtered.filter(notification => notification.statut === this.statutFilter);
    }
    
    if (this.prioriteFilter) {
      filtered = filtered.filter(notification => notification.priorite === this.prioriteFilter);
    }
    
    this.filteredNotifications = filtered;
  }

  onCreateNotification(): void {
    if (this.notificationForm.valid) {
      const newNotification: NotificationData = {
        id: this.notifications.length + 1,
        titre: this.notificationForm.value.titre,
        message: this.notificationForm.value.message,
        type: this.notificationForm.value.type,
        destinataire: this.notificationForm.value.destinataire,
        dateCreation: new Date().toISOString(),
        statut: 'Non lu',
        priorite: this.notificationForm.value.priorite,
        lu: false
      };
      
      this.notifications.unshift(newNotification);
      this.applyFilters();
      this.notificationForm.reset();
      this.showCreateForm = false;
      this.message = 'Notification créée avec succès';
      setTimeout(() => this.message = '', 3000);
    }
  }

  onMarkAsRead(notification: NotificationData): void {
    notification.lu = true;
    notification.statut = 'Lu';
    this.message = 'Notification marquée comme lue';
    setTimeout(() => this.message = '', 3000);
  }

  onMarkAsUnread(notification: NotificationData): void {
    notification.lu = false;
    notification.statut = 'Non lu';
    this.message = 'Notification marquée comme non lue';
    setTimeout(() => this.message = '', 3000);
  }

  onDeleteNotification(notification: NotificationData): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer cette notification ?`)) {
      this.notifications = this.notifications.filter(n => n.id !== notification.id);
      this.applyFilters();
      this.message = 'Notification supprimée avec succès';
      setTimeout(() => this.message = '', 3000);
    }
  }

  onMarkAllAsRead(): void {
    this.notifications.forEach(notification => {
      notification.lu = true;
      notification.statut = 'Lu';
    });
    this.message = 'Toutes les notifications ont été marquées comme lues';
    setTimeout(() => this.message = '', 3000);
  }

  getTypeIcon(type: string): string {
    switch(type) {
      case 'Congé': return 'mdi-calendar';
      case 'Validation': return 'mdi-check-circle';
      case 'Rapport': return 'mdi-file-document';
      case 'Système': return 'mdi-cog';
      case 'Utilisateur': return 'mdi-account';
      default: return 'mdi-bell';
    }
  }

  getTypeColor(type: string): string {
    switch(type) {
      case 'Congé': return 'primary';
      case 'Validation': return 'success';
      case 'Rapport': return 'info';
      case 'Système': return 'warning';
      case 'Utilisateur': return 'secondary';
      default: return 'light';
    }
  }

  getPrioriteColor(priorite: string): string {
    switch(priorite) {
      case 'Élevée': return 'danger';
      case 'Normale': return 'warning';
      case 'Faible': return 'success';
      default: return 'secondary';
    }
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.typeFilter = '';
    this.statutFilter = '';
    this.prioriteFilter = '';
    this.applyFilters();
  }

  getUniqueTypes(): string[] {
    return [...new Set(this.notifications.map(n => n.type))];
  }

  getUniquePriorites(): string[] {
    return [...new Set(this.notifications.map(n => n.priorite))];
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => !n.lu).length;
  }
}

