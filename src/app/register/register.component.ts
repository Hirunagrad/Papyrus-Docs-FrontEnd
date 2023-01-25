import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: '',
    password: '',
    role: '',
    name: ''
  };
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  selectChangeHandler(event: any) {
    //update the ui
    this.registerUserData.role = event.target.value;
  }

  registerUser() {
    console.log(this.registerUserData);
   this._auth.registerUser(this.registerUserData).subscribe((data: any) => {
      console.log(data.message);

      this.toast.success({
        detail: 'SUCCESS',
        summary: data.message,
        duration: 5000,
      });

      setTimeout(() => {
        this._router.navigate(['/events']);
      }, 2000);

      localStorage.setItem('token', data.token);
    });
  }
}
