/* tslint:disable:no-unused-variable */

import {async, inject, TestBed} from '@angular/core/testing';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';


import {AuthenticationService} from './authentication.service';

describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuthenticationService]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('it should login users, if x-auth-token will be returned',
    async(
      inject([AuthenticationService, HttpClient, HttpTestingController],
        (authService: AuthenticationService, http: HttpClient, backend: HttpTestingController) => {
          const username = 'test';
          const password = 'password';
          const token = 'ABCD-CDEF-0123-4567-89';
          authService.login(username, password).subscribe(result => {
              //expect(authService.isUserLoggedIn()).toBe(true);
              expect(authService.getCurrentUser().token).toBe(token);
            }
          );
          const req = backend.expectOne(`${environment.apiBaseUrl}login`);
          expect(req.request.method).toBe('POST');
          expect(req.request.headers.get('Authorization')).toBe('Basic ' + btoa(username + ':' + password));
          req.flush({}, {
            headers: new HttpHeaders({'x-auth-token': token})
          });
        }
      )
    ));
});
