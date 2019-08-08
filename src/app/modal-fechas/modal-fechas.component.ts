import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatchModel} from '../user/match.model';
import {ApiServiceService} from '../api-service.service';
import {TeamModel} from '../user/team.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-fechas',
  templateUrl: './modal-fechas.component.html',
  styleUrls: ['./modal-fechas.component.css']
})
export class ModalFechasComponent implements OnInit {

  match= new MatchModel;
  teams: Array<TeamModel>;

  constructor(private dialogRef : MatDialogRef<ModalFechasComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,  public serviceMatch: ApiServiceService, public router: Router){}
  
    ngOnInit() {

      this.getTeam();
      this.teams = new Array<TeamModel>();
  }


  crearMatch(){

    let data = {
      "dateMatch": this.match.dateMatch,
      "scoreLocal": 0,
      "scoreVisitor": 0,
      "teamLocal": this.match.teamLocal,
      "teamVisitor": this.match.teamVisitor,
    }

    this.serviceMatch.createMatch(data).subscribe(

        response => {
          console.log(response);
           this.dialogRef.close();
           alert(response['message']);
            this.router.navigateByUrl('equipos', {skipLocationChange: true}).then(()=>
          this.router.navigate(["torneos"])); 
        },
        
        error => {}
      )
    }

  getTeam(){
     this.serviceMatch.getTeams().subscribe(
        response => {
          console.log(response)
          this.teams = response['message'];
          },
        error => {}
      )
  }

clickSalir(){
    this.dialogRef.close();
  }

}
