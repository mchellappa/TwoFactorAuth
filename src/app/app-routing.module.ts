/**
 * Author: Rahul Luthra
 * Company: John Hancock
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SendAuthComponent} from './sendauth/sendauth.component';
import {ValidateAuthComponent} from './validateauth/validateauth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotificationsComponent} from './notifications/notifications.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'sendauth', component: SendAuthComponent },
  { path: 'validateauth', component: ValidateAuthComponent },
  { path: 'dashboard', component: DashboardComponent },
   { path: 'notifications', component: NotificationsComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}