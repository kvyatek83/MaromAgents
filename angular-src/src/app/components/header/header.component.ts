import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  public navbarCollapsed = true;

  ngOnInit() {
  }

  isUserIsGuest(){
    return localStorage.getItem("premission") == "guest";
  }

  isUserIsAdmin(){
    return localStorage.getItem("premission") == "admin";
  }

  logout(){
    localStorage.setItem("premission", "guest");
    this.router.navigate(['/']);
  }

  navToLogin() {
    this.router.navigate(['/login']);
  }
}
