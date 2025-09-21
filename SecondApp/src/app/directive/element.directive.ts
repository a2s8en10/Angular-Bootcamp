import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appElement]'
})
export class ElementDirective {

  constructor(an : ElementRef) {
    an.nativeElement.style.color="red";
  }

}
