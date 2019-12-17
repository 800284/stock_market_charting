import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  loginFlag: boolean = false;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm) {
    this.authService.authenticate(loginForm.value.userName, loginForm.value.password).subscribe((response) => {
      this.authService.setLoggedinUser(loginForm.value.userName);
      this.authService.setLoginFlag();
      this.authService.setToken(response.token);
      this.router.navigate(['/home']);
    },
      (error) => {
        if (error.status == "401") {
          this.loginFlag = true;
        }
      }
    )
  }

}
