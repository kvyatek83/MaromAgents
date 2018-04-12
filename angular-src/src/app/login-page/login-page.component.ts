import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.http.get('http://localhost:3000/item').subscribe(data => {
    //   this.a = data;
    // });
  }

  //TODO::client error message if the connection failde.
  login(){
    this.http.post('http://localhost:3000/user', {
      username : this.username,
      password : this.password }).subscribe(res => {
        if(res['errMsg'])
        {
          this.userInvalid = true;
        } else {
          this.user = res['premission'];
          this.userInvalid = false
          this.router.navigate(['/']);
          //TODO::move the default page...
        }
        console.log(res);
      });
  }

}
