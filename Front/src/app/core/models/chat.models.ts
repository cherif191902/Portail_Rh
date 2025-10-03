// Modèles pour le système de messagerie

export interface ChatMessage {
  id?: number;
  sender: string; // Matricule de l'expéditeur
  receiver: string; // Matricule du destinataire
  content: string;
  timestamp: string; // DateTime ISO string
  isRead: boolean;
  messageType: MessageType;
  attachmentUrl?: string;
  attachmentName?: string;
  senderPersonnel?: Personnel;
  receiverPersonnel?: Personnel;
}

export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  FILE = 'FILE',
  SYSTEM = 'SYSTEM'
}

// DTOs pour les requêtes
export interface ChatMessageRequest {
  receiver: string; // Matricule du destinataire
  content: string;
  messageType?: MessageType;
  attachmentUrl?: string;
  attachmentName?: string;
}

export interface ChatMessageResponse {
  id: number;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  messageType: MessageType;
  attachmentUrl?: string;
  attachmentName?: string;
  senderInfo: {
    matriculeP: string;
    nom: string;
    prenom: string;
  };
  receiverInfo: {
    matriculeP: string;
    nom: string;
    prenom: string;
  };
}

export interface ChatConversation {
  contactMatricule: string;
  contactNom: string;
  contactPrenom: string;
  lastMessage: ChatMessage;
  unreadCount: number;
  lastActivity: string;
}

export interface ChatContact {
  matricule: string;
  nom: string;
  prenom: string;
  service?: string;
  isOnline?: boolean;
  lastSeen?: string;
  unreadMessages?: number;
}

// Modèles pour les requêtes de conversation
export interface ConversationRequest {
  contactMatricule: string;
  page?: number;
  size?: number;
}

export interface ConversationResponse {
  messages: ChatMessageResponse[];
  totalMessages: number;
  hasMore: boolean;
  contact: ChatContact;
}

// Modèles pour la recherche
export interface MessageSearchRequest {
  query: string;
  contactMatricule?: string;
  messageType?: MessageType;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  size?: number;
}

export interface MessageSearchResponse {
  messages: ChatMessageResponse[];
  totalResults: number;
  hasMore: boolean;
}

// Modèles pour les pièces jointes
export interface AttachmentUploadRequest {
  file: File;
  messageType: MessageType;
}

export interface AttachmentUploadResponse {
  url: string;
  filename: string;
  size: number;
  mimeType: string;
}

// Modèles pour les statistiques
export interface ChatStats {
  totalMessages: number;
  messagesEnvoyes: number;
  messagesRecus: number;
  conversationsActives: number;
  messagesNonLus: number;
  messagesParJour: { [key: string]: number };
  contactsFrequents: ChatContact[];
}

// Modèles pour les événements WebSocket
export interface ChatEvent {
  type: 'MESSAGE' | 'TYPING' | 'READ' | 'ONLINE' | 'OFFLINE';
  data: any;
  timestamp: string;
}

export interface TypingEvent {
  sender: string;
  receiver: string;
  isTyping: boolean;
}

export interface ReadEvent {
  messageIds: number[];
  reader: string;
}

export interface OnlineStatusEvent {
  matricule: string;
  isOnline: boolean;
  lastSeen?: string;
}

// Import Personnel
import { Personnel } from './auth.models';
