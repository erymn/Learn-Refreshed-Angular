import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/app';
import { Component } from '@angular/core';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

@Component({
  selector: 'app-root',
  standalone: true,
  // template: `<h1>Hello {{name}}</h1>`
  template: `
    <h3>Hello {{name}}</h3>
    <button (click)="name = 'Angular 21'">Reset</button>
  `
})

class App{ 
  name = 'World'
}

bootstrapApplication(App);
