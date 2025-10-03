import { Component, OnInit ,ViewChild, ElementRef, Injector} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatMessage } from './chat.model';
import { Client, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { SidebarComponent } from 'src/app/layouts/sidebar/sidebar.component';
import { ChatService } from './chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollRef') scrollRef!: ElementRef;
  sender: string = '';
  receiver: string = '';
  username: string = '';
  mutedUsers = new Set<string>();
  isMuted = false;

  chatMessagesData: any[] = [];
  unreadSenders = new Set<string>();
  breadCrumbItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Chat', active: true }
  ];
  userList: any[] = [];
  formData: FormGroup;
  chatSubmit = false;
  searchText: string = '';
  stompClient!: Client;
  

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private tokenStorage: TokenStorage,
    private injector: Injector ,
    public formBuilder: FormBuilder,
    private chatService: ChatService 
  ) {
    this.formData = this.fb.group({
      message: ['', Validators.required]
    });
  }
  scrollToBottom() {
    if (this.scrollRef && this.scrollRef.nativeElement) {
      this.scrollRef.nativeElement.scroll({
        top: this.scrollRef.nativeElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }

  copyMessage(content: string) {
    navigator.clipboard.writeText(content);
  }
  async deleteMessage(messageId: number) {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        await this.http.delete(`http://localhost:8082/api/chat/delete/${messageId}`).toPromise();
        this.chatMessagesData = this.chatMessagesData.filter(msg => msg.id !== messageId);
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  }
  // Clear chat
clearChat() {
  if (confirm('Clear entire chat history?')) {
    this.http.delete(`http://localhost:8082/api/chat/clear-chat`, {
      params: {
        user1: this.sender,
        user2: this.receiver
      }
    }).subscribe(() => {
      this.chatMessagesData = [];
    });
  }
}

// Mute functionality
toggleMute() {
  this.isMuted = !this.isMuted;
  
  // Correction: Ajouter '[]' comme fallback string
  const muted: string[] = JSON.parse(localStorage.getItem('mutedUsers') || '[]');
  
  if (this.isMuted) {
    muted.push(this.receiver);
  } else {
    const index = muted.indexOf(this.receiver);
    if (index > -1) muted.splice(index, 1);
  }
  
  localStorage.setItem('mutedUsers', JSON.stringify(muted));
}

checkMuteStatus() {
  // Correction ici aussi
  const muted: string[] = JSON.parse(localStorage.getItem('mutedUsers') || '[]');
  this.isMuted = muted.includes(this.receiver);
} 
forwardMessage(message: ChatMessage) {
  // Implement forward logic
  console.log('Forwarding message:', message);
}


  
  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.sender = user.matriculeP;
    this.loadUnreadSendersAndAutoOpen() ;
    this.checkMuteStatus();
    this.connectWebSocket();
    this.loadUsers();
    const selectedReceiver = localStorage.getItem('selectedReceiver');
    if (selectedReceiver) {
      this.receiver = selectedReceiver;
      this.fetchChatHistory();
    }
  }

  autoOpenFirstUnread() {
    if (this.unreadSenders.size > 0) {
      const firstUnreadMatricule = Array.from(this.unreadSenders)[0];
      const firstUser = this.userList.find(user => user.matricule === firstUnreadMatricule);
      if (firstUser) {
        this.chatUsername(firstUser);
      }
    }
  }

  loadUnreadSendersAndAutoOpen() {
    const me = this.tokenStorage.getUser().matriculeP;
    this.http.get<{ [sender: string]: number }>(`http://localhost:8082/api/chat/unread-count?receiver=${me}`)
      .subscribe(countMap => {
        this.unreadSenders = new Set(Object.keys(countMap));
        this.sortUserList();
        
        const firstUnreadMatricule = Array.from(this.unreadSenders)[0];
        if (firstUnreadMatricule) {
          const user = this.userList.find(u => u.matricule === firstUnreadMatricule);
          if (user) {
            this.chatUsername(user);  // 👈 Auto ouvrir la discussion
            this.markAsRead(user.matricule); // 👈 Marquer les messages lus
          }
        }
      });
  }
  
  
  sortUserList() {
    this.userList.sort((a, b) => {
      const aUnread = this.unreadSenders.has(a.matriculeP); // Change to matriculeP
      const bUnread = this.unreadSenders.has(b.matriculeP); // Change to matriculeP
      return aUnread === bUnread ? 0 : aUnread ? -1 : 1;
    });
  }

  connectWebSocket(): void {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8082/ws-notif'),
      connectHeaders: {
        Authorization: 'Bearer ' + this.tokenStorage.getToken()
      },
      debug: (str) => console.log('[WebSocket Debug]', str),
      reconnectDelay: 5000
    });

    this.stompClient.onConnect = () => {
      console.log('✅ WebSocket connecté !');

      this.stompClient.subscribe(`/topic/chat/${this.sender}`, (message: IMessage) => {
        const receivedMsg: ChatMessage = JSON.parse(message.body);

        console.log('📥 WebSocket reçu :', receivedMsg);
        console.log('👉 this.sender:', this.sender, '| this.receiver:', this.receiver);

        // Affiche uniquement si c’est bien la conversation ouverte
        if (receivedMsg.receiver === this.sender && receivedMsg.sender === this.receiver) {
          this.chatMessagesData.push({ ...receivedMsg, align: 'left' });
        } else {
          console.log('🚫 Message reçu mais non affiché (autre conversation)');
          // TODO : ajouter badge ou notif si tu veux
        }
      });
    };

    this.stompClient.activate();
  }

  loadUsers(): void {
    this.http.get<any[]>('http://localhost:8082/api/auth/getUsers').subscribe(data => {
      this.userList = data.filter(u => u.matriculeP !== this.sender);
    });
  }

  chatUsername(user: any) {
    console.log('Selected User:', user);
    this.receiver = user.matriculeP;
    this.username = user.nom + ' ' + user.prenom;
    this.loadMessages(user.matriculeP); // Update here
    this.markAsRead(user.matriculeP); 
    
    this.markAsRead(user.matricule);
  localStorage.setItem('selectedReceiver', this.receiver);
  this.fetchChatHistory();
  }












  fetchChatHistory() {
    const selectedReceiver = localStorage.getItem('selectedReceiver');
    if (!selectedReceiver) return;
  
    this.http.get<ChatMessage[]>(`http://localhost:8082/api/chat/history`, {
      params: {
        user1: this.sender,
        user2: selectedReceiver
      }
    }).subscribe(messages => {
      this.chatMessagesData = messages.map(msg => ({
        sender: msg.sender,
        content: msg.content,
        timestamp: new Date(msg.timestamp),
        align: msg.sender === this.sender ? 'right' : 'left'
      }));
  
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    });
  }
  





  loadHistory(user: any) {
    this.http.get<ChatMessage[]>(`http://localhost:8082/api/chat/history?user1=${this.sender}&user2=${user.matriculeP}`)
      .subscribe((messages) => {
        this.chatMessagesData = messages.map(msg => ({
          ...msg,
          align: msg.sender === this.sender ? 'right' : 'left'
        }));
      });
  }







  loadMessages(senderMatricule: string) {
    const me = this.tokenStorage.getUser().matriculeP;
    this.http.get<any[]>(`http://localhost:8082/api/chat/history?user1=${me}&user2=${senderMatricule}`)
      .subscribe(messages => {
        this.chatMessagesData = messages.map(msg => ({
          content: msg.content,
          timestamp: msg.timestamp,
          align: msg.sender === me ? 'right' : 'left',
          sender: msg.sender
        }));
        this.scrollToBottom(); // si tu veux que le chat descende automatiquement
      });
  }






  messageSave() {
    this.chatSubmit = true;
    if (this.formData.invalid) return;

    const message: ChatMessage = {
      sender: this.sender,
      receiver: this.receiver,
      content: this.formData.value.message,
      timestamp: new Date()
    };

    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(message)
      });

      this.chatMessagesData.push({ ...message, align: 'right' });
      this.formData.reset();
    }
    this.chatService.incrementUnread();
  }
 




  markAsRead(sender: string) {
    const receiver = this.tokenStorage.getUser().matriculeP; 
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenStorage.getToken()}`
    });
  
    this.http.post('http://localhost:8082/api/chat/mark-read', { sender, receiver }, { headers })
      .subscribe(() => {
        console.log('Messages from ' + sender + ' are now marked as read.');
        this.unreadSenders.delete(sender);
        this.sortUserList(); 
        const sidebar = this.injector.get(SidebarComponent);
    sidebar.updateSidebarBadge();
       
      }, error => {
        console.error('Error marking messages as read:', error);
      });
  }






  get filteredUsers() {
    if (!this.searchText) {
      return this.userList;
    }
  
    const search = this.searchText.toLowerCase();
  
    return this.userList.filter(user =>
      (user.nom?.toLowerCase().includes(search)) ||
      (user.prenom?.toLowerCase().includes(search)) ||
      (user.email?.toLowerCase().includes(search)) 
      
    );
  }

}
