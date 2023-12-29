import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = '';
  password: string = ''; // Make sure you handle the password securely

  login() {
    localStorage.setItem('username', this.username);
    this.router.navigate(['/home-page']); // Replace with your actual route
  }
}
