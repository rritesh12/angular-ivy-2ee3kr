import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  transform(cardNumber: string, visibleDigits: number): any {
   // console.log(cardNumber);
    var splits = visibleDigits + ''.slice(0, 1);
    var r = cardNumber.split(' ').join('');
    if (+r.length > 0) {
      return r.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    // let maskedNumbers = cardNumber.slice(0, visibleDigits);
    // let visibleNumbers = cardNumber.slice(visibleDigits);
    // console.log('pipe');
    // return maskedNumbers.replace(/./g, '*') + visibleNumbers;
  }
}
