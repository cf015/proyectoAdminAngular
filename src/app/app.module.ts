import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCheckboxModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatRadioModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';

import { ModalTorneosComponent } from './modal-torneos/modal-torneos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TorneosComponent } from './torneos/torneos.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { HttpClientModule } from '@angular/common/http';
import * as $ from "jquery";
import { UserComponent } from './user/user.component';
import {GuardService} from './guard.service';
import { ModalFechasComponent } from './modal-fechas/modal-fechas.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ModalSalirComponent } from './modal-salir/modal-salir.component';
import {MatSelectModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    MenuComponent,
    TorneosComponent,
    ListaEquiposComponent,
    InicioComponent,
    ModalTorneosComponent,
    ModalFechasComponent,
    EquiposComponent,
    ModalSalirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    NgbCarouselModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
  ],
  providers: [GuardService],

   entryComponents: [
    ModalTorneosComponent, ModalFechasComponent, EquiposComponent, ModalSalirComponent,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
