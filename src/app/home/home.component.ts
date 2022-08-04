import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponentComponent {
  name = 'Welcome to ';

  constructor(
    public router: Router,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {
    // get current school name
    this.name += this.route.snapshot.paramMap.get('name');
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
