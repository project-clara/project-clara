import { Component, OnInit } from '@angular/core';
import {Question} from '../domain/question';
import {SurveyService} from '../../survey.service';

@Component({
  selector: 'cla-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {
  questions: Question[] = [];

  constructor(private surveyService: SurveyService) {
  }

  ngOnInit() {
  }


  onAddQuestion(event: Question) {
    this.questions.push(event);
  }

  onSubmit(obj: any) {
    this.surveyService.createSurvey(this.questions);
  }
}
