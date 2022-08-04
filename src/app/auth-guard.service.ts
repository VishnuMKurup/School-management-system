import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuardService {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url) {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else if (this.isLoggedIn()) {
      return true;
    }
  }

  public isLoggedIn() {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
