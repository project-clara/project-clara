import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SurveyComponent} from './survey.component';
import {QuestionComponent} from './question/question.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SurveyComponent,
    QuestionComponent]
})
export class SurveyModule { }
