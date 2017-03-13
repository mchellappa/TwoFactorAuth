/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: Send Notification Implementataion
 */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CustomResponse } from '../models/customresponse';

@Injectable()
export class NotificationsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serviceUrl = 'https://jhsandboxnotificationplivo.azurewebsites.net/api/Sms';  // URL to web api

  constructor(private http: Http) { }

  sendNotification(phn : string, msg: string): Promise<CustomResponse>{
    return this.http.post(this.serviceUrl,{To:phn,Msg:msg},{headers:this.headers})
    .toPromise()
    .then(res => res.json() as CustomResponse)
    .catch(this.handleError);
  }

  getDelivery(txnId: string): Promise<CustomResponse>{
    return this.http.get(this.serviceUrl+"?TxnId="+txnId,{headers:this.headers})
    .toPromise()
    .then(res=>res.json() as CustomResponse)
    .catch(this.handleError);
  }

  private handleError(error: CustomResponse): Promise<CustomResponse> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error);
  }
}