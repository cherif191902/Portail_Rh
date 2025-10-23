// Modèles pour l'entité Service
export interface Service {
  idService?: number;
  nomService: string;
  libService?: string;
  personnels?: Personnel[];
}

// DTO pour les requêtes
export interface ServiceRequest {
  nomService: string;
  libService?: string;
}

export interface ServiceResponse {
  idService: number;
  nomService: string;
  libService?: string;
  nombrePersonnels?: number;
}

// Modèles pour l'entité Role
export interface Role {
  id?: number;
  nomRole: ERole;
  personnels?: Personnel[];
}

export enum ERole {
  ROLE_USER = 'ROLE_USER',
  ROLE_CHEF_A = 'ROLE_CHEF_A',
  ROLE_CHEF_B = 'ROLE_CHEF_B',
  ROLE_RH = 'ROLE_RH',
  ROLE_ADMIN = 'ROLE_ADMIN'
}

export interface RoleRequest {
  nomRole: ERole;
}

export interface RoleResponse {
  id: number;
  nomRole: ERole;
  nombrePersonnels?: number;
}

// Import Personnel pour éviter les dépendances circulaires
import { Personnel } from './auth.models';
