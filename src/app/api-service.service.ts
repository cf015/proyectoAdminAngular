import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
	
	 private baseUrl = "http://127.0.0.1:8000/api/auth";
  	//token: any;
    private token = localStorage.getItem("auth_token");

    private idMatch: number;

    //Heders servidor.
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
         'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
      })
    };

    //Header token servidor.
    private httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
         'Authorization': 'Bearer ' + '' + this.token,
      })
    };

    constructor(private http: HttpClient) { }

    //Registro usuario en Servidor.
    crearUsuario(data) {

      return this.http.post(`${this.baseUrl}/signup`, data, this.httpOptions);
    }


    //Login con Servidor.
    loginUsuario(data) {

      return this.http.post(`${this.baseUrl}/login`, data, this.httpOptions);
    }

    logOutUsuario(){
      return this.http.get(`${this.baseUrl}/logout`, this.httpOptions2); 
    }


    //Obtener token del servidor.
    getToken(token) {
      this.token = token;
    }

    /*sendToken() {
      return this.token;
    }*/

    //Crear Match.
    createMatch(data){
    
      return this.http.post(`${this.baseUrl}/match`,data, this.httpOptions2);
    }

    //Obtener lista de matches.
    getMatch(){

      return this.http.get(`${this.baseUrl}/match`, this.httpOptions2);
    }

    //Update match.
    updateMatch(data){

      return this.http.put(`${this.baseUrl}/match`,data, this.httpOptions2);
    }

    deleteMatch(data){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + '' + this.token
        }), body: data
      };


       return this.http.delete(`${this.baseUrl}/match`,httpOptions);
    }

    deleteTeam(data){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + '' + this.token
        }), body: data
      };


       return this.http.delete(`${this.baseUrl}/team`,httpOptions);
    }

    //Obtener equipos registrados.
    getTeams(){

     return this.http.get(`${this.baseUrl}/team`, this.httpOptions2);
    }

    //Crear team.
    createTeam(data){
       return this.http.post(`${this.baseUrl}/team`,data, this.httpOptions2);
    }

    updateTeam(data){
       return this.http.put(`${this.baseUrl}/team`,data, this.httpOptions2);
    }

    //Obtener usuario registrado.
    getUsuario(){

       return this.http.get(`${this.baseUrl}/user`, this.httpOptions2);
    }


}
