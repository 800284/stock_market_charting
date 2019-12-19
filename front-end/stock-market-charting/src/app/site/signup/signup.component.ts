import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  cities: Array<any>;
  signupForm: any;
  user: User;
  checkpass: boolean = false;
  userPresent: boolean = false;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {

    this.user = {
      username: "",
      contactNo: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmation: false
    }

    this.signupForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      contactNo: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emailId: new FormControl(null, [Validators.required, Validators.email]),
    });

  }

  checkIfMatchingPasswords() {
    if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
      this.checkpass = true;
    } else {
      this.checkpass = false;
    }
  }

  userAdd(signupForm) {
    this.user.username = signupForm.value.userName;
    this.user.password = signupForm.value.password;
    this.user.confirmPassword = signupForm.value.confirmPassword;
    this.user.contactNo = signupForm.value.contactNo;
    this.user.email = signupForm.value.emailId;
    this.user.confirmation = false;
    this.userService.addUser(this.user).subscribe(response => { this.router.navigate(["/signup-success"]) }, (error) => this.userPresent = true)
  }



  changeValue() {
    this.userPresent = false;
  }
}
