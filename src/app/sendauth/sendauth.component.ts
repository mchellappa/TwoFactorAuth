/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: SendAuth Component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomResponse } from '../models/customresponse';
import { SendAuthService } from './sendauth.service';
import { AppDataService } from '../reusable/services/appdata.service';

@Component({
  moduleId: module.id,
  selector: 'send-auth',
  templateUrl: './sendauth.component.html',
  styleUrls: ['./sendauth.component.css']
})
export class SendAuthComponent implements OnInit {
  InProcess: boolean = false;
  response: CustomResponse;

  myNumber: string;
  submit: boolean = false;
  invalid:boolean = false;

  constructor(
    private sendAuthService: SendAuthService,
    private router: Router, private Data: AppDataService) { }

  ngOnInit(): void {
    if (!this.Data.step1auth) {
      this.router.navigate(['/login']);
       return;
    }

    if (this.Data.codeSent) {
      this.router.navigate(['/validateauth']);
       return;
    }
  }

  SendAuthCode(mobile: string): void {
    mobile = mobile.replace(/\D/g, '');
    this.invalid = false;
    if (mobile != '' && mobile.length == 10) {
      this.submit= true;
      this.InProcess = true;
      var that = this;
      this.sendAuthService.sendAuthCode("1" + mobile)
        .then(CustomResponse => {
          this.response = CustomResponse;
          if (this.response.Code == "0000") {
            this.Data.setUserPhone(mobile);
            this.Data.SetCodeStatus();
            this.InProcess = false;
            this.router.navigate(['/validateauth']);
          }
        })
        .catch(CustomResponse => {
          console.log(CustomResponse);
          this.InProcess = false;
          this.submit = false;
          this.invalid = true;
        });
    }else{
      this.invalid = true;
    }

  }
}