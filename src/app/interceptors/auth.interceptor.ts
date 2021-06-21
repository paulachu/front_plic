import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly keycloak: KeycloakService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.keycloak.isLoggedIn())
    {
      this.keycloak.getToken().then(token => {
        if (token){
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          })
        }
        else
        {
          this.keycloak.login();
        }
        return next.handle(request)
      })
    }
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) =>{
      console.log(error);
      if (error.status === 401 || error.status === 403)
      {
        this.keycloak.login();
      }
      throw error;
    }));
  }
}
