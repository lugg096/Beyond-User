import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { noLoginGuard } from './guards/noLogin.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [noLoginGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'egresos',
    loadChildren: () => import('./pages/egresos/egresos.module').then( m => m.EgresosPageModule)
  },
  {
    path: 'propiedades',
    loadChildren: () => import('./pages/propiedades/propiedades.module').then( m => m.PropiedadesPageModule)
  },
  {
    path: 'agua',
    loadChildren: () => import('./pages/agua/agua.module').then( m => m.AguaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
