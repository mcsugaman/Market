import { Component } from '@angular/core';

@Component({
    selector: 'my-app-component',
    template: `
     <h1>{{title}}</h1>
  <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
     <a routerLink="/form">Forma</a>
   </nav>
     <router-outlet></router-outlet>
        
   `
})

export class MyAppComponent {
    title = 'Tour of Heroes';
}