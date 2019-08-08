import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TorneosComponent } from './torneos/torneos.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { InicioComponent } from './inicio/inicio.component';
import {GuardService} from './guard.service';



const routes: Routes = [
	 { path: 'login', component: LoginComponent },
	 { path: 'user', component: UserComponent,  canActivate: [GuardService] },
	  { path: 'inicio', component: InicioComponent, canActivate: [GuardService] },
  	{ path: 'torneos', component: TorneosComponent, canActivate: [GuardService] },
  	{ path: 'equipos', component: ListaEquiposComponent, canActivate: [GuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
