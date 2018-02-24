import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Question } from '../domain/question';
import { QuestionType } from '../domain/question-type';

@Component({
  selector: 'cla-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit {

  QuestionType = QuestionType;

  @Input() questions: Question[];
  constructor() { }

  ngOnInit() {
    console.log(this.questions);
  }

}
