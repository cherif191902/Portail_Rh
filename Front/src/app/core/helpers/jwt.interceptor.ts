import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';
import { TokenStorage } from '../services/tokenservice.service';

import { environment } from '../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private authfackservice: AuthfakeauthenticationService,
        private tokenStorage: TokenStorage
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        } else {
            // add authorization header with jwt token if available
            const token = this.tokenStorage.getToken();

            // Debugging: log whether a token was found and the target URL (without revealing token contents)
            try {
                if (token) {
                    const masked = token.length > 10 ? token.substring(0, 5) + '...' + token.substring(token.length - 5) : '***';
                    // Use console.log to ensure visibility during debugging
                    console.log(`[JwtInterceptor] attaching Authorization header for request to ${request.url} (token=${masked})`);
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                } else {
                    console.log(`[JwtInterceptor] no token found for request to ${request.url}`);
                }
            } catch (e) {
                console.log('[JwtInterceptor] error while processing token for request', e);
            }
        }

        return next.handle(request);
    }
}
