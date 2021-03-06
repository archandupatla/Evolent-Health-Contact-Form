# EvolentHealthProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.
## Project Download
Download the project using the github link and run `npm install` to install the dependencies

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Hosting

I've also did the production build and hosted the app in amazon web services s3. Here's the link: http://evolent-health-project.s3-website.us-east-2.amazonaws.com/

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Folder Structure
I've used two components contacts-form component to display the form and contacts-display component to display the list of contacts with edit and delete functionality. 
I've used contacts service which centralizes the form functionality with methods to add, update and delete the contacts in the contacts list. 
I've used the store-contacts service to make http (PUT and GET) requests to google's firebase console. 
I've used a validators service to include custom validations in the form which checks the phone and email inputs for duplicate records. Unit tests are written in Jasmine supported by test runner Karma for all the different components and services in the form. 
## Functionality

The form has five fields firstname, lastname, email, phone and status with custom validations which checks duplicate email and phone number. Contacts can be edited and deleted by clicking on the pencil icon and the trash icon as can bee seen in the rows of each contacts.

