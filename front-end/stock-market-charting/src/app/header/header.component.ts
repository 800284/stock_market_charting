import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  isLoggedIn() {
    return this.authService.isLogin()
  }

  getUserName() {
    return this.authService.getLoggedinUser()
  }
  showTips() {
    this.router.navigate(['/tips']);
  }
  updateProfile() {
    this.router.navigate(['/update-profile']);
  }

}
