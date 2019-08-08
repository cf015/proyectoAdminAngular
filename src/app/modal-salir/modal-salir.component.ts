import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ApiServiceService} from '../api-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-salir',
  templateUrl: './modal-salir.component.html',
  styleUrls: ['./modal-salir.component.css']
})
export class ModalSalirComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<ModalSalirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public serviceMatch: ApiServiceService, public router: Router) { }

  ngOnInit() {
  }


  deleteMatch(){

    let idTeam = this.data.idTeam;
    let idMatch = this.data.idMatch;

    console.log(idTeam);
    console.log(idMatch);

    if(idTeam != 0){
      
      let dataTeam = {
        "id": idTeam
      }

      this.serviceMatch.deleteTeam(dataTeam).subscribe(
          response => {
            console.log(response);
            this.dialogRef.close();
            this.router.navigateByUrl('torneos', {skipLocationChange: true}).then(()=>
            this.router.navigate(["equipos"])); 
          },
          error => {
            alert("No se puede eliminar el team porque ya existes matches con este team.");
            this.dialogRef.close();
          }
        )
    }
    if(idMatch != 0){

      let dataMatch = {
        "id": idMatch
      }

      this.serviceMatch.deleteMatch(dataMatch).subscribe(
          response => {
            console.log(response);
            this.dialogRef.close();
            this.router.navigateByUrl('torneos', {skipLocationChange: true}).then(()=>
            this.router.navigate(["equipos"])); 
          },
          error => {}
        )
    }


    /*let data = {
      "id": this.data.idMatch,
    }

    this.serviceMatch.deleteMatch(data).subscribe(
        response => {
          console.log(response);
          this.dialogRef.close();
        },
        error =>{}
      )*/
  }

  clickSalir(){
    this.dialogRef.close();
  }


}
