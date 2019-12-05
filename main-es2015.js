(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\r\n  <app-carousel [timing]=\"5000\" [auto]=\"{ enable: true, timer: 5000 }\">\r\n    <ng-container *ngFor=\"let item of slides\">\r\n      <ng-container *carouselItem>\r\n        <div class=\"slide\">\r\n          <img class=\"image\" [src]=\"item.image\" [alt]=\"item.alt\" />\r\n          <div class=\"caption\">\r\n            <h2>\r\n              {{ item.title }}\r\n            </h2>\r\n            <h3>{{ item.subtitle }}</h3>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </app-carousel>\r\n\r\n  <section>\r\n    <app-section title=\"THE BAND\" subtitle=\"We love music\">\r\n      <div class=\"container\">\r\n        <div class=\"band-text\">\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos\r\n          quis vel et deleniti necessitatibus quasi autem est corrupti, commodi,\r\n          qui reiciendis? Necessitatibus a itaque, delectus suscipit recusandae\r\n          eum quis nemo quos provident dicta explicabo doloribus sunt cum porro\r\n          rerum ad fugit nihil illum ipsum iure laboriosam laudantium officiis\r\n          amet? Eveniet omnis impedit, obcaecati, temporibus labore quos earum\r\n          commodi rerum vel quidem sint molestias deserunt eligendi aliquam est\r\n          laboriosam officia! Nesciunt, sit. Labore iusto beatae omnis odit fuga\r\n          provident obcaecati quam? Harum voluptatibus laborum non recusandae\r\n          dolore iusto maiores illo, nesciunt magnam officiis eum, facere, natus\r\n          incidunt. Laborum beatae consectetur praesentium?\r\n        </div>\r\n        <div class=\"band-members\">\r\n          <ng-container *ngFor=\"let member of bandMembers\">\r\n            <app-band-member\r\n              [name]=\"member.name\"\r\n              [src]=\"member.image\"\r\n              [alt]=\"member.alt\"\r\n            ></app-band-member>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </app-section>\r\n  </section>\r\n\r\n  <section class=\"dark\">\r\n    <app-section title=\"TOUR DATES\" subtitle=\"Remember to book your tickets!\">\r\n      <br />\r\n      <div class=\"container\">\r\n        <app-booking-info></app-booking-info>\r\n        <div class=\"bookings\">\r\n          <ng-container *ngFor=\"let booking of bookings\">\r\n            <app-booking-card\r\n              [src]=\"booking.image\"\r\n              [title]=\"booking.place\"\r\n              [subtitle]=\"booking.date\"\r\n              [buttonText]=\"booking.buyText\"\r\n              [content]=\"booking.description\"\r\n            >\r\n            </app-booking-card>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </app-section>\r\n  </section>\r\n\r\n  <section>\r\n    <app-section title=\"CONTACT\" subtitle=\"Fan? Drop a note!\">\r\n      <div class=\"container\">\r\n        <app-contact></app-contact>\r\n      </div>\r\n    </app-section>\r\n  </section>\r\n\r\n  <section>\r\n    <img class=\"map\" [src]=\"map\" />\r\n  </section>\r\n\r\n  <section>\r\n    <app-section>\r\n      <div class=\"social-media-container\">\r\n        <div class=\"social-media\">\r\n          <div>\r\n            <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n          </div>\r\n          <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n          <a href=\"#\" class=\"google\"><i class=\"fa fa-google\"></i></a>\r\n          <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\r\n          <a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a>\r\n        </div>\r\n        <p>\r\n          Angular version of\r\n          <a\r\n            href=\"https://www.w3schools.com/w3css/tryw3css_templates_band.htm#band\"\r\n            >w3.css: The band</a\r\n          >\r\n        </p>\r\n      </div>\r\n    </app-section>\r\n  </section>\r\n</app-navbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/band-member/band-member.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/band-member/band-member.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{name}}</p>\n<img [src]=\"src\" [alt]=\"alt\"/>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/booking-card/booking-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/booking-card/booking-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <img *ngIf=\"!!src\"\n    mat-card-image\n    [src]=\"src\"\n    [alt]=\"alt\"\n  />\n\n  <mat-card-header>\n    <mat-card-title>{{title}}</mat-card-title>\n    <mat-card-subtitle>{{subtitle}}</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p>\n        {{content}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button (click)=\"receivedFunction()\" class=\"dark-btn\">{{buttonText}}</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/booking-info/booking-info.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/booking-info/booking-info.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- month Column -->\n  <ng-container matColumnDef=\"month\">\n    <th mat-header-cell *matHeaderCellDef>No.</th>\n    <td mat-cell *matCellDef=\"let booking\">{{ booking.month }}</td>\n  </ng-container>\n\n  <!-- status Column -->\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef>status</th>\n    <td mat-cell *matCellDef=\"let booking\">\n      <div class=\"status\" *ngIf=\"booking.soldout\">{{ booking.status }}</div>\n    </td>\n  </ng-container>\n\n  <!-- numTickets Column -->\n  <ng-container matColumnDef=\"numTickets\">\n    <th mat-header-cell *matHeaderCellDef>numTickets</th>\n    <td mat-cell *matCellDef=\"let booking\">\n      <mat-chip-list *ngIf=\"!booking.soldout\"\n        ><mat-chip\n          matRipple\n          [matRippleColor]=\"rippleColor\"\n          [matRippleUnbounded]=\"false\"\n        >\n          {{ booking.numTickets }}\n        </mat-chip>\n      </mat-chip-list>\n    </td>\n  </ng-container>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/carousel/carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-wrapper\">\n    <div class=\"carousel\">\n        <div *ngFor=\"let item of items;\" class=\"carousel-item\" [ngStyle]=\"transition()\">\n            <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\n        </div>\n    </div>\n</div>\n<button *ngIf=\"showControls\" mat-flat-button (click)=\"moveNext()\" class=\"carousel__button--prev\">\n    <mat-icon>arrow_left</mat-icon>\n</button>\n<button *ngIf=\"showControls\" mat-flat-button (click)=\"movePrev()\" class=\"carousel__button--next\">\n    <mat-icon>arrow_right</mat-icon>\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-info\">\n  <div *ngFor=\"let contactInfo of information\" class=\"contact\">\n    <mat-icon>{{ contactInfo.icon }}</mat-icon>\n    {{ contactInfo.info }}\n  </div>\n</div>\n<div class=\"form\">\n  <div class=\"form__inputs\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        [formControl]=\"name\"\n        placeholder=\"Name\"\n        required\n      />\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        [formControl]=\"mail\"\n        placeholder=\"Mail\"\n        required\n      />\n    </mat-form-field>\n  </div>\n  <mat-form-field>\n    <textarea matInput placeholder=\"Message\" required>\n    </textarea>\n  </mat-form-field>\n  <div>\n    <button mat-button class=\"dark-btn\">SEND</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <a>HOME</a>\n  <a>BAND</a>\n  <a>TOUR</a>\n  <a>CONTENT</a>\n  <a [matMenuTriggerFor]=\"menu\">MORE <mat-icon>arrow_drop_down</mat-icon></a>\n  <mat-menu  #menu=\"matMenu\">\n    <button mat-menu-item>Merchadise</button>\n    <button mat-menu-item>Extra</button>\n    <button mat-menu-item>Media</button>\n  </mat-menu>\n  <span class=\"fill-space\"></span>\n  <mat-icon class=\"icon\" aria-label=\"search\"\n    >search\n    </mat-icon>\n    <mat-icon class=\"icon\" aria-label=\"menu\" (click)=\"toggleOpen()\"\n    >menu\n    </mat-icon>\n</mat-toolbar>\n<mat-sidenav-container>\n  <mat-sidenav mode=\"over\" #sidenav mode=\"'side'\" [(opened)]=\"opened\">\n    <div class=\"menu\">\n      <a class=\"dark-btn\">BAND</a>\n      <a class=\"dark-btn\">TOUR</a>\n      <a class=\"dark-btn\">CONTENT</a>\n      <a class=\"dark-btn\">MERCH</a>\n    </div>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/section/section.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/section/section.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"title\">{{ title }}</h2>\n<p *ngIf=\"subtitle\" class=\"subtitle\">{{ subtitle }}</p>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\r\n  width: 100%;\r\n}\r\n\r\nimg.map {\r\n  width: 100%;\r\n  -webkit-filter: grayscale(50%);\r\n          filter: grayscale(50%);\r\n}\r\n\r\n.slide {\r\n  position: relative;\r\n}\r\n\r\n.slide .caption {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  color: white;\r\n  margin-bottom: 42px;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n  text-align: center;\r\n}\r\n\r\n.slide .caption h2 {\r\n  letter-spacing: 2px;\r\n  font-weight: normal;\r\n}\r\n\r\n.container {\r\n  max-width: 768px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.container .band-text {\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n\r\n.band-members,\r\n.bookings {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 48px;\r\n  justify-content: space-around;\r\n  -webkit-box-align: end;\r\n          align-items: flex-end;\r\n}\r\n\r\n.band-members {\r\n  justify-content: space-around;\r\n}\r\n\r\n.bookings {\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.band-members app-band-member {\r\n  width: 20%;\r\n}\r\n\r\n.bookings app-booking-card {\r\n  display: block;\r\n  width: 31.7%;\r\n}\r\n\r\n:host {\r\n  display: grid;\r\n  grid-template-columns: 100%;\r\n  grid-template-rows: 5% auto 5%;\r\n}\r\n\r\n:host app-navbar {\r\n  grid-row-start: 1;\r\n  grid-column-start: 1;\r\n}\r\n\r\n:host app-carousel {\r\n  grid-row-start: 2;\r\n  grid-column-start: 1;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .container {\r\n    margin-left: 16px;\r\n    margin-right: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 580px) {\r\n  .band-members app-band-member {\r\n    width: 75%;\r\n  }\r\n\r\n  .bookings app-booking-card {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    margin-bottom: 32px;\r\n  }\r\n}\r\n\r\n.social-media-container {\r\n  opacity: 0.9;\r\n}\r\n\r\n.social-media {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.social-media a {\r\n  display: block;\r\n  text-align: center;\r\n  padding: 4px;\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n  background-color: white;\r\n  color: #666;\r\n  font-size: 20px;\r\n}\r\n\r\n/* Style the social media icons with color, if you want */\r\n\r\n.social-media a:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.social-media a.facebook {\r\n  color: white;\r\n  background-color: #666;\r\n  padding-left: 8px;\r\n  padding-right: 2px;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.social-media-container p {\r\n  text-align: center;\r\n  color: #666;\r\n}\r\n\r\n.social-media-container a {\r\n  color: #666;\r\n}\r\n\r\n@media (max-width: 589px) {\r\n  .slide .caption {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHNCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUNBQXlCO0VBQXpCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEseURBQXlEOztBQUN6RDtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmltZy5tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDUwJSk7XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2xpZGUgLmNhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlIC5jYXB0aW9uIGgyIHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNzY4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5iYW5kLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG4uYmFuZC1tZW1iZXJzLFxyXG4uYm9va2luZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYmFuZC1tZW1iZXJzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmJvb2tpbmdzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5iYW5kLW1lbWJlcnMgYXBwLWJhbmQtbWVtYmVyIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uYm9va2luZ3MgYXBwLWJvb2tpbmctY2FyZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMxLjclO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSBhdXRvIDUlO1xyXG59XHJcblxyXG46aG9zdCBhcHAtbmF2YmFyIHtcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxufVxyXG5cclxuOmhvc3QgYXBwLWNhcm91c2VsIHtcclxuICBncmlkLXJvdy1zdGFydDogMjtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5iYW5kLW1lbWJlcnMgYXBwLWJhbmQtbWVtYmVyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuYm9va2luZ3MgYXBwLWJvb2tpbmctY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYS1jb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHNvY2lhbCBtZWRpYSBpY29ucyB3aXRoIGNvbG9yLCBpZiB5b3Ugd2FudCAqL1xyXG4uc29jaWFsLW1lZGlhIGE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYSBhLmZhY2Vib29rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWNvbnRhaW5lciBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEtY29udGFpbmVyIGEge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTg5cHgpIHtcclxuICAuc2xpZGUgLmNhcHRpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "angular-band-template";
        this.slides = [
            { image: "assets/carousel-concert/concert1.jpg", alt: "concert1", title: "Paris", subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit' },
            { image: "assets/carousel-concert/concert2.jpg", alt: "concert2", title: "Chigago", subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit' },
            { image: "assets/carousel-concert/concert3.jpg", alt: "concert3", title: "San Francisco", subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit' },
            { image: "assets/carousel-concert/concert4.jpg", alt: "concert4", title: "Paris", subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit' },
        ];
        this.bandMembers = [
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
        this.bookings = [
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
        this.map = 'assets/maps/map1.jpg';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_carousel_directives_carousel_item_carousel_item_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel/directives/carousel-item/carousel-item.directive */ "./src/app/components/carousel/directives/carousel-item/carousel-item.directive.ts");
/* harmony import */ var _components_carousel_directives_carousel_item_element_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel/directives/carousel-item-element/carousel-item-element.directive */ "./src/app/components/carousel/directives/carousel-item-element/carousel-item-element.directive.ts");
/* harmony import */ var _components_band_member_band_member_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/band-member/band-member.component */ "./src/app/components/band-member/band-member.component.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/components/section/section.component.ts");
/* harmony import */ var _components_booking_info_booking_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/booking-info/booking-info.component */ "./src/app/components/booking-info/booking-info.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _components_booking_card_booking_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/booking-card/booking-card.component */ "./src/app/components/booking-card/booking-card.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__["CarouselComponent"],
            _components_carousel_directives_carousel_item_carousel_item_directive__WEBPACK_IMPORTED_MODULE_11__["CarouselItemDirective"],
            _components_carousel_directives_carousel_item_element_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_12__["CarouselItemElement"],
            _components_band_member_band_member_component__WEBPACK_IMPORTED_MODULE_13__["BandMemberComponent"],
            _components_section_section_component__WEBPACK_IMPORTED_MODULE_14__["SectionComponent"],
            _components_booking_info_booking_info_component__WEBPACK_IMPORTED_MODULE_15__["BookingInfoComponent"],
            _components_booking_card_booking_card_component__WEBPACK_IMPORTED_MODULE_19__["BookingCardComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/band-member/band-member.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/band-member/band-member.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border-radius: 4px;\r\n    width: 100%;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5kLW1lbWJlci9iYW5kLW1lbWJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC1tZW1iZXIvYmFuZC1tZW1iZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/band-member/band-member.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/band-member/band-member.component.ts ***!
  \*****************************************************************/
/*! exports provided: BandMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandMemberComponent", function() { return BandMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BandMemberComponent = class BandMemberComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BandMemberComponent.prototype, "src", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BandMemberComponent.prototype, "alt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BandMemberComponent.prototype, "name", void 0);
BandMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-band-member',
        template: __webpack_require__(/*! raw-loader!./band-member.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/band-member/band-member.component.html"),
        styles: [__webpack_require__(/*! ./band-member.component.css */ "./src/app/components/band-member/band-member.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BandMemberComponent);



/***/ }),

/***/ "./src/app/components/booking-card/booking-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/booking-card/booking-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-actions,\r\np {\r\n  margin-left: 0px;\r\n}\r\n\r\nmat-card-header {\r\n  margin-left: -16px;\r\n}\r\n\r\nmat-card {\r\n  border-radius: 0px;\r\n}\r\n\r\nimg:hover {\r\n  -webkit-filter: brightness(75%);\r\n}\r\n\r\n.mat-card > .mat-card-actions:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n:host {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nLWNhcmQvYm9va2luZy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nLWNhcmQvYm9va2luZy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1hY3Rpb25zLFxyXG5wIHtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcyg3NSUpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQgPiAubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/booking-card/booking-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/booking-card/booking-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCardComponent", function() { return BookingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BookingCardComponent = class BookingCardComponent {
    constructor() { }
    ngOnInit() { }
    receivedFunction() {
        if (this.buttonFunction) {
            this.buttonFunction();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BookingCardComponent.prototype, "src", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BookingCardComponent.prototype, "alt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BookingCardComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BookingCardComponent.prototype, "subtitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BookingCardComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BookingCardComponent.prototype, "buttonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], BookingCardComponent.prototype, "buttonFunction", void 0);
BookingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-booking-card",
        template: __webpack_require__(/*! raw-loader!./booking-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/booking-card/booking-card.component.html"),
        styles: [__webpack_require__(/*! ./booking-card.component.css */ "./src/app/components/booking-card/booking-card.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BookingCardComponent);



/***/ }),

/***/ "./src/app/components/booking-info/booking-info.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/booking-info/booking-info.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.status {\r\n  display: inline-block;\r\n  padding: 6px;\r\n  background-color: #f44336;\r\n  color: #fff;\r\n}\r\n\r\ntd:first-child {\r\n    width: 100px;\r\n}\r\n\r\n:host mat-chip {\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nLWluZm8vYm9va2luZy1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9va2luZy1pbmZvL2Jvb2tpbmctaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbnRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuOmhvc3QgbWF0LWNoaXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/booking-info/booking-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/booking-info/booking-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookingInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingInfoComponent", function() { return BookingInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const BOOKING_DATA = [
    { month: "September", status: 'Sold out', soldout: true, numTickets: 0 },
    { month: "October", status: 'Sold out', soldout: true, numTickets: 0 },
    { month: "November", status: 'Sold out', soldout: false, numTickets: 3 },
];
let BookingInfoComponent = class BookingInfoComponent {
    constructor() {
        this.displayedColumns = ["month", "status", "numTickets"];
        this.dataSource = BOOKING_DATA;
        this.rippleColor = 'rgba(171, 166, 166, 0.5)';
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BookingInfoComponent.prototype, "rippleColor", void 0);
BookingInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-booking-info",
        template: __webpack_require__(/*! raw-loader!./booking-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/booking-info/booking-info.component.html"),
        styles: [__webpack_require__(/*! ./booking-info.component.css */ "./src/app/components/booking-info/booking-info.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BookingInfoComponent);



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-wrapper {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 3;\r\n            order: 2;\r\n}\r\n\r\n.carousel-wrapper * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.carousel {\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n}\r\n\r\n.carousel-item {\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    margin: auto;\r\n    z-index: 100;\r\n}\r\n\r\n.carousel-item.initial,\r\n.carousel-item.active {\r\n    opacity: 1;\r\n    position: relative;\r\n    z-index: 900;\r\n}\r\n\r\n.carousel__button--prev {\r\n    -webkit-box-ordinal-group: 2;\r\n            order: 1;\r\n}\r\n\r\n.carousel__button--next {\r\n    -webkit-box-ordinal-group: 4;\r\n            order: 3;\r\n}\r\n\r\n:host {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n\r\n.carousel-item {\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    margin: auto;\r\n    z-index: 100;\r\n    -webkit-transition: opacity .5s, z-index .5s, -webkit-transform .5s;\r\n    transition: opacity .5s, z-index .5s, -webkit-transform .5s;\r\n    transition: transform .5s, opacity .5s, z-index .5s;\r\n    transition: transform .5s, opacity .5s, z-index .5s, -webkit-transform .5s;\r\n}\r\n\r\n.carousel-item.initial,\r\n.carousel-item.active {\r\n    opacity: 1;\r\n    position: relative;\r\n    z-index: 900;\r\n}\r\n\r\nbutton {\r\n    background-color: #000;\r\n    color: white;\r\n    opacity: 0.9;\r\n    border-radius: 0;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.85;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCw0QkFBUTtZQUFSLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQVE7WUFBUixRQUFRO0FBQ1o7O0FBRUE7SUFDSSw0QkFBUTtZQUFSLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUVBQW1EO0lBQW5ELDJEQUFtRDtJQUFuRCxtREFBbUQ7SUFBbkQsMEVBQW1EO0FBQ3ZEOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcmRlcjogMjtcclxufVxyXG5cclxuLmNhcm91c2VsLXdyYXBwZXIgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS5pbml0aWFsLFxyXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuLmNhcm91c2VsX19idXR0b24tLXByZXYge1xyXG4gICAgb3JkZXI6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fYnV0dG9uLS1uZXh0IHtcclxuICAgIG9yZGVyOiAzO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cywgb3BhY2l0eSAuNXMsIHotaW5kZXggLjVzO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS5pbml0aWFsLFxyXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directives_carousel_item_carousel_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/carousel-item/carousel-item.directive */ "./src/app/components/carousel/directives/carousel-item/carousel-item.directive.ts");
/* harmony import */ var _directives_carousel_item_element_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/carousel-item-element/carousel-item-element.directive */ "./src/app/components/carousel/directives/carousel-item-element/carousel-item-element.directive.ts");




let CarouselComponent = class CarouselComponent {
    constructor() {
        this.carouselWrapperStyle = {};
        this.timing = 500;
        this.showControls = false;
        this.auto = { enable: false, timer: 0 };
        this.slide = 0;
        this.carouselItemClassName = 'carousel-item';
        this.interval = null;
    }
    ngAfterViewInit() {
        this.totalItems = this.itemsElements.length;
        this.itemsElements.first.nativeElement.className = `${this.carouselItemClassName} initial`;
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
        }
        else {
            this.slide++;
        } // Move carousel to updated slide
        this.moveCarouselTo(this.slide);
    }
    movePrev() {
        // If it's the first slide, set as the last slide, else -1
        if (this.slide === 0) {
            this.slide = (this.totalItems - 1);
        }
        else {
            this.slide--;
        }
        // Move carousel to updated slide
        this.moveCarouselTo(this.slide);
    }
    moveCarouselTo(slide) {
        this.clearInterval();
        // Update the "old" adjacent slides with "new" ones
        let newPrevious = slide - 1;
        let newNext = slide + 1;
        // Test if carousel has more than three items
        if (this.totalItems > 3) {
            // Checks and updates if slide is at the beginning/end
            if (slide === 0) {
                newPrevious = (this.totalItems - 1);
            }
            else if (slide === (this.totalItems - 1)) {
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
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_directives_carousel_item_carousel_item_directive__WEBPACK_IMPORTED_MODULE_2__["CarouselItemDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], CarouselComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_directives_carousel_item_element_carousel_item_element_directive__WEBPACK_IMPORTED_MODULE_3__["CarouselItemElement"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], CarouselComponent.prototype, "itemsElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CarouselComponent.prototype, "timing", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CarouselComponent.prototype, "showControls", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CarouselComponent.prototype, "auto", void 0);
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselComponent);



/***/ }),

/***/ "./src/app/components/carousel/directives/carousel-item-element/carousel-item-element.directive.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/carousel/directives/carousel-item-element/carousel-item-element.directive.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CarouselItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemElement", function() { return CarouselItemElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselItemElement = class CarouselItemElement {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.prev'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CarouselItemElement.prototype, "prev", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CarouselItemElement.prototype, "active", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.next'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CarouselItemElement.prototype, "next", void 0);
CarouselItemElement = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '.carousel-item'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselItemElement);



/***/ }),

/***/ "./src/app/components/carousel/directives/carousel-item/carousel-item.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/carousel/directives/carousel-item/carousel-item.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: CarouselItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function() { return CarouselItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselItemDirective = class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
};
CarouselItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
CarouselItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[carouselItem]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], CarouselItemDirective);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\r\n  margin-right: 12px;\r\n}\r\n\r\nbutton {\r\n  float: right;\r\n}\r\n\r\n.contact {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.contact-info,\r\n.form,\r\n.form .form__inputs mat-form-field {\r\n  box-sizing: border-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\n:host {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n@media (min-width: 581px) {\r\n  .contact-info,\r\n  .form,\r\n  .form .form__inputs mat-form-field {\r\n    width: 50%;\r\n  }\r\n\r\n  .form .form__inputs mat-form-field:first-child {\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .form .form__inputs mat-form-field:last-child {\r\n    padding-left: 10px;\r\n  }\r\n\r\n  :host {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7OztJQUdFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvLFxyXG4uZm9ybSxcclxuLmZvcm0gLmZvcm1fX2lucHV0cyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU4MXB4KSB7XHJcbiAgLmNvbnRhY3QtaW5mbyxcclxuICAuZm9ybSxcclxuICAuZm9ybSAuZm9ybV9faW5wdXRzIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybSAuZm9ybV9faW5wdXRzIG1hdC1mb3JtLWZpZWxkOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybSAuZm9ybV9faW5wdXRzIG1hdC1mb3JtLWZpZWxkOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactComponent = class ContactComponent {
    constructor() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.mail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.information = [
            { icon: 'place', info: 'Chicago, US' },
            { icon: 'local_phone', info: 'Phone: +00 151515' },
            { icon: 'mail', info: 'Email: mail@mail.com' },
        ];
    }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n  padding: 12px 14px;\r\n}\r\n\r\n.icon:hover {\r\n  background-color: #f44336;\r\n}\r\n\r\n.fill-space {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar {\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n\r\n.mat-toolbar-row,\r\n.mat-toolbar-single-row {\r\n  height: 48px;\r\n  padding: 0;\r\n}\r\n\r\nmat-toolbar > *:last-child {\r\n  display: inline-block;\r\n}\r\n\r\nmat-toolbar > *:not(:last-child):not(:first-child):not(.fill-space) {\r\n  display: none;\r\n}\r\n\r\n.menu {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\nmat-toolbar a,\r\nmat-sidenav .menu a {\r\n  font-size: 16px;\r\n  text-align: center;\r\n  padding: 8px 24px;\r\n  box-sizing: border-box;\r\n  cursor: default;\r\n}\r\n\r\nmat-sidenav .menu a {\r\n  width: 100%;\r\n  padding-bottom: 12px;\r\n  padding-top: 12px;\r\n  text-align: left;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 70%;\r\n}\r\n\r\n.mat-drawer {\r\n  background-color: #000;\r\n}\r\n\r\nmat-toolbar a:hover {\r\n  background-color: #ccc;\r\n  color: #000;\r\n}\r\n\r\n@media (min-width: 590px) {\r\n  mat-toolbar > *:last-child {\r\n    display: none;\r\n  }\r\n\r\n  mat-toolbar > *:not(:last-child):not(:first-child):not(.fill-space) {\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBOztFQUVFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG59XHJcblxyXG4uaWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLmZpbGwtc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXJvdyxcclxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciA+ICo6bm90KDpsYXN0LWNoaWxkKTpub3QoOmZpcnN0LWNoaWxkKTpub3QoLmZpbGwtc3BhY2UpIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciBhLFxyXG5tYXQtc2lkZW5hdiAubWVudSBhIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiAubWVudSBhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1OTBweCkge1xyXG4gIG1hdC10b29sYmFyID4gKjpsYXN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBtYXQtdG9vbGJhciA+ICo6bm90KDpsYXN0LWNoaWxkKTpub3QoOmZpcnN0LWNoaWxkKTpub3QoLmZpbGwtc3BhY2UpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    toggleOpen() {
        this.opened = !this.opened;
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/section/section.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/section/section.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    font-weight: normal;\r\n    font-size: 28px;\r\n    letter-spacing: 4px;\r\n}\r\n\r\np {\r\n    font-style: italic;\r\n    color: #999;\r\n}\r\n\r\nh2, p {\r\n    text-align: center;\r\n}\r\n\r\n:host {\r\n    display: block;\r\n    padding-top: 64px;\r\n    padding-bottom: 64px;\r\n}\r\n\r\n:host-context(.dark) {\r\n    background-color: #000;\r\n}\r\n\r\n:host-context(.dark) h2 {\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuaDIsIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmRhcmspIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmRhcmspIGgyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/section/section.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionComponent = class SectionComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SectionComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SectionComponent.prototype, "subtitle", void 0);
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section',
        template: __webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/section/section.component.html"),
        styles: [__webpack_require__(/*! ./section.component.css */ "./src/app/components/section/section.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SectionComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\angular\angular-band-template\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map