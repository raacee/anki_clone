import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    signupForm = new FormGroup({
        username: new FormControl(""),
        password: new FormControl("")
    });
    isNotAvailable = false

    constructor(private router: Router) {
    }

    login() {
        this.router.navigate(['/login'])
    }

    async signup(event: any) {
        event.stopPropagation()
        const username = this.signupForm.value.username
        const password = this.signupForm.value.password
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
        if (!res.ok) {
            this.isNotAvailable = true
        }
        else {
            this.login()
        }
    }
}
