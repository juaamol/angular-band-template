import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {

  @HostBinding('class.prev')
  @Input() prev: boolean;

  @HostBinding('class.active')
  @Input() active: boolean;
  
  @HostBinding('class.next') next: boolean;

  constructor() { }

}
