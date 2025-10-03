import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { Client, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { HttpClient } from '@angular/common/http';
import { WebSocketService } from 'src/app/core/services/web-socket.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {

  element;
  cookieValue;
  flagvalue;
  countryName;
  valueset;
  client: Client;
notifications: any[] = [];
unreadCount: number = 0;

  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private authService: AuthenticationService,
              private authFackservice: AuthfakeauthenticationService,
              public languageService: LanguageService,
              public translate: TranslateService,
              public _cookiesService: CookieService,
              public token:TokenStorage
              ,private http: HttpClient,
              private websocketService: WebSocketService,

            
            ) {
  }

  goToCongeRequest() {
    if (!this.token.getToken()) {
      // rediriger vers login si pas authentifié
      this.router.navigate(['/account/login']);
      return;
    }
    this.router.navigate(['/conge-request']);
  }

  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
      { text: 'Français', flag: 'assets/images/flags/french.jpg', lang: 'fr' },
  ];

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();
  fetchNotifications() {
    const matricule = this.token.getUser().matriculeP;
    const baseUrl = environment.apiUrl.replace('/api', '');
    this.http.get<any[]>(`${baseUrl}/conge/notifications/${matricule}`)
       .subscribe({
      next: (notifications) => {
        // If notifications are strings, parse them; otherwise, use as is
        this.notifications = notifications.map(n => typeof n === 'string' ? JSON.parse(n) : n);
        this.unreadCount = this.notifications.filter(n => !n.isRead).length;
      },
      error: (err) => console.error('Failed to fetch notifications', err)
    });
  }

  ngOnInit() {

    this.fetchNotifications();
    // WebSocket temporairement désactivé pour éviter les erreurs 401
    // this.connectWebSocket();
    

   


    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.jpg'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }

  connectWebSocket() {
    const jwt = this.token.getToken(); // 🔐 Your JWT
    const matricule = this.token.getUser().matriculeP; // 👤 User's matricule
    const baseUrl = environment.apiUrl.replace('/api', '');

    this.client = new Client({
      webSocketFactory: () => new SockJS(`${baseUrl}/ws-notif`),
      connectHeaders: {
        Authorization: 'Bearer ' + jwt // ✅ Send token in handshake
      },
      debug: (str) => console.log('[WebSocket Debug] ', str),
      reconnectDelay: 5000
    });
  
    this.client.onConnect = () => {
      console.log('✅ WebSocket connected!');
  
      // ✅ Subscribe to personalized topic
      this.client.subscribe(`/topic/notifications/${matricule}`, (notification) => {
        console.log("🔔 Notification WebSocket reçue", notification.body);
  const newNotif = JSON.parse(notification.body); // important !
  this.notifications.unshift(newNotif);// Add to top of the list
          if (!newNotif.isRead) {
    this.unreadCount++;
  }
      });
      
    };
  
    this.client.activate(); // ✅ Connects to server
  }
  markAsRead(notification: any) {
    const id = notification.id;
    this.http.put(`http://localhost:8082/conge/notifications/read/${id}`, {}).subscribe({
      next: () => {
        // ✅ Remove from unread list
        this.notifications = this.notifications.filter(n => n.id !== id);
        const user = this.token.getUser();
        const role = user.roles[0];
    
        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/RH/demandeRh']);
        } else if (role === 'ROLE_CHEF') {
          this.router.navigate(['/projects/grid']);
        }// make sure this route matches your Angular routing
        else if (role === 'ROLE_PERSONNEL') {
          this.router.navigate(['/tables/basic']);
        }
      },
      error: (err) => console.error('Error marking notification as read', err)
    });
  }


  markAllAsRead() {
  const matricule = this.token.getUser().matriculeP;
  this.http.put(`http://localhost:8082/conge/notifications/mark-all-read/${matricule}`, {})
    .subscribe({
      next: () => {
        // Update local state to mark all as read
        this.notifications.forEach(n => n.isRead = true);
        this.unreadCount = 0;
      },
      error: (err) => console.error('Error marking all notifications as read', err)
    });
}
  
  getTimeAgo(date: Date): string {
    const now = new Date();
    const then = new Date(date);
    const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);
  
    if (seconds < 60) return 'à l’instant';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `il y a ${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `il y a ${hours}h`;
    const days = Math.floor(hours / 24);
    return `il y a ${days} jour(s)`;
  }
  
  

  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
    
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    this.token.signOut()
    this.router.navigate(['/account/login']);
  }


  

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }



  
}
