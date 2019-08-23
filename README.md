# TemplateBand

This project consists in a template for a group band. It is an angular material app based on [The Band](https://www.w3schools.com/bootstrap/trybs_theme_band_full.htm) bootstrap theme from [https://www.w3schools.com/](w3schools).


## Installation 

In the project directory:

If you are using npm:

* run `npm install` to install all the dependencies.
* run `npm run start` to start the application, it will be available at http://localhost:4200 by default

If you are using yarn:

* run `yarn install` to install all the dependencies.
* run `yarn start` to start the application, it will be available at http://localhost:4200 by default

## Usage

To make the content of this app customizable, it has some variables that can be used to changes images, texts, titles, ...

### src/app/app.component.ts

* *title* (_string_): Represents the title of the application

* *slides* ([ _Object_]): Contains slides for the carousel. Each slide has 4 fields:
  * *image* (_string_): Image path.
  * *alt* (_string_): Alternative text shown if the image is not available.
  * *title* (_string_): Title for the image.
  * *subtitle* (_string_): Subtitle for the image.

* *bandMembers* ([ _Object_]): List of cards with the members of the band.
  * *name* (_string_): Name of the band member.
  * *image* (_string_): Band member picture.
  * *alt* (_string_): Alternative text shown if the image is not available.

* *bookings*: 
  * *place* (_string_),
  * *description* (_string_): "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
  * *date* (_string_): Date of the concent.
  * *buyText* (_string_): Text used for the button clicked to buy a ticket.
  * *image* (_string_): Location image path.
  * *alt* (_string_): Alternative text shown if the image is not available.

* *map* (_string_): path for the map shown at the end of the page


All this variables can be modified directly but could also be filled with data retrieved from an API.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Deploy to github pages

npm install -g angular-cli-ghpages
build --prod --base-href "https://<user-name>.github.io/<repo>/"
angular-cli-ghpages --dir dist/angular-band-template
