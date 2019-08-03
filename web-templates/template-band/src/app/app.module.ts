import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatMenuModule } from "@angular/material/menu";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CarouselItemDirective } from "./components/carousel/directives/carousel-item/carousel-item.directive";
import { CarouselItemElement } from "./components/carousel/directives/carousel-item-element/carousel-item-element.directive";
import { BandMemberComponent } from "./components/band-member/band-member.component";
import { SectionComponent } from "./components/section/section.component";
import { BookingInfoComponent } from "./components/booking-info/booking-info.component";
import { MatTableModule } from "@angular/material/table";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from "@angular/material/core";
import { BookingCardComponent } from "./components/booking-card/booking-card.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    BandMemberComponent,
    SectionComponent,
    BookingInfoComponent,
    BookingCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatChipsModule,
    MatRippleModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
