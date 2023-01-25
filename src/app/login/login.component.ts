import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: '',

  };

  constructor(private _auth: AuthService,private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe((data: any) => {
      console.log("serdata",data.data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.data.name);
      this._router.navigate(['/home']);
    });
  }
}
