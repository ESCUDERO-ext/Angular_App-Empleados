import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'quienes', component: QuienesComponentComponent, canActivate: [LoginGuardian] }, //Protegemos la ruta de quienes con el guardián de login
  { path: 'contacto', component: ContactoComponentComponent, canActivate: [LoginGuardian] }, //Protegemos la ruta de contacto con el guardián de login
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorPersonalizadoComponent } //** significa que no existe la ruta, es un wildcard (El path a la página de ERRROR debe estar siempre el último)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
