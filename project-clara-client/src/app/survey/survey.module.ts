import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SurveyComponent} from './survey.component';
import {QuestionComponent} from './question/question.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { AddQuestionComponent } from './create-survey/add-question/add-question.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SurveyComponent,
    QuestionComponent,
    CreateSurveyComponent,
    AddQuestionComponent]
})
export class SurveyModule { }
