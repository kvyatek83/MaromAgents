import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  private localProductURL = 'http://localhost:8080/user';
  private remoteUserURL = 'user';
  
  constructor(private http: HttpClient) { }

  public premission = "guest";

  //GET THE CURRENT USER PREMISSION
  getPremission() {
    return window.sessionStorage.getItem("premission");;
  }

  //SET THE CURRENT USER PREMISSION
  setPremission(userPremission) {
    window.sessionStorage.setItem("premission", userPremission);
  }

  login(user) {
    let body = JSON.stringify(user);
    return this.http.post(this.remoteUserURL, body, httpOptions);
  }
}
