// Modèles pour la gestion des congés

export interface TypeConge {
  idType?: number;
  nomTypeconge: string;
  maxAllowedDays: number;
  conges?: Conge[];
}

export interface Conge {
  idConge?: number;
  dateCong: string; // Date de la demande (ISO string)
  dateDeb: string; // Date de début (ISO string)
  dateFin: string; // Date de fin (ISO string)
  nbJours: string;
  soldeConge?: number;
  repChefsNiveau1?: string; // APPROUVE, REFUSE, EN_ATTENTE
  repChefsNiveau2?: string;
  repRh?: string;
  nom?: string;
  prenom?: string;
  motif?: string;
  commentaire?: string;
  personnel?: Personnel;
  typeConge?: TypeConge;
}

// DTOs pour les requêtes
export interface CongeRequest {
  dateDeb: string;
  dateFin: string;
  nbJours: string;
  motif: string;
  commentaire?: string;
  typeCongeId: number;
}

export interface CongeResponse {
  idConge: number;
  dateCong: string;
  dateDeb: string;
  dateFin: string;
  nbJours: string;
  motif: string;
  statut: string; // EN_ATTENTE, APPROUVE, REFUSE
  typeConge: TypeConge;
  personnel: {
    matriculeP: string;
    nom: string;
    prenom: string;
  };
}

export interface CongeApprovalRequest {
  idConge: number;
  decision: 'APPROUVE' | 'REFUSE';
  commentaire?: string;
  niveau: 'CHEF1' | 'CHEF2' | 'RH';
}

export interface TypeCongeRequest {
  nomTypeconge: string;
  maxAllowedDays: number;
}

export interface TypeCongeResponse {
  idType: number;
  nomTypeconge: string;
  maxAllowedDays: number;
  nombreConges?: number;
}

// Statistiques
export interface CongeStats {
  totalConges: number;
  congesApprouves: number;
  congesRefuses: number;
  congesEnAttente: number;
  congesParType: { [key: string]: number };
  congesParMois: { [key: string]: number };
}

// Import Personnel
import { Personnel } from './auth.models';
