import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard extends KeycloakAuthGuard {
  constructor(protected readonly router: Router,
              protected readonly keycloak: KeycloakService)
  {
    super(router, keycloak)
  }
  async isAccessAllowed(route: ActivatedRouteSnapshot,
                        state: RouterStateSnapshot) : Promise<boolean | UrlTree>
  {
    if (!this.authenticated)
    {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      })
    }
    let isAuthorize = this.authenticated && this.roles.indexOf("admin") > -1;
    if (isAuthorize)
    {
      return true;
    }
    return this.router.navigate(['/']);
  }
}
