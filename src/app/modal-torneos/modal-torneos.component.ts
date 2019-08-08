import { Component, OnInit, Inject} from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatchModel} from '../user/match.model';
import {ApiServiceService} from '../api-service.service';
import {TeamModel} from '../user/team.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-torneos',
  templateUrl: './modal-torneos.component.html',
  styleUrls: ['./modal-torneos.component.css']
})
export class ModalTorneosComponent implements OnInit {


  match= new MatchModel;
  idMatch: number;
  
  constructor(private dialogRef : MatDialogRef<ModalTorneosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,public serviceMatch: ApiServiceService, private router: Router) { }


  ngOnInit() {
  }

  updateMatch(){

    let data = {
      "id": this.data.idMatch,
      "scoreLocal": this.match.scoreLocal,
      "scoreVisitor": this.match.scoreVisitor
    }

    this.serviceMatch.updateMatch(data).subscribe(

        response => {
          console.log(response);
          this.dialogRef.close();
          this.router.navigateByUrl('equipos', {skipLocationChange: true}).then(()=>
            this.router.navigate(["torneos"])); 
        },
        error => {}
      )
  }

  clickSalir(){
    this.dialogRef.close();
  }


}


