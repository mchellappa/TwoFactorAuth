/**
 * Author: Rahul Luthra
 * Company: John Hancock
 * Description: Login Component
 */

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User }                from '../models/user';
import { LoginService }         from './login.service';
import {AppDataService} from '../reusable/services/appdata.service';

@Component({
  moduleId: module.id,
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  InProcess: boolean = false;
  submit: boolean = false;
  invalid: boolean = false;
  
  constructor(private loginService: LoginService, private router: Router, private Data: AppDataService){}

  LoginUser(username: string, password: string, rem: string): void{
    this.invalid = false;
    if(username != '' && password != ''){
      this.submit = true;
      this.Data.SetUsername(username);
    this.InProcess = true;
    var that = this;
    setTimeout(function() {
      that.Data.SetAuthStatus("1");
      that.router.navigate(['/sendauth']);
    }, (5000));}else{
      this.invalid = true;
    }
  }
  
  ngOnInit(): void {
    if(this.Data.step1auth && this.Data.step2auth){
      this.router.navigate(['/dashboard']);
       return;
    }

    if(this.Data.step1auth){
      this.router.navigate(['/sendauth']);
       return;
    }
  }
}