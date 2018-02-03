import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/authentication/authentication.service';

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
}
