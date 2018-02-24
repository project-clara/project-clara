import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginStateNavbarComponent} from '../login-state-navbar/login-state-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cla-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {


  title = 'Project Clara - Umfragen';

  constructor() {
  }

  ngOnInit() {
  }

}
