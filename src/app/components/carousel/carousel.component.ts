import { Component, AfterViewInit, QueryList, ContentChildren, ViewChildren, ElementRef, ViewChild, Input, ViewContainerRef } from '@angular/core';
import { CarouselItemDirective } from './directives/carousel-item/carousel-item.directive';
import { CarouselItemElement } from './directives/carousel-item-element/carousel-item-element.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  public carouselWrapperStyle = {};

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @Input() timing = 500;
  @Input() showControls = false;
  @Input() auto: { enable: boolean, timer: number } = { enable: false, timer: 0 };
  private totalItems: number;
  private slide = 0;
  private carouselItemClassName = 'carousel-item';
  private interval = null;

  constructor() { }

  ngAfterViewInit() {
    this.totalItems = this.itemsElements.length;
    this.itemsElements.first.nativeElement.className = `${this.carouselItemClassName} initial`
    console.log(this.totalItems);

    this.setInitialClasses();
    this.setInterval();
  }

  setInterval() {
    if (this.auto.enable) {
      this.interval = setInterval(() => {
        this.moveNext();
      }, this.auto.timer);
    }
  }

  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  transition() {
    return { transition: `transform ${this.timing}ms, opacity ${this.timing}ms, z-index ${this.timing}ms` };
  }

  setInitialClasses() {
    this.itemsElements.forEach((item, index) => {
      if (index === 0) {
        item.nativeElement.className = `${this.carouselItemClassName} initial active`;
      }

      if (index === 1) {
        item.nativeElement.className = `${this.carouselItemClassName} next`;
      }

      if (index === this.totalItems - 1) {
        item.nativeElement.className = `${this.carouselItemClassName} prev`;
      }
    });
  }

  // Next navigation handler
  moveNext() {

    // If it's the last slide, reset to 0, else +1
    if (this.slide === (this.totalItems - 1)) {
      this.slide = 0;
    } else {
      this.slide++;
    }    // Move carousel to updated slide
    this.moveCarouselTo(this.slide);
  }

  movePrev() {

    // If it's the first slide, set as the last slide, else -1
    if (this.slide === 0) {
      this.slide = (this.totalItems - 1);
    } else {
      this.slide--;
    }

    // Move carousel to updated slide
    this.moveCarouselTo(this.slide);
  }

  moveCarouselTo(slide: number) {
    this.clearInterval();

    // Update the "old" adjacent slides with "new" ones
    let newPrevious = slide - 1;
    let newNext = slide + 1;

    // Test if carousel has more than three items
    if (this.totalItems > 3) {


      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = (this.totalItems - 1);
      } else if (slide === (this.totalItems - 1)) {
        newPrevious = (slide - 1);
        newNext = 0;
      }

      this.itemsElements.forEach((item, index) => {
        item.nativeElement.className = this.carouselItemClassName;

        // Add new classes
        if (index === slide) {
          item.nativeElement.className = `${this.carouselItemClassName} active`;
        }

        if (index === newNext) {
          item.nativeElement.className = `${this.carouselItemClassName} next`;
        }

        if (index === newPrevious) {
          item.nativeElement.className = `${this.carouselItemClassName} prev`;
        }

        console.log(slide + " " + newNext + " " + newPrevious);
      });
    }

    this.setInterval();
  }

}
