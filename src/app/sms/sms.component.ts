/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: SendAuth Component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomResponse } from '../models/customresponse';
import { SmsService } from './sms.service';
import { AppDataService } from '../reusable/services/appdata.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  InProcess: boolean = false;
  response: CustomResponse;
  username: string;

  constructor(
    private SmsService: SmsService,
    private router: Router, private Data: AppDataService) { }

  ngOnInit(): void {
    if (!this.Data.step1auth) {
      this.router.navigate(['/login']);
      return;
    };

    if (!this.Data.step2auth) {
      if (!this.Data.codeSent) {
        this.router.navigate(['/sendauth']);
        return;
      } else {
        this.router.navigate(['/validateauth']);
        return;
      }
    }
  }
}