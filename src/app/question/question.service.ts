import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { CoreService } from '../core/core.service'

import { AuthService } from '../auth/auth.service'

/*
  Generated class for the Tasks provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuestionService extends CoreService{

  constructor(
    public http: Http,
    public authService: AuthService
    ) {
    super(http, authService)
  }

  /**
   * fetches all tasks / issues from github
   */
  saveUserQuestion (qData): Promise<any> {
    return this.makeRequest('/api/v2/questions', 'POST', {}, qData)
  }  
  
  getPlatformQuestions (): Promise<any> {
    return this.makeRequest('/api/v2/questions')
  }

}