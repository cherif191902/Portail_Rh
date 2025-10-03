// Modèles pour le système de notifications

export interface Notification {
  id?: number;
  message: string;
  isRead: boolean;
  createdAt: string; // DateTime ISO string
  type: NotificationType;
  priority?: NotificationPriority;
  action?: string; // URL ou action à effectuer
  icon?: string;
  destinataire?: Personnel;
  expediteur?: Personnel;
}

export enum NotificationType {
  CONGE = 'CONGE',
  POINTAGE = 'POINTAGE',
  SYSTEME = 'SYSTEME',
  CHAT = 'CHAT',
  SANCTION = 'SANCTION'
}

export enum NotificationPriority {
  BASSE = 'BASSE',
  NORMALE = 'NORMALE',
  HAUTE = 'HAUTE',
  URGENTE = 'URGENTE'
}

// DTOs pour les requêtes
export interface NotificationRequest {
  message: string;
  type: NotificationType;
  priority?: NotificationPriority;
  action?: string;
  icon?: string;
  destinataireMatricule: string;
  expediteurMatricule?: string;
}

export interface NotificationResponse {
  id: number;
  message: string;
  isRead: boolean;
  createdAt: string;
  type: NotificationType;
  priority: NotificationPriority;
  action?: string;
  icon?: string;
  destinataire: {
    matriculeP: string;
    nom: string;
    prenom: string;
  };
  expediteur?: {
    matriculeP: string;
    nom: string;
    prenom: string;
  };
}

export interface NotificationMarkReadRequest {
  notificationIds: number[];
}

export interface NotificationBulkRequest {
  destinatairesMatricules: string[];
  message: string;
  type: NotificationType;
  priority?: NotificationPriority;
  action?: string;
  icon?: string;
}

// Modèles pour les statistiques
export interface NotificationStats {
  totalNotifications: number;
  notificationsNonLues: number;
  notificationsParType: { [key: string]: number };
  notificationsParPriorite: { [key: string]: number };
  notificationsParJour: { [key: string]: number };
}

export interface NotificationSummary {
  matricule: string;
  totalNotifications: number;
  nonLues: number;
  hautePriorite: number;
  derniereNotification?: string;
}

// Modèles pour les préférences
export interface NotificationPreferences {
  matricule: string;
  emailEnabled: boolean;
  pushEnabled: boolean;
  typesActives: NotificationType[];
  prioriteMinimale: NotificationPriority;
  heuresQuietes: {
    debut: string; // HH:mm
    fin: string; // HH:mm
  };
}

// Import Personnel
import { Personnel } from './auth.models';
