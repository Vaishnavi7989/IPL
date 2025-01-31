<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username } = this.loginForm.value;
      if (username === 'errorUser') {
        this.simulateBackendLoginError();
      } else {
        this.successMessage = 'Login successful!';
        this.errorMessage = '';
      }
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }

  simulateBackendLoginError() {
    this.successMessage = '';
    this.errorMessage = 'Invalid username or password.';
  }
}
=======


export class LoginComponent  {
  
}
>>>>>>> 6c06a7618829a555b9f48700ca0d1f617c0ae0e9
