import { Component } from '@angular/core';

import { environment } from '../environments/environment';

/**
 * This class represents the root component of the application.
 */
@Component({
  selector: 'cla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'cla';

  /**
   * Creates an instance of the AppComponent class.
   * @constructor
   */
  constructor() {
    console.table([environment]);
  }

}
