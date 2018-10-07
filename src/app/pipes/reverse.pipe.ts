import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value.length === 0) {
            return value;
        } else {
            const splitValue = value.split('');
            const reverseValue = splitValue.reverse();
            return reverseValue.join('');
        }
    }

}
