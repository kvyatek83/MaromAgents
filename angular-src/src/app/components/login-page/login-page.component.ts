import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';

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

  constructor(private http: HttpClient, private router: Router, private userService: UserService, private snackBar: MatSnackBar) { }

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
            this.userInvalid = false;
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            config.panelClass = ['green-snackbar']
            this.snackBar.open("התחברות בוצעה בהצלחה!", "", config);
            this.userService.setPremission(this.user);
            this.router.navigate(['/']);
        }},
        err => {
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['red-snackbar']
          this.snackBar.open("תקלה בניסיון התחברות!", "", config);
        });
  }

}
