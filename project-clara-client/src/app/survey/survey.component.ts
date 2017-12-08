import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Survey } from '../domain/survey';
import { SURVEY_MOCK } from '../mock-survey';

@Component({
  selector: 'cla-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyComponent implements OnInit {

  survey: Survey  = SURVEY_MOCK;

  constructor() { }

  ngOnInit() {
  }

}
