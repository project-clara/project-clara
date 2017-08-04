import { RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpResourceModel } from './http-resource.model';

/**
 * This interface describes basic CRUD operations for HTTP resources.
 */
export interface HttpResourceService<T extends HttpResourceModel> {

  /**
   * Returns an Observable for the HTTP GET for the resource.
   * @return {Observable<T[]>} The Observable for the HTTP request.
   */
  getAll(): Observable<T[]>;

  /**
   * Returns an Observable for the HTTP POST with the given resource.
   * @param  {T}                    resource - The resource to be created.
   * @return {Observable<Response>}            The Observable for the HTTP request.
   */
  create(resource: T): Observable<Response>;

  /**
   * Returns an Observable for the HTTP GET for the resource with the given id.
   * @param  {number}        id - The id of the resource to get.
   * @return {Observable<T>}      The Observable for the HTTP request.
   */
  getById(id: number): Observable<T>;

  /**
   * eturns an Observable for the HTTP PATCH for the resource.
   * @param  {T}                    resource - The resource to be updated.
   * @return {Observable<Response>}            The Observable for the HTTP request.
   */
  update(resource: T): Observable<Response>;

  /**
   * Returns an Observable for the HTTP DELETE for the resource.
   * @param  {number}               id - The id of the resource to be deleted.
   * @return {Observable<Response>}      The Observable for the HTTP request.
   */
  deleteById(id: number): Observable<Response>;

  /**
   * Returns the RequestOptions for the HTTP POST and HTTP PATCH Requests
   * @return {RequestOptions} The request options.
   */
  getRequestOptions(): RequestOptions;

}
