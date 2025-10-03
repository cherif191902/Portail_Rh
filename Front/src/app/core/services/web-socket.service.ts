import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient!: Client;
  private connected = false;

  connect(token: string): void {
    if (this.connected) return; // évite la double connexion

    this.stompClient = new Client({
      webSocketFactory: () => new SockJS(`${environment.apiUrl.replace('/api', '')}/ws-notif`),
      connectHeaders: {
        Authorization: 'Bearer ' + token
      },
      reconnectDelay: 5000,
      debug: (str) => console.log('[WebSocket Debug]', str),
    });

    this.stompClient.onConnect = () => {
      console.log('✅ WebSocket connecté !');
      this.connected = true;
    };

    this.stompClient.activate();
  }

  subscribe(destination: string, callback: (message: IMessage) => void): void {
    if (this.connected && this.stompClient) {
      this.stompClient.subscribe(destination, callback);
    } else {
      // Essaye à nouveau après connexion
      setTimeout(() => this.subscribe(destination, callback), 500);
    }
  }

  send(destination: string, body: any): void {
    if (this.connected && this.stompClient) {
      this.stompClient.publish({
        destination: destination,
        body: JSON.stringify(body)
      });
    }
  }
}
