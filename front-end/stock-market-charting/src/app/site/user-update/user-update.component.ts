import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: any;
  constructor(private userService: UserService, private authService: AuthenticationService) { }
  checkpass: boolean = false;
  updateForm: any;
  updateSuccess: boolean = false;
  ngOnInit() {

    this.user = {
      username: "",
      contactNo: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmation: false
    }


    this.updateForm = new FormGroup({
      userName: new FormControl({ value: '', disabled: true }),
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      confirmPassword: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emailId: new FormControl({ value: '', disabled: true }),
    });

    this.userService.getUser(this.authService.getLoggedinUser()).subscribe((response) => {
    this.user = response;
      this.updateForm.setValue({
        userName: this.user.username,
        password: "",
        confirmPassword: "",
        emailId: this.user.email,
        contactNo: this.user.contactNo
      })
    })

  }

  checkIfMatchingPasswords() {
    if (this.updateForm.value.password == this.updateForm.value.confirmPassword) {
      this.checkpass = true;
    } else {
      this.checkpass = false;
    }
  }
  updateUser(updateForm) {
    this.user.password = updateForm.value.password;
    this.user.confirmPassword = updateForm.value.confirmPassword;
    this.user.contactNo = updateForm.value.contactNo;
    this.userService.updateUser(this.user).subscribe((response) => { this.updateSuccess = true; });
  }
}
