import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthserviceGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path : '',
    loadChildren : () => import(`./views/home/home.module`).then(m => m.HomeModule)
  },
  {
    path : 'login',
    loadChildren : () => import(`./views/login/login.module`).then(m => m.LoginModule)
  },
  {
    path : 'gestionRiesgo',
    loadChildren : () => import(`./views/gestion-riesgo/gestion-riesgo.module`).then(m => m.GestionRiesgoModule),
    canActivate: [AuthserviceGuard]
  },
  {
    path : 'conocimientoInstitucional',
    loadChildren : () => import(`./views/conocimiento-institucional/conocimiento-institucional.module`).then(m => m.ConocimientoInstitucionalModule),
    canActivate: [AuthserviceGuard]
  },
  {
    path : '**',
    redirectTo: ''
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //enableTracing : true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
