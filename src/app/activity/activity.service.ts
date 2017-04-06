import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Activity } from "./activity.model";
import { AuthService } from '../auth/auth.service';

import { CoreService } from '../core/core.service'

/*
  Generated class for the Tasks provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityService extends CoreService {

  
  constructor(
    public http: Http,
    public authService: AuthService
    ) {
    super(http, authService)
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