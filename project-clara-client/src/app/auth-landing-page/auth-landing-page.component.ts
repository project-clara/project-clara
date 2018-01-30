import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../core/authentication/authentication.service';

@Component({
  selector: 'cla-auth-landing-page',
  templateUrl: './auth-landing-page.component.html',
  styleUrls: ['./auth-landing-page.component.scss']
})
export class AuthLandingPageComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }
}
