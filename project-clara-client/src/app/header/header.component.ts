import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cla-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {


    title = 'Project Clara - Umfragen';

  constructor() { }

  ngOnInit() {
  }

}
