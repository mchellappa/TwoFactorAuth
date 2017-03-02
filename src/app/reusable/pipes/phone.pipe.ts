import { Pipe } from '@angular/core';

@Pipe({
    name: 'phonepipe'
})
export class PhonePipe {
    transform(val, args) {
        if (val != undefined) {
            var newVal = val.replace(/\D/g, '');

            if(newVal.lenth > 10){
                newVal = newVal.substring(0,10);
            }

            let newStr = '';

            if (val.length == 0) {
                newStr = '';
            }
            // don't show braces for empty groups at the end
            else if (newVal.length <= 3) {
                newStr = newVal.replace(/^(\d{0,3})/, '($1)');
            } else if (val.length <= 6) {
                newStr = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
            } else {
                newStr = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
            }
            return newStr;
        }
    }
}