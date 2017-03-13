/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: SendAuth Component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomResponse } from '../models/customresponse';
import { DashboardService } from './dashboard.service';
import { AppDataService } from '../reusable/services/appdata.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  InProcess: boolean = false;
  response: CustomResponse;
  username: string;

  constructor(
    private DashboardService: DashboardService,
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

    this.username = this.Data.username;
  }
}