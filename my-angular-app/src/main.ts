import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/app';
import { Component } from '@angular/core';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Hello {{name}}</h1>`
})

class App{ 
  name = 'Angular 22'
}

bootstrapApplication(App);
