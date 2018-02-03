import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * This class implements a JWT authentication for the application.
 */
@Injectable()
export class AuthenticationService {
  /**
   * x-auth-token for further communication with the server
   */
  private token: string;
  private baseUrl: string;
  private userAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  /**
   * Creates an instance of the AuthenticationService class.
   * @param {Http} http - The injected Http
   * @constructor
   */
  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.baseUrl = environment.apiBaseUrl;
  }

  /**
   * Authenticates the given credentials. An error will be thrown if the username or password is not correct.
   * @param  {string}    username - The username
   * @param  {string}    password - The password
   * @return {boolean}              `true` if the authentication was successful, otherwise `false`.
   */
  login(username: string, password: string): Observable<boolean> {
    const requestOptions = {
      headers: this.getRequestHeaders(username, password),
      observe: 'response' as 'response'
    };
    return this.http.post<HttpResponse<any>>(this.baseUrl + 'auth/login', {}, requestOptions)
      .map(response => {
        const xAuthToken = response.headers.get('x-auth-token');
        if (response.ok && !!xAuthToken) {
          this.storeUserAndToken(username, xAuthToken);
          this.userAuthenticated$.next(true);
          return true;
        }
        return false;
      });
  }

  /**
   * Logs out the current user by removing it from the LocalStorage.
   */
  logout(): void {
    this.token = null;
    this.userAuthenticated$.next(false);
    localStorage.removeItem('currentUser');
  }

  /**
   * Returns the current users from the LocalStorage.
   * @return {any} The LocalStorage item containing the current users id.
   */
  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  /**
   * Returns if there is a user currently logged in.
   * @return {boolean} `true` if a user is currently logged in, otherwise `false`.
   */
  isUserLoggedIn(): Observable<boolean> {
    return this.userAuthenticated$.asObservable();
  }

  /**
   * Returns the RequestOptions for the HTTP POST and HTTP PATCH Requests
   * @return {RequestOptions} The request options.
   */
  private getRequestHeaders(username: string, password: string): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return headers;
  }

  /**
   *
   */
  private storeUserAndToken(username: string, xAuthToken: string): void {
    this.token = xAuthToken;
    localStorage.setItem('currentUser', JSON.stringify({username: username, token: this.token}));
  }

}
