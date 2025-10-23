import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private readonly BASE_API = `${environment.apiUrl.replace('/api', '')}/`;
  // Subject to notify components when a new demande is submitted
  public demandeSubmitted$ = new Subject<any>();

  constructor(private http: HttpClient) { }

  /**
   * Test de connectivité backend
   */
  testBackendConnectivity(): Observable<any> {
    const endpoint = `${environment.apiUrl}/test`;
    console.log('🔍 Test connectivité backend:', endpoint);
    return this.http.get(endpoint).pipe(
      catchError(error => {
        console.error('❌ Backend non accessible:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Diagnostic complet pour déboguer les problèmes d'API
   */
  diagnostic(): void {
    console.log('🔍 === DIAGNOSTIC CONGE SERVICE ===');
    console.log('🌐 Environment API URL:', environment.apiUrl);
    console.log('🔑 Token sessionStorage:', window.sessionStorage.getItem('auth-token') ? 'Présent' : 'Absent');
    
    // Test utilisateur courant
    try {
      const currentUser = JSON.parse(window.sessionStorage.getItem('auth-user') || '{}');
      console.log('👤 Utilisateur courant:', currentUser);
      console.log('🎭 Rôles utilisateur:', currentUser.roles || 'Non définis');
    } catch (e) {
      console.error('❌ Erreur parsing utilisateur courant:', e);
    }

    // Test endpoints construits
    console.log('📡 Endpoint demandes:', `${environment.apiUrl}/conge/validation/my-pending`);
    console.log('📡 Endpoint employés:', `${environment.apiUrl}/conge/chef/employees`);
    console.log('🔍 === FIN DIAGNOSTIC ===');
  }
  // Retourne un objet options contenant l'entête Authorization si un token est présent
  private authOptions(): { headers?: HttpHeaders } {
    const token = window.sessionStorage.getItem('auth-token');
    console.log('🔐 Token récupéré:', token ? 'Présent (' + token.length + ' chars)' : 'Absent');
    if (token) {
      return { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) };
    }
    return {};
  }
  addConge(body:any){
   return this.http.post(this.BASE_API + 'conge/add', body).pipe(
    catchError(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error?.error) {
        errorMsg = `${error.error.error} (Max: ${error.error.maxAllowedDays} jours)`;
      }
      return throwError(() => new Error(errorMsg));
    })
  );

  }
  addSanction(body:any){
    return this.http.post(this.BASE_API + 'conge/addSanction',body)

  }
  getMaxSolde=(mat:any):Observable<any[]>=>{
    return this.http.get<any[]>(this.BASE_API + "conge/getMaxSolde/"+mat, this.authOptions());

  }
  GetTypeConge = (): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + "conge/getTypeConge", this.authOptions());
  };
  GetCongeByMat = (mat:any): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + "conge/get/"+mat, this.authOptions());
  };
  GetRepChef = (mat:any,id:any): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + "conge/getRepChef/"+mat+"/"+id, this.authOptions());
  };
  DeleteCng = (id:any): Observable<any[]> => {
    return this.http.delete<any[]>(this.BASE_API + "conge/"+id);
  };
  getDemandesPourChef = (): Observable<any[]> => {
    // DEPRECATED: utiliser getDemandesPourChefA ou getMyPendingDemandes à la place
    return this.http.get<any[]>(this.BASE_API + 'conge/chef/pending');
  };

  getDemandesPourChefMy = (): Observable<any[]> => {
    // DEPRECATED: utiliser getMyPendingDemandes à la place
    return this.http.get<any[]>(this.BASE_API + 'conge/chef/pending/my', this.authOptions());
  };

  // ========== NOUVEAUX ENDPOINTS HIÉRARCHIQUES ==========
  
  /**
   * Récupère les demandes en attente pour Chef A (nouvel endpoint hiérarchique)
   */
  getDemandesPourChefA = (): Observable<any[]> => {
    console.log('🔄 Récupération des demandes Chef A via:', this.BASE_API + 'api/conge/validation/chef-a/pending');
    return this.http.get<any[]>(this.BASE_API + 'api/conge/validation/chef-a/pending', this.authOptions()).pipe(
      catchError(error => {
        console.error('❌ Erreur récupération demandes Chef A:', error);
        if (error.status === 401) {
          console.error('🔒 Token JWT invalide ou expiré');
        }
        return throwError(() => error);
      })
    );
  };

  /**
   * Récupère les demandes en attente pour Chef B (nouvel endpoint hiérarchique)
   */
  getDemandesPourChefB = (): Observable<any[]> => {
    console.log('🔄 Récupération des demandes Chef B via:', this.BASE_API + 'api/conge/validation/chef-b/pending');
    return this.http.get<any[]>(this.BASE_API + 'api/conge/validation/chef-b/pending', this.authOptions()).pipe(
      catchError(error => {
        console.error('❌ Erreur récupération demandes Chef B:', error);
        return throwError(() => error);
      })
    );
  };

  /**
   * Récupère mes demandes en attente selon mon rôle
   */
  getMyPendingDemandes = (): Observable<any[]> => {
    const endpoint = `${environment.apiUrl}/conge/validation/my-pending`;
    console.log('🔄 Récupération de mes demandes en attente via:', endpoint);
    return this.http.get<any[]>(endpoint, this.authOptions()).pipe(
      map(response => {
        console.log('✅ Réponse raw getMyPendingDemandes:', response);
        return Array.isArray(response) ? response : [];
      }),
      catchError(error => {
        console.error('❌ Erreur récupération mes demandes:', error);
        console.error('URL tentée:', endpoint);
        console.error('Status:', error.status, 'StatusText:', error.statusText);
        console.error('Error body:', error.error);
        
        if (error.status === 401) {
          console.error('🔒 Problème d\'authentification JWT');
        } else if (error.status === 404) {
          console.error('🔍 Endpoint non trouvé - vérifier le backend');
        } else if (!error.status) {
          console.error('🌐 Erreur de réseau ou CORS - vérifier la connectivité backend');
        }
        
        // Retourner un tableau vide plutôt qu'une erreur si c'est juste un format inattendu
        if (error.status === 200) {
          console.warn('⚠️ Réponse 200 avec erreur de parsing, retour tableau vide');
          return of([]);
        }
        
        return throwError(() => error);
      })
    );
  };

  /**
   * Diagnostic Chef A - pour débogage
   */
  getDiagnosticChefA = (): Observable<any> => {
    return this.http.get<any>(this.BASE_API + 'api/conge/validation/diagnostic/chef-a', this.authOptions()).pipe(
      catchError(error => {
        console.error('❌ Erreur diagnostic Chef A:', error);
        return throwError(() => error);
      })
    );
  };

  /**
   * Diagnostic Services - pour vérifier la configuration
   */
  getDiagnosticServices = (): Observable<any> => {
    return this.http.get<any>(this.BASE_API + 'api/conge/validation/diagnostic/services', this.authOptions()).pipe(
      catchError(error => {
        console.error('❌ Erreur diagnostic Services:', error);
        return throwError(() => error);
      })
    );
  };

  getEmployeesForChef = (): Observable<any[]> => {
    const endpoint = `${environment.apiUrl}/conge/chef/employees`;
    console.log('🔄 Récupération des employés du chef via:', endpoint);
    return this.http.get<any[]>(endpoint, this.authOptions()).pipe(
      map(response => {
        console.log('✅ Réponse raw getEmployeesForChef:', response);
        return Array.isArray(response) ? response : [];
      }),
      catchError(error => {
        console.error('❌ Erreur récupération employés chef:', error);
        console.error('URL tentée:', endpoint);
        console.error('Status:', error.status, 'StatusText:', error.statusText);
        console.error('Error body:', error.error);
        
        if (error.status === 401) {
          console.error('🔒 Problème d\'authentification JWT');
        } else if (error.status === 404) {
          console.error('🔍 Endpoint non trouvé - vérifier le backend');
        } else if (!error.status) {
          console.error('🌐 Erreur de réseau ou CORS - vérifier la connectivité backend');
        }
        
        // Retourner un tableau vide plutôt qu'une erreur si c'est juste un format inattendu
        if (error.status === 200) {
          console.warn('⚠️ Réponse 200 avec erreur de parsing, retour tableau vide');
          return of([]);
        }
        
        return throwError(() => error);
      })
    );
  };

  getApprovals = (congeId: number): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + `conge/${congeId}/approvals`, this.authOptions());
  };

  decisionChef = (dto:any) => {
    // dto should contain id, decision and optional commentaire
    return this.http.post(this.BASE_API + 'conge/chef/decision/' + dto.id + '?decision=' + dto.decision + (dto.commentaire ? '&commentaire=' + encodeURIComponent(dto.commentaire) : ''), {} , this.authOptions());
  };

  // Helper for approving/refusing by chef using simpler parameters
  chefDecisionSimple(id: number, decision: string, commentaire?: string) {
    const url = this.BASE_API + `conge/chef/decision/${id}?decision=${decision}` + (commentaire ? `&commentaire=${encodeURIComponent(commentaire)}` : '');
    return this.http.post(url, {}, this.authOptions());
  }

  getDemandesPourRh = (): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + 'conge/rh/pending');
  };

  decisionRh = (dto:any) => {
    return this.http.post(this.BASE_API + 'conge/rh/decision', dto);
  };

  getNotifications = () => {
    return this.http.get(this.BASE_API + 'conge/notifications');
  };
}
