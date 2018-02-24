import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/authentication/authentication.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cla-login-state-navbar',
  templateUrl: './login-state-navbar.component.html',
  styleUrls: ['./login-state-navbar.component.scss']
})
export class LoginStateNavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  get isUserLoggedIn(): Observable<boolean> {
    return this.authService.isUserLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}
