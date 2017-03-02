/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: Send Auth Service Implementataion
 */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CustomResponse } from '../models/customresponse';

@Injectable()
export class SendAuthService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serviceUrl = 'http://jhsandboxsecurity.azurewebsites.net/api/Authentication';  // URL to web api

  constructor(private http: Http) { }

  sendAuthCode(phn : string): Promise<CustomResponse>{
    return this.http.post(this.serviceUrl,{To:phn},{headers:this.headers})
    .toPromise()
    .then(res => res.json() as CustomResponse)
    .catch(this.handleError);
  }

  private handleError(error: CustomResponse): Promise<CustomResponse> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error);
  }
}