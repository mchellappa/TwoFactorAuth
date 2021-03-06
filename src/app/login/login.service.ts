/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: Login Service Implementataion
 */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../models/user';

@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = '';  // URL to web api

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}