import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestEvent]',
})
export class TestEventDirective {
  private regex: RegExp = new RegExp(/^[0-9]+$/);
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];
  constructor(private er: ElementRef) {}

  @HostListener('keydown', ['$event'])
  clickEvent(event) {
    console.log(this.er.nativeElement.value)
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    var numbers = /^[0-9]+$/;

    let current: string = this.er.nativeElement.value;
    var thenum = current.replace(/[^0-9]/g, '');
    //console.log(thenum);
    let next: string = thenum.concat(event.key);
    //console.log(!String(next).match(this.regex));
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
    if (+thenum.length >= 16) {
      console.log('dir click');
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
