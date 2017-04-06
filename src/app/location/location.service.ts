import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Location } from "./location.model";
import { AuthService } from '../auth/auth.service'

import { CoreService } from '../core/core.service'

/*
  Generated class for the Tasks provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationService extends CoreService {
  // private resourceUrl: string = 'https://tagchief-node-k1ngk0d3d.c9users.io'
  // protected requestInstance
  
  constructor(
    public http: Http,
    public authService: AuthService
    ) {
    super(http, authService)
  }

  // makeRequest (uri: string, method: string = 'GET', extraHeaders: any = {}, body?: Object): Promise<any> {
  //   const self = this
  //   return this.authService.getAuthToken()
  //   .then(token => {
  //     extraHeaders.Authorization = '' + token
  //     return self.http.request(`${self.resourceUrl}${uri}`, {
  //         url: `${self.resourceUrl}${uri}`,
  //         method: method,
  //         headers: new Headers(extraHeaders),
  //         body: body
  //     })  
  //     .toPromise()
  //   })
  // }
  
  getUserLocations (): Promise<any> {
    return this.makeRequest('/api/v2/locations?listType=active-locations')
  }


}