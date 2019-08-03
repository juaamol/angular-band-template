import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "template-band";
  showCarouselControls: boolean = true;
  images = [
    { image: "../../../assets/carousel-concert/concert1.jpg", alt: "concert1" },
    { image: "../../../assets/carousel-concert/concert2.jpg", alt: "concert2" },
    { image: "../../../assets/carousel-concert/concert3.jpg", alt: "concert3" },
    { image: "../../../assets/carousel-concert/concert4.jpg", alt: "concert4" },
  ];

  bandMembers = [
    {
      name: "John Doe",
      image: "assets/band-members/band-member1.jpg",
      alt: "band-member 1",
    },
    {
      name: "Paul Mc",
      image: "assets/band-members/band-member2.jpg",
      alt: "band-member 2",
    },
    {
      name: "Ringo asterisk",
      image: "assets/band-members/band-member3.jpg",
      alt: "band-member 3",
    },
  ];

  bookings = [
    {
      place: "New York",
      description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
      date: "Fri 27 Nov 2016",
      buyText: "Buy Tickets",
      image: "assets/bookings/booking1.jpg",
      alt: "band-member 1",
    },
    {
      place: "Paris",
      description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
      date: "Sat 28 Nov 2016",
      buyText: "Buy Tickets",
      image: "assets/bookings/booking2.jpg",
      alt: "band-member 2",
    },
    {
      place: "San Francisco",
      description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
      date: "Sun 29 Nov 2016",
      buyText: "Buy Tickets",
      image: "assets/bookings/booking3.jpg",
      alt: "band-member 3",
    },
  ];

  onCarouselEnter() {
    this.showCarouselControls = true;
  }

  onCarouselLeave() {
    this.showCarouselControls = false;
  }
}
