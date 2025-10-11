export class User {
    id: number;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    email: string;
}

// Modèles pour les requêtes d'authentification
export interface LoginRequest {
  matricule: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  nom: string;
  prenom: string;
  serviceId: number;
}

// Modèles pour les réponses d'authentification
export interface JwtResponse {
  token: string;
  id: number;
  matricule: string;
  email: string;
  roles: string[];
}

export interface MessageResponse {
  message: string;
}

// Modèle pour l'entité Personnel (complet)
export interface Personnel {
  id?: number;
  email: string;
  matriculeP: string;
  nom: string;
  prenom: string;
  department?: string;
  numTel?: number;
  poste?: string;
  niveau?: number;

  // Relations (types simplifiés pour éviter les dépendances circulaires)
  service?: {
    idService: number;
    nomService: string;
    libService?: string;
  };
  roles?: {
    id: number;
    nomRole: string;
  }[];
  responsable?: {
    matriculeP: string;
    nom: string;
    prenom: string;
  };
  subordonnes?: {
    matriculeP: string;
    nom: string;
    prenom: string;
  }[];

  // Collections (généralement non chargées côté frontend)
  // Utilisées uniquement pour les compteurs
  nombreConges?: number;
  nombrePointages?: number;
  nombreNotifications?: number;
  nombreSanctions?: number;

  // Propriétés calculées
  nomComplet?: string;
  isOnline?: boolean;
  lastActivity?: string;

  // Propriétés de compatibilité avec l'ancien système
  role_portail?: string;
}

// Modèle simplifié pour les listes
export interface PersonnelSummary {
  id: number;
  matriculeP: string;
  nom: string;
  prenom: string;
  email: string;
  poste?: string;
  service?: {
    idService: number;
    nomService: string;
  };
  roles?: string[];
}

// Modèle pour l'utilisateur connecté (adapté pour la compatibilité)
export interface AuthUser {
  id: number;
  email: string;
  roles: string[];
  token: string;
  // Propriétés de compatibilité
  matriculeP: string;
  role_portail: string;
}
