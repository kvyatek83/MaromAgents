import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  private userURL = 'user';
  
  constructor(private http: HttpClient) { }

  public premission = "guest";

  //GET THE CURRENT USER PREMISSION
  getPremission() {
    return window.localStorage.gettem("premission");;
  }

  //SET THE CURRENT USER PREMISSION
  setPremission(userPremission) {
    window.localStorage.setItem("premission", userPremission);
  }

  login(user) {
    let body = JSON.stringify(user);
    return this.http.post('user', body, httpOptions);
  }
}
