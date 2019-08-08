import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { ModalTorneosComponent } from '../modal-torneos/modal-torneos.component';
import { ModalFechasComponent } from '../modal-fechas/modal-fechas.component';
import { ModalSalirComponent } from '../modal-salir/modal-salir.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ListMatchModel} from '../user/listMatch.model';
import {ApiServiceService} from '../api-service.service';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})

export class TorneosComponent implements OnInit {

  matches2: Array<ListMatchModel>;
  idMatch: number;

   ngOnInit() {
     this.getMatch();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
   private dialogo: MatDialog, public serviceMatch: ApiServiceService) { }


  abrirModal(match): void {
    let idMatchResult = match.id; 

    const dialogRef = this.dialogo.open(ModalTorneosComponent, {
      height: '380px',
      width: '420px',
      data: {idMatch: idMatchResult}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  abrirModalF(): void {
    const dialogRef = this.dialogo.open(ModalFechasComponent, {
      height: '380px',
      width: '420px',
    });
  }


  abrirModalS(match): void {
    const dialogRef = this.dialogo.open(ModalSalirComponent, {
      height: '215px',
      width: '420px',
      data: {idMatch: match.id}
    });

    console.log(match.id);
  }

  getMatch(){
    this.serviceMatch.getMatch().subscribe(
        response => {
          console.log(response);
          this.matches2 = response;
        },
        error =>{}
      )
    }

}
