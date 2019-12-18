import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {
  userName:String;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.userName=this.authService.getLoggedinUser();
  }

}
