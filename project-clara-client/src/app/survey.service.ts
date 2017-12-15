import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Survey, SurveyResponse } from './domain/survey';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { SURVEY_MOCK } from './mock-survey';

@Injectable()
export class SurveyService {

  private surveyUrl = 'http://localhost:9090/api/survey/v1/survey';

  constructor( private http: HttpClient,
    private messageService: MessageService) {
  }

  private logNotification(notification: string) {
    this.messageService.addNotification(notification);
  }

  private logErrorMessage(errorMessage: string) {
    this.messageService.addErrorMessage(errorMessage);
}

getSurvey(id: number): Observable<SurveyResponse> {
    // return of(SURVEY_MOCK);
    const url = `${this.surveyUrl}/${id}`;
    return this.http.get<SurveyResponse>(url).pipe(
      tap(_ => this.logNotification(`Datensatz mit id=${id} geladen!`)),
      catchError(this.handleError<SurveyResponse>(`getSurvey id=${id}`))
    );
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logErrorMessage(`${operation} fehlgeschlagen: ${error.message}`);
      return of(result as T);
    };
  }



}
