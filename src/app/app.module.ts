import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {IndexComponent} from './pages/index/index.component';
import {AdminComponent} from './pages/admin/admin.component';
import {PresentationComponent} from './pages/presentation/presentation.component';
import {MusiqueComponent} from './pages/musique/musique.component';
import {SkyboxComponent} from './pages/skybox/skybox.component';
import {LightComponent} from './pages/light/light.component';
import {MaterialModule} from './material/material.module';
import {TextureComponent} from './pages/texture/texture.component';
import {LightCardComponent} from './components/light-card/light-card.component';
import {SkyboxCardComponent} from './components/skybox-card/skybox-card.component';
import {TextureCardComponent} from './components/texture-card/texture-card.component';
import {MusicCardComponent} from './components/music-card/music-card.component';
import {UploadPopupComponent} from './components/upload-popup/upload-popup.component';
import {LightPopupComponent} from './components/light-popup/light-popup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

function initializeKeycloak(keycloak: KeycloakService) {

  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180/auth',
        realm: 'plic',
        clientId: 'frontend',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls:
      [
          '/assets',
          '/clients/public'],
    });
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminComponent,
    PresentationComponent,
    MusiqueComponent,
    SkyboxComponent,
    LightComponent,
    TextureComponent,
    LightCardComponent,
    SkyboxCardComponent,
    TextureCardComponent,
    MusicCardComponent,
    UploadPopupComponent,
    LightPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
