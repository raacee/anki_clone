import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    // Implement registration logic here
    // For now, we'll just log the input and navigate to the login page
    console.log('Register with:', this.username, this.email, this.password);
    
    // TODO: Implement actual registration logic
    
    // Navigate to the login page after registration
    this.router.navigate(['/login']);
  }
}
