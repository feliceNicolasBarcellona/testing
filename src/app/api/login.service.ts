import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl =  'https://api.drrise.idener.ai'

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post(`${this.apiUrl}/login`, { username, password } )
  }

  getUsers(){
    return this.http.get(`${this.apiUrl}/login/users/me`)
  }
}
