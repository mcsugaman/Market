import { Component, Input } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
    moduleId: module.id,
    selector: 'dj-databinding',
    templateUrl: 'databinding.component.html',
    styleUrls:['databinding.component.css']

})
export class DataBindingComponent {
    title = "Naslov"
    heroes = [
        new Hero(1, 'David', null, null),
        new Hero(2, 'Jure', null, null),
        new Hero(3, 'Matej', null, null),
        new Hero(4, 'Janez', null, null),
        new Hero(5, 'Pencello', null, null)
    ]
    myHero = this.heroes[0];
}
