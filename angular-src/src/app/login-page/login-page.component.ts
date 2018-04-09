import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //GET request for items
    // this.http.get('/item').subscribe(data => {
    //   this.items = data;
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
          //TODO::move the default page...
        }
        console.log(res);
      });
  }

}
