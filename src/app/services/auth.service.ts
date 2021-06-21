import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloak: KeycloakService) { }
  login(redirectUri: string) {
    this.keycloak.login({
      redirectUri: redirectUri
    })
  }

  logout() {
    this.keycloak.logout();
  }
}
