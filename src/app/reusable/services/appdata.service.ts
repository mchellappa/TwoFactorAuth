/**
 * Author
 * Company
 * Description
 */

import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {
    PhoneNumber: string;
    step1auth: boolean = false;
    step2auth: boolean = false;
    codeSent: boolean = false;
    username: string;

    setUserPhone(phn: string): void {
        this.PhoneNumber = phn;
    }

    SetAuthStatus(level:string){
        if(level == "1"){
            this.step1auth = true;
        }
        else if(level == "2"){
            this.step2auth = true;
        }
    }

    SetCodeStatus(){
        this.codeSent = true;
    }

    SetUsername(uname){
        this.username = uname; 
    }
}