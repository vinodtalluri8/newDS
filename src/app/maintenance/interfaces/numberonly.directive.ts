import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {
  private regex: RegExp = new RegExp('[0-9]+("."?[0-9][0-9]?)?');
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '.'];
  constructor(private el: ElementRef) {
  this.el.nativeElement.onkeypress = (evt: KeyboardEvent) => {
    console.log('number ', evt);
    if (evt.key && (!String(evt.key).match(this.regex))) {
      event.preventDefault();
    }
  };

  this.el.nativeElement.paste = (evt) => {
    console.log('paste init ', evt);
    if (evt.key && (!String(evt.key).match(this.regex))) {
      event.preventDefault();
    }
  };
   }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: KeyboardEvent) {
    event.preventDefault();
    /*let next: string = null;
    if (event instanceof ClipboardEvent) {
      next = event.clipboardData.getData('text');
    } else if (event instanceof DragEvent) {
      next = event.target['value'];
    }
    if (next && !parseFloat(next)) {
      event.preventDefault();
    }*/
  }

}
