import { Component, OnInit, Input, Directive } from "@angular/core";

@Component({
  selector: "app-booking-card",
  templateUrl: "./booking-card.component.html",
  styleUrls: ["./booking-card.component.css"],
})
export class BookingCardComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;
  @Input() buttonText: string;
  @Input() buttonFunction: Function;
  constructor() {}

  ngOnInit() {}

  receivedFunction() {
    if (this.buttonFunction) {
      this.buttonFunction();
    }
  }
}
