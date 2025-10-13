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
    console.log('🚀 Initialisation du sidebar');
    this.initialize();
    this._scrollElement();
    this.getUnreadMessageCount();

    // Écouter les changements de rôles pour rafraîchir le menu
    this.menuRefresh.refresh$.subscribe(() => {
      console.log('🔄 Rafraîchissement du menu demandé');
      this.initialize();
    });
    
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
  
  // Amélioration de la récupération des rôles
  let roles: string[] = [];
  
  if (user?.roles && Array.isArray(user.roles)) {
    // Si les rôles sont déjà un tableau de strings
    if (typeof user.roles[0] === 'string') {
      roles = user.roles;
    }
    // Si les rôles sont des objets avec propriété nomRole ou authority
    else if (typeof user.roles[0] === 'object') {
      roles = user.roles.map((role: any) => {
        return role.nomRole || role.authority || role.name || role.role || 'ROLE_USER';
      });
    }
  }
  
  // Fallback sur role_portail ou rôle par défaut
  if (roles.length === 0) {
    roles = [user?.role_portail || 'ROLE_USER'];
  }
  
  // Toujours afficher au minimum les éléments de base pour les utilisateurs connectés
  if (!user || roles.length === 0) {
    roles = ['ROLE_USER']; // Rôle par défaut
  }

  const has = (r: string) => roles.includes(r);
  const cloned: MenuItem[] = JSON.parse(JSON.stringify(MENU));

  const filterByRoles = (item: MenuItem) => {
    // Toujours afficher les titres
    if (item.isTitle) return true;
    
    // Si pas de restriction de rôles, afficher pour tous les utilisateurs connectés
    if (!item.requiredRoles && !item.isAdmin && !item.isRh && !item.isPersonel) {
      return true;
    }
    
    // Vérifier les restrictions spécifiques
    if (item.isAdmin && !has('ROLE_ADMIN')) return false;
    if (item.isRh && !has('ROLE_RH') && !has('ROLE_ADMIN')) return false;
    if (item.isPersonel && !has('ROLE_USER')) return false;
    
    // Vérifier les rôles requis
    if (item.requiredRoles && !item.requiredRoles.some(rr => has(rr))) {
      return false;
    }
    
    return true;
  };

  const process = (items: MenuItem[]): MenuItem[] => {
    return items
      .filter(filterByRoles)
      .map(item => {
        const next: MenuItem = { ...item };
        if (next.subItems) {
          next.subItems = process(next.subItems);
          // Ne garder un parent que s'il a des enfants ou un lien direct
          if (!next.link && (!next.subItems || next.subItems.length === 0) && !next.isTitle) {
            return null;
          }
        }
        return next;
      })
      .filter(item => item !== null)
      .filter(item => {
        // Garder les titres, les liens directs, ou les parents avec des enfants
        return item.isTitle || item.link || (item.subItems && item.subItems.length > 0);
      });
  };

  const processed = process(cloned);
  
  // Filtrer les titres orphelins (sans éléments suivants)
  this.menuItems = processed.filter((item, index, arr) => {
    if (!item.isTitle) return true;
    // Garder un titre seulement s'il y a du contenu après
    return arr.slice(index + 1).some(next => !next.isTitle);
  });

  console.log('📋 Menu items finaux:', this.menuItems.map(item => ({ 
    label: item.label, 
    requiredRoles: item.requiredRoles,
    subItems: item.subItems?.length 
  })));

  // Mécanisme de récupération : s'assurer qu'il y a toujours au moins le dashboard de base
  if (this.menuItems.length === 0 || this.menuItems.filter(item => !item.isTitle).length === 0) {
    console.warn('⚠️ Menu vide détecté, ajout des éléments de base');
    this.addFallbackMenuItems();
  }

  this.cdr.detectChanges();
 }

 /**
  * Ajoute des éléments de menu de base en cas d'échec du filtrage
  */
 private addFallbackMenuItems(): void {
   console.log('🛡️ Ajout des éléments de menu de secours');
   
   this.menuItems = [
     {
       id: 1,
       label: 'MENUITEMS.MENU.TEXT',
       isTitle: true
     },
     {
       id: 5,
       label: 'MENUITEMS.DASHBOARD.TEXT',
       icon: 'bx-home-circle',
       link: '/dashboards/default'
     },
     {
       id: 20,
       label: 'MENUITEMS.CONGES_SECTION.TEXT',
       isTitle: true
     },
     {
       id: 21,
       label: 'MENUITEMS.CONGES_GROUP.TEXT',
       icon: 'bx-calendar-event',
       subItems: [
         {
           id: 211,
           label: 'MENUITEMS.NOUVELLE_DEMANDE_CONGE.TEXT',
           icon: 'bx-plus-circle',
           link: '/conges/demande',
           parentId: 21
         },
         {
           id: 212,
           label: 'MENUITEMS.MES_CONGES.TEXT',
           icon: 'bx-list-ul',
           link: '/conges/list',
           parentId: 21
         }
       ]
     }
   ];
   
   console.log('✅ Menu de secours activé');
 }

 /**
  * Méthode de diagnostic pour identifier les problèmes de rôles
  */
 public diagnoseRoleIssues(): void {
   // Diagnostic des rôles (logs supprimés pour éviter le spam)
   const user = this.token.getUser();
   // Cette méthode est disponible pour le debug mais les logs sont supprimés
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