// Global Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

// Global Reusable Components
import {MDL} from './reusable/directives/mdl.directive';
import {AppDataService} from './reusable/services/appdata.service';
import {PhonePipe} from './reusable/pipes/phone.pipe';
import {PhoneMask} from './reusable/directives/phonemask.directive';

//Application Routing
import { AppRoutingModule } from './app-routing.module';

//Application Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SendAuthComponent } from './sendauth/sendauth.component';
import { ValidateAuthComponent } from './validateauth/validateauth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';

//Application Services
import {LoginService} from './login/login.service';
import {SendAuthService} from './sendauth/sendauth.service';
import {ValidateAuthService} from './validateauth/validateauth.service';
import {DashboardService} from './dashboard/dashboard.service';
import {NotificationsService} from './notifications/notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SendAuthComponent,
    ValidateAuthComponent,
    DashboardComponent,
    NotificationsComponent,
    PhonePipe,
    MDL,
    PhoneMask
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    SendAuthService,
    ValidateAuthService,
    AppDataService,
    PhonePipe,
    DashboardService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
