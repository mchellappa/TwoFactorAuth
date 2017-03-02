import {Directive, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Component({
    selector: '[mdl]'
})    
export class MDL implements AfterViewInit {
    ngAfterViewInit() {
        if(componentHandler){
        componentHandler.upgradeAllRegistered();
        }
    }
}