import { Component, OnInit, Input } from "@angular/core";

export interface Booking {
  status: string;
  month: string;
  soldout: boolean;
  numTickets: number;
}

const BOOKING_DATA: Booking[] = [
  { month: "September", status: 'Sold out', soldout: true, numTickets: 0 },
  { month: "October", status: 'Sold out', soldout: true, numTickets: 0 },
  { month: "November", status: 'Sold out', soldout: false, numTickets: 3 },
];

@Component({
  selector: "app-booking-info",
  templateUrl: "./booking-info.component.html",
  styleUrls: ["./booking-info.component.css"],
})
export class BookingInfoComponent implements OnInit {
  displayedColumns: string[] = ["month", "status", "numTickets"];
  dataSource = BOOKING_DATA;
  @Input() rippleColor = 'rgba(171, 166, 166, 0.5)';

  constructor() {}

  ngOnInit() {}
}
