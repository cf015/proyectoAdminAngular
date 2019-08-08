import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

	name: any;
	password: any;
	password_confirmation: any;
	auth_token: any;
	email: any;
	numTeam: any;
  contactUser: any;

  constructor(private apiService: ApiServiceService,private route: ActivatedRoute, private router: Router) { }

  

  ngOnInit() {
  	this.loginform();
  }


  loginform(){
 
      $('#login-form-link').click(function(e) {
      $("#login-form").delay(100).fadeIn(100);
       $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
      $("#register-form").delay(100).fadeIn(100);
       $("#login-form").fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
  }

	login() {
    let data = {
      "password" : this.password,
      "email" : this.email
    }
    this.apiService.loginUsuario(data)
    .subscribe(
        response => {
          this.auth_token = response['access_token'];
          localStorage.setItem("auth_token", this.auth_token);
          console.log(this.auth_token);
          this.apiService.getToken(this.auth_token);
          this.router.navigateByUrl('login', {skipLocationChange: true}).then(()=>
          this.router.navigate(["inicio"])); 
          //this.router.navigate(["login"]);
        },
        error => {
          console.error("error creating subscription");
        }
    );
  }

  register() {
  	 let data = {
  	 	"name": this.name,
     	 "email" : this.email,
     	 "password" : this.password,
      	"password_confirmation": this.password_confirmation,
        "numTeam": this.numTeam,
        "contactUser": this.contactUser
    }

    this.apiService.crearUsuario(data)
    .subscribe(
        response => {
        	console.log(response);
        },
        error => {
          console.error("error creating subscription");
        }
    );
 
  }



}
