import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { IndexComponent } from './pages/index/index.component';
import {MusiqueComponent} from "./pages/musique/musique.component";
import {MeshComponent} from "./pages/mesh/mesh.component";
import {SkyboxComponent} from "./pages/skybox/skybox.component";
import {TextureComponent} from "./pages/texture/texture.component";
import {LightComponent} from "./pages/light/light.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: '', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'musique', component: MusiqueComponent },
  { path: 'mesh', component: MeshComponent },
  { path: 'skybox', component: SkyboxComponent },
  { path: 'texture', component: TextureComponent },
  { path: 'light', component: LightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
