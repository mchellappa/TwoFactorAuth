/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: Validate Auth Service Implementataion
 */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CustomResponse } from '../models/customresponse';

@Injectable()
export class DashboardService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serviceUrl = 'http://jhsecurity.azurewebsites.net/api/Authentication';  // URL to web api

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}