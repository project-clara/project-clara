import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Survey } from './domain/survey';
import { SURVEY_MOCK } from './mock-survey';

@Injectable()
export class SurveyService {

  constructor() { }

  getSurvey(id: number): Observable<Survey> {
  return of(SURVEY_MOCK);
}

}
