// Modèles pour le système de pointage

export interface Pointage {
  id?: number;
  type: PointageType;
  dataPoint: string; // DateTime ISO string
  status?: PointageStatus;
  commentaire?: string;
  localisation?: string;
  isManual?: boolean;
  personnel?: Personnel;
}

export enum PointageType {
  ENTREE = 'ENTREE',
  SORTIE = 'SORTIE',
  PAUSE_DEBUT = 'PAUSE_DEBUT',
  PAUSE_FIN = 'PAUSE_FIN'
}

export enum PointageStatus {
  VALIDE = 'VALIDE',
  INVALIDE = 'INVALIDE',
  EN_ATTENTE = 'EN_ATTENTE'
}

// DTOs pour les requêtes
export interface PointageRequest {
  type: PointageType;
  dataPoint?: string; // Si non fourni, utilise l'heure actuelle
  commentaire?: string;
  localisation?: string;
  isManual?: boolean;
}

export interface PointageResponse {
  id: number;
  type: PointageType;
  dataPoint: string;
  status: PointageStatus;
  commentaire?: string;
  localisation?: string;
  isManual: boolean;
  personnel: {
    matriculeP: string;
    nom: string;
    prenom: string;
  };
}

export interface PointageManualRequest {
  matriculePersonnel: string;
  type: PointageType;
  dataPoint: string;
  commentaire: string;
  localisation?: string;
}

// Modèles pour les rapports
export interface PointageJournalier {
  date: string;
  matricule: string;
  nom: string;
  prenom: string;
  heureEntree?: string;
  heureSortie?: string;
  heuresTravaillees?: number;
  retard?: number; // en minutes
  status: 'PRESENT' | 'ABSENT' | 'RETARD' | 'PARTIEL';
}

export interface PointageHebdomadaire {
  semaine: string;
  matricule: string;
  nom: string;
  prenom: string;
  joursPresents: number;
  heuresTravaillees: number;
  retards: number;
  absences: number;
}

export interface PointageStats {
  totalPointages: number;
  pointagesValides: number;
  pointagesInvalides: number;
  pointagesManuels: number;
  tauxPresence: number;
  retardMoyen: number;
  heuresMoyennesTravaillees: number;
}

export interface PresenceStats {
  date: string;
  totalPersonnel: number;
  presents: number;
  absents: number;
  retards: number;
  tauxPresence: number;
}

// Import Personnel
import { Personnel } from './auth.models';
