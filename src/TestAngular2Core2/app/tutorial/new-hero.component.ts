import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../classes/hero';
import { HeroService } from '../databinding/hero.service';

@Component({
    moduleId: module.id,
    selector: 'new-hero',
    providers: [HeroService],
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>

      <button (click)="gotoDetail()">View Details</button>
    </div>
  `,
    styleUrls: ["new-hero.component.css"]
})

export class NewHeroComponent implements OnInit {
    title = "Tour of heroes";
    heroes: Hero[];
    selectedHero: Hero;

    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}