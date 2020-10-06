# OmSaiLamination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

**Technologies Used** - Angular 9, Html, Css, Bootstrap, pdfMake, Json-server.

**Used Angular Techniques** - Angular Components, Angular Reactive Form (With validations), Angular Route Guard, Angular Routes, Angular Services, Angular Pipes. 

**Project Description**

In the existing system of creating bills, client was facing some problems like
1. Need to type everything manually 
2. Need to calculate amount, CGST amount and SGST amount according to percentage.
3. Also maintaing all created bills was hard.
4. Also it was time consuming.
5. If there is any mistake in created bill. User needs to create another bill again from start.

In this project I tried to solve this clients problem.
1. All the created bills can be seen inside a table, with bill no.
2. User can choose operations like Show (to watch that clicked bill), Edit (to edit bill), and also can delete bill.
3. In Show, if user wants to download or print the bill he can do that by clicking on print button.
4. All bills can be generated in pdf format.
5. User can create new bill by clicking on Add Bill button.
6. When user types company name, if that name is existed previously on database then user has facility of AutoComplete.
7. When clicked on AutoComplete option, Addres and GSTN number automatically gets updated according to selected company name.
8. Product name also has AutoComplete. When any product is selected, if it has HSN Code then its HSN Code gets updated automatically.
9. Amount is Calculated according Quantity and Rate per quantity input.
10. Sub Total is calculated using addition of all amounts.
11. CGST and SGST amount is calculated using percentage input.
12. Grandtotal is automatically calculated using Subtotal, CGST amount and SGST amount.
13. Authentication is provided for security purpose. 

**Total No of Components - 5**
1. Login Component.
2. Bill-list Component.
3. Menu Component.
4. Form Component (same component is used to edit existing bill).
5. Print Component.

**How to start the project**

1. Run Json-server
2. Run Development server

## Json-server

Run `json-server --watch data.json` to start a server. Navigate to `http://localhost:3000` to see all the records [bills, users].

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
