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
var hero_1 = require('../classes/hero');
var DataBindingComponent = (function () {
    function DataBindingComponent() {
        this.title = "Naslov";
        this.heroes = [
            new hero_1.Hero(1, 'David', null, null),
            new hero_1.Hero(2, 'Jure', null, null),
            new hero_1.Hero(3, 'Matej', null, null),
            new hero_1.Hero(4, 'Janez', null, null),
            new hero_1.Hero(5, 'Pencello', null, null)
        ];
        this.myHero = this.heroes[0];
    }
    DataBindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dj-databinding',
            templateUrl: 'databinding.component.html',
            styleUrls: ['databinding.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindingComponent);
    return DataBindingComponent;
}());
exports.DataBindingComponent = DataBindingComponent;
//# sourceMappingURL=databinding.component.js.map