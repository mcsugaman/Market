import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../databinding/hero.service';

@Component({
    selector: 'my-dashboard',
    template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <a *ngFor="let hero of heroes" class="col-1-4" [routerLink]="['/detail', hero.id]">
        <div class="module hero">
          <h4>{{hero.name}}</h4>
        </div>
      </a>
    </div>
 `
})

export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}