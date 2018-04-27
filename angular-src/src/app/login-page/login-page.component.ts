import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username = "";
  password = "";
  userInvalid = false;
  user : any;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  //TODO::client error message if the connection failde.
  login(){
      let userToCheck = {
        username : this.username,
        password : this.password};
  
      this.userService.login(userToCheck).subscribe(
        data => {
          if(data['errMsg']){
            this.userInvalid = true;
          } else {
            this.user = data['premission'];
            this.userInvalid = false
            this.userService.setPremission(this.user);
            this.router.navigate(['/']);
          //TODO::move the default page...
        }},
        err => console.error(err));
  }

}
