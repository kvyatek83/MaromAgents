import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private userURL = 'http://localhost:3000/user';
  
  constructor(private http: HttpClient) { }

  public premission = "guest";

  //GET THE CURRENT USER PREMISSION
  getPremission() {
    return this.premission;
  }

  //SET THE CURRENT USER PREMISSION
  setPremission(userPremission) {
    this.premission = userPremission;
  }
}
