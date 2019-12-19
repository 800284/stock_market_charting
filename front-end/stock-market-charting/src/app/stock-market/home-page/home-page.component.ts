import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router,private authService:AuthenticationService) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/login']);
  }
  signUp(){
    this.router.navigate(['/register']);
  }
}
