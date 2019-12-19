import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  proceedLogin: boolean = false;
  proceedLoginFlag = 0;
  loginForm: any;
  loginFlag: boolean = false;
  userIsThere: boolean = true;
  infoFlag: boolean = false;
  verificationFlag: boolean = false;
  constructor(private authService: AuthenticationService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login(loginForm) {
    this.authService.authenticate(loginForm.value.userName, loginForm.value.password).subscribe((response) => {
      if (response.confirm == 'true') {
        this.authService.setLoggedinUser(loginForm.value.userName);
        this.authService.setLoginFlag();
        this.authService.setToken(response.token);
        this.router.navigate(['/home']);
      } else {
        this.verificationFlag = true;
      }
    },
      (error) => {
        if (error.status == "401") {
          this.loginFlag = true;
        }
      }
    )
  }

}
