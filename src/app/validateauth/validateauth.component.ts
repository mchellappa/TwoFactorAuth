/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: SendAuth Component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomResponse } from '../models/customresponse';
import { ValidateAuthService } from './validateauth.service';
import { AppDataService } from '../reusable/services/appdata.service';

@Component({
  moduleId: module.id,
  selector: 'validate-auth',
  templateUrl: './validateauth.component.html',
  styleUrls: ['./validateauth.component.css']
})
export class ValidateAuthComponent implements OnInit {
  InProcess: boolean = false;
  response: CustomResponse;
  submit: boolean = false;
  invalid: boolean = false;

  constructor(
    private validateAuthService: ValidateAuthService,
    private router: Router, private Data: AppDataService) { }

  ngOnInit(): void {
    if (!this.Data.step1auth) {
      this.router.navigate(['/login']);
      return;
    } else {
      if (!this.Data.codeSent) {
        this.router.navigate(['/SendAuth']);
        return;
      }
    }
  }

  ValidateCode(code: string) {
    this.invalid = false;
    if (code != '' && code.length == 6) {
      this.submit = true;
      this.InProcess = true;
      this.validateAuthService.validateAuthCode("1" + this.Data.PhoneNumber, code)
        .then(CustomResponse => {
          this.response = CustomResponse;
          if (this.response.Code == "0000") {
            this.InProcess = false;
            this.Data.SetAuthStatus("2");
            this.router.navigate(['/dashboard']);
          }
        })
        .catch(res => {
          console.log(res);
        });
    }else{
      this.invalid = true;
    }
  }
}