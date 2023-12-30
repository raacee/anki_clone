import { Component } from "@angular/core";
import {FormGroup, FormControl, ɵValue} from "@angular/forms";
import {Event, Router, } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  wrongPassword = false
  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });
  constructor(private router: Router) {}

  async login(event:any) {
    /*localStorage.setItem('username', this.username);
    this.router.navigate(['/home-page']); // Replace with your actual route*/
    const username = this.loginForm.value.username
    const password = this.loginForm.value.password
    const res = await fetch('/api/login', {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({username:username,password:password})
    })
    if (res.ok){
      const { session_id } = (await res.json())
      localStorage.setItem('session_id', session_id)
    }
    else{
      this.wrongPassword = true
    }
    event.stopPropagation();
  }
  register(){
    this.router.navigate(['/register'])
  }
}
