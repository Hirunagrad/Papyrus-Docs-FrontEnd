import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,private router : Router) {}

  registerUser(user: any) {
    return this.http.post('http://localhost:5000/api/register', user);
  }

  loginUser(user: any) {
    return this.http.post('http://localhost:5000/api/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
