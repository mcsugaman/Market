
import { Component } from '@angular/core';

import { HeroService } from './databinding/hero.service';


@Component({
    selector: 'my-app',
    providers: [HeroService],
    template: `
     
                <my-app-component></my-app-component>
              `
  
})
export class AppComponent { }