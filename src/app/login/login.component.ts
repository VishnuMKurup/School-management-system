import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponentComponent implements OnInit {
  name = 'Login';

  loginForm: FormGroup;
  error: string;
  returnUrl: string;
  models: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = '/schools';
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.models = [
      { username: 'school-0', password: 'admin' },
      { username: 'school-1', password: 'admin' },
    ];
    if (this.loginForm.valid) {
      let model = {
        username: this.f.username.value,
        password: this.f.password.value,
      };

      if (
        this.models.find(
          (x) => x.username == model.username && x.password == model.password
        )
      ) {
        // TODO: replace these two lines with actual login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.f.username.value);
        // redirect to school page (using school name as url param)
        this.router.navigate([this.returnUrl, this.f.username.value]);
      } else {
        this.error = 'Please double check your username and password';
      }
    }
  }
}
