"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('../databinding/hero.service');
var NewHeroComponent = (function () {
    function NewHeroComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = "Tour of heroes";
    }
    NewHeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    NewHeroComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    NewHeroComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    NewHeroComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    NewHeroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-hero',
            providers: [hero_service_1.HeroService],
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\n    <div *ngIf=\"selectedHero\">\n      <h2>\n        {{selectedHero.name | uppercase}} is my hero\n      </h2>\n\n      <button (click)=\"gotoDetail()\">View Details</button>\n    </div>\n  ",
            styleUrls: ["new-hero.component.css"]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], NewHeroComponent);
    return NewHeroComponent;
}());
exports.NewHeroComponent = NewHeroComponent;
//# sourceMappingURL=new-hero.component.js.map