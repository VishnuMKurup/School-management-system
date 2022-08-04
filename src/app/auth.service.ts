import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
}
