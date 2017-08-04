import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { HttpResourceModel } from './http-resource.model';
import { HttpResourceService } from './http-resource.service';

/**
 * This class provides a basic implementation for the HttpResourceService.
 * Subclasses only need to call the super constructor to set the api url.
 */
@Injectable()
export class BaseHttpResourceService<T extends HttpResourceModel> implements HttpResourceService<T> {

  /**
   * The URL of the API endpoint.
   * @type {string}
   */
  private apiUrl: string;

  /**
   * The array of the initial resources provided by the service.
   * @type {T[]}
   */
  private resources: T[] = [];

  /**
   * Contains the currently pending getAll request.
   * @type {Observable<T[]>}
   */
  private getAllRequest: Observable<T[]>;

  /**
   * Contains the currently pending create request.
   * @type {Observable<Response>}
   */
  private createRequest: Observable<Response>;

  /**
   * Contains the currently pending getById request.
   * @type {Observable<T>}
   */
  private getByIdRequest: Observable<T>;

  /**
   * Contains the currently pending update request.
   * @type {Observable<Response>}
   */
  private updateRequest: Observable<Response>;

  /**
   * Constains the currently pending deleteById request.
   * @type {Observable<Response>}
   */
  private deleteByIdRequest: Observable<Response>;

  /**
   * Creates a new BaseHttpResourceService with the injected Http and API URL.
   * @param {Http}   http         - The injected Http.
   * @param {string} resourceName - The name of the resource.
   * @constructor
   */
  constructor(private http: Http, resourceName: string) {
    this.apiUrl = environment.apiBaseUrl + resourceName + '/';
  }

  /**
   * Returns an Observable for the HTTP GET for the resource.
   * @return {Observable<T[]>} The Observable for the HTTP request.
   */
  getAll(): Observable<T[]> {
    this.getAllRequest = this.http
      .get(this.apiUrl, this.getRequestOptions())
      .map(
        (response: Response) => response.json()
      )
      .map(
        (data: T[]) => {
          this.getAllRequest = null;
          return this.resources = data;
        }
      );
    return this.getAllRequest;
  }

  /**
   * Returns an Observable for the HTTP POST with the given resource.
   * @param  {T}                    resource - The resource to be created.
   * @return {Observable<Response>}            The Observable for the HTTP request.
   */
  create(resource: T): Observable<Response> {
    this.createRequest = this.http
      .post(this.apiUrl, JSON.stringify(resource), this.getRequestOptions());
    return this.createRequest;
  }

  /**
   * Returns an Observable for the HTTP GET for the resource with the given id.
   * @param  {number}        id - The id of the resource to get.
   * @return {Observable<T>}      The Observable for the HTTP request.
   */
  getById(id: number): Observable<T> {
    this.getByIdRequest = this.http
      .get(this.apiUrl + id, this.getRequestOptions())
      .map(
        (response: Response) => response.json()
      )
      .map(
        (data: T) => {
          this.getByIdRequest = null;
          return data;
        }
      );
    return this.getByIdRequest;
  }

  /**
   * eturns an Observable for the HTTP PATCH for the resource.
   * @param  {T}                    resource - The resource to be updated.
   * @return {Observable<Response>}            The Observable for the HTTP request.
   */
  update(resource: T): Observable<Response> {
    this.updateRequest = this.http
      .patch(this.apiUrl + resource.id, JSON.stringify(resource), this.getRequestOptions());
    return this.updateRequest;
  }

  /**
   * Returns an Observable for the HTTP DELETE for the resource.
   * @param  {number}               id - The id of the resource to be deleted.
   * @return {Observable<Response>}      The Observable for the HTTP request.
   */
  deleteById(id: number): Observable<Response> {
    if (id) {
      this.deleteByIdRequest = this.http
        .delete(this.apiUrl + id, this.getRequestOptions());
    }
    return this.deleteByIdRequest;
  }

  /**
   * Returns the RequestOptions for the HTTP POST and HTTP PATCH Requests
   * @return {RequestOptions} The request options.
   */
  getRequestOptions(): RequestOptions {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthorization()
    });
    const requestOptions: RequestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }

  /**
   * Returns the authorization String used for the HTTP Authorization header.
   * The String consists of the 'Bearer' prefix and the encoded JWT token.
   * @return {string} The authorization String
   */
  private getAuthorization(): string {
    const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
    return 'Bearer ' + currentUser.token;
  }

}
