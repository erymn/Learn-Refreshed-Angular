import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/app';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   // template: `<h1>Hello {{name}}</h1>`
//   template: `
//     <h3>Hello {{name}}</h3>
//     <button (click)="name = 'Angular 21'">Reset</button>
//   `
// })

// class App{ 
//   name = 'World'
// }

// //Interpolation in Angular
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   // template: `<h1>Hello {{name}}</h1>`
//   template: `
//     <h3>{{title}}</h3>
//     <p>Hello {{name}}</p>
//     <p>2 + 3 = {{2+3}}</p>
//     <p>Upper: {{name.toUpperCase()}}</p>
//   `
// })

// class App{ 
//   title = 'Template and Interpolation in Angular'
//   name = 'Angular'
// }

// //reference variable
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   styles:[`
//     .toolbar { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
//     input { padding: 6px 8px; }
//   `],
//   template: `
//     <h3>Template Reference Variable (#var)</h3>
//     <div class="toolbar">
//       <input #box type="text" placeholder="Type something" (input)="current = box.value"/>
//       <button (click)="read(box.value)">Read value</button>
//       <button (click)="box.focus()">Focus input</button>
//       <span style="margin-left:8px;color:#666">length={{box.value?.length || 0}}</span>
//     </div>
//   `
// })

// class App{ 
//   current= '';

//   read(val: string){
//     this.current = val??'';
//     console.log(this.current)
//   }
// }

//Null-safe navigation
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button (click)="toggle()">Toggle</button>
    <p>Email: {{user?.profile?.email || '(none)'}}</p>
  `
})

class App{ 
  user: { profile?: { email?: string } } | undefined = undefined;
  toggle() {
    this.user = this.user ? undefined : { profile: { email: 'a@example.com' } };
  }
}

bootstrapApplication(App);
