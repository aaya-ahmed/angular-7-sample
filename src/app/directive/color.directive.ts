import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[custom-backgroundColor]'
})
export class ColorDirective {
@Input('custom-backgroundColor')id:number;
  constructor(private eleRef:ElementRef) { 

  }
  ngAfterViewInit() {
    const hexValue = ((this.id || 0) * 477).toString(14)+'a2';
    this.eleRef.nativeElement.style.background ='#' + hexValue.padStart(6, '0').slice(0, 6); 
  }

}
