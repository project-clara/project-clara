import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Survey } from '../domain/survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'cla-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyComponent implements OnInit {

  survey: Survey;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.getSurvey(42);
  }

  getSurvey(id: number): void {
  this.surveyService.getSurvey(id)
      .subscribe(
        res => {
          if(res !== undefined && res.data != undefined){
            this.survey = res.data.survey;
          }
        }
      );
  }
}
