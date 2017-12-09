import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Survey } from './domain/survey';
import { MessageService } from './message.service';
import { SURVEY_MOCK } from './mock-survey';

@Injectable()
export class SurveyService {

  constructor(private messageService: MessageService) {

  }

  getSurvey(id: number): Observable<Survey> {
  this.messageService.addNotification('Diese Umfrage wird anonymisiert gespeichert!');
  this.messageService.addErrorMessage('Dumm gelaufen!');
  return of(SURVEY_MOCK);
}

}
