import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from './guards/admin.guard';
import {AuthGuard} from './guards/auth.guard';
import {AdminComponent} from './pages/admin/admin.component';
import {IndexComponent} from './pages/index/index.component';
import {MusiqueComponent} from "./pages/musique/musique.component";
import {SkyboxComponent} from "./pages/skybox/skybox.component";
import {TextureComponent} from "./pages/texture/texture.component";
import {LightComponent} from "./pages/light/light.component";
import {PresentationComponent} from "./pages/presentation/presentation.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'auth', component: IndexComponent, canActivate: [AuthGuard] },
  { path: '', component: PresentationComponent, canActivate: [AuthGuard] },
  { path: 'musique', component: MusiqueComponent, canActivate: [AuthGuard] },
  { path: 'skybox', component: SkyboxComponent, canActivate: [AuthGuard] },
  { path: 'texture', component: TextureComponent, canActivate: [AuthGuard] },
  { path: 'light', component: LightComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
