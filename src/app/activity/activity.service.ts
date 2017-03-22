import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Activity } from "./activity.model";
import { AuthService } from '../auth/auth.service'

/*
  Generated class for the Tasks provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityService {
  private resourceUrl: string = 'https://tagchief-node-k1ngk0d3d.c9users.io'
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
    // authService.auth$.subscribe((state: FirebaseAuthState) => {
    //   authService.authState = state;
    // });
    // const ret = this
    // const m = Observable.fromPromise(this.authService.getAuthToken())
    
    // m.subscribe(token => {
    //   console.log(token)
    //   extraHeaders.Authorization = 'Bearer ' + token
      
    //   ret.http.request(`${ret.resourceUrl}${uri}`, {
    //       url: `${ret.resourceUrl}${uri}`,
    //       method: method,
    //       headers: new Headers(extraHeaders),
    //       body: body
    //   }) 
    // })
    
    // return m
  }

  /**
   * fetches all tasks / issues from github
   */
  getUserActivities (): Promise<any> {
    return this.makeRequest('/api/v2/feedback')
      // ...and calling .json() on the response to return data
      // .map((res:Response) => res.json())
      //...errors if any
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  

}