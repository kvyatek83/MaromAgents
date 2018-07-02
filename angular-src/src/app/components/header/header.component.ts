import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) { }

  public navbarCollapsed = true;

  ngOnInit() {
  }

  isUserIsAgent(){
    return this.userService.getPremission() == "agent";
  }

  isUserIsAdmin(){
    return this.userService.getPremission() == "admin";
  }

  closeNavbar(){
    this.navbarCollapsed = true;
  }

  logout(){
    this.navbarCollapsed = true;    
    this.userService.setPremission("guest");
    let config = new MatSnackBarConfig();
    config.duration = 2000;
    config.panelClass = ['green-snackbar']
    this.snackBar.open("התנתקות בוצעה בהצלחה!", "", config);
    this.router.navigate(['/']);
  }

  navToLogin() {
    this.navbarCollapsed = true;    
    this.router.navigate(['/login']);
  }
}
