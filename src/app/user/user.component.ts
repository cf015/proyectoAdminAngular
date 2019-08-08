import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.tokenVerified();
  }

  tokenVerified(){
  	const token = localStorage.getItem("auth_token");
  	console.log(token);
  	if(token == ""){
  		console.log("token registrado");
  	}
  	else{
  		console.log("token.");	
  	}
  }

  logOut(){
      localStorage.removeItem("auth_token");
    }

}
