import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MessageService} from '../../message.service';

@Component({
  selector: 'cla-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
  }

}
