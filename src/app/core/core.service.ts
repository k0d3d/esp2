import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment'

import { AuthService } from '../auth/auth.service'

/*
  Generated class for the Tasks provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CoreService {
  private resourceUrl: string = environment.apiUrl
  // protected requestInstance
  
  constructor(
    public http: Http,
    public authService: AuthService
    ) {

  }

  makeRequest (uri: string, method: string = 'GET', extraHeaders: any = {}, body?: Object): Promise<any> {
    const self = this
    return this.authService.getAuthToken()
    .then(token => {
      extraHeaders.Authorization = '' + token
      return self.http.request(`${self.resourceUrl}${uri}`, {
          url: `${self.resourceUrl}${uri}`,
          method: method,
          headers: new Headers(extraHeaders),
          body: body
      })  
      .toPromise()
    })
  }
}