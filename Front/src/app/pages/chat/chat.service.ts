import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private unreadCount = new BehaviorSubject<number>(0);
  unreadCount$ = this.unreadCount.asObservable();

  incrementUnread() {
    this.unreadCount.next(this.unreadCount.value + 1);
  }

  resetUnread() {
    this.unreadCount.next(0);
  }
}