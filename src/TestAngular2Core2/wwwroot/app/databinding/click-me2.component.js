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
var ClickMe2Component = (function () {
    function ClickMe2Component() {
        this.values = '';
    }
    ClickMe2Component.prototype.onKey = function (value) {
        this.values += value + ' | ';
    };
    ClickMe2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dj-click-me2',
            template: "\n                <input #box (keyup)=\"onKey(box.value)\" />\n                {{values}}\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ClickMe2Component);
    return ClickMe2Component;
}());
exports.ClickMe2Component = ClickMe2Component;
//# sourceMappingURL=click-me2.component.js.map