import { Component } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
    moduleId: module.id,
    selector: "hero-form",
    templateUrl: "hero-form.component.html",
    styleUrls: ["form.css"]
})

export class HeroFormComponent {
    
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new Hero(1, "David Jeras", null, this.powers[0], "Chuck Norris");

    submitted = false;

    active = true;


    ////////////////FUNCTIONS//////////////////////////

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newHero() {
        this.model = new Hero(2, "", null, "");
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}