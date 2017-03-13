/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: SendAuth Component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomResponse } from '../models/customresponse';
import { AppDataService } from '../reusable/services/appdata.service';
import { NotificationsService } from './notifications.service';

@Component({
  moduleId: module.id,
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  InProcess: boolean = false;
  resNotify: CustomResponse;
  resDelivery: CustomResponse;
  username: string;
  invalidNotify: boolean = false;
  invalidDelivery: boolean = false;
  submitNotify: boolean = false;
  submitDelivery: boolean = false;
  theHtmlStringNotify: string;
  theHtmlStringDel: string;
  getDelivery: boolean = false;


  constructor(private notifyService: NotificationsService,
    private router: Router, private Data: AppDataService) { }

  ngOnInit(): void {
  }

  SendNotification(mobile: string, msg: string): void {
    mobile = mobile.replace(/\D/g, '');
    this.invalidNotify = false;
    if (mobile != '' && mobile.length == 10 && msg != '') {
      this.submitNotify = true;
      this.InProcess = true;
      var that = this;
      this.notifyService.sendNotification("1" + mobile, msg)
        .then(CustomResponse => {
          this.resNotify = CustomResponse;
          if (this.resNotify.Code == "0000") {
            this.InProcess = false;
            this.submitNotify = false;
            this.theHtmlStringNotify = this.HtmlEntities(this.resNotify.Message);
          } else {
            this.InProcess = false;
            this.submitNotify = false;
            this.invalidNotify = true;
          }
        })
        .catch(CustomResponse => {
          console.log(CustomResponse);
          this.InProcess = false;
          this.submitNotify = false;
          this.invalidNotify = true;
        });
    } else {
      this.invalidNotify = true;
    }
  }

  GetDelivery(txnid: string): void {
    this.invalidDelivery = false;
    console.log(txnid);
    if (txnid != '') {
      this.submitDelivery = true;
      this.InProcess = true;
      var that = this;
      this.notifyService.getDelivery(txnid)
      .then(CustomResponse => {
        this.resDelivery = CustomResponse;
        if(this.resDelivery.Code == "0000"){
           this.InProcess = false;
            this.submitDelivery = false;
            this.theHtmlStringDel = this.HtmlEntities(this.resDelivery.Message);
        }else{
          this.InProcess = false;
            this.submitDelivery = false;
            this.invalidDelivery = true;
        }
      })
      .catch(CustomResponse=>{
         this.InProcess = false;
            this.submitDelivery = false;
            this.invalidDelivery = true;
      });
    } else {
      this.InProcess = false;
      this.submitDelivery = false;
      this.invalidDelivery = true;
    }
  }

  HtmlEntities(str: string): string {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}