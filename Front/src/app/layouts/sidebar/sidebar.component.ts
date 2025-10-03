import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import MetisMenu from 'metismenujs/dist/metismenujs';
import { EventService } from '../../core/services/event.service';
import { Router, NavigationEnd } from '@angular/router';
import { ChatService } from 'src/app/pages/chat/chat.service';
import { ChangeDetectorRef } from '@angular/core'; 

import { HttpClient } from '@angular/common/http';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { MenuRefreshService } from 'src/app/core/services/menu-refresh.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
 
})

/**
 * Sidebar component
 */
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('componentRef') scrollRef;
  @Input() isCondensed = false;
  menu: any;
  data: any;
  menuItems: MenuItem[] = [];

  @ViewChild('sideMenu') sideMenu: ElementRef;

  constructor(private eventService: EventService, private router: Router, public translate: TranslateService, private http: HttpClient,
    private token:TokenStorage,
    private chatService: ChatService,
    private menuRefresh: MenuRefreshService,
    private cdr: ChangeDetectorRef) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
        this._scrollElement();
      }
    });
    this.menuRefresh.refresh$.subscribe(() => {
    this.initialize();
  
  });
  }


  ngOnInit() {
 
    this.initialize();
    this._scrollElement();
    this.getUnreadMessageCount();

    
    this.chatService.unreadCount$.subscribe(count => {
      const chatMenuItem = this.menuItems.find(item => item.id === 10);
      if (chatMenuItem?.badge) {
        chatMenuItem.badge.text = count.toString();
        this.cdr.detectChanges(); // Trigger UI update
      }
    });
  }

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }

  toggleMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  _scrollElement() {
    setTimeout(() => {
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
        if (currentPosition > 500)
        if(this.scrollRef.SimpleBar !== null)
          this.scrollRef.SimpleBar.getScrollElement().scrollTop =
            currentPosition + 300;
      }
    }, 300);
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    const paths = [];
    for (let i = 0; i < links.length; i++) {
      paths.push(links[i]['pathname']);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) { childAnchor.classList.add('mm-active'); }
            if (childDropdown) { childDropdown.classList.add('mm-active'); }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') { childanchor.classList.add('mm-active'); }
              }
            }
          }
        }
      }
    }

  }
  private hiddenItems: string[] = ["127"];

  /**
   * Initialize
   */
 initialize(): void {
  const user = this.token.getUser();
  const roles: string[] = user?.roles || [];
  if (!roles.length) { this.menuItems = []; return; }

  const has = (r: string) => roles.includes(r);
  const cloned: MenuItem[] = JSON.parse(JSON.stringify(MENU));

  const filterByRoles = (item: MenuItem) => {
    if (item.isAdmin && !has('ROLE_ADMIN')) return false;
    if (item.requiredRoles && !item.requiredRoles.some(rr => has(rr))) return false;
    return true;
  };

  const process = (items: MenuItem[]): MenuItem[] => {
    return items
      .filter(filterByRoles)
      .map(item => {
        const next: MenuItem = { ...item };
        if (next.subItems) {
          next.subItems = process(next.subItems);
        }
        return next;
      })
      .filter(item => item.isTitle || item.link || (item.subItems && item.subItems.length));
  };

  const processed = process(cloned);
  this.menuItems = processed.filter((item, index, arr) => {
    if (!item.isTitle) return true;
    return arr.slice(index + 1).some(next => !next.isTitle);
  });

  this.cdr.detectChanges();
 }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  trackById(_: number, item: MenuItem) {
    return item?.id ?? item?.link ?? item?.label;
  }



  getUnreadMessageCount() {
    const receiver = this.token.getUser().matriculeP;

    // Temporairement désactivé - endpoint pas encore implémenté
    // this.http.get<{ [sender: string]: number }>(`http://localhost:8089/api/chat/unread-count?receiver=${receiver}`)
    //   .subscribe(countMap => {
    //     const total = Object.values(countMap).reduce((a, b) => a + b, 0);
    //     const chatItem = this.menuItems.find(item => item.link === '/chat');
    //     if (chatItem) {
    //       chatItem.badge = {
    //         variant: 'danger',
    //         text: total.toString()
    //       };
    //     }
    //   });

    // Valeur temporaire pour éviter l'erreur
    const chatItem = this.menuItems.find(item => item.link === '/chat');
    if (chatItem) {
      chatItem.badge = {
        variant: 'danger',
        text: '0'
      };
    }
  }


  updateSidebarBadge() {
    const receiver = this.token.getUser().matriculeP;

    // Temporairement désactivé - endpoint pas encore implémenté
    // this.http.get<{ [sender: string]: number }>(`http://localhost:8089/api/chat/unread-count?receiver=${receiver}`)
    //   .subscribe(countMap => {
    //     const total = Object.values(countMap).reduce((a, b) => a + b, 0);
    //     const chatMenu = this.menuItems.find(item => item.link === '/chat');
    //     if (chatMenu) {
    //       chatMenu.badge = {
    //         variant: 'danger',
    //         text: total.toString()
    //       };
    //     }
    //   });

    // Valeur temporaire pour éviter l'erreur
    const chatMenu = this.menuItems.find(item => item.link === '/chat');
    if (chatMenu) {
      chatMenu.badge = {
        variant: 'danger',
        text: '0'
      };
    }
  }


  
}