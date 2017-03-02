import { Component } from '@angular/core';
// Global Reusable Components
import {MDL} from './reusable/directives/mdl.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld App';
}
