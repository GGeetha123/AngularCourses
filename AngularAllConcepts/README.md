# AngularAllConcepts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Review menu --- code flow
1.modles.ts - creating the interface for reviews
2.reviews.service.ts - calling the URL using the kewword HttpClient and Observable.
3.reviews.component.ts - inside ngOnInit function subscribe is used with next and error using arrow functions, calling the function created in reviews.service.ts
4.review-box.component.html - current values to be shown using DIV tag - this only shows the values in the screen as expected 
5.review-box.component.css - the styling done for the classes and ids created in point 3
6.review-box.component.ts - values are initialized using variable- here named as current
7.reviews.component.html - <app-review-box *ngFor = "let x of reviews" [review] = "x"></app-review-box>
