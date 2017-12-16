import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Question } from '../domain/question';

@Component({
  selector: 'cla-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit {

  @Input() questions: Question[];
  constructor() { }

  ngOnInit() {
  }

}
