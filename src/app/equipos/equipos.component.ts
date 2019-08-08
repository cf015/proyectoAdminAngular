import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {TeamModel} from '../user/team.model';
import {ApiServiceService} from '../api-service.service';
import {Router} from "@angular/router";
import { ListaEquiposComponent } from '../lista-equipos/lista-equipos.component'

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  team = new TeamModel;
  
  constructor(private dialogRef : MatDialogRef<EquiposComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public serviceMatch: ApiServiceService, private router: Router){}

  ngOnInit() {
  }

  clickSalir(){
    this.dialogRef.close();
  }

  createUpdateTeam(){

    let idTeam = this.data.idTeam;
    let idTeamCreate = this.data.idTeamCreate;

    console.log(idTeam);
    console.log(idTeamCreate)

    if(idTeam != 0){

      let dataUpdate = {
        "id": idTeam,
        "name": this.team.name
      }

      this.serviceMatch.updateTeam(dataUpdate).subscribe(

        response => {
          console.log(response);
          alert(response['message']);
          this.dialogRef.close();
          this.router.navigateByUrl('torneos', {skipLocationChange: true}).then(()=>
          this.router.navigate(["equipos"])); 
          //this.router.navigate(['equipos']);
        },
        error => {}
      )

    }
    if(idTeamCreate == 0){

      let dataCreate = {
      "name": this.team.name
      }

    this.serviceMatch.createTeam(dataCreate).subscribe(

        response => {
          console.log(response);
           alert(response['message']);
           this.dialogRef.close();
            this.router.navigateByUrl('torneos', {skipLocationChange: true}).then(()=>
            this.router.navigate(["equipos"])); 
        },
        
        error => {}
      )
    }
  }
}
