/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: Validate Auth Service Implementataion
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CustomResponse } from '../models/customresponse';

@Injectable()
export class SmsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serviceUrl = 'http://jhsandboxsecurity.azurewebsites.net/api/Authentication';  // URL to web api

  constructor(private http: Http) { }

  SendSms(to: string, msg: string): Promise<CustomResponse> {
    return this.http.post(this.serviceUrl, {}, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as CustomResponse)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}