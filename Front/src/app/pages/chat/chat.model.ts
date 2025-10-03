export interface ChatUser {
  image?: string;
  name: string;
  message: string;
  time: string;
  color: string;
}

export interface ChatMessage {
  sender: string;
  receiver: string;
  content: string;
  timestamp:  Date; 

  align?: string;
}
