import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EquiposComponent } from '../equipos/equipos.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ApiServiceService} from '../api-service.service';
import {TeamModel} from '../user/team.model';
import { ModalSalirComponent } from '../modal-salir/modal-salir.component';


@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})

export class ListaEquiposComponent implements OnInit {

   teams: Array<TeamModel>;
   numTeams: any;  


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver,
    private dialogo: MatDialog, public serviceMatch: ApiServiceService) { }

  ngOnInit() {

      this.getTeams();
      this.teams = new Array<TeamModel>();
  }
  

  abrirModal(team): void {

    let idTeamResult = team.id; 

    const dialogRef = this.dialogo.open(EquiposComponent, {
      height: '380px',
      width: '420px',
      data: {idTeam: idTeamResult}
    });
  }

   abrirModalCreate(): void {

    const dialogRef = this.dialogo.open(EquiposComponent, {
      height: '380px',
      width: '420px',
      data: {idTeamCreate: 0}
    });
  }

  abrirModalEliminar(team): void {
    const dialogRef = this.dialogo.open(ModalSalirComponent, {
      height: '215px',
      width: '420px',
      data: {idTeam: team.id}
    });

    console.log(team.id);
  }


  getTeams(){
     this.serviceMatch.getTeams().subscribe(
        response => {
          console.log(response);
          this.teams = response['message'];
          this.numTeams = response['numTeams'];
          },
        error => {}
      )
  }




}