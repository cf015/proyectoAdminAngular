import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ApiServiceService} from '../api-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  usuario:string;
  contactUser:string;

  ngOnInit() {
     this.mostrarUsuario();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public serviceMatch: ApiServiceService, public router: Router) {}

  mostrarUsuario(){
    this.serviceMatch.getUsuario().subscribe(
        response => {
          console.log(response);
          this.usuario = response['name'];
          this.contactUser = response['contactUser'];
        },
        error => {}
      )
  }

   logOut(){
     this.serviceMatch.logOutUsuario().subscribe(
         response => {
           console.log(response);
           localStorage.removeItem("auth_token");
            this.router.navigate(["login"]);
         },

         error => {}
       )
    }
}
