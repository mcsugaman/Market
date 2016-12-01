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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var databinding_component_1 = require('./databinding/databinding.component');
var click_me_component_1 = require('./databinding/click-me.component');
var click_me2_component_1 = require('./databinding/click-me2.component');
var hero_form_component_1 = require('./forms/hero-form.component');
var hero_list_component_1 = require('./databinding/hero-list.component');
var new_hero_component_1 = require('./tutorial/new-hero.component');
var hero_detail_component_1 = require('./tutorial/hero-detail.component');
var my_app_component_1 = require('./tutorial/my-app.component');
var dashboard_component_1 = require('./tutorial/dashboard.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                databinding_component_1.DataBindingComponent,
                click_me_component_1.ClickMeComponent,
                click_me2_component_1.ClickMe2Component,
                hero_form_component_1.HeroFormComponent,
                hero_list_component_1.HeroListComponent,
                new_hero_component_1.NewHeroComponent,
                my_app_component_1.MyAppComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map