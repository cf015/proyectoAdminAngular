import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ApiServiceService } from './api-service.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private authService: ApiServiceService, private router: Router) { }

   canActivate() {
        // If the user is not logged in we'll send them back to the home page
      	const token = localStorage.getItem("auth_token");
        if(token == null){
        	console.log("Usuario no logeado.");
        	return false;	
        }
        return true;
    }
}
